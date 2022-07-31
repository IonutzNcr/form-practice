import events from "./events.js";

function Email(){
    const email = document.createElement("input");
    const label = document.createElement("label");
    email.setAttribute("type","email");
    email.setAttribute("id",'email');
    email.setAttribute("name","email");
    label.setAttribute("for","email");
    label.textContent = "Email : ";
    email.addEventListener("input",events.email);
    
    return {
        email,
        label,
    }
}

const email = Email();

export default email;