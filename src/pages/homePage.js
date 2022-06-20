//import
import navBar from "../components/navBar"
import video from "../components/videoBg";
// template code

function homePage() {
    
    // const HTML elements as JS obj
    const content = document.querySelector("#content");
    
    const container = document.createElement('div');
    container.id = 'homeContainer';
  
    const display = document.createElement('div');
    display.classList.add('display');

    const header = document.createElement('h1');
    header.innerHTML = 'Some Lame Ass Bar'
    header.classList.add('headers');

    const burgerImage = document.createElement('img')
    burgerImage.classList.add('burger')
    burgerImage.src = './assets/burger.jpg'
    burgerImage.width = '500';
    burgerImage.height = '450';
  
    //append JS HTML obj as child element
    content.appendChild(container);
    document.getElementById('homeContainer').appendChild(display);
    display.appendChild(header);
    display.appendChild(burgerImage);
    video();
    
  }
  
  //export
  
  export default homePage;