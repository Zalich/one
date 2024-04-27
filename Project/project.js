const submit=document.getElementById("submit")
document.querySelector(".profile")
const profile = []

function remove() {
  const item = this.closest('.myItem'); 
  item.classList.add('hide');
}

task1(); task2();

function copyListItem(event) {
  const listItem = event.target.closest('li');
  const listItemCopy = listItem.cloneNode(true);
  result.appendChild(listItemCopy);
}

function task1() {
  const task1 = document.querySelectorAll('.a');
  task1.forEach(button => {
      button.addEventListener('click', copyListItem);
  });
}

function task2() {
  const task2 = document.querySelectorAll('.b');
  task2.forEach(button => {
      button.addEventListener('click', remove);
  });
}


function createProfile() {
const name=document.getElementById("name").value
const age=document.getElementById("age").value
const add=document.getElementById("add").value
const con=document.getElementById("con").value
const pic=document.getElementById("pic").value
const result=document.getElementById("result")
const li = document.createElement('li')

  profile.push(li)

  li.innerHTML= `<div class="myItem">
  <img src="images/kakashi.jpg" alt="photo"> <br>
  <h2 id="name">${name}</h2>
  <p id="address">${add}</p>
  <p id="age">${age} y/o</p>
  <p id="contact">${con}</p>
  <button id="a">Copy</button>
  <button class="b">Kick</button>
</div>`
  
  result.appendChild(li);

  task1(); task2();
  
}
