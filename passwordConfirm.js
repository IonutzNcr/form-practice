import events from "./events.js";

function PasswordConfirm(){
    const passwordConfirm = document.createElement("input");
    const label = document.createElement("label");
    passwordConfirm.setAttribute("type","password");
    passwordConfirm.setAttribute("id",'passwordConfirm');
    passwordConfirm.setAttribute("name","passwordConfirm");
    label.setAttribute("for","passwordConfirm");
    label.textContent = "Password Confirmation : ";
    passwordConfirm.addEventListener("input",events.passwordConfirmation);
    
    return {
        passwordConfirm,
        label,
    }
}

const passwordConfirm = PasswordConfirm();

export default passwordConfirm;