window.onload = () => {
  document.getElementById("popup").classList.add("show");
  document.getElementById("overlay").classList.add("show");
};

function closePopup() {
  document.getElementById("popup").classList.remove("show");
  document.getElementById("overlay").classList.remove("show");
}

// Show popup on page load
window.onload = function () {
  document.getElementById("popup").classList.add("show");
  document.getElementById("overlay").classList.add("show");
};

// Close popup on button click
document.getElementById("closePopup").onclick = function () {
  document.getElementById("popup").classList.remove("show");
  document.getElementById("overlay").classList.remove("show");
};
