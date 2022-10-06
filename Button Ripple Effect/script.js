const btn_elem=document.querySelector(".btn");

btn_elem.addEventListener("mouseover",(event)=>{
    const x=event.pageX-btn_elem.offsetLeft;
    const y=event.pageY-btn_elem.offsetTop;
    console.log(x,y);
    btn_elem.style.setProperty("--xPos", x + "px");
    btn_elem.style.setProperty("--yPos", y + "px");
})