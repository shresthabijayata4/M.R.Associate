const submitBtn = document.querySelector('.ola');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('.inputs');

// send msg 
submitBtn.addEventListener('click', ()=>{
    let userInput = inputElm.value;

    let temp = `<div class="out-msg">
    <span class="my-msg">${userInput}</span>
    </div>`;

    chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = '';
})