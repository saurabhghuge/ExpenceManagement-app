import React from 'react';
import Header from '../components/Header';
import ContactIcon from '../components/icons/contact';

const HelpPage = () => (
  <div>
    <Header/>
    <div className="main_cont">
    <div className='contact_container'>
      <h1>Contact</h1>
      <h4 className='contacts_text'>Feel free to contact me so we can get your project started!</h4>
      <div className='contacts_subb'>
      <a className='contacts_email' href={'mailto: saurabhghuge1998@gmail.com'}>saurabhghuge1998@gmail.com</a>
      <p>+91-8108381738</p>
      </div>
    <ContactIcon type='contact'/>
    </div>
  </div></div>
);

export default HelpPage;
