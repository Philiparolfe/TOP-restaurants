import _ from 'lodash';
import './style.css';
import Icon from './icon.png'


// styles

import './style.css';
import './style/contact.css';
import './style/header.css';
import './style/home.css';
import './style/menu.css';
import './style/navBar.css';






// pages




// functions 

import initialization from './functions/initialization';
import render from './functions/render';
import homePage from './pages/homePage';
import contactPage from './pages/contact'
import menuPage from './pages/menu'



// main code

initialization()


  // add event listeners
function loadAbout() {
  render();
  homePage();
  hello();
}

function loadMenu() {
  render();
  menuPage();
  hello();
}

function loadContact() {
  render();
  contactPage();
  hello();
}

const about = document.getElementById('about');
about.addEventListener('click', loadAbout);

const menu = document.getElementById('menu');
menu.addEventListener('click', loadMenu);

const contact = document.getElementById('contact');
contact.addEventListener('click', loadContact);

function hello() {
  console.log('hellop')
}