window.addEventListener("load", () => {
  const loader = document.getElementById("loading");
  const content = document.getElementById("main-content");

  setTimeout(() => {
    loader.classList.add("fade-out");
    content.style.display = "block";
  }, 1500);
});
