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

// components

import navBar from './components/navBar';


// pages




// functions 

import initialization from './functions/initialization';



// main code

initialization()


  //function test () {
  //  const telement = document.createElement('div');
  

  //  telement.innerHTML = _.join(['Testing', 'Test'], ' ');
  //  telement.classList.add('hello');


  //  return telement;
  //}
  
  //document.body.appendChild(test());


  // add event listeners


const about = document.getElementById('about');
about.addEventListener('click', hello);

const menu = document.getElementById('menu');
menu.addEventListener('click', hello);

const contact = document.getElementById('contact');
contact.addEventListener('click', hello);

function hello() {
  console.log('hellop')
}