import { Link } from "react-router-dom";
import "../styles/CardVaild.css";

const CardValid = () => {
  return (
    <div className="card-success-container">
      <div className="card-visuals">
        <div className="card front">
          <div className="circle"></div>
          <div className="card-number">0000 0000 0000 0000</div>
          <div className="card-details">
            <span className="card-name">JANE APPLESEED</span>
            <span className="card-expiry">00/00</span>
          </div>
        </div>
        <div className="card back">
          <div className="stripe"></div>
          <div className="cvc">000</div>
        </div>
      </div>

      <div className="thank-you-section">
        <form
          action=""
          style={{
            width: "320px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div className="input-col">
            <div className="label">
              <label htmlFor="">CARD HOLDER NAME</label>
              <input type="text" placeholder="eg. Jane Appleased" />
            </div>
            <div className="label">
              <label htmlFor="">CARD NUMBER</label>
              <input type="text" placeholder="eg. 1234 5678 9123 0000" />
            </div>
          </div>
          <div className="input-row">
            <div className="exp">
              <label htmlFor="">EXP. DATE(MM/YY)</label>
              <div className="input-row">
                <input className="valid" type="text" placeholder="MM" />
                <input className="valid" type="text" placeholder="YY" />
              </div>
            </div>
            <div className="exp">
              <label htmlFor="">CVC</label>
              <input type="text" placeholder="eg. 123" />
            </div>
          </div>
          <Link to="/card-valid">
            <button className="continue-btn">Continue</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CardValid;
