var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick = function(){
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/landscape.png'){
    myImage.setAttribute('src','images/IMG_9214.JPG');
  }
  else{
    myImage.setAttribute('src','images/landscape.png');
  }
}

function setUserName(){
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'ようこそ！, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'ようこそ！' + storedName;
}

myButton.onclick = function(){
  setUserName();
}
