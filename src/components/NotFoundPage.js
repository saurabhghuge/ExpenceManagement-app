import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


const NotFoundPage = () => (
    <div>
      <Header/>
      <div className = "page-header">
        <div className = "content-container">
        <h1 className = "page-header__title" ><h1>NOT FOUND</h1> <Link to="/">Go home</Link></h1>
        <div>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
         </div>
        </div>
        </div>
      </div>

);

export default NotFoundPage;
