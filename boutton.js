function Boutton(){
    const boutton = document.createElement("button");
    boutton.textContent = "Send";
    boutton.setAttribute("type","submit");
    return {
        boutton,
    }
}

const boutton = Boutton();

export default boutton;