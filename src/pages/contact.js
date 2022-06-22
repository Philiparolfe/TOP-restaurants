//import
import navBar from "../components/navBar"
import video from "../components/videoBg";
// template code

function contactPage() {

    const info = {
      address: '123 Lame St',
      phone: '555-555-555',
      hours: 'Mon-Fri 10:00 - !0:00'
    }
    
    // const HTML elements as JS obj
    const content = document.querySelector("#content");
    
    const container = document.createElement('div');
    container.id = 'homeContainer';
  
    const display = document.createElement('div');
    display.classList.add('display');

    const header = document.createElement('h1');
    header.innerHTML = 'Contact Information'
    header.classList.add('headers');

    const contactInfo = document.createElement('ul')
    contactInfo.id = 'contactInfo'

    const address = document.createElement('li')
    address.innerText = info.address
    const phone = document.createElement('li')
    phone.innerText = info.phone
    const hours = document.createElement('li')
    hours.innerText = info.hours

    

    
  
    //append JS HTML obj as child element
    content.appendChild(container);
    document.getElementById('homeContainer').appendChild(display);
    display.appendChild(header);
    display.appendChild(contactInfo)
    contactInfo.appendChild(address)
    contactInfo.appendChild(phone)
    contactInfo.appendChild(hours)
    video();
    
  }
  
  //export
  
  export default contactPage;