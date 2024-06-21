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

const themes = [
  {
    button: blueThemeButton,
    backgroundColor: "#C5E0DC",
    textColor: "#0096FF",
    imagePath: "./assets/Blue.png",
    duration: 1000,
  },
  {
    button: yellowThemeButton,
    backgroundColor: "#ECFFDC",
    textColor: "#ffff00",
    imagePath: "./assets/Yellow.png",
    duration: 1000,
  },
  {
    button: pinkThemeButton,
    backgroundColor: "#FFB6C1",
    textColor: "#FF69B4",
    imagePath: "./assets/Pink.png",
    duration: 1000,
  },
];

themes.forEach((theme) => {
  theme.button.addEventListener("click", () => changeTheme(
    theme.backgroundColor,
    theme.textColor,
    theme.imagePath,
    theme.duration
  ));
});

