import "./Header.css";

function Header() {
  return (
    <div className="header-base">
      <a href="#" className="header-title-link">
        TWITTER ANALYSIS
      </a>
      <button type="button" className="login-button">
        LOG IN
      </button>
      <button type="button" className="signup-button">
        SIGN UP
      </button>
    </div>
  );
}

export default Header;
