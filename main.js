//TEACHERS 
var TeacherBratton = document.getElementById('bratton');
var TeacherKoening = document.getElementById('koening');
var TeacherPittman = document.getElementById('pittman');
var TeacherTorrence = document.getElementById('torrence');
var TeacherGrooms = document.getElementById('grooms');
var TeacherTowns = document.getElementById('towns');
var TeacherMiner = document.getElementById('miner');
var TeacherDove = document.getElementById('dove');
var TeacherConnor = document.getElementById('connor');
/*ELEMENTS*/
var DisplayTeacherName = document.getElementById('teacher-name');
var DisplayTeacherArea = document.getElementById('teacher-area');
var TeacherButton = document.getElementById('know-teacher');

//OCTAVIA
TeacherBratton.addEventListener('mouseover',()=>{
    DisplayTeacherName.innerHTML = "Octavia Bratton.";
    DisplayTeacherArea.innerHTML = "Octavia Bratton is an FullStack Developer and"+"<br>"+"sysytem analyst, currently working at Microsoft."+"<br>"+"At NON-STOP she is a teacher of Front-End Development and"+"<br>"+"a IT support technician."
    TeacherButton.innerHTML = "See Octavia courses"
});

//ALEXANDRA
TeacherKoening.addEventListener('mouseover',()=>{
    DisplayTeacherName.innerHTML = "Alexandra Koening.";
    DisplayTeacherArea.innerHTML = "Alexandra Koening is an Software Developer."+"<br>"+"currently working at Great Studyies."+"<br>"+"At NON-STOP she is a teacher of software development and"+"<br>"+"DevOps."
    TeacherButton.innerHTML = "See Alexandra courses"
});
//VIRGIL
TeacherPittman.addEventListener('mouseover',()=>{
    DisplayTeacherName.innerHTML = "Virgil Pittman.";
    DisplayTeacherArea.innerHTML = "Virgil Pittman is a Front-End Developer"+"<br>"+"and game developer, currently working at Microsoft."+"<br>"+"At NON-STOP he is a teacher of Front-End Development and"+"<br>"+"Software Testing."
    TeacherButton.innerHTML = "See Virgil courses"
});
//ORLANDO
TeacherGrooms.addEventListener('mouseover',()=>{
    DisplayTeacherName.innerHTML = "Orlando Grooms.";
    DisplayTeacherArea.innerHTML = "Orlando Grooms is a Desktop and Mobile Developer"+"<br>"+"currently working at Bank BAI"+"<br>"+"At NON-STOP he is a teacher of Android Application Development"+"<br>"+"and React Native Development."
    TeacherButton.innerHTML = "See Orlando courses"
});
//ADRIA
TeacherTorrence.addEventListener('mouseover',()=>{
    DisplayTeacherName.innerHTML = "Adria Torrence.";
    DisplayTeacherArea.innerHTML = "Adria Torrence is an AI Expert and Python Programmer"
    +"<br>"+
    "At NON-STOP she is a teacher of Artificial Intelligence using Python"
    +"<br>"+
    "She is working at NON-STOP."
    TeacherButton.innerHTML = "See Adria courses"
});
//DEXTER
TeacherTowns.addEventListener('mouseover',()=>{
    DisplayTeacherName.innerHTML = "Dexter Towns.";
    DisplayTeacherArea.innerHTML = "Dexter Towns is a Data Bases analyst"+"<br>"+"and sysytem analyst, currently working at Microsoft"+"<br>"+"At NON-STOP he is a teacher of DB Security and DB Managment "+"<br>"
    TeacherButton.innerHTML = "See Dexter courses"
});
//VALERY
TeacherMiner.addEventListener('mouseover',()=>{
    DisplayTeacherName.innerHTML = "Valery Miner.";
    DisplayTeacherArea.innerHTML = "Valery Miner is an IOS Developer and"+"<br>"+"sysytem analyst, currently working at AmoTech"+"<br>"+"At NON-STOP she is a teacher of IOS Application Development."+"<br>"
    TeacherButton.innerHTML = "See Valery courses"
});
//SCOT
TeacherDove.addEventListener('mouseover',()=>{
    DisplayTeacherName.innerHTML = "Scot Dove.";
    DisplayTeacherArea.innerHTML = "Scot Dove is a C Programmer"+"<br>"+"currently working at Synch."+"<br>"+"At NON-STOP she is a teacher of C language programming and"+"<br>"+"HardWare Managment"
    TeacherButton.innerHTML = "See Scot courses"
});
//Leesa
TeacherConnor.addEventListener('mouseover',()=>{
    DisplayTeacherName.innerHTML = "Leesa Connor.";
    DisplayTeacherArea.innerHTML = "Leesa Connor is an FullStack Developer, System Analyst"+"<br>"+"and software Development and tests, currently working at Itel"+"<br>"+"At NON-STOP she is a teacher of Software Development and tests"+"<br>"
    TeacherButton.innerHTML = "See Leesa courses"
});


//COMMUNITY
var DisplayInfoText = document.getElementById('displayed-text');
var HealthyElement = document.getElementById('healthy');
var GenderElement = document.getElementById('gender');
var DevElement = document.getElementById('dev');
var OpenSourceElement = document.getElementById('open');
var ProgrammersElement = document.getElementById('programmers');
var SafeElement = document.getElementById('safe');

window.addEventListener('load',()=>{
    DisplayInfoText.innerHTML="hover an element"+"<br>"+"to see it's information"
})

//healthy
HealthyElement.addEventListener('mouseover',()=>{
    DisplayInfoText.innerHTML="our community is extremly healthy"+"<br>"+"and a very great place for you to meet"+"<br>"+"new friends and get fun learning with them."
});
//gender
GenderElement.addEventListener('mouseover',()=>{
    DisplayInfoText.innerHTML="here at non-stop community"+"<br>"+"every single person is welcome, here you can be"+"<br>"+"who ever you are, of course, following all rules"+"<br>"+"to keep the community healthy and safe."
});
//dev
DevElement.addEventListener('mouseover',()=>{
    DisplayInfoText.innerHTML="this community is for every king"+"<br>"+"of programmers and technician, if you want to"+"<br>"+"learn, or share you knowledge you're welcome !"
});
//open source
OpenSourceElement.addEventListener('mouseover',()=>{
    DisplayInfoText.innerHTML="all members of our community"+"<br>"+"share every day, source codes, tutorials and"+"<br>"+"resources, here you can ask for anything, and"+"<br>"+"you can also, share any king of files that"+"<br>"+"may help someone"
});
//programming
ProgrammersElement.addEventListener('mouseover',()=>{
    DisplayInfoText.innerHTML="you can find many programmers here"+"<br>"+"people that can help you in any project"+"<br>"+"pro or beginner level, just ask"
});
//safe
SafeElement.addEventListener('mouseover',()=>{
    DisplayInfoText.innerHTML="any personal data or information about you"+"<br>"+" is very well proctected we treat them like it was ours"+"<br>"+"for you to get a better and safest experiece in our community"
});

//MOBILE MENU
function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
  }

//SCROLL REVEAL
ScrollReveal().reveal('.section',{interval:2000},{reset:true});