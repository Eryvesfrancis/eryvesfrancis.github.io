/* ===== MAIN TAB SWITCHING ===== */
const tabs = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent page jump

        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");

        const target = tab.getAttribute("data-tab");
        const targetElement = document.getElementById(target);

        if (targetElement) {
            targetElement.classList.add("active");
        }
    });
});


/* ===== ACHIEVEMENTS CLICK SWITCH ===== */
const actionLinks = document.querySelectorAll(".action-link");
const achievementSections = document.querySelectorAll(".achievement-content");

actionLinks.forEach(link => {
    link.addEventListener("click", () => {

        // Remove active highlight
        actionLinks.forEach(l => l.classList.remove("active"));

        // Hide all content
        achievementSections.forEach(sec => sec.style.display = "none");

        // Highlight selected
        link.classList.add("active");

        // Show selected content
        const targetId = link.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.style.display = "block";
        }
    });
});


/* ===== DEFAULT LOAD STATE ===== */
window.addEventListener("DOMContentLoaded", () => {

    // Hide all achievement content
    achievementSections.forEach(sec => sec.style.display = "none");

    // Show first section if exists
    if (achievementSections.length > 0) {
        achievementSections[0].style.display = "block";
    }

    // Highlight first action link if exists
    if (actionLinks.length > 0) {
        actionLinks[0].classList.add("active");
    }
});
