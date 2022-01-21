// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartEmojis = document.querySelectorAll(`span.like-glyph`)
heartEmojis.forEach(heartEmoji => {heartEmoji.addEventListener('click', (e) => handleLike(e))})

function handleLike(e) {
  //console.log(e.target.innerText)
  if(e.target.innerText === EMPTY_HEART){
    fetch(mimicServerCall())
    .then(response => response.json())
    .then(object => console.log(object))  //also not working????
    // .then(() => { //what goes here?
    //   e.target.innerText = FULL_HEART
    //   e.target.setAttribute('class', 'activated-heart')
    // })
    .catch((error) => {
      const errorModal = document.getElementById('modal')
      errorModal.removeAttribute('class')
      errorModal.querySelector('#modal-message').innerText = error.message
      setTimeout(() => {errorModal.setAttribute('class','hidden')}, 3000)
    })
  }
  else if(e.target.innerText === FULL_HEART){
    e.target.innerText = EMPTY_HEART
    e.target.removeAttribute('class')
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
