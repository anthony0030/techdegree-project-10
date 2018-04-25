// $( document ).ready(function() {

const dataToUse = {
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "محمدمهدی",
        "last": "كامياران"
      },
      "location": {
        "street": "7711 ایران",
        "city": "کرج",
        "state": "همدان",
        "postcode": 26499
      },
      "email": "محمدمهدی.كامياران@example.com",
      "login": {
        "username": "tinyrabbit670",
        "password": "home",
        "salt": "mLFOODSc",
        "md5": "ab6ba6d2bab0174c1cb856cb720d2b99",
        "sha1": "ebdedeb685b710a2c16f3745b615c51e3e870a7e",
        "sha256": "bae01d9dc3e2237ca720f5d6bcd87e97866580dd9bab947c9f2176c9d354acc1"
      },
      "dob": "1961-04-02 23:50:09",
      "registered": "2014-12-19 16:05:41",
      "phone": "034-19408214",
      "cell": "0982-120-4685",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/90.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/90.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/90.jpg"
      },
      "nat": "IR"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "austin",
        "last": "zhang"
      },
      "location": {
        "street": "1070 white swan road",
        "city": "tauranga",
        "state": "marlborough",
        "postcode": 94804
      },
      "email": "austin.zhang@example.com",
      "login": {
        "username": "purplemeercat883",
        "password": "benton",
        "salt": "y8fVBGd0",
        "md5": "e0c49776d58ec1b6b2d7784cb47fb479",
        "sha1": "36744a522968edfbd32dd714e297c515ba4051c1",
        "sha256": "62c63fcabb33e76a0c258804e7ba1c420da02509b5623eedc4a05a2b8acd12dc"
      },
      "dob": "1955-11-04 03:51:26",
      "registered": "2004-02-04 02:23:29",
      "phone": "(600)-976-1969",
      "cell": "(991)-456-3500",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/65.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/65.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/65.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "سارینا",
        "last": "محمدخان"
      },
      "location": {
        "street": "1589 شهید گلپایگانی",
        "city": "ایلام",
        "state": "کرمان",
        "postcode": 52146
      },
      "email": "سارینا.محمدخان@example.com",
      "login": {
        "username": "heavypanda153",
        "password": "swordfis",
        "salt": "CiRRiqYf",
        "md5": "48d8ae7d8bd37b9d09fdfce48691e6e4",
        "sha1": "a479e3691afd47a6a28293141c04f96bcf185c2a",
        "sha256": "11b41bc9b222c9473af0d6bba8110cb062c34245eb00319e40d37bc7acf0a7d0"
      },
      "dob": "1967-01-05 05:12:34",
      "registered": "2009-05-28 01:30:48",
      "phone": "043-93438438",
      "cell": "0966-059-1219",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/78.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/78.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/78.jpg"
      },
      "nat": "IR"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "mary",
        "last": "walker"
      },
      "location": {
        "street": "4214 lone wolf trail",
        "city": "fort wayne",
        "state": "virginia",
        "postcode": 82152
      },
      "email": "mary.walker@example.com",
      "login": {
        "username": "blueladybug157",
        "password": "gold",
        "salt": "Sz6SzHAM",
        "md5": "5976ef753140d8e3563cefebcb8c91e2",
        "sha1": "8239ea7738bb4280487e7c6d61718d21a8991bd8",
        "sha256": "862e3ca769908298a765603185dec568a7a0328adebf839926426f34cb4af1d9"
      },
      "dob": "1978-03-17 12:55:10",
      "registered": "2003-06-26 07:02:21",
      "phone": "(538)-740-8522",
      "cell": "(062)-964-5170",
      "id": {
        "name": "SSN",
        "value": "052-16-3478"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/44.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/44.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/44.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "onni",
        "last": "hamalainen"
      },
      "location": {
        "street": "4910 rautatienkatu",
        "city": "kiiminki",
        "state": "ostrobothnia",
        "postcode": 67566
      },
      "email": "onni.hamalainen@example.com",
      "login": {
        "username": "silverkoala690",
        "password": "wallet",
        "salt": "W1VD49S0",
        "md5": "52d99772567b709a09f9964b1bbf28e7",
        "sha1": "2898c1fceee4ed8230cc10ea3aa84e8441cf6b24",
        "sha256": "c782a19f4f45666fa398eb6307d69487366625025d4dbef6c2885edf0c0d1e14"
      },
      "dob": "1967-07-14 05:44:13",
      "registered": "2004-01-11 12:47:54",
      "phone": "09-103-618",
      "cell": "040-821-00-77",
      "id": {
        "name": "HETU",
        "value": "1167-503C"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/63.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/63.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/63.jpg"
      },
      "nat": "FI"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "maxime",
        "last": "claire"
      },
      "location": {
        "street": "5901 brock rd",
        "city": "princeton",
        "state": "ontario",
        "postcode": 35210
      },
      "email": "maxime.claire@example.com",
      "login": {
        "username": "beautifulelephant137",
        "password": "redwings",
        "salt": "d2PXCqwq",
        "md5": "95068e59ff42f8ffd13171bedfbd0729",
        "sha1": "e1efa54d475a3609bac831082622e44ced4e61a7",
        "sha256": "24fede9c4490a6c8294f6b532bfae3687aa5d92d5f968321495b7f1f6767a346"
      },
      "dob": "1958-08-06 06:25:48",
      "registered": "2008-12-14 06:21:26",
      "phone": "168-145-7178",
      "cell": "365-258-1410",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/14.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/14.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/14.jpg"
      },
      "nat": "CA"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "lieselotte",
        "last": "maier"
      },
      "location": {
        "street": "1195 erlenweg",
        "city": "dessau-roßlau",
        "state": "thüringen",
        "postcode": 82409
      },
      "email": "lieselotte.maier@example.com",
      "login": {
        "username": "redfish808",
        "password": "detroit",
        "salt": "xb9M9eT3",
        "md5": "e72ec443d76f739a37fa21e8258438f2",
        "sha1": "e0f016cb42a68b35613037a8468295a438b539ac",
        "sha256": "7c0da0bdd0076b517294ed82e85050a14f47c17017ac325800f16ba6cd26a1ed"
      },
      "dob": "1987-03-15 03:01:22",
      "registered": "2007-08-28 08:15:13",
      "phone": "0139-9272564",
      "cell": "0176-6673830",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/86.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/86.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/86.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "nicolas",
        "last": "saez"
      },
      "location": {
        "street": "1356 calle de alberto aguilera",
        "city": "valladolid",
        "state": "castilla y león",
        "postcode": 62432
      },
      "email": "nicolas.saez@example.com",
      "login": {
        "username": "redswan503",
        "password": "triple",
        "salt": "h9e0h0n9",
        "md5": "e393167855c03bcdcc025512aafc6541",
        "sha1": "531a3d14a51c781c9c66666f91dab4f02b80e662",
        "sha256": "f26c01c8901fd23b1ec446420d0de66491547f3dd87ccb9ebe8a49ffd64b264a"
      },
      "dob": "1954-02-12 22:49:33",
      "registered": "2012-07-24 12:04:25",
      "phone": "977-801-138",
      "cell": "687-019-744",
      "id": {
        "name": "DNI",
        "value": "40493474-C"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "theo",
        "last": "macrae"
      },
      "location": {
        "street": "4229 north road",
        "city": "kingston upon hull",
        "state": "west glamorgan",
        "postcode": "WR6 2HY"
      },
      "email": "theo.macrae@example.com",
      "login": {
        "username": "crazysnake934",
        "password": "internal",
        "salt": "3kbj5veV",
        "md5": "39d37de77f5537c7032a2f2d33bb4bb6",
        "sha1": "c61ebd996df91514d2e7b9869f9a6d099a829f20",
        "sha256": "8607754f43bd21b2047d996c0a46fb24ecfd09e7592711a6c76385fa05f03ac6"
      },
      "dob": "1945-09-01 16:15:58",
      "registered": "2016-01-15 22:46:24",
      "phone": "017683 68820",
      "cell": "0786-225-227",
      "id": {
        "name": "NINO",
        "value": "AL 70 36 34 I"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/58.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/58.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/58.jpg"
      },
      "nat": "GB"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "kaya",
        "last": "düşenkalkar"
      },
      "location": {
        "street": "2866 maçka cd",
        "city": "bingöl",
        "state": "van",
        "postcode": 87092
      },
      "email": "kaya.düşenkalkar@example.com",
      "login": {
        "username": "tinysnake460",
        "password": "sabine",
        "salt": "RTj81BxI",
        "md5": "ef366c16ba501dfe225f74a972a22599",
        "sha1": "89bfa07efab4f0d11be37c2b3966e5f7723538cc",
        "sha256": "3df7a787ddaa5fa93a8bc3cf3d1219ba9905627a274eb78141db6d9846130e68"
      },
      "dob": "1963-12-26 21:51:47",
      "registered": "2009-08-02 04:02:48",
      "phone": "(376)-512-0140",
      "cell": "(598)-823-4937",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/72.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/72.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/72.jpg"
      },
      "nat": "TR"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "heidi",
        "last": "jordan"
      },
      "location": {
        "street": "2662 frances ct",
        "city": "augusta",
        "state": "virginia",
        "postcode": 85251
      },
      "email": "heidi.jordan@example.com",
      "login": {
        "username": "tinyduck181",
        "password": "pass1",
        "salt": "A6koDB95",
        "md5": "e7b9796c834f4f44da2617db75c15867",
        "sha1": "5b5d4b750d87d368bb1f65466e81212f325e9e43",
        "sha256": "64efe3a8bf0ee2335fa725da9b681cf0a1464ee757b0cea5b92a0dbe7df1c814"
      },
      "dob": "1950-12-19 18:15:04",
      "registered": "2013-08-27 01:44:47",
      "phone": "(579)-196-1703",
      "cell": "(971)-450-6054",
      "id": {
        "name": "SSN",
        "value": "318-36-3651"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/3.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/3.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/3.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "koray",
        "last": "limoncuoğlu"
      },
      "location": {
        "street": "1745 fatih sultan mehmet cd",
        "city": "kahramanmaraş",
        "state": "ordu",
        "postcode": 74450
      },
      "email": "koray.limoncuoğlu@example.com",
      "login": {
        "username": "beautifulleopard274",
        "password": "rooster",
        "salt": "DpQ3Islm",
        "md5": "8245670ab00265fae9c384a95a0c5669",
        "sha1": "a6a9f7b5bef87cc82226bfbd0eeb32332900b985",
        "sha256": "564327d6dc8dd97e39b9084c34671459524029db90a8084d5ba27df25eef9606"
      },
      "dob": "1960-12-11 08:29:31",
      "registered": "2016-07-21 17:15:19",
      "phone": "(799)-962-0638",
      "cell": "(701)-307-0136",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/88.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/88.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/88.jpg"
      },
      "nat": "TR"
    }
  ],
  "info": {
    "seed": "2bba35390ea7b76d",
    "results": 12,
    "page": 1,
    "version": "1.1"
  }}



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
var previusActiveUser;
var firstActiveUser;
var nextActiveUser;
var lastActiveUser;

function printUser(data, index){
  // console.log(data)
  // console.log(data.gender)
  const avatarSrc = data.picture.large;
  const nameText = data.name.first + " " + data.name.last + " " + index;
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


function printUserModal(data, index){
  // console.log(data)
  // console.log(data.gender)
  const closeText = "×"
  const avatarSrc = data.picture.large;
  const nameText = data.name.first + " " + data.name.last + " " + index;
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
      console.log("i am user number: " + index);
    })
  });
}


function calcActiveUsers(){

  firstActiveUser = usersToMake-1;
  previusActiveUser = 0;
  nextActiveUser = -1;
  lastActiveUser = usersToMake-1;
  previusActiveUser = currentVisibleUser;


  for(var i=0; i<=usersToMake; i++){
    if(showUsers[i]){
      if(i < currentVisibleUser){previusActiveUser = i;}
      if(firstActiveUser >= i){firstActiveUser = i;}
      if(nextActiveUser<=currentVisibleUser){nextActiveUser = i;}
      lastActiveUser = i;
    }
  } // end of for loop

  console.log("-----------------------------------")
  console.log("firstActiveUser: " + firstActiveUser)
  console.log("previusActiveUser: " + previusActiveUser)
  console.log("currentVisibleUser: " + currentVisibleUser)
  console.log("nextActiveUser: " + nextActiveUser)
  console.log("lastActiveUser: " + lastActiveUser)
  console.log("-----------------------------------")
} // end of calcActiveUsers()



previousUser.addEventListener("click", function(event){
  calcActiveUsers()
  console.log("prev user RUN")
  if(currentVisibleUser > firstActiveUser){ 
    userModals[currentVisibleUser].style.display= "none";
    userModals[previusActiveUser].style.display= "block";
    currentVisibleUser = previusActiveUser;
  } else {
    userModals[currentVisibleUser].style.display= "none";
    userModals[lastActiveUser].style.display= "block";
    currentVisibleUser = lastActiveUser;
  }
})

nextUser.addEventListener("click", function(event){
  calcActiveUsers()
  console.log("next user RUN")
  if(currentVisibleUser < lastActiveUser){ 
    userModals[currentVisibleUser].style.display= "none";
    userModals[nextActiveUser].style.display= "block";
    currentVisibleUser= nextActiveUser;
  } else {
    userModals[currentVisibleUser].style.display= "none";
    userModals[firstActiveUser].style.display= "block";
    currentVisibleUser = firstActiveUser;
  }
})


$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data){
    $.each(data.results, function( index, value ){
      printUserModal(dataToUse.results[index],index);
      printUser(dataToUse.results[index],index);
    });
    activateUsers();
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



// }); // End of document ready