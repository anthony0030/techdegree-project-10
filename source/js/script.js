// $( document ).ready(function() {

const usersToMake = 12;

const searchButton = document.getElementById("search__button");
const searchQuestion = document.getElementById("search__question");
const modalContainer = document.getElementById("user-modals");
const userContainer = document.getElementById("users");
var users = $(".user-pain__window");
var userModals = $(".user-modal");
var showUsers = [];
const usersNames = [];
const usersUsernames = [];

const nextUser = document.getElementById("next-user");
const previousUser = document.getElementById("previous-user");

var currentVisibleUser;

function printUser(data){
  // console.log(data)
  // console.log(data.gender)
  const avatarSrc = data.picture.large;
  const nameText = data.name.first + " " + data.name.last;
  const emailText = data.email;
  const placeText = data.location.state;
  const usernameText = data.login.username 

  const user = document.createElement("DIV");
  user.classList.add("user-pain__window");

  const photo = document.createElement("DIV");
  photo.classList.add("user-pain__photo");
  user.appendChild(photo);

  const avatar = document.createElement("IMG");
  avatar.classList.add("user-pain__avatar");
  avatar.src = avatarSrc;
  photo.appendChild(avatar);

  const details = document.createElement("DIV");
  details.classList.add("user-pain__details");
  user.appendChild(details);

  const name = document.createElement("H2");
  name.classList.add("user-pain__title");
  name.classList.add("capitalize");
  name.appendChild(document.createTextNode(nameText));
  details.appendChild(name);

  const email = document.createElement("P");
  email.classList.add("user-pain__email");
  email.appendChild(document.createTextNode(emailText));
  details.appendChild(email);

  const place = document.createElement("P");
  place.classList.add("user-pain__place");
  place.appendChild(document.createTextNode(placeText));
  details.appendChild(place);

  userContainer.appendChild(user);
  usersNames.push(nameText)
  usersUsernames.push(usernameText)
  showUsers.push(true);
} // end of printUser


function printUserModal(data){
  // console.log(data)
  // console.log(data.gender)
  const closeText = "×"
  const avatarSrc = data.picture.large;
  const nameText = data.name.first + " " + data.name.last;
  const emailText = data.email;
  const placeText = data.location.state;
  const phoneText = data.cell;
  const addressText = data.location.street;
  const bdayText = data.dob;

  const modal = document.createElement("DIV");
  modal.classList.add("user-modal");

  const close = document.createElement("SPAN");
  close.classList.add("close");
  close.appendChild(document.createTextNode(closeText));
  modal.appendChild(close);

  const avatar = document.createElement("IMG");
  avatar.classList.add("user-modal__avatar");
  avatar.src = avatarSrc;
  modal.appendChild(avatar);

  const name = document.createElement("H2");
  name.classList.add("user-modal__name");
  name.classList.add("capitalize");
  name.appendChild(document.createTextNode(nameText));
  modal.appendChild(name);

  const email = document.createElement("P");
  email.classList.add("user-modal__email");
  email.appendChild(document.createTextNode(emailText));
  modal.appendChild(email);

  const place = document.createElement("P");
  place.classList.add("user-modal__place");
  place.appendChild(document.createTextNode(placeText));
  modal.appendChild(place);

  const hr = document.createElement("HR");
  modal.appendChild(hr);

  const phone = document.createElement("P");
  phone.classList.add("user-modal__phone");
  phone.appendChild(document.createTextNode(phoneText))
  modal.appendChild(phone);

  const address = document.createElement("P");
  address.classList.add("user-modal__address");
  address.appendChild(document.createTextNode(addressText))
  modal.appendChild(address);

  const bday = document.createElement("P");
  bday.classList.add("user-modal__bday");
  bday.appendChild(document.createTextNode(bdayText))
  modal.appendChild(bday);

  modalContainer.appendChild(modal);

} // end of printUserModal

modalContainer.addEventListener("click", function(event){
  if(event.target === modalContainer || event.target.className === "close"){
    modalContainer.style.display = "none";
    $.each(userModals, function(index, value) {
      userModals[index].style.display = "none";
    })
  }
});


function activateUsers(){
  userModals = $(".user-modal");
  users = $(".user-pain__window");
  $.each(users, function(index, value) {
    value.addEventListener("click", function(event){
      modalContainer.style.display = "block";
      userModals[index].style.display = "block";
      currentVisibleUser = index;
    })
  });
}

function activateArrows(){
  previousUser.addEventListener("click", function(event){
    console.log("prev user")
     if(currentVisibleUser > 0){ 
      userModals[currentVisibleUser].style.display= "none";
      userModals[currentVisibleUser-1].style.display= "block";
      currentVisibleUser--;
     }else{
        userModals[currentVisibleUser].style.display= "none";
        userModals[userModals.length-1].style.display= "block";
        currentVisibleUser = userModals.length-1;
     }
  })
  
  nextUser.addEventListener("click", function(event){
    var firstActiveUser = usersToMake-1;
    var nextActiveUser = -1;
    var lastActiveUser = usersToMake-1;

    for(var i=0; i<=usersToMake; i++){
      if(showUsers[i]){
        if(firstActiveUser >= i){firstActiveUser = i;}
        if(nextActiveUser<=currentVisibleUser){nextActiveUser = i+1;}
        lastActiveUser = i;
      }
    }

    console.log("-----------------------------------")
    console.log("next user RUN")
    console.log("firstActiveUser: " + firstActiveUser)
    console.log("currentVisibleUser: " + currentVisibleUser)
    console.log("nextActiveUser: " + nextActiveUser)
    console.log("lastActiveUser:" + lastActiveUser)
    console.log("-----------------------------------")



    if(currentVisibleUser < lastActiveUser){ 
      userModals[currentVisibleUser].style.display= "none";
      userModals[nextActiveUser].style.display= "block";
      currentVisibleUser= nextActiveUser;
    }else{
      userModals[currentVisibleUser].style.display= "none";
      userModals[firstActiveUser].style.display= "block";
      currentVisibleUser = firstActiveUser;
    }
  })
}

$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    $.each(data.results, function( index, value ) {
      printUserModal(data.results[index]);
      printUser(data.results[index]);
    });
    activateUsers();
    activateArrows();
  }
});

function fliterUsers(){
  var usersToShow = users;

  userContainer.innerHTML = "";

  for (var i = 0; i < usersToMake; i++) { 
    if(usersUsernames[i].includes(searchQuestion.value) || usersNames[i].includes(searchQuestion.value) || searchQuestion.value.trim() === ""){
     showUsers[i] = true;
     userContainer.appendChild(usersToShow[i]);
    }
    else{
      showUsers[i] = false;
    } 
  }
}





searchButton.addEventListener("click", function(event){
  event.preventDefault();
  console.log("searching for " + searchQuestion.value);
  fliterUsers(searchQuestion.value);
});

searchQuestion.addEventListener("keyup", function(event){
  console.log("searching for " + searchQuestion.value)
  fliterUsers(searchQuestion.value);
});



// }); // End of document reddy