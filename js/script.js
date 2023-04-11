"use strict";






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





