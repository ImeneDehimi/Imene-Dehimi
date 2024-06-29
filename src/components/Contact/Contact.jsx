import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../navbar/NavBar';
import SideNav from '../sidenav/SideNav';
import './Contact.css';
import emailjs from "@emailjs/browser"; 
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
console.log(e.target.value);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(`Failed to send email`);
        }
      );
  };
    return (
        <>
        <ToastContainer />
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
        <form ref={form} onSubmit={sendEmail}>
          <input name="name" type="text" placeholder="Enter Your Name" required />
          <input
            name="email"
            type="email"
            placeholder="Enter Your Email"
            required
          />
          <input name="subject" type="text" placeholder="Enter Your Subject" />
          <textarea
            name="message"
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