const body_elem=document.querySelector("body");


body_elem.addEventListener("mousemove",(event)=>{
    const x=event.offsetX;
    const y=event.offsetY;
    const span_elem=document.createElement("span")
    span_elem.style.left=x+"px";
    span_elem.style.top=y+"px";
    const size=Math.ceil( Math.random()*80);
    span_elem.style.width=size+"px";
    span_elem.style.height=size+"px";
    body_elem.appendChild(span_elem);
    setTimeout(()=>{
        span_elem.remove();
    },1000)
})






