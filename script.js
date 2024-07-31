document.addEventListener("DOMContentLoaded", function() {
    // Function to initialize each slider
    function initSlider(container) {
        const slider = container.querySelector('.slider');
        slider.addEventListener('input', (e) => {
            container.style.setProperty('--position', `${e.target.value}%`);
        });
    }

    // Select all containers and initialize sliders
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        initSlider(container);
    });
});
