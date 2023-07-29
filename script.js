// For Nav Bar

window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    var sections = document.querySelectorAll("article");
    var currentSection = "";

    sections.forEach(function(section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.clientHeight;

      if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
        currentSection = section.getAttribute("id");
      }
    });

    var currentLink = document.querySelector(".active");
    currentLink.classList.remove("active");

    var newLink = document.querySelector('a[href="#' + currentSection + '"]');
    newLink.classList.add("active");
  });

// For team members page and social links
  function showInfo(memberName) {
    let memberInfo = document.getElementById(memberName + "-info");
    if (memberInfo.style.display === "none") {
      memberInfo.style.display = "block";
    } else {
      memberInfo.style.display = "none";
    }
  }
  
// For Animation of content

window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
