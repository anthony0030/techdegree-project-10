function printUser(e,s){const t=e.picture.large,r=e.name.first+" "+e.name.last,a=e.email,n=toTitleCase(e.location.state),i=e.login.username,o=document.createElement("DIV");o.classList.add("user-pain__window");const c=document.createElement("DIV");c.classList.add("user-pain__photo"),o.appendChild(c);const d=document.createElement("IMG");d.classList.add("user-pain__avatar"),d.src=t,c.appendChild(d);const l=document.createElement("DIV");l.classList.add("user-pain__details"),o.appendChild(l);const u=document.createElement("H2");u.classList.add("user-pain__title"),u.classList.add("capitalize"),u.appendChild(document.createTextNode(r)),l.appendChild(u);const p=document.createElement("P");p.classList.add("user-pain__email"),p.appendChild(document.createTextNode(a)),l.appendChild(p);const m=document.createElement("P");m.classList.add("user-pain__place"),m.appendChild(document.createTextNode(n)),l.appendChild(m),userContainer.appendChild(o),usersNames.push(r),usersUsernames.push(i),showUsers.push(!0)}function printUserModal(e,s){const t="×",r=e.picture.large,a=e.name.first+" "+e.name.last,n=e.email,i=toTitleCase(e.location.state),o=convertStateRegion(e.location.state),c=e.cell,d=toTitleCase(e.location.street),l=toTitleCase(e.location.city),u=e.location.postcode,p=d+", "+l+" "+o+" "+u,m="Birthday: "+dateConverter(e.dob),U=document.createElement("DIV");U.classList.add("user-modal");const v=document.createElement("SPAN");v.classList.add("close"),v.appendChild(document.createTextNode("×")),U.appendChild(v);const h=document.createElement("IMG");h.classList.add("user-modal__avatar"),h.src=r,U.appendChild(h);const C=document.createElement("H2");C.classList.add("user-modal__name"),C.classList.add("capitalize"),C.appendChild(document.createTextNode(a)),U.appendChild(C);const y=document.createElement("P");y.classList.add("user-modal__email"),y.appendChild(document.createTextNode(n)),U.appendChild(y);const b=document.createElement("P");b.classList.add("user-modal__place"),b.appendChild(document.createTextNode(i)),U.appendChild(b);const T=document.createElement("HR");U.appendChild(T);const k=document.createElement("P");k.classList.add("user-modal__phone"),k.appendChild(document.createTextNode(c)),U.appendChild(k);const f=document.createElement("P");f.classList.add("user-modal__address"),f.appendChild(document.createTextNode(p)),U.appendChild(f);const _=document.createElement("P");_.classList.add("user-modal__bday"),_.appendChild(document.createTextNode(m)),U.appendChild(_),modalContainer.appendChild(U)}function hideAllUserModals(){modalContainer.style.display="none",$.each(userModals,function(e,s){userModals[e].style.display="none"}),currentVisibleUser=-1}function activateUsers(){userModals=$(".user-modal"),users=$(".user-pain__window"),$.each(users,function(e,s){s.addEventListener("click",function(s){modalContainer.style.display="block",userModals[e].style.display="block",currentVisibleUser=e})})}function calcActiveUsers(){firstActiveUser=usersToMake-1,previusActiveUser=0,nextActiveUser=-1,lastActiveUser=usersToMake-1,previusActiveUser=currentVisibleUser;for(var e=0;e<=usersToMake;e++)showUsers[e]&&(e<currentVisibleUser&&(previusActiveUser=e),firstActiveUser>=e&&(firstActiveUser=e),nextActiveUser<=currentVisibleUser&&(nextActiveUser=e),lastActiveUser=e)}function goToPreviousUser(){currentVisibleUser>=0&&(calcActiveUsers(),currentVisibleUser>firstActiveUser?(userModals[currentVisibleUser].style.display="none",userModals[previusActiveUser].style.display="block",currentVisibleUser=previusActiveUser):(userModals[currentVisibleUser].style.display="none",userModals[lastActiveUser].style.display="block",currentVisibleUser=lastActiveUser))}function goToNextUser(){currentVisibleUser>=0&&(calcActiveUsers(),currentVisibleUser<lastActiveUser?(userModals[currentVisibleUser].style.display="none",userModals[nextActiveUser].style.display="block",currentVisibleUser=nextActiveUser):(userModals[currentVisibleUser].style.display="none",userModals[firstActiveUser].style.display="block",currentVisibleUser=firstActiveUser))}function fliterUsers(){var e=users;userContainer.innerHTML="";for(var s=0;s<usersToMake;s++)usersUsernames[s].includes(searchQuestion.value)||usersNames[s].includes(searchQuestion.value)||""===searchQuestion.value.trim()?(showUsers[s]=!0,userContainer.appendChild(e[s])):showUsers[s]=!1}function keyDownTextField(e){switch(e.preventDefault(),e.keyCode){case 8:goToPreviousUser();break;case 13:goToNextUser();break;case 27:hideAllUserModals();break;case 32:goToNextUser();break;case 37:goToPreviousUser();break;case 38:goToNextUser();break;case 39:goToNextUser();break;case 40:goToPreviousUser();break;case 65:goToPreviousUser();break;case 68:goToNextUser();break;case 83:goToPreviousUser();break;case 87:goToNextUser();break;default:break}}const usersToMake=12,userNationalities="US,CA",searchButton=document.getElementById("search__button"),searchQuestion=document.getElementById("search__question"),modalContainer=document.getElementById("user-modals"),userContainer=document.getElementById("users");var users=$(".user-pain__window"),userModals=$(".user-modal"),showUsers=[];const usersNames=[],usersUsernames=[],nextUser=document.getElementById("next-user"),previousUser=document.getElementById("previous-user");var currentVisibleUser,previusActiveUser,firstActiveUser,nextActiveUser,lastActiveUser;$.ajax({url:"https://randomuser.me/api/?results="+usersToMake+"&nat=US,CA",dataType:"json",success:function(e){$.each(e.results,function(s,t){printUserModal(e.results[s],s),printUser(e.results[s],s)}),activateUsers()}}),document.addEventListener("keyup",keyDownTextField,!1),searchQuestion.removeEventListener("keyup",keyDownTextField,!0),modalContainer.addEventListener("click",function(e){e.target!==modalContainer&&"close"!==e.target.className||hideAllUserModals()}),previousUser.addEventListener("click",function(e){goToPreviousUser(e)}),nextUser.addEventListener("click",function(e){goToNextUser(e)}),searchButton.addEventListener("click",function(e){e.preventDefault(),fliterUsers(searchQuestion.value)}),searchQuestion.addEventListener("keyup",function(e){fliterUsers(searchQuestion.value)});