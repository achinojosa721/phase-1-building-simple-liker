// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector("#modal")

 // Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded")
  errorModal.classList.add("hidden")
  

  clickListener()

})  
function hideError(){
  errorModal.classList.add("hidden")
  
}
//When user clicks on empty heart:
// Invoke mimicServerCall to simulate making a server request

//need an eventListener on all of the hearts
function clickListener(){
  document.addEventListener('click', (event) => {
  
    if(event.target.classList[0] === 'like-glyph'){
      mimicServerCall()
        .then(res => {
          if (event.target.classList.contains("activated-heart")){
            event.target.classList.remove("activated-heart")
          } else {
            event.target.classList.add("activated-heart")
          }
         
        })
        .catch(error => {
          errorModal.classList.remove("hidden")
          errorModal.innerHTML = error;
            setTimeout(() => {
              hideError()
            }, 3000)
        })
    }
  })
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
