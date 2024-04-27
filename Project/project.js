
const submit=document.getElementById("submit")
document.querySelector(".profile")
const profile = []
const btn=document.querySelectorAll(".b")
btn.onclick = remove();

function remove() {
  const item=document.querySelector(".myItem")
  
  item.classList.add('hide')
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
  <button id="a">Task 1</button>
  <button class="b">Task 2</button>
</div>`

  console.log(profile);
  result.appendChild(li);
}