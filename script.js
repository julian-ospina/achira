function toggleAccordion(button) {
  const accordionItem = button.closest('.accordion-item');
  const accordionPanel = accordionItem.querySelector('.accordion-panel');
  const accordionIcon = accordionItem.querySelector('.accordion-icon');

  accordionItem.classList.toggle('active');

  if (accordionItem.classList.contains('active')) {
    accordionPanel.style.maxHeight = accordionPanel.scrollHeight + 'px';
    accordionIcon.innerHTML = '&#9650;';
  } else {
    accordionPanel.style.maxHeight = 0;
    accordionIcon.innerHTML = '&#9660;';
  }
}

const toggleButton = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

toggleButton.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});

