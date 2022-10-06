const textarea_elem=document.getElementById("textarea");
const total_char=document.getElementById("char-counter");
const rem_char=document.getElementById("rem-counter");
textarea_elem.addEventListener("keyup",()=>{
    update_counter();
    rem_counter();
})

function update_counter(){
    total_char.innerText = textarea_elem.value.length;
}
function rem_counter(){
    rem_char.innerText = 100 - textarea_elem.value.length;
}