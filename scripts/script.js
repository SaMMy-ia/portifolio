const navLinks = document.querySelectorAll('header nav a')
const sections = document.querySelectorAll('section')
const logoLink = document.querySelector('.logo')
const menuIcon = document.querySelector('#menu-icon')
const navBar = document.querySelector('header nav')

menuIcon.addEventListener('click', () =>{
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active')
})

const activePage = () =>{
    const header = document.querySelector('header')
    const barsbox = document.querySelector('.bars-box')

    header.classList.remove('active')
    setTimeout(()=>{
        header.classList.add('active')
    }, 1100)

    navLinks.forEach(link =>{
        link.classList.remove('active')
    })

    barsbox.classList.remove('active')
    setTimeout(()=>{
        barsbox.classList.add('active')
    }, 1100)

    sections.forEach(section =>{
        section.classList.remove('active')
    })

    menuIcon.classList.remove('bx-x')
    navBar.classList.remove('active')
}

navLinks.forEach((link, idx) =>{
    link.addEventListener('click', () =>{
        if(!link.classList.contains('active')){
            activePage();
             
            link.classList.add('active')
            setTimeout(() =>{
                sections[idx].classList.add('active')
            }, 1100)
        }
    })
})

logoLink.addEventListener('click', () => {
    if(!navLinks[0].classList.contains('active')){
        activePage();

        navLinks[0].classList.add('active')
    
        setTimeout(() =>{
        sections[0].classList.add('active')
        }, 1100)
    }
})


const resumeBtns = document.querySelectorAll(".resume-btn");

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const resumeDetails = document.querySelectorAll(".resume-detail");

    resumeBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    resumeDetails.forEach((detail) => {
      detail.classList.remove("active");
    });
    resumeDetails[idx].classList.add("active");
  });
});

const arrowRight = document.querySelector(
  ".portifolio-box .navegation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".portifolio-box .navegation .arrow-left"
);

let index = 0;

const activePortifolio = () => {
  const imgSLide = document.querySelector(".portifolio-carousel .img-slide");
  const portifolioDetails = document.querySelectorAll('.portifolio-detail')

  imgSLide.style.transform = `translate(calc(${index * -100}% - ${
    index * 2
  }rem))`;

  portifolioDetails.forEach(detail => {
    detail.classList.remove('active')
  })
  portifolioDetails[index].classList.add('active')
};

arrowRight.addEventListener("click", () => {
  if (index < 2) {
    index++;
    arrowLeft.classList.remove("disabled");
  } else {
    index = 3;
    arrowRight.classList.add("disabled");
  }

  activePortifolio();
});

arrowLeft.addEventListener("click", () => {
  if (index > 1) {
    index--;
    arrowRight.classList.remove("disabled");
  } else {
    index = 0;
    arrowLeft.classList.add("disabled");
  }

  activePortifolio();
});
