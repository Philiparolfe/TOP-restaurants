//import required assets


// template code

function navBar () {
    const element = document.createElement('div');
    element.innerHTML = 'testing hard code';
    element.classList.add('nav');

    document.body.appendChild(element);

    return element;
  }

//export required obj

export default navBar;