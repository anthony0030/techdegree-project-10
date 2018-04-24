// $( document ).ready(function() {
const modalContainer = document.getElementById("user-modals");
const users = $(".user-pain__window");
const userModals = $(".user-modal");


const nextUser = document.getElementById("next-user");
const previousUser = document.getElementById("previous-user");

var currentVisibleUser;








modalContainer.addEventListener("click", function(event){
  if(event.target === modalContainer || event.target.className === "close"){
    modalContainer.style.display = "none";
    $.each(userModals, function(index, value) {
      userModals[index].style.display = "none";
    })
  }
});







$.each(users, function(index, value) {
  value.addEventListener("click", function(event){
    modalContainer.style.display = "block";
    userModals[index].style.display = "block";
    currentVisibleUser = index;
  })
});


// $.each(userModals, function(index, value) {
// });





previousUser.addEventListener("click", function(event){
  console.log("prev user")
   if(currentVisibleUser > 0){ 
    userModals[currentVisibleUser].style.display= "none"
    userModals[currentVisibleUser-1].style.display= "block"
    currentVisibleUser--;
   }else{
      userModals[currentVisibleUser].style.display= "none"
      userModals[userModals.length-1].style.display= "block"
      currentVisibleUser = userModals.length-1;
   }
})


nextUser.addEventListener("click", function(event){
  console.log("next user")
  if(currentVisibleUser < userModals.length-1){ 
    userModals[currentVisibleUser].style.display= "none"
    userModals[currentVisibleUser+1].style.display= "block"
    currentVisibleUser++;
  }else{
    userModals[currentVisibleUser].style.display= "none"
    userModals[0].style.display= "block"
    currentVisibleUser = 0;
  }
})











// }); // End of document reddy