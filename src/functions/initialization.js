
import homePage from "../pages/homePage";
import navBar from "../components/navBar"


const initialization = () => {
    
    const content = document.querySelector("#content");
    navBar();
    
    homePage();
    
    
}

export default initialization;