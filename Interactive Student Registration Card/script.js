// Name: Adeena Akram | Registration No: 2500605

const form = document.getElementById("registrationForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const semester = document.getElementById("semester");
const studentList = document.getElementById("studentList");

const program = document.querySelector("#program");
const previewCard = document.querySelector("#previewCard");
const modeButton = document.querySelector("#modeButton");

const previewName = document.querySelector("#previewName");
const previewEmail = document.querySelector("#previewEmail");
const previewProgram = document.querySelector("#previewProgram");
const previewSemester = document.querySelector("#previewSemester");


fullName.addEventListener("input", function () {

    previewName.textContent = fullName.value || "Your Name";

});


email.addEventListener("input", function () {

    previewEmail.textContent = email.value || "Your Email";

});


program.addEventListener("input", function () {

    previewProgram.textContent = program.value || "Your Program";

});


semester.addEventListener("input", function () {

    previewSemester.textContent = semester.value || "Your Semester";

});


form.addEventListener("submit", function (e) {

    e.preventDefault();

    document.querySelector("#nameError").textContent = "";
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#programError").textContent = "";
    document.querySelector("#semesterError").textContent = "";

    let valid = true;


    if (fullName.value.trim() === "") {

        document.querySelector("#nameError").textContent =
            "Name is required.";

        valid = false;
    }


    if (!email.value.trim().includes("@")) {

        document.querySelector("#emailError").textContent =
            "Enter a valid email.";

        valid = false;
    }


    if (program.value === "") {

        document.querySelector("#programError").textContent =
            "Please select a program.";

        valid = false;
    }


    if (
        semester.value === "" ||
        semester.value < 1 ||
        semester.value > 8
    ) {

        document.querySelector("#semesterError").textContent =
            "Semester must be from 1 to 8.";

        valid = false;
    }


    if (!valid) {
        return;
    }


    const li = document.createElement("li");

    li.textContent =
        fullName.value +
        " | " +
        email.value +
        " | " +
        program.value +
        " | Semester " +
        semester.value;

    studentList.appendChild(li);


    form.reset();


    previewName.textContent = "Your Name";
    previewEmail.textContent = "Your Email";
    previewProgram.textContent = "Your Program";
    previewSemester.textContent = "Your Semester";

});


modeButton.addEventListener("click", function () {

    previewCard.classList.toggle("dark");

});