
var images = ['img/coffee01.png','img/coffee02.png','img/coffee03.png','img/coffee04.png','img/coffee05.png','img/coffee06.png'];
var blocks = document.getElementsByClassName('block');

document.getElementsByClassName('big-set')[0].innerHTML = '<img src="' + images[0] + '" alt="" class="big">'

for (var i = 0; i < blocks.length; i++) {
  blocks[i].innerHTML = '<img src="' + images[i] + '" alt="" class="small">';
}

var small = document.getElementsByClassName('small');
for (var i = 0; i < small.length; i++) {
  small[i].onclick = function () {
    document.getElementsByClassName('big')[0].src =  this.src;
    for (var i = 0; i < small.length; i++) {
     if (small[i].style.border == "2px solid red" ) {
       small[i].style.border = ""
     }
    }
    this.style.border = "2px solid red";
  }
}
