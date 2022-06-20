//import
import navBar from "../components/navBar"
import video from "../components/videoBg";
// template code

function contactPage() {
    
    // const HTML elements as JS obj
    const content = document.querySelector("#content");
    
    const container = document.createElement('div');
    container.id = 'homeContainer';
  
    const display = document.createElement('div');
    display.classList.add('display');

    const header = document.createElement('h1');
    header.innerHTML = 'Contact Us'
    header.classList.add('headers');

    
  
    //append JS HTML obj as child element
    content.appendChild(container);
    document.getElementById('homeContainer').appendChild(display);
    display.appendChild(header);
    video();
    
  }
  
  //export
  
  export default contactPage;