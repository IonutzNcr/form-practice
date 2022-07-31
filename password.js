
import events from "./events.js";


function Password(){
    console.log(events)
    const password = document.createElement("input");
    const label = document.createElement("label");
    password.setAttribute("type","password");
    password.setAttribute("pattern","[a-z]{6,12}");
    password.setAttribute("id",'password');
    password.setAttribute("name","password");
    label.setAttribute("for","password");
    label.textContent = "Password : ";
    password.addEventListener("input",events.password);
    
    return {
        password,
        label,
    }
}

const password = Password();

export default password;