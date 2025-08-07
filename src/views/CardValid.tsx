import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Add this
import "../styles/CardVaild.css";

// ✅ Define error field types
type ErrorFields = {
  name?: string;
  number?: string;
  expiry?: string;
  cvc?: string;
};

const CardValid = () => {
  const navigate = useNavigate(); // ✅ Hook to navigate

  // ✅ Input state
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expiryMM, setExpiryMM] = useState("");
  const [expiryYY, setExpiryYY] = useState("");
  const [cvc, setCvc] = useState("");

  // ✅ Error state
  const [errors, setErrors] = useState<ErrorFields>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: ErrorFields = {};

    if (!name.trim()) newErrors.name = "Cardholder name is required";
    if (!number.trim() || number.replace(/\s/g, "").length < 16)
      newErrors.number = "Valid card number required";
    if (!expiryMM || !expiryYY) newErrors.expiry = "Expiration date required";
    if (!cvc || cvc.length < 3) newErrors.cvc = "Valid CVC required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // ✅ Navigate to Thank You page
      navigate("/");
    }
  };

  return (
    <div className="card-success-container">
      {/* Card visual */}
      <div className="card-visuals">
        <div className="card front">
          <div className="circle"></div>
          <div className="card-number">
            {number || "0000 0000 0000 0000"}
          </div>
          <div className="card-details">
            <span className="card-name">
              {name.toUpperCase() || "JANE APPLESEED"}
            </span>
            <span className="card-expiry">
              {(expiryMM || "00") + "/" + (expiryYY || "00")}
            </span>
          </div>
        </div>
        <div className="card back">
          <div className="stripe"></div>
          <div className="cvc">{cvc || "000"}</div>
        </div>
      </div>

      {/* Form Section */}
      <div className="thank-you-section">
        <form
          onSubmit={handleSubmit}
          style={{
            width: "320px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Cardholder Name */}
          <div className="label">
            <label htmlFor="name">CARD HOLDER NAME</label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Jane Appleseed"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          {/* Card Number */}
          <div className="label">
            <label htmlFor="number">CARD NUMBER</label>
            <input
              id="number"
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              value={number}
              onChange={(e) => {
                const raw = e.target.value.replace(/\D/g, "").slice(0, 16);
                const formatted = raw.replace(/(.{4})/g, "$1 ").trim();
                setNumber(formatted);
              }}
            />
            {errors.number && <span className="error">{errors.number}</span>}
          </div>

          {/* Expiration + CVC */}
          <div className="input-row">
            <div className="exp">
              <label htmlFor="expiry">EXP. DATE (MM/YY)</label>
              <div className="input-row">
                <input
                  className="valid"
                  type="text"
                  placeholder="MM"
                  value={expiryMM}
                  onChange={(e) => setExpiryMM(e.target.value.slice(0, 2))}
                />
                <input
                  className="valid"
                  type="text"
                  placeholder="YY"
                  value={expiryYY}
                  onChange={(e) => setExpiryYY(e.target.value.slice(0, 2))}
                />
              </div>
              {errors.expiry && <span className="error">{errors.expiry}</span>}
            </div>

            <div className="exp">
              <label htmlFor="cvc">CVC</label>
              <input
                id="cvc"
                type="text"
                placeholder="e.g. 123"
                value={cvc}
                onChange={(e) => setCvc(e.target.value.slice(0, 3))}
              />
              {errors.cvc && <span className="error">{errors.cvc}</span>}
            </div>
          </div>

          {/* Submit */}
          <button className="continue-btn" type="submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardValid;
