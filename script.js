
const menuSections = [...document.querySelectorAll('nav a')]
const rows = [...document.querySelectorAll('.align-items-center')]


menuSections.forEach((menuSection, index) => {
  menuSection.addEventListener('click', function () {
    console.log(menuSection);
    window.scrollTo({
      top: rows[index].offsetTop,
      behavior: 'smooth'
    })

  })
});

