import form from "./form.js";
import email from "./email.js";
import country from "./country.js";
import zipcode from "./zipcode.js";
import password from "./password.js";
import passwordConfirm from "./passwordConfirm.js";
import boutton from "./boutton.js";




const {email:emailInput,label:emailLabel} = email;
const {country:countryInput, label:countryLabel} = country;
const {zipcode:zipcodeInput, label:zipcodeLabel} = zipcode;
const {password:passwordInput, label:passwordLabel} = password;
const {passwordConfirm:passwordConfirmationInput, label:passwordConfirmationLabel} = passwordConfirm;

const arr = [emailLabel, emailInput,  countryLabel, countryInput,
            zipcodeLabel, zipcodeInput,passwordLabel, passwordInput, 
            passwordConfirmationLabel, passwordConfirmationInput,boutton.boutton];




form.appendChildren(arr);
form.appendToTheBody();

