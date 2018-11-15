var myImage = document.querySelector('img');
myImage.onclick = function(){
    
    var mysrc = myImage.getAttribute ('src');
    
    if(mysrc === 'images/kids.png') {
        
        myImage.setAttribute ('src','images/CN.png');
    }
    else {
        
        myImage.setAttribute ('src','images/kids.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Web Design It Is, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Web Design It Is, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}