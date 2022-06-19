//import


// template code

function navBar() {
  // const HTML elements as JS obj
  const container = document.createElement('div');
  container.id = 'container';

  const listContainer = document.createElement('ul');

  const about = document.createElement('li');
  about.innerHTML = 'About';
  about.id = 'about';

  const menu = document.createElement('li');
  menu.innerHTML = 'Menu';
  menu.id = 'menu';

  const contact = document.createElement('li');
  contact.innerHTML = 'Contact';
  contact.id = 'contact';


  //append JS HTML obj as child element
  document.body.appendChild(container);
  document.getElementById('container').appendChild(listContainer);
  listContainer.appendChild(about);
  listContainer.appendChild(menu);
  listContainer.appendChild(contact);
  
}

//export

export default navBar;