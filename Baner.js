export function Baner({onhandlePrediction,predictions,getPlace}) {
  return (
    <section>
      <div className="intro">
        <div className="intro-content">
          <div className="content-row">
            <div className="content-wrapper">
              <h1 className="contentHeading">
                Get a cash offer for your home with the click of a button
              </h1>
              <div className="address-wrapper">
                <button type="button" className="btn positionAb color btn-lg">
                  <span>Get Offer</span>
                </button>
                <input
                  type="text" onChange={onhandlePrediction}
                  aria-label="Your home address"
                  
                  placeholder="Enter your home address"
                  className="introInput" />
                <div className="results">
                  <div className="search-results">
                    {predictions && predictions.map(pred=><span key={pred.place_id} onClick={()=>getPlace(pred)} >{pred.description}</span>)}
                    {/* <span>address</span>
            <span>address</span>
            <span>address</span> */}
                  </div>
                  <div className="invalid-feedback"></div>
                </div>
              </div>
              <div className="introText">
                Every hour a homeowner requests an offer from Big House
                Investors LLC.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
