let blank = 3;

for (let i = 1; i <= 9; i++) {
  document
    .getElementById(i)
    .addEventListener(
      "click",
      calculateSpace.bind(this, document.getElementById(i))
    );
}

function verify() {
  let flag = true;
  for (let x = 1; x <= 9; x++) {
    if (x != 3) {
      myImage = document.getElementById(x);
      if(myImage == undefined){
          alert(x)
      }
      if (myImage.name != myImage.classList) {
        flag = false;
        break;
      }
    }
  }
  alert(flag)
  if (flag == true) {
    alert("ganaste");
  }
}

function calculateSpace(clickedPicture) {
  respuesta = Math.abs(clickedPicture.classList - blank);
  if (respuesta == 3 || respuesta == 1) {
    flag = blank;
    blank = clickedPicture.id;
    clickedPicture.classList.remove(clickedPicture.classList);
    clickedPicture.classList.add(flag);
    clickedPicture.setAttribute('id', flag);
    verify();
  }
}
