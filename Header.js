export function Header() {
  return (
    <section>
      <div className="logo-wrapper">
        <div className="logo">
          <div></div>
        </div>
        <div className="header-btn-wrapper">
          <div className="headerBtn">
            <a href="tel:+16783252371" className="btn color">
              {" "}
              (678) 325-2371{" "}
            </a>
          </div>
          <div className="headerBtn mb-right">
            <a
              href="https://www.bbb.org/us/ga/decatur/profile/home-buyers/big-house-investors-llc-0443-27946441/#sealclick"
              target="_blank"
              rel="nofollow noreferrer"
            >
              <img
                width="200"
                height="42"
                src="https://seal-atlanta.bbb.org/seals/blue-seal-200-42-bbb-27946441.png"
                alt="Big House Investors, LLC BBB Business Review" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
