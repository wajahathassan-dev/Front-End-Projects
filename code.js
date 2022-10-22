let nav = document.getElementById("top-nav"); // nav element
let menuIcon = document.getElementById("menu-icon") // drop down menu icon

// Disappear nav bar on width up to 404px ( default )

media_query = window.matchMedia("(max-width: 404px)")

function navCheck(query){
  if (query.matches){
    nav.className = "hide";
    menuIcon.src = "images/icon-hamburger.svg";
  } else {
    nav.className = "";
    menuIcon.src = "images/icon-close.svg";
  }
}

navCheck(media_query); 
media_query.addListener(navCheck);


// Show and Hide Nav Bar using Hamburger button


function showHideNav(){
  if (nav.className == "hide"){
    nav.className = ""
    menuIcon.src = "images/icon-close.svg";
  } else {
    nav.className = "hide";
    menuIcon.src = "images/icon-hamburger.svg";
  }

};