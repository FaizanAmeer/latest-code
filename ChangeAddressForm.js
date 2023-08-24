export function ChangeAddressForm() {
  return (
    <>
      <div className="formRow mt-t">
        <div className="formAd width66 pl">
          <input
            type="text"
            aria-label="Your home address"
            placeholder="Enter your home address"
            className="introInput form2" />
        </div>
        <div className="formUn width33 pr">
          <input
            type="text"
            aria-label="Your home address"
            placeholder="Unit"
            className="introInput form2" />
        </div>
      </div>
    </>
  );
}
