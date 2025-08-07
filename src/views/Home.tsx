import { Link } from "react-router-dom";

const Home = () => {
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
        <div className="checkmark">&#10003;</div>
        <h2>Thank You!</h2>
        <p>We've added your card details</p>
        <Link to="/card-valid">        
        <button className="continue-btn">Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
