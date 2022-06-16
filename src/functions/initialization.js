
import home from "../pages/home";
import navBar from "../components/navBar"
//import headerDiv from "../pages/header";


const initialization = () => {
    const content = document.querySelector("#content");
    navBar();
    
    home();
}

export default initialization;