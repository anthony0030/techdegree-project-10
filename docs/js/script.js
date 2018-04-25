function dateConverter(e){const s=e.split("-"),t=s[0].substring(2),r=s[1];return s[2].split(" ")[0]+"/"+r+"/"+t}function printUser(e,s){const t=e.picture.large,r=e.name.first+" "+e.name.last,a=e.email,n=e.location.state,i=e.login.username,c=document.createElement("DIV");c.classList.add("user-pain__window");const o=document.createElement("DIV");o.classList.add("user-pain__photo"),c.appendChild(o);const d=document.createElement("IMG");d.classList.add("user-pain__avatar"),d.src=t,o.appendChild(d);const l=document.createElement("DIV");l.classList.add("user-pain__details"),c.appendChild(l);const u=document.createElement("H2");u.classList.add("user-pain__title"),u.classList.add("capitalize"),u.appendChild(document.createTextNode(r)),l.appendChild(u);const p=document.createElement("P");p.classList.add("user-pain__email"),p.appendChild(document.createTextNode(a)),l.appendChild(p);const m=document.createElement("P");m.classList.add("user-pain__place"),m.appendChild(document.createTextNode(n)),l.appendChild(m),userContainer.appendChild(c),usersNames.push(r),usersUsernames.push(i),showUsers.push(!0)}function printUserModal(e,s){const t="×",r=e.picture.large,a=e.name.first+" "+e.name.last,n=e.email,i=e.location.state,c=e.cell,o=e.location,d=o.street+", "+o.city+" "+convertStateRegion(o.state)+" "+o.postcode,l="Birthday: "+dateConverter(e.dob),u=document.createElement("DIV");u.classList.add("user-modal");const p=document.createElement("SPAN");p.classList.add("close"),p.appendChild(document.createTextNode("×")),u.appendChild(p);const m=document.createElement("IMG");m.classList.add("user-modal__avatar"),m.src=r,u.appendChild(m);const U=document.createElement("H2");U.classList.add("user-modal__name"),U.classList.add("capitalize"),U.appendChild(document.createTextNode(a)),u.appendChild(U);const v=document.createElement("P");v.classList.add("user-modal__email"),v.appendChild(document.createTextNode(n)),u.appendChild(v);const h=document.createElement("P");h.classList.add("user-modal__place"),h.appendChild(document.createTextNode(i)),u.appendChild(h);const C=document.createElement("HR");u.appendChild(C);const b=document.createElement("P");b.classList.add("user-modal__phone"),b.appendChild(document.createTextNode(c)),u.appendChild(b);const y=document.createElement("P");y.classList.add("user-modal__address"),y.appendChild(document.createTextNode(d)),u.appendChild(y);const f=document.createElement("P");f.classList.add("user-modal__bday"),f.appendChild(document.createTextNode(l)),u.appendChild(f),modalContainer.appendChild(u)}function hideAllUserModals(){modalContainer.style.display="none",$.each(userModals,function(e,s){userModals[e].style.display="none"}),currentVisibleUser=-1}function activateUsers(){userModals=$(".user-modal"),users=$(".user-pain__window"),$.each(users,function(e,s){s.addEventListener("click",function(s){modalContainer.style.display="block",userModals[e].style.display="block",currentVisibleUser=e})})}function calcActiveUsers(){firstActiveUser=usersToMake-1,previusActiveUser=0,nextActiveUser=-1,lastActiveUser=usersToMake-1,previusActiveUser=currentVisibleUser;for(var e=0;e<=usersToMake;e++)showUsers[e]&&(e<currentVisibleUser&&(previusActiveUser=e),firstActiveUser>=e&&(firstActiveUser=e),nextActiveUser<=currentVisibleUser&&(nextActiveUser=e),lastActiveUser=e)}function goToPreviousUser(){currentVisibleUser>=0&&(calcActiveUsers(),currentVisibleUser>firstActiveUser?(userModals[currentVisibleUser].style.display="none",userModals[previusActiveUser].style.display="block",currentVisibleUser=previusActiveUser):(userModals[currentVisibleUser].style.display="none",userModals[lastActiveUser].style.display="block",currentVisibleUser=lastActiveUser))}function goToNextUser(){currentVisibleUser>=0&&(calcActiveUsers(),currentVisibleUser<lastActiveUser?(userModals[currentVisibleUser].style.display="none",userModals[nextActiveUser].style.display="block",currentVisibleUser=nextActiveUser):(userModals[currentVisibleUser].style.display="none",userModals[firstActiveUser].style.display="block",currentVisibleUser=firstActiveUser))}function fliterUsers(){var e=users;userContainer.innerHTML="";for(var s=0;s<usersToMake;s++)usersUsernames[s].includes(searchQuestion.value)||usersNames[s].includes(searchQuestion.value)||""===searchQuestion.value.trim()?(showUsers[s]=!0,userContainer.appendChild(e[s])):showUsers[s]=!1}function keyDownTextField(e){switch(e.preventDefault(),e.keyCode){case 8:goToPreviousUser();break;case 13:goToNextUser();break;case 27:hideAllUserModals();break;case 32:goToNextUser();break;case 37:goToPreviousUser();break;case 38:goToNextUser();break;case 39:goToNextUser();break;case 40:goToPreviousUser();break;case 65:goToPreviousUser();break;case 68:goToNextUser();break;case 83:goToPreviousUser();break;case 87:goToNextUser();break;default:break}}const usersToMake=12,userNationalities="US,CA",searchButton=document.getElementById("search__button"),searchQuestion=document.getElementById("search__question"),modalContainer=document.getElementById("user-modals"),userContainer=document.getElementById("users");var users=$(".user-pain__window"),userModals=$(".user-modal"),showUsers=[];const usersNames=[],usersUsernames=[],nextUser=document.getElementById("next-user"),previousUser=document.getElementById("previous-user");var currentVisibleUser,previusActiveUser,firstActiveUser,nextActiveUser,lastActiveUser;$.ajax({url:"https://randomuser.me/api/?results="+usersToMake+"&nat=US,CA",dataType:"json",success:function(e){$.each(e.results,function(s,t){printUserModal(e.results[s],s),printUser(e.results[s],s)}),activateUsers()}}),document.addEventListener("keyup",keyDownTextField,!1),searchQuestion.removeEventListener("keyup",keyDownTextField,!0),modalContainer.addEventListener("click",function(e){e.target!==modalContainer&&"close"!==e.target.className||hideAllUserModals()}),previousUser.addEventListener("click",function(e){goToPreviousUser(e)}),nextUser.addEventListener("click",function(e){goToNextUser(e)}),searchButton.addEventListener("click",function(e){e.preventDefault(),fliterUsers(searchQuestion.value)}),searchQuestion.addEventListener("keyup",function(e){fliterUsers(searchQuestion.value)});