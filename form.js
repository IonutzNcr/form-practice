function Form(){
    const form = document.createElement("form");
    
    return {
        form,
        appendChildren(arr){
            arr.forEach(e=>{
                this.form.appendChild(e)
            })
        },
        appendToTheBody(){
            document.querySelector("body").appendChild(this.form);
        }

    }
}

const form = Form();

export default form;