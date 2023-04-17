"use strict";
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const h1 = document.querySelector(".h1");
const intro = document.getElementById("section-1");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    h1.classList.toggle("active");
    intro.classList.toggle("active");
})

document.querySelector(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    h1.classList.remove("active");
    intro.classList.remove("active");
}));



function downloadPDF() {

    // Replace the URL below with the URL of your PDF file
    const pdfUrl = 'docs/Resume--Manjeet.pdf';

    // Create an invisible link element
    const link = document.createElement('a');
    link.style.display = 'none';
    document.body.appendChild(link);

    // Set the link's href and download attributes
    link.href = pdfUrl;
    link.setAttribute('download', 'manjeet-resume.pdf');

    // Simulate a click on the link to start the download
    link.click();

    // Clean up
    document.body.removeChild(link);
}





