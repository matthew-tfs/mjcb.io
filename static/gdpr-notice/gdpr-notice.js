const gdprContainer = document.querySelector(".gdpr-container");
const gdprButton = document.querySelector(".gdpr-button");

gdprButton.addEventListener("click", () => {
  gdprContainer.classList.remove("active");
  localStorage.setItem("gdprBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("gdprBannerDisplayed")) {
    gdprContainer.classList.add("active");
  }
}, 2000);
