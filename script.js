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


// episodes


  document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
      const item = header.closest(".accordion-item");
      item.classList.toggle("active");
    });
  });

  // Auto-open episode from URL
  window.addEventListener("load", () => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;

    const target = document.getElementById(id);
    if (target) {
      target.classList.add("active");
      target.scrollIntoView({ behavior: "smooth" });
    }
  });

  // Search filter
  const searchInput = document.getElementById("episodeSearch");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const value = this.value.toLowerCase();
      document.querySelectorAll(".accordion-item").forEach(item => {
        item.style.display = item.innerText.toLowerCase().includes(value)
          ? "block"
          : "none";
      });
    });
  }

  