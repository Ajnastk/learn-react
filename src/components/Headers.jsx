
import { LOGO_URL} from "../utils/constants";
Headers = () => {
    return (
      <div className="header">
        <div className="img">
          <img
            className="swiggy-logo"
            src={LOGO_URL}
          />
        </div>
        <ul className="h-list">
          <li>
            {" "}
            <a href="/" className="h">
              home
            </a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li>
            <a href="#">help</a>
          </li>
        </ul>
        <form className="search-container">
          <input type="text" placeholder="Search..." name="search" />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  };

  export default Headers;
