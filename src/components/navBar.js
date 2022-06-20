//import


// template code

function navBar() {
  // const HTML elements as JS obj
  const content = document.querySelector("#content");
  const container = document.createElement('header');
  container.id = 'container';

  const listContainer = document.createElement('ul');
  listContainer.classList.add('listContainer')

  const about = document.createElement('li');
  about.classList.add('lists')
  about.innerHTML = 'About';
  about.id = 'about';

  const menu = document.createElement('li');
  menu.classList.add('lists')
  menu.innerHTML = 'Menu';
  menu.id = 'menu';

  const contact = document.createElement('li');
  contact.classList.add('lists')
  contact.innerHTML = 'Contact';
  contact.id = 'contact';


  //append JS HTML obj as child element
  content.appendChild(container);
  document.getElementById('container').appendChild(listContainer);
  listContainer.appendChild(about);
  listContainer.appendChild(menu);
  listContainer.appendChild(contact);
  
}

//export

export default navBar;