//import
import navBar from "../components/navBar"
import video from "../components/videoBg";

// template code
function menuPage() {
    
    //create HTML elements
    const content = document.querySelector("#content");
    
    const container = document.createElement('div');
    container.id = 'homeContainer';
  
    const display = document.createElement('div');
    display.classList.add('display');

    const header = document.createElement('h1');
    header.innerHTML = 'Menu'
    header.classList.add('headers');

    
    let data = ['Lame Ass Burger - $8', 'Lame Ass Salad - $8', 'Signature Fish Tacos - $10', 'Fish and Chips - $14', 'Fries - $8', 'Nachos - $12', 'Domestic Beer - $6', 'Imported Beer - $8', 'Cocktails - $7']
    let list = document.createElement('ul')
    list.id = 'myList'
    

    const image = document.createElement('img')
    image.classList.add('bar')
    image.src = './assets/barFood.jpg'
    image.width = '400';
    image.height = '350';
    
    

    
  
    //append HTML
    content.appendChild(container);
    document.getElementById('homeContainer').appendChild(display);
    display.appendChild(image);
    display.appendChild(header);
    display.appendChild(list)
    

    let listSel = document.getElementById('myList')

    data.forEach((item)=>{
        let li = document.createElement('li')
        li.classList.add('menuList')
        li.innerText = item
        listSel.appendChild(li)
    })

    


    video();
    
  }
  
  //export
  
  export default menuPage;