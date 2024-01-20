//menu colapsado
document.querySelector('.hamburger-menu').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.links-hamburguer').classList.toggle('show');
});

window.addEventListener('scroll', function() {
  var hamburgerMenuLines = document.querySelectorAll('.hamburger-menu div');
  if (window.scrollY > window.innerHeight) {
      hamburgerMenuLines.forEach(function(line) {
          line.classList.add('pink');
      });
  } else {
      hamburgerMenuLines.forEach(function(line) {
          line.classList.remove('pink');
      });
  }
});


//scroll nav
let prevScrollpos = window.pageYOffset;
let prevScrollpos2 = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  let maxScrollPos = document.documentElement.scrollHeight - window.innerHeight;

  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-90px"; 
  }
  prevScrollpos = currentScrollPos;

  if (currentScrollPos > window.innerHeight) {
    document.querySelector(".logo-container").style.filter = "invert(1) drop-shadow(0 0 5px #ff69b440) drop-shadow(0 0 2px #ff69b420)";
    let links = document.querySelectorAll(".links ul li a span");
    links.forEach(link => {
      link.style.color = "#333333";
      link.style.textShadow = "0 0 5px #ff69b440, 0 0 2px #ff69b420";
    });
  } else {
    document.querySelector(".logo-container").style.filter = "invert(0) drop-shadow(0 0 5px #ffffff) drop-shadow(0 0 2px #ffffff80)";
    let links = document.querySelectorAll(".links ul li a span");
    links.forEach(link => {
      link.style.color = "white";
      link.style.textShadow = "0px 0px 6px rgba(255,255,255,0.7)";
    });
  }

  prevScrollpos2 = currentScrollPos;
  if (currentScrollPos > window.innerHeight && currentScrollPos < maxScrollPos - window.innerHeight) {
    document.getElementById("scrollToTop").style.display = "block";
  } else {
    document.getElementById("scrollToTop").style.display = "none";
  }
}

//slider 1

var images = [
  "./assets/photos/dogOwner.jpg",
  "./assets/photos/wedding.jpg",
  "./assets/photos/cat2.jpg",
  "./assets/photos/girl.jpg",
  "./assets/photos/familyOutdoors.jpg",
  "./assets/photos/old.jpg",
];

var names = [
  "Boundless",
  "Love",
  "Company",
  "Beauty",
  "Family",
  "Timeless",
];

var descriptions = [
  "Through photography, love has the power to conquer the world. It captures and spreads love, fostering understanding and unity among diverse individuals",
  "Document the joy, excitement, and emotion of weddings, providing you with a collection of images that you will cherish for a lifetime.",
  "The companionship of pets is invaluable, providing joy, comfort, and love, while also teaching responsibility and empathy in a unique way.",
  "The beauty of oneself can be profoundly captured through photography. It’s a medium that showcases our uniqueness, character, and the light within us.",
  "Photography beautifully encapsulates the essence of family. It captures the love, unity, and shared experiences that make each family uniquely beautiful and precious.",
  "In photography, aging doesn't diminish beauty, it enhances it. Each wrinkle, each line tells a story, adding depth and character to the portrait.",
];

document.getElementById('prev').onclick = function() {
  images.unshift(images.pop());
  names.unshift(names.pop());
  descriptions.unshift(descriptions.pop());
  updateContent();
}

document.getElementById('next').onclick = function() {
  images.push(images.shift());
  names.push(names.shift());
  descriptions.push(descriptions.shift());
  updateContent();
}

function updateContent() {
  let items = document.querySelectorAll('.item');
  for (let i = 0; i < items.length; i++) {
      items[i].style.backgroundImage = 'url(' + images[i] + ')';
      items[i].querySelector('.name').textContent = names[i];
      items[i].querySelector('.des').textContent = descriptions[i];
  }
}

updateContent();


/////////////////////////////
var btn = document.getElementsByClassName("btn-t");
var slide = document.getElementById("slide-test");

btn[0].onclick = function() {
  slide.style.transform = 'translateX(0vw)';
  for(i=0; i<4; i++){
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
}

btn[1].onclick = function() {
  slide.style.transform = 'translateX(-100vw)';
  for(i=0; i<4; i++){
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
}

btn[2].onclick = function() {
  slide.style.transform = 'translateX(-200vw)';
  for(i=0; i<4; i++){
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
}

btn[3].onclick = function() {
  slide.style.transform = 'translateX(-300vw)';
  for(i=0; i<4; i++){
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
}

for(let i=0; i<btn.length; i++){
  btn[i].onclick = function() {
      let j = 0;
      while(j < btn.length){
          btn[j++].classList.remove("active");
      }
      btn[i].classList.add("active");
      slide.style.transform = 'translateX(' + (-100 * i) + 'vw)';
  }
}



