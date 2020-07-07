import React from 'react';
import {svg} from '../../utils/data/svg';

const arr = [
    {
      name: 'Email',
      url: 'mailto: saurabhghuge1998@gmail.com',
      svg: svg.email,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/saurabh-ghuge-02a681176',
      svg: svg.linkedIn,
    },
    {
      name: 'Github',
      url: 'https://github.com/saurabhghuge/',
      svg: svg.github,
    },
    
    
  ]

  let map = arr.map((e, i) => {
   return (
     <div key={i} className="tooltip">
       <a href={e.url} target="blank">
         {e.svg}
       </a>
       <span className="tooltip_hidden">{e.name}</span>
     </div>
   )
 })
  
 const ContactIcons = (props) => {

    return <div className={props.type === 'contact' ? 'main_sub2 contacts_sub' : 'main_sub2'}>
        {map}
    </div>
 } 

  export default ContactIcons;