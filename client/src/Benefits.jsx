import './Benefits.css';
const Benefits = () => {
  return (
    <div className="benefits-section">
      <h2>Benefits of Booking with Us</h2>
      <div className="benefits-container">
        <div className="benefit">
          <div className="benefit-icon">✈️</div>
          <div className="benefit-description">
            <h3>Best Price Guarantee</h3>
            <p>We offer the best prices on flights, ensuring you get the best deal for your travel.</p>
          </div>
        </div>

        <div className="benefit">
          <div className="benefit-icon">🕒</div>
          <div className="benefit-description">
            <h3>Flexible Booking Options</h3>
            <p>Choose from a variety of booking options that suit your travel needs and preferences.</p>
          </div>
        </div>

        <div className="benefit">
          <div className="benefit-icon">🔒</div>
          <div className="benefit-description">
            <h3>Secure Transactions</h3>
            <p>Your personal and payment information is safe with us, thanks to our secure payment gateways.</p>
          </div>
        </div>

        <div className="benefit">
          <div className="benefit-icon">📞</div>
          <div className="benefit-description">
            <h3>24/7 Customer Support</h3>
            <p>Our dedicated support team is available around the clock to assist you with any inquiries.</p>
          </div>
        </div>

        <div className="benefit">
          <div className="benefit-icon">🌍</div>
          <div className="benefit-description">
            <h3>Global Reach</h3>
            <p>Book flights to destinations all over the world with just a few clicks.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits