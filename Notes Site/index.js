console.log("welcome aman manwani");
shownotes();
let addbtn = document.getElementById("btn");
addbtn.addEventListener("click", function (e) {
  let addText = document.getElementById("text-content");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.push(addText.value);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  addText.value = "";
  // console.log(notesobj);
  shownotes();
});

//function to read and show from local storage
function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let html = "";
  notesobj.forEach(function (element, index) {
    html += `<div class="text">
    <h4 class="ynotes">Your Note ${index+1} </h4>
    <textarea name="your-notes" id="textarea1" placeholder="Your Note"> ${element} </textarea>
    <br>
    <button class="delete" id="${index}" onclick="deleteNote(this.id)">Delete</button>
  </div>
    `;
  });
  let notes_elem=document.querySelector('.keep-notes');
  if(notesobj.length!= 0){
    notes_elem.innerHTML=html;
  }else{
    notes_elem.innerHTML=`<p><b style="font-size:24px; width:60%; color:cyan">Time To Add Some Notes</b></p>`;
  }
}

//function to delete note
function deleteNote(index){
  // console.log('i am deleting',index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }

  notesobj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  shownotes();
}