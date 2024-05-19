document.addEventListener('DOMContentLoaded', (event) => {
    // Get all elements with class name "mySlides"
    const slides = document.querySelectorAll(".mySlides");

    // Loop through each slide
    slides.forEach((slide) => {
        // Get the modal element within the slide
        const modal = slide.querySelector(".modal");

        // Get the image and modal content within the slide
        const img = slide.querySelector("img");
        const modalImg = slide.querySelector(".modal-content");
        const captionText = slide.querySelector("#caption");

        // Add click event listener to each image
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src; 
            captionText.innerHTML = img.alt;
        });

        // Get the <span> element that closes the modal within the slide
        const span = slide.querySelector(".close");

        // When the user clicks on <span> (x), close the modal
        span.addEventListener('click', () => {
            modal.style.display = "none";
        });
    });
});
