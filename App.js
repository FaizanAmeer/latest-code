import { Children } from "react";
import { Header } from "./Header";
import { Baner } from "./Baner";
import { Steps } from "./Steps";
import { Advantage } from "./Advantage";
import { Feature } from "./Feature";
import { Footer } from "./Footer";
import { ChangeAddressForm } from "./ChangeAddressForm";
import { Modelverify } from "./Modelverify";
import { ModelDetails } from "./ModelDetails";
import { GetofferForm } from "./GetofferForm";
import { useState } from "react";

export default function App() {
  const [predictions, setPredictions] = useState(null);
  const [address, setAddress] = useState(null);

  /////get Predictions
  function handdleAdd(e) {
    const input = e.target.value;
    const match = input.match(/\d/);

    if (match) {
      const userInput = input.slice(match.index);
      console.log(userInput);
      const autoComplete = new window.google.maps.places.AutocompleteService();
      autoComplete.getPlacePredictions(
        { input: userInput, componentRestrictions: { country: "us" },fields:["geometry","place_id","name","formatted_address"] },
        (predictions, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            console.log("Predictions:", predictions);
            setPredictions(predictions);
            // Updnpmate your component's state with the predictions, or perform other actions
          }
        }
      );
    }
  }

  ///get Place
  function getPlace(pre) {
    const placeService = new window.google.maps.places.PlacesService();
    placeService.getDetails(
      { placeId: pre.place_id },
      (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          const address = place.formatted_address; // Use formatted address from place details
          const latitude = place.geometry.location.lat();
          const longitude = place.geometry.location.lng();

          console.log("Address:", address);
          console.log("Latitude:", latitude);
          console.log("Longitude:", longitude);

          // Update your component's state with the address, latitude, and longitude
          // Or perform other actions based on the place details
        }
      }
    );
  }
  
  return (
    <>
      <Header />
      <Content>
        <Baner
          onhandlePrediction={handdleAdd}
          predictions={predictions}
          getPlace={getPlace}
        />
        <div className="spacer">&nbsp;</div>
        <Steps />
        <Advantage />
        <Feature />
      </Content>
      {/* <AddressVerify></AddressVerify> */}
      {/* <GetUserDetail/> */}
      {/* <ChangeAddress/> */}
      <Footer />
    </>
  );
}

function Content({ children }) {
  return <>{children}</>;
}
function AddressVerify() {
  return (
    <>
      <Modelverify map={true}>
        <ModelDetails next="Continue" back="Back">
          {/* <ChangeAddressForm /> */}
        </ModelDetails>
      </Modelverify>
    </>
  );
}
function GetUserDetail() {
  return (
    <>
      <Modelverify map={false}>
        <ModelDetails next="Continue" back="Back">
          <GetofferForm />
        </ModelDetails>
      </Modelverify>
    </>
  );
}
function ChangeAddress() {
  return (
    <>
      <Modelverify map={false}>
        <ModelDetails next="Continue" back="Back">
          <ChangeAddressForm />
        </ModelDetails>
      </Modelverify>
    </>
  );
}
