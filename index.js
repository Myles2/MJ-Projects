const spot = document.getElementById("spot");
const spotName = document.getElementById("spotName");
const skills = ["icon-html5-alt", "icon-css3-alt", "icon-javascript-alt", "icon-jquery", "icon-sass", "icon-reactjs", "icon-git"]
const skillName = ["HTML5", "CSS3", "JavaScript", "jQuery", "Sass", "React.js", "Git"]
let count = 0;

spot.className = skills[count]
spotName.innerHTML = skillName[count]
setInterval(function() {
  count+=1
  spot.className = skills[count]
  spotName.innerHTML = skillName[count]
  if(count >= skills.length -1) {
    count = 0;
  }
}, 3000);

