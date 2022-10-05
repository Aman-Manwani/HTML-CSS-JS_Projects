const num1 =Math.ceil( 100 * Math.random());
const num2 =Math.ceil (100 * Math.random());
const question = document.getElementById("ques");
question.innerText=`What is ${num1} multiply by ${num2}?`
const correct = num1*num2;
console.log("aman");
const form_elem=document.getElementById("form");
const input_elem=document.getElementById("input");
const score_elem=document.getElementById("score");
let score=JSON.parse(localStorage.getItem("score"));
score_elem.innerText=`Score : ${score}`;
if(!score)
{
    score=0;
}
form_elem.addEventListener("submit",(event)=>{
    const user_ans= +input_elem.value;
    console.log(user_ans);
    if(user_ans===0)
    {
        alert("type your answer");
        score++;
        event.preventDefault();
    }
    if(user_ans===correct)
    {
        score++;
    }else
    {
        score--;
    }
    updatelocalstorage();
})

function updatelocalstorage(){
    localStorage.setItem("score",JSON.stringify(score));
}