//import

import video from "../components/videoBg";
// template code

function homePage() {
    // const HTML elements as JS obj
    
    const container = document.createElement('div');
    container.id = 'homeContainer';
  
    const display = document.createElement('div');
    display.classList.add('display');

    const header = document.createElement('h1');
    header.innerHTML = 'This Is a Title'
    header.classList.add('headers');
  
    //append JS HTML obj as child element
    document.body.appendChild(container);
    document.getElementById('homeContainer').appendChild(display);
    display.appendChild(header);
    video();
    
  }
  
  //export
  
  export default homePage;