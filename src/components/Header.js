// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import {connect} from 'react-redux';
// import {startLogout} from '../actions/auth';


// export const Header = ({startLogout}) => (
//   <header className = "header"> 
     
//     <div className = "content-container">
//     <h1 className = "header__title">Expenses Management</h1>  
//       <div className = "header__content " >    
//        <div  >
//     {/* <NavLink to="/" activeClassName="is-active" exact={true}>Login Page</NavLink> */}
//     <NavLink className = "second__header"  to="/dashboard" activeClassName="is-active" >Dashboard</NavLink>
//     <NavLink className = "second__header"  to="/help" activeClassName="is-active">About</NavLink>
//     </div>
//     <button onClick ={startLogout}> Logout</button>
//     </div>
//     </div>

//   </header>
// );

// const mapDispatchToProps=(dispatch)=>({
//   startLogout : () => dispatch(startLogout())
// })

// export default connect(undefined, mapDispatchToProps)(Header);


import React from 'react';
import { Link , NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expenses Management</h1>
        </Link>
        
      </div>
       <NavLink className = "second__header"  to="/dashboard" activeClassName="is-active" >Dashboard</NavLink>
      <NavLink className = "second__header"  to="/help" activeClassName="is-active">About</NavLink>
      <button className= "button--link" onClick={startLogout}>Logout</button>

    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
