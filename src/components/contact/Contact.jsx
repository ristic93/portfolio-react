import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_fhba7a9', 'template_qs1cf69', form.current, 'MfuZtRUc_pdX0gc0C')

    event.target.reset();
  };

  return (
    <section id='contact'>
        <h3>Contact me</h3>

        <article className="container contact_container">
          <div className="contact_options">
              <div className="contact_option">
                  <a href="mailto:risticbro@gmail.com" target="_blank">
                    <MdOutlineEmail style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}/>
                    <p>E-mail</p>
                    <p>ristibro@gmail.com</p>
                    <p>Send mesagge</p>
                  </a>
              </div>
              <div className="contact_option">
                  <a href="https://m.me/a.ristic93" target="_blank">
                    <RiMessengerLine style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}/>
                    <p>Messenger</p>
                    <p>a.ristic93</p>
                    <p>Send message</p>
                  </a>
              </div>
              <div className="contact_option">
                  <a href="https://api.whatsapp.com/send?phone=381692108991" target="_blank">
                    <BsWhatsapp style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}/>
                    <p>WhatsApp</p>
                    <p>+381 69 210 89 91</p>
                    <p>Send message</p>
                  </a>
              </div>
          </div>
          {/* end of contact option */}
          <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your name' required/>
              <input type="email" name='email' placeholder='Your E-mail address' required/>
              <textarea name="message"  rows="7" placeholder='Your message...' required></textarea>
              <button type='submit' className='btn btn-primary'>Send message</button>
          </form>
        </article>

    </section>
  )
}

export default Contact;