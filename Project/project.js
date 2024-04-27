
const submit=document.getElementById("submit")
document.querySelector(".profile")
const profile = []

function remove() {
  const item = this.closest('.myItem'); 
  item.classList.add('hide');
}

task2();

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
  <button id="a">Task 1</button>
  <button class="b">Task 2</button>
</div>`

  result.appendChild(li);

  const task2Btn = li.querySelector('.b');
  task2Btn.addEventListener('click', remove);
}
