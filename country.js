function Country(){
    const country = document.createElement("input");
    const label = document.createElement("label");
    country.setAttribute("required","");
    country.setAttribute("id",'country');
    country.setAttribute("name","country");
    label.setAttribute("for","country");
    label.textContent = "Country : ";
    
    return {
        country,
        label,
    }
};

const country = Country();

export default country;