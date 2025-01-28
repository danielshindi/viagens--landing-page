const menuItens = document.querySelectorAll('#nav ul li a, .top-button');
const header = document.querySelector('.header-wraper');

menuItens.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        console.log('Link clicado:', item.getAttribute('href'));
        const targetSection = document.querySelector(item.getAttribute('href'));
        const headerHeight = header.offsetHeight;

        const position = targetSection.offsetTop - headerHeight;

        console.log('Rolando para a posição:', position);
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        })
    })
});

window.addEventListener('scroll', () => {
    let currentSection = '';

    document.querySelectorAll('section').forEach((section) => {
        const sectionTop = section.offsetTop - header.offsetHeight; 
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    menuItens.forEach((item) => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSection}`) {
            item.classList.add('active');
        }
    })
})