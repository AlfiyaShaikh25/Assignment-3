document.querySelectorAll(".accordion-button").forEach(button => {
    button.addEventListener("click", function () {
        let img = this.querySelector("img");

        // Delay execution slightly to let Bootstrap toggle classes
        setTimeout(() => {
            if (this.classList.contains("collapsed")) {
                img.src = img.dataset.defaultSrc; // Switch to default image
            } else {
                img.src = img.dataset.activeSrc; // Switch to active image
            }
        }, 150);
    });
});

// Ensure icon resets when an accordion item is closed
document.querySelectorAll(".accordion-collapse").forEach(collapse => {
    collapse.addEventListener("hidden.bs.collapse", function () {
        let button = this.previousElementSibling.querySelector(".accordion-button");
        let img = button.querySelector("img");

        img.src = img.dataset.defaultSrc; // Reset to default icon
        button.classList.add("collapsed"); // Ensure class consistency
    });
});

// ******************************Initialize Bootstrap Tooltip***********************************************

    document.addEventListener("DOMContentLoaded", function () {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    });
