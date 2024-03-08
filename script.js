window.onload = function () {
  document.querySelector(".dropbtn").innerHTML = "Oil Pumps";
};

window.onscroll = function () {
  changeNavbarColor();
};

function changeNavbarColor() {
  var navbar = document.getElementById("navbar");
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    navbar.style.backgroundColor = "white"; 
  } else {
    navbar.style.backgroundColor = "transparent";
  }
}

function smoothScrollTo(targetPosition, duration) {
  window.scrollTo({
    top: 600,
    left: 0,
    behavior: "smooth",
  });
}

function openTab(evt, tabName) {
  closeDropDown();
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("active");
  let innerText = evt.target.innerHTML;
  document.querySelector(".dropbtn").innerHTML = innerText;

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  evt.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".background-image");
  let currentImageIndex = 0;

  images[currentImageIndex].style.opacity = "1";

  function changeBackgroundImage() {
    images[currentImageIndex].style.opacity = "0";

    currentImageIndex = (currentImageIndex + 1) % images.length;

    images[currentImageIndex].style.opacity = "1";
  }

  setInterval(changeBackgroundImage, 8000);
});

function openDrawer() {
  document.getElementById("myDrawer").style.width = "250px";
}

function closeDrawer() {
  document.getElementById("myDrawer").style.width = "0";
}

const thumbnails = document.querySelectorAll(".thumbnail");
const overlay = document.getElementById("image-viewer-overlay");
const expandedImage = document.getElementById("expanded-image");
const close = document.getElementById("close");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const src = thumbnail.getAttribute("src");
    expandedImage.setAttribute("src", src);
    overlay.style.display = "flex";
    overlay.style.opacity = 1;
    overlay.style.zIndex = 99999;
  });
});
close.addEventListener("click", () => {
  overlay.style.opacity = 0;
  overlay.style.zIndex = -1;
});

function toggleExpansion() {
  let indGridContainer = document.getElementById("industries-container");
  let expandButton = document.querySelector(".expand-button");
  console.log(expandButton);
  if (indGridContainer.classList.contains("product-grid-container")) {
    indGridContainer.classList.remove("product-grid-container");
    expandButton.innerHTML = "Collapse To See Less";
  } else {
    indGridContainer.classList.add("product-grid-container");
    expandButton.innerHTML = "Expand To See More";
  }
}

function closeDropDown() {
  let dd = document.querySelector(".dropdown-content");
  dd.style.opacity = 0;
  dd.style.maxHeight = "0px";
}
function openDropDown() {
  let dd = document.querySelector(".dropdown-content");
  dd.style.opacity = 1;
  dd.style.maxHeight = "576px";
}

function formatMailBody() {
  var name = document.querySelector('input[name="name"]').value;
  var email = document.querySelector('input[name="email"]').value;
  var subject = document.querySelector('input[name="subject"]').value;
  var message = document.querySelector('textarea[name="message"]').value;

  var body = "Name: " + name + "\n";
  body += "Email: " + email + "\n";
  body += "Message: " + message + "\n";

  document.getElementById('emailBody').value = body;
}
