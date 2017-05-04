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
