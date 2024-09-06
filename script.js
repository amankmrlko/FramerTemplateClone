const scroll = new LocomotiveScroll({
  el: document.querySelector("#content"),
  smooth: true,
});

let body = document.querySelector("#main");
var cursor = document.querySelector("#cursor");

function cursorRemove() {
  cursor.classList.add("transition");
  setTimeout(() => {
    cursor.classList.remove("transition");
  }, 400);
  cursor.style.transform = "scale(0)";
}

body.addEventListener("mouseenter", () => {
  cursor.style.transform = "scale(1) translate(-50%, 0)";
});
body.addEventListener("mouseleave", () => {
  cursorRemove();
});
body.addEventListener("mousemove", (details) => {
  gsap.to(cursor, {
    left: details.clientX,
    top: details.clientY,
    duration: 0.5,
    ease: "power2.out",
  });
});

// Swiper
var swipper = document.querySelector("#swipper");
swipper.addEventListener("mouseenter", () => {
  cursorRemove();
});
swipper.addEventListener("mouseleave", () => {
  cursor.style.transform = "scale(1) translate(-50%, 0)";
});

//navigation

var swiper = document.getElementById("swipper");
var leftButton = document.getElementById("left");
var rightButton = document.getElementById("right");

leftButton.addEventListener("mouseenter", () => {
  cursorRemove();
});
leftButton.addEventListener("mouseleave", () => {
  cursor.style.transform = "scale(1) translate(-50%, 0)";
});

rightButton.addEventListener("mouseenter", () => {
  cursorRemove();
});
rightButton.addEventListener("mouseleave", () => {
  cursor.style.transform = "scale(1) translate(-50%, 0)";
});

leftButton.classList.add("hide");
rightButton.classList.add("show");

rightButton.addEventListener("click", () => {
  swiper.scrollLeft = swiper.scrollWidth;
});

leftButton.addEventListener("click", () => {
  swiper.scrollLeft = 0;
});

function updateButtons() {
  if (swiper.scrollLeft === 0) {
    leftButton.classList.add("hide");
    leftButton.classList.remove("show");
    rightButton.classList.add("show");
    rightButton.classList.remove("hide");
  } else if (swiper.scrollLeft >= swiper.scrollWidth - swiper.clientWidth) {
    leftButton.classList.add("show");
    leftButton.classList.remove("hide");
    rightButton.classList.add("hide");
    rightButton.classList.remove("show");
  } else {
    leftButton.classList.add("show");
    leftButton.classList.remove("hide");
    rightButton.classList.add("show");
    rightButton.classList.remove("hide");
  }
}

swiper.addEventListener("scroll", updateButtons);

updateButtons();

//blurred text
document.addEventListener("DOMContentLoaded", () => {
  const focusText = document.getElementById("focus-text");
  const applyBlurEffect = () => {
    const rect = focusText.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.bottom <= windowHeight * 0.9) {
      focusText.classList.remove("blurred");
    } else {
      focusText.classList.add("blurred");
    }
  };

  scroll.on("scroll", () => {
    applyBlurEffect();
  });
  window.addEventListener("resize", applyBlurEffect);

  applyBlurEffect();
});

//adding images

var divs = document.querySelectorAll(".divs");

divs.forEach(function (div) {
  var src = div.getAttribute("data-src");
  div.style.backgroundImage = `url(${src})`;
});

// scrolling vertical

// linkedin hover

var teams = document.querySelectorAll(".team");

teams.forEach((team) => {
  team.addEventListener("mouseenter", () => {
    cursor.classList.add("linkedin");
    cursor.classList.add("transition");
    setTimeout(() => {
      cursor.classList.remove("transition");
    }, 450);
    var p = document.createElement("p");
    p.textContent = "View On";
    var h4 = document.createElement("h4");
    h4.textContent = "LinkedIn";
    cursor.appendChild(p);
    cursor.appendChild(h4);
  });

  team.addEventListener("mouseleave", () => {
    cursor.classList.remove("linkedin");
    cursor.classList.add("transition");
    setTimeout(() => {
      cursor.classList.remove("transition");
    }, 410);
    cursor.innerHTML = "";
  });
});

// Faqs
var ques = document.querySelectorAll(".question");

ques.forEach((e) => {
  e.addEventListener("click", () => {
    ques.forEach((other) => {
      if (other !== e) {
        let otherAnsDiv = other.querySelector(".answer");
        let otherPTag = otherAnsDiv.querySelector("p");
        let otherPlus = other.querySelector(".plus");
        otherAnsDiv.classList.remove("show");
        otherPlus.classList.remove("rotate");
        otherPlus.textContent = "+";
        setTimeout(() => {
          if (otherPTag) {
            otherAnsDiv.removeChild(otherPTag);
          }
        }, 400);
      }
    });

    let ansDiv = e.querySelector(".answer");
    let ansText = e.getAttribute("data-ans");
    let pTag = ansDiv.querySelector("p");
    let plus = e.querySelector(".plus");

    if (!ansDiv.classList.contains("show")) {
      if (!pTag) {
        pTag = document.createElement("p");
        pTag.textContent = ansText;
        ansDiv.appendChild(pTag);
      }
      ansDiv.classList.add("show");
      plus.classList.add("rotate");
      plus.textContent = "-";
    } else {
      ansDiv.classList.remove("show");
      plus.classList.remove("rotate");
      plus.textContent = "+";
      setTimeout(() => {
        if (pTag) {
          ansDiv.removeChild(pTag);
        }
      }, 400);
    }
  });
});

// email animation

document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const emailInput = document.getElementById("email").value;
    const form = document.getElementById("emailform");

    if (!emailInput) {
      form.classList.add("emailanimation");

      setTimeout(function () {
        form.classList.remove("emailanimation");
      }, 300);
    }
    emailInput.value = "";
  });
