import NavBar from '../navbar/NavBar';
import SideNav from '../sidenav/SideNav';
import './Contact.css';

const Contact = () => {
    return (
        <>
    <div className='container'>
      <SideNav></SideNav>
      <div className='main'>
            <NavBar></NavBar>
            <div className="contact">
            <div className="contact-text">
        <h2>Contact</h2>
        <span className="short-line"></span>
        <h4>Let's Work Together</h4>
        <p>I'm always eager to connect with fellow creatives, clients, and potential collaborators. You can reach me via the following methods:</p>
        <div className="contact-list">
          <li>imenedehimi8@gmail.com</li>
          <li>0675365156</li>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <input id="name" type="text" placeholder="Enter Your Name" required />
          <input
            id="email"
            type="email"
            placeholder="Enter Your Email"
            required
          />
          <input id="subject" type="" placeholder="Enter Your Subject" />
          <textarea
            id="message"
            cols="10"
            rows="10"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <div className="button">
            <button type="submit" >Submit</button>
          </div>
        </form>
      </div>
        </div>
    </div>
    </div>
    </>
    );
};

export default Contact;