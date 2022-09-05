const brandInput = document.querySelector("#brand");
const modelInput = document.querySelector("#model");
const yearInput = document.querySelector("#year");
const brandErrorMessage = document.querySelector("#carBrand .error-message");
const modelErrorMessage = document.querySelector("#carBrand .error-message");
const yearErrorMessage = document.querySelector("#carBrand .error-message");
const goUpButton = document.querySelector(".scroll-to-top");

const MIN_YEAR = 1920;
const MAX_YEAR = new Date().getFullYear();
const MIN_STRING_THRESHOLD = 2;

brandInput.addEventListener("change", (e) => {
  const value = e.target.value;

  if (value.length === 0) {
    brandErrorMessage.textContent = "";
    return;
  }

  if (!isNaN(value)) {
    brandErrorMessage.textContent = "only strings accepted";
  } else {
    brandErrorMessage.textContent = "";
  }
});

modelInput.addEventListener("change", (e) => {
  const value = e.target.value;

  if (value.length === 0) {
    modelErrorMessage.textContent = "";
    return;
  }

  if (value.length < MIN_STRING_THRESHOLD) {
    //show error message: only strings accepted
    modelErrorMessage.textContent = "String is too short!";
  } else {
    modelErrorMessage.textContent = "";
  }
});

yearInput.addEventListener("change", (e) => {
  const value = e.target.value;
  const isValidYear = value >= MIN_YEAR && value <= MAX_YEAR;

  if (value.length === 0) {
    yearErrorMessage.textContent = "";
    return;
  }

  if (!isValidYear) {
    //show error message:Year should be between 1920 & 2022
    yearErrorMessage.textContent = `Year should be between 1920 & ${MAX_YEAR}`;
  } else {
    yearErrorMessage.textContent = "";
  }
});

document.addEventListener("scroll", (e) => {
  // console.log(window.scrollY);
  //debounce / throttle -- >setTimeout
  if (window.scrollY > 200) {
    console.log("should show a button");
    goUpButton.classList.add("visible");
  } else {
    goUpButton.classList.remove("visible");
  }
});

// goUpButton.addEventListener(){

// }