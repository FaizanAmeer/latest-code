export function ModelDetails({ children, back, next }) {
  return (
    <>
      <div class="modelcontainer">
        <h4 class="modelTitle">123 William St, New York, NY, 10038</h4>
        <h5 class="modelSubTitle">
          <small>Is this address correct?</small>
        </h5>
        {children}
        <div class="modelBtnWraper">
          <div class="modelBtn modelBtn-L">
            <a href="/address/edit" class="btn btn-outline-secondary btn-block">
              {back}
            </a>
          </div>
          <div class="modelBtn modelBtn-R">
            <button type="button" class="btn btn-block">
              {next}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
