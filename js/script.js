
// ////////////////////////////////// 6 digit otp section script start //////////////////////
document.addEventListener("DOMContentLoaded", function () {
  let inputs = document.querySelectorAll(".form-wrapper-phone-number input");

  inputs.forEach((input, index) => {
    input.addEventListener("input", function () {
      if (this.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus(); // Next input par focus move karega
      }
    });

    input.addEventListener("keydown", function (event) {
      if (event.key === "Backspace" && this.value === "" && index > 0) {
        inputs[index - 1].focus(); // Backspace par previous input par move karega
      }
    });
  });
});
// ////////////////////////////////// 6 digit otp section script end ///////////////////////


// ////////////////////////////////// M-Pin section ka script start /////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  let inputs = document.querySelectorAll(".form-wrapper-M-pin input");

  inputs.forEach((input, index) => {
    input.addEventListener("input", function () {
      if (this.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus(); // Move cursor to next input
      }
    });

    input.addEventListener("keydown", function (event) {
      if (event.key === "Backspace" && index > 0 && this.value === "") {
        inputs[index - 1].focus(); // Move cursor to previous input on Backspace
      }
    });
  });
});

// ////////////////////////////////// M-Pin section ka script end //////////////////////////

// ////////////////////////////////// M-Pin section for login ka script start //////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".form-wrapper-M-pin input");

  inputs.forEach((input, index) => {
    input.addEventListener("input", function () {
      if (this.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", function (event) {
      if (event.key === "Backspace" && this.value.length === 0 && index > 0) {
        inputs[index - 1].focus();
      }
    });
  });
});

// ////////////////////////////////// M-Pin section for login ka script end //////////////////////////



// /////////////////////////// pagination of table script start /////////////////////
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".paginationCnt").forEach(function (paginationContainer) {
    let table = paginationContainer.querySelector(".dataTable tbody");
    let rows = table.getElementsByTagName("tr");
    let rowsPerPage = 2; // Change as needed
    let currentPage = 1;

    function showPage(page) {
      let start = (page - 1) * rowsPerPage;
      let end = start + rowsPerPage;

      for (let i = 0; i < rows.length; i++) {
        rows[i].style.display = i >= start && i < end ? "table-row" : "none";
      }

      paginationContainer.querySelector(".pageBox").innerText = `Page ${currentPage}`;
      paginationContainer.querySelector(".prevBtn").disabled = currentPage === 1;
      paginationContainer.querySelector(".nextBtn").disabled = currentPage === Math.ceil(rows.length / rowsPerPage);
    }

    paginationContainer.querySelector(".prevBtn").addEventListener("click", function () {
      if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
      }
    });

    paginationContainer.querySelector(".nextBtn").addEventListener("click", function () {
      if (currentPage < Math.ceil(rows.length / rowsPerPage)) {
        currentPage++;
        showPage(currentPage);
      }
    });

    showPage(currentPage);
  });
});

// /////////////////////////// pagination of table script end ////////////////////////



// ////////////////////////// Pagr next and Previous script start //////////////////////////////////////////

function showPage(pageNumber) {
  // Sab pages hide kar do
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  // Sirf current page dikhana hai
  document.getElementById(`page${pageNumber}`).classList.add("active");
}

// ////////////////////////// Pagr next and Previous script end //////////////////////////////////////////


// ///////////////////////////////////// slider script start ///////////////////////////////////////////

function createSlider(sliderId, images, indicatorClass) {
  const slider = document.getElementById(sliderId);
  const indicators = document.querySelectorAll(`${indicatorClass} div`);
  let index = 0;
  function changeSlide() {
    if (!slider) {
      return;
    }
    slider.style.backgroundImage = `url('${images[index]}')`;
    indicators.forEach(ind => ind.classList.remove("active"));
    indicators[index].classList.add("active");
    index = (index + 1) % images.length;
  }
  setInterval(changeSlide, 3000);
  changeSlide();
}
createSlider("slider1", [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSguMMxq75VndXQlhJQgKRLSwcTnLAaYXryw&s",
  "https://5.imimg.com/data5/QP/KK/MY-30533217/online-exam-center-creations.jpg",
  "https://img.freepik.com/free-photo/woman-with-super-gesture-university-lecture_23-2147679176.jpg?t=st=1739945557~exp=1739949157~hmac=d93da0b90eab75ebc5c11f0e6b0ce526ae98f58159bd0109f28bfbfdf2fc9e3a&w=740"
], ".sliderIndicator1");

createSlider("slider2", [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSguMMxq75VndXQlhJQgKRLSwcTnLAaYXryw&s",
  "https://5.imimg.com/data5/QP/KK/MY-30533217/online-exam-center-creations.jpg",
  "https://img.freepik.com/free-photo/woman-with-super-gesture-university-lecture_23-2147679176.jpg?t=st=1739945557~exp=1739949157~hmac=d93da0b90eab75ebc5c11f0e6b0ce526ae98f58159bd0109f28bfbfdf2fc9e3a&w=740"
], ".sliderIndicator2");

createSlider("slider3", [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSguMMxq75VndXQlhJQgKRLSwcTnLAaYXryw&s",
  "https://5.imimg.com/data5/QP/KK/MY-30533217/online-exam-center-creations.jpg",
  "https://img.freepik.com/free-photo/woman-with-super-gesture-university-lecture_23-2147679176.jpg?t=st=1739945557~exp=1739949157~hmac=d93da0b90eab75ebc5c11f0e6b0ce526ae98f58159bd0109f28bfbfdf2fc9e3a&w=740"
], ".sliderIndicator3");

createSlider("slider4", [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSguMMxq75VndXQlhJQgKRLSwcTnLAaYXryw&s",
  "https://5.imimg.com/data5/QP/KK/MY-30533217/online-exam-center-creations.jpg",
  "https://img.freepik.com/free-photo/woman-with-super-gesture-university-lecture_23-2147679176.jpg?t=st=1739945557~exp=1739949157~hmac=d93da0b90eab75ebc5c11f0e6b0ce526ae98f58159bd0109f28bfbfdf2fc9e3a&w=740"
], ".sliderIndicator4");

// ///////////////////////////////////////// slider script end ///////////////////////////////////////////


// //////////////////////////////////////// open pop-Up script start /////////////////////////////////////////
function openPopup() {
  document.getElementById("popup").style.display = "flex";
}
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
// ///////////////////////////////////////  open pop-Up script start ////////////////////////////////////////
const formItems = document.querySelectorAll(".formStep");
const formPrevBtns = document.querySelectorAll(".formPreviousBtn");
const formNextBtns = document.querySelectorAll(".formNextBtn");
const popupButton = document.querySelectorAll(".popupButton");  // Assuming this is the button that should show at the end
const formIndicators = document.querySelectorAll(".formIndicator");

let currentStep = 0;

// Function to update form steps and form indicators


const updateSteps = () => {
  formItems.forEach((item, index) => item.classList.toggle("show", index === currentStep));
  formIndicators.forEach((indicator, index) => {
    indicator.classList.toggle("border-dark", index === currentStep);
    indicator.classList.toggle("stepFilled", index < currentStep);
  });

  // If the current step is the last step, hide the Next buttons and show the popup button
  if (currentStep === formItems.length - 1) {
    formNextBtns.forEach(btn => btn.classList.add("d-none"));  // Hide Next buttons
    popupButton.forEach(btn => btn.classList.remove("d-none"));  // Show the popup button
  } else {
    formNextBtns.forEach(btn => btn.classList.remove("d-none"));  // Show Next buttons
    popupButton.forEach(btn => btn.classList.add("d-none"));  // Hide the popup button
  }
};

// Event listener for the "Next" and "Previous" buttons
[...formNextBtns, ...formPrevBtns].forEach((btn) => {
  btn.addEventListener("click", () => {
    currentStep += btn.classList.contains("formNextBtn") ? 1 : -1;
    if (currentStep < 0 || currentStep >= formItems.length) return;
    updateSteps();
  });
});

updateSteps(); // Initialize the form state



// add lab js

const addNewLabBtns = document.querySelectorAll(".addNewLab");
const newLabWrappers = document.querySelectorAll(".newLabWrapper");
const saveBtn = document.querySelector(".saveBtn");
const editBtnWrapper = document.querySelector(".editBtnWrapper");
const saveBtnWrapper = document.querySelector(".saveBtnWrapper");

addNewLabBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (newLabWrappers[index]) {
      newLabWrappers[index].classList.add("show");
    }
  });
});

if (saveBtn && editBtnWrapper && saveBtnWrapper) {
  saveBtn.addEventListener("click", () => {
    editBtnWrapper.classList.remove("d-none");
    saveBtnWrapper.classList.add("d-none");
  });
}


// //////////////////// my-booking section start///////////////////

function changeTab(index) {
  let tabs = document.querySelectorAll('.booking-tab');
  let contents = document.querySelectorAll('.center');

  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
    contents[i].classList.toggle('active', i === index);
  });
}
// //////////////////// my-booking section end///////////////////


// ////////////////////////////// Aside script start ///////////////////

function openCenterBooking(index) {
  let asideLink = document.querySelectorAll('.link');
  let bookCenter = document.querySelectorAll('.booking-center');

  asideLink.forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
    bookCenter[i].classList.toggle('active', i === index);
  });
}

// /////////////////////////// Aside script end ///////////////////////


// /////////////////////////// Center edit section script start ///////////////////////////
const editProfile = ()=>{
  let editCenter = document.getElementById("edit-center");
  let centerProfile = document.getElementById("center-Profile");
  let editBtnCnt = document.getElementById("editBtnCnt");
  let editCenterBtn = document.getElementById("edit-center-btn-cnt")
  
  editCenter.style.display="block";
  centerProfile.style.display ="none";
  editBtnCnt.style.display = "block";
  editCenterBtn.style.display = "none";
}

const getSave = ()=>{
  let editCenter = document.getElementById("edit-center");
  let centerProfile = document.getElementById("center-Profile");
  let editBtnCnt = document.getElementById("editBtnCnt");
  let editCenterBtn = document.getElementById("edit-center-btn-cnt");
  
  editCenter.style.display="none";
  centerProfile.style.display ="block";
  editBtnCnt.style.display = "none";
  editCenterBtn.style.display = "block";

}
// /////////////////////////// Center edit section script end ///////////////////////////






