const imageContainer = document.querySelector(".image-container");
const loaderContainer = document.getElementById("loader-container");
const blueThemeButton = document.getElementById("blue-theme");
const yellowThemeButton = document.getElementById("yellow-theme");
const pinkThemeButton = document.getElementById("pink-theme");
const umbrellaImage = document.getElementById("umbrella-image");
const uploadedLogo = document.getElementById("uploaded-logo");
const logoUploadButton = document.getElementById("logo-upload-button");
const logoUploadButtonImg = document.getElementById("logo-upload-button-img");
const logoUploadInput = document.createElement("input");

logoUploadInput.setAttribute("type", "file");
logoUploadInput.setAttribute("accept", ".jpg,.png");
logoUploadInput.style.display = "none";


function showLoader() {
  loaderContainer.style.opacity = "1";
}

function hideLoader() {
  loaderContainer.style.opacity = "0";
}

function handleLogoUpload(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    uploadedLogo.src = reader.result;
    uploadedLogo.style.display = "block";
  };
}

function changeTheme(backgroundColor, buttonColor, umbrellaSrc, delay) {
  showLoader();
  setTimeout(() => {
    umbrellaImage.style.display = "none";
    uploadedLogo.style.display = "none";
    document.body.style.backgroundColor = backgroundColor;
    logoUploadButton.style.backgroundColor = buttonColor;
    logoUploadButtonImg.style.backgroundColor = buttonColor;
    setTimeout(() => {
      umbrellaImage.src = umbrellaSrc;
      umbrellaImage.style.display = "block";
      uploadedLogo.style.display = "block";
      hideLoader();
    }, delay);
  }, 0);
}

logoUploadButton.addEventListener("click", () => logoUploadInput.click());
logoUploadInput.addEventListener("change", handleLogoUpload);

blueThemeButton.addEventListener("click", () => changeTheme("#C5E0DC", "#0096FF", "./assets/Blue.png", 1000));
yellowThemeButton.addEventListener("click", () => changeTheme("#ECFFDC", "#ffff00", "./assets/Yellow.png", 1000));
pinkThemeButton.addEventListener("click", () => changeTheme("#FFB6C1", "#FF69B4", "./assets/Pink.png", 1000));

