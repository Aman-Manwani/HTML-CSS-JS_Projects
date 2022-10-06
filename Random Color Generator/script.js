const container_elem=document.querySelector(".container");

for(let index=0;index<28;index++)
{
    const color_container = document.createElement("div");
    color_container.classList.add("colors");
    container_elem.appendChild(color_container);
}
const colors_elems=document.querySelectorAll(".colors");

generate_color();
function generate_color(){
    colors_elems.forEach((color_container) => {
        const new_color=random_color();
        console.log(new_color)
        color_container.style.backgroundColor="#"+new_color;
        color_container.innerText="#"+new_color;
    });
}

function random_color(){
    const chars="0123456789abcdef";
    const colorcode_len=6;
    let color="";
    for(let index=0;index<colorcode_len;index++)
    {
        const random_Num=Math.floor(Math.random()*chars.length);
        color+=chars.substring(random_Num,random_Num+1);
    }
    return color;
}