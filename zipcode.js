import events from "./events.js";

function Zipcode(){
    const zipcode = document.createElement("input");
    const label = document.createElement("label");
    zipcode.setAttribute("type","number");
    zipcode.setAttribute("min","100");
    zipcode.setAttribute("max","999999");
    zipcode.setAttribute("id",'zipcode');
    zipcode.setAttribute("name","zipcode");
    label.setAttribute("for","zipcode");
    label.textContent = "Zipcode : ";
    zipcode.addEventListener("input",events.zipcode);
    
    return {
        zipcode,
        label,
    }
}

const zipcode = Zipcode();

export default zipcode;