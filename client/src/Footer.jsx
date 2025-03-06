import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/flights">Flights</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/terms">Terms & Conditions</a></li>
        </ul>
      </div>

      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>Email: support@flightbooking.com</p>
        <p>Phone: +1 (800) 123-4567</p>
      </div>

      <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Flight Booking. All rights reserved.</p>
    </div>
  </footer>
);
}


export default Footer