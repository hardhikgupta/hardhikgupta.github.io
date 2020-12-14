console.log('Hello World!');
let n = 0;
let iconbtn = document.getElementById('navButton');
const iconBtnClass = iconbtn.className;
console.log(iconBtnClass)
function navButClick(){
  
  let icon = document.getElementById('nav-icon');
  
  
  if (n == 0){
    icon.className = "nav-icon";
    icon.innerText = "×";
    n = 1;
    iconbtn.className = iconBtnClass + ' iconBtn'
  }
  else {
    icon.className = 'navbar-toggler-icon';
    icon.innerText = '';
    n = 0;
    iconbtn.className = iconBtnClass
  }
}