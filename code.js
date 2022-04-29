let card = ["Potato", "Tomato"];
let jawaban = card[Math.floor(Math.random() * card.length)]
let img = document.querySelector('img');
let but1 = document.querySelector('.but1');
let but2 = document.querySelector('.but2');
let kanvas = document.getElementById('my-canvas');
let hasil = document.getElementById('hasil');
let hasilSalah = document.getElementById('hasil-salah');

if(jawaban == "Potato"){
  img.src = 'images/potato.svg';
  but1.classList.add("potato");
  but2.classList.add("potato");
}
else if(jawaban == "Tomato"){
  img.style.height += 1;
  img.src = 'images/tomato.svg';
  but1.classList.add("tomato");
  but2.classList.add("tomato");

}

function tomato(){
  if(jawaban == "Tomato"){
    kanvas.style.visibility = "visible";
    hasil.style.visibility = "visible";
    hasil.style.opacity = 100 + "%";
    document.getElementById('potato').onclick = "null";
    document.getElementById('tomato').onclick = "null";
  }
  else {
    hasilSalah.style.visibility = "visible";
    hasilSalah.style.opacity = 100 + "%";
    hidden();
  }
}

function potato(){
  if(jawaban == "Potato"){
    kanvas.style.visibility = "visible";
    hasil.style.visibility = "visible";
    hasil.style.opacity = 100 + "%";
    document.getElementById('potato').onclick = "null";
    document.getElementById('tomato').onclick = "null";
  }
  else {
    hasilSalah.style.visibility = "visible";
    hasilSalah.style.opacity = 100 + "%";
    hidden();
  }
}

function hidden(){
  setTimeout(function() {
    hasilSalah.style.visibility = "hidden";
    hasilSalah.style.opacity = 0 + "%";
  }, 1500);
}

function reset(){
  location.reload();
}
