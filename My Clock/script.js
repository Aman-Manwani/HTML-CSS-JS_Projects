const hours= document.getElementById("hours");
const minutes= document.getElementById("minutes");
const seconds= document.getElementById("seconds");
const ampm_elem= document.getElementById("ampm");

function updateclock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";
    if(h>12)
    {
        h-=12;
        ampm = "PM";
    }
    if(h<10){
        h="0"+h;
    }
    if(m<10){
        m="0"+m;
    }
    if(s<10){
        s="0"+s;
    }

    hours.innerText=h;
    minutes.innerText=m;
    seconds.innerText=s;
    ampm_elem.innerText=ampm;
    setTimeout(()=>{
        updateclock();
    },1000);
}
updateclock();

