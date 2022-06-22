//import
import video from "../components/videoBg";
//import {info} from './contact';
// template code

function homePage() {

  // const HTML elements as JS obj
  const content = document.querySelector("#content");

  const container = document.createElement('div');
  container.id = 'homeContainer';

  const display = document.createElement('div');
  display.classList.add('display');

  const header = document.createElement('h1');
  header.innerText = 'Some Lame Ass Bar'
  header.classList.add('headers');

  const burgerImage = document.createElement('img')
  burgerImage.classList.add('burger')
  burgerImage.src = './assets/burger.jpg'
  //burgerImage.width = '400';
  //burgerImage.height = '400';

 // headerTwo = document.createElement('div')
 // headerTwo.classList.add('headerTwo')
 // headerTwo.innerText = info.hours
  
  const about = document.createElement('div')
  about.classList.add('about')
  about.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  //append JS HTML obj as child element
  content.appendChild(container);
  document.getElementById('homeContainer').appendChild(display);
  display.appendChild(header);
  display.appendChild(burgerImage);
  //display.appendChild(headerTwo)
  display.appendChild(about)

  video();

}

//export

export default homePage;