const tabs = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");

        const target = tab.getAttribute("data-tab");
        document.getElementById(target).classList.add("active");
    });
});
function toggleAchievement(id) {


const sections = document.querySelectorAll('.achievement-content');
sections.forEach(sec => sec.style.display = 'none');


document.getElementById(id).style.display = 'block';
}


// Default hide all except first
window.addEventListener('DOMContentLoaded', () => {
document.querySelectorAll('.achievement-content').forEach((el, index) => {
el.style.display = index === 0 ? 'block' : 'none';
});
});
