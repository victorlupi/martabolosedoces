function toggleMenu() {
  const menuDesktop = document.querySelector('.menu-desktop');
  const menuMobile = document.querySelector('.menu-mobile');
  const offcanvasNavbar = document.querySelector('#offcanvasNavbar');
  
  if (window.innerWidth < 768) {
    menuDesktop.style.display = 'none';
    menuMobile.style.display = 'block';
  } else {
    menuDesktop.style.display = 'block';
    menuMobile.style.display = 'none';
    offcanvasNavbar.classList.remove('show');
  }
}

window.addEventListener('resize', toggleMenu);
toggleMenu();