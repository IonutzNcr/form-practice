


const events = {
    email(e){
        if(e.target.validity.typeMismatch){
            console.log("correct")
            e.target.setCustomValidity("This is not a valid email adress!")
            e.target.reportValidity();
        } else{
            e.target.setCustomValidity("");
        }
    },
    zipcode(e){
        if(e.target.validity.rangeOverflow || e.target.validity.rangeUnderflow  ){
            e.target.setCustomValidity("Invalid Zipcode!")
            e.target.reportValidity();
        } else{
            e.target.setCustomValidity("");
        }
    },
    password(e){
        if(e.target.validity.patternMismatch){
            e.target.setCustomValidity("Invalid Password!")
            e.target.reportValidity();
        } else{
            e.target.setCustomValidity("");
        }
    },
    passwordConfirmation(e){
        const passwordValue = document.querySelector("#password").value;
        if(e.target.value !== passwordValue){
            e.target.setCustomValidity("Password doesn't match!")
            e.target.reportValidity();
        } else{
            e.target.setCustomValidity("");
        }  
    },
}

export default events;