// Configurações iniciais
document.addEventListener("DOMContentLoaded", function () {
  // Atualizar ano no footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Menu toggle para mobile
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      navigation.classList.toggle("active");
    });
  }

  // Fechar menu ao clicar em um link
  const navLinks = document.querySelectorAll(".navigation a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navigation.classList.remove("active");
    });
  });

  // Animação de entrada dos cards
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add("animate-fade-up");
  });

  // Transição suave entre páginas
  const homeLinks = document.querySelectorAll(
    'a[href*="index.html"]:not([href*="projects"])'
  );
  homeLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.href.includes("index.html") && !this.href.includes("projects")) {
        e.preventDefault();
        document.body.style.opacity = "0";
        document.body.style.transition = "opacity 0.5s ease";

        setTimeout(() => {
          window.location.href = this.href;
        }, 500);
      }
    });
  });

  // Preload de imagens para melhor performance
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.classList.add("loaded");
    });
  });
});

// Adicionar estilos dinâmicos para animações
const style = document.createElement("style");
style.textContent = `
    .animate-fade-up {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeUp 0.6s ease forwards;
    }
    
    @keyframes fadeUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    img.loaded {
        animation: fadeInImage 0.5s ease;
    }
    
    @keyframes fadeInImage {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Fade-in da página
window.addEventListener("pageshow", function () {
  document.body.style.opacity = "1";
});
