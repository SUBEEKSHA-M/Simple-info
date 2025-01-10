document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault(); 

        const sectionId = this.getAttribute('href').substring(1); 
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
