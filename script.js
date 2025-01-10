document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        const sectionId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(sectionId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

document.querySelectorAll('#skills ul li').forEach(skill => {
    skill.addEventListener('click', () => {
        alert(`You clicked on skill: ${skill.textContent}`);
    });
});
