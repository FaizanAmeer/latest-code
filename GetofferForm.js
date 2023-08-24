export function GetofferForm() {
  return (
    <>
      <div className="formRow mt-t mb-b">
        <div className="formAd with50 pl">
          <input
            type="text"
            aria-label="First Name"
            placeholder="First Name"
            className="introInput form2" />
        </div>
        <div className="formUn with50 pr">
          <input
            type="text"
            aria-label="Last Name"
            placeholder="Last Name"
            className="introInput form2" />
        </div>
      </div>
      <div className="formRow mb-b mpd">
        <input
          type="text"
          aria-label="Your home address"
          placeholder="(111) 111-111"
          className="introInput form2" />
      </div>
      <div className="formRow mb-b mpd">
        <input
          type="text"
          aria-label="Your home address"
          placeholder="Email"
          className="introInput form2" />
      </div>
    </>
  );
}
