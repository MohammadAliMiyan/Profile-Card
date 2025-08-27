window.addEventListener("load", () => {
  const loader = document.getElementById("loading-screen");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 2500); // matches slide-in duration
});
