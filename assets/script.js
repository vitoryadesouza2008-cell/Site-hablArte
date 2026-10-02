/* =========================================================
   hablArte
   SCRIPT.JS
========================================================= */


/* =========================================================
   HEADER AO ROLAR
========================================================= */

const header =
  document.getElementById("header");

function updateHeader() {

  if (!header) return;

  if (window.scrollY > 40) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

}

window.addEventListener(
  "scroll",
  updateHeader
);

updateHeader();


/* =========================================================
   MENU MOBILE
========================================================= */

const menuToggle =
  document.getElementById("menuToggle");

const mainNav =
  document.getElementById("mainNav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener(
    "click",
    () => {

      const isOpen =
        mainNav.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen
      );

    }
  );


  const navLinks =
    mainNav.querySelectorAll("a");

  navLinks.forEach((link) => {

    link.addEventListener(
      "click",
      () => {

        mainNav.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      }
    );

  });

}


/* =========================================================
   LINKS ATIVOS
========================================================= */

const sections =
  document.querySelectorAll(
    "main section[id]"
  );

const navLinks =
  document.querySelectorAll(
    ".main-nav a[href^='#']"
  );

function updateActiveLink() {

  let currentSection = "";

  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop - 180;

    if (window.scrollY >= sectionTop) {

      currentSection =
        section.id;

    }

  });


  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      `#${currentSection}`
    ) {

      link.classList.add("active");

    }

  });

}

window.addEventListener(
  "scroll",
  updateActiveLink
);

updateActiveLink();


/* =========================================================
   ANIMAÇÕES REVEAL
========================================================= */

const revealElements =
  document.querySelectorAll(
    ".reveal"
  );

if (
  "IntersectionObserver" in window
) {

  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12
      }
    );


  revealElements.forEach(
    (element) => {

      revealObserver.observe(
        element
      );

    }
  );

} else {

  revealElements.forEach(
    (element) => {

      element.classList.add(
        "visible"
      );

    }
  );

}


/* =========================================================
   MÉTODO
========================================================= */

const methodTabs =
  document.querySelectorAll(
    ".method-tab"
  );

const methodTitle =
  document.getElementById(
    "methodTitle"
  );

const methodText =
  document.getElementById(
    "methodText"
  );

const methodProgress =
  document.getElementById(
    "methodProgress"
  );

const methodNumber =
  document.querySelector(
    ".panel-number"
  );

const methodKicker =
  document.querySelector(
    ".panel-kicker"
  );


const methodData = {

  1: {

    number: "01 / 04",

    kicker: "COMUNICAÇÃO",

    title:
      "Falar para aprender.",

    text:
      "Pratique o espanhol de maneira natural, desenvolvendo confiança para utilizar o idioma em situações reais.",

    progress: "25%"

  },


  2: {

    number: "02 / 04",

    kicker: "COMPREENSÃO",

    title:
      "Ouvir para entender.",

    text:
      "Entre em contato com diferentes palavras, expressões e formas de falar espanhol.",

    progress: "50%"

  },


  3: {

    number: "03 / 04",

    kicker: "CONHECIMENTO",

    title:
      "Ler para descobrir.",

    text:
      "Amplie seu vocabulário e conheça novos conteúdos enquanto desenvolve sua compreensão.",

    progress: "75%"

  },


  4: {

    number: "04 / 04",

    kicker: "CONEXÃO",

    title:
      "Conectar para ir além.",

    text:
      "Use o espanhol como uma ponte para conhecer pessoas, culturas e novas possibilidades.",

    progress: "100%"

  }

};


methodTabs.forEach((tab) => {

  tab.addEventListener(
    "click",
    () => {

      const id =
        tab.dataset.method;

      const data =
        methodData[id];

      if (!data) return;


      methodTabs.forEach(
        (item) => {

          item.classList.remove(
            "active"
          );

        }
      );

      tab.classList.add(
        "active"
      );


      if (methodNumber) {

        methodNumber.textContent =
          data.number;

      }


      if (methodKicker) {

        methodKicker.textContent =
          data.kicker;

      }


      if (methodTitle) {

        methodTitle.textContent =
          data.title;

      }


      if (methodText) {

        methodText.textContent =
          data.text;

      }


      if (methodProgress) {

        methodProgress.style.width =
          data.progress;

      }

    }
  );

});


/* =========================================================
   MODAL DE CONTATO
========================================================= */

const modal =
  document.getElementById(
    "contactModal"
  );

const openModalButtons =
  document.querySelectorAll(
    "[data-open-modal]"
  );

const closeModalButtons =
  document.querySelectorAll(
    "[data-close-modal]"
  );


function openModal() {

  if (!modal) return;

  modal.classList.add(
    "open"
  );

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );

}


function closeModal() {

  if (!modal) return;

  modal.classList.remove(
    "open"
  );

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

}


openModalButtons.forEach(
  (button) => {

    button.addEventListener(
      "click",
      openModal
    );

  }
);


closeModalButtons.forEach(
  (button) => {

    button.addEventListener(
      "click",
      closeModal
    );

  }
);


/* =========================================================
   MODAL DA PROFESSORA
========================================================= */

const teacherButton =
  document.getElementById(
    "teacherButton"
  );

const teacherModal =
  document.getElementById(
    "teacherModal"
  );

const teacherClose =
  document.getElementById(
    "teacherClose"
  );

const teacherOverlay =
  document.getElementById(
    "teacherOverlay"
  );


function openTeacherModal() {

  if (!teacherModal) return;

  teacherModal.classList.add(
    "open"
  );

  teacherModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );

}


function closeTeacherModal() {

  if (!teacherModal) return;

  teacherModal.classList.remove(
    "open"
  );

  teacherModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

}


if (teacherButton) {

  teacherButton.addEventListener(
    "click",
    openTeacherModal
  );

}


if (teacherClose) {

  teacherClose.addEventListener(
    "click",
    closeTeacherModal
  );

}


if (teacherOverlay) {

  teacherOverlay.addEventListener(
    "click",
    closeTeacherModal
  );

}


/* =========================================================
   ESC FECHA OS MODAIS
========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      modal &&
      modal.classList.contains("open")
    ) {

      closeModal();

    }


    if (
      event.key === "Escape" &&
      teacherModal &&
      teacherModal.classList.contains("open")
    ) {

      closeTeacherModal();

    }

  }
);


/* =========================================================
   FORMULÁRIO
========================================================= */

const contactForm =
  document.getElementById(
    "contact-form"
  );

const successMessage =
  document.getElementById(
    "successMessage"
  );


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();

      contactForm.style.display =
        "none";


      if (successMessage) {

        successMessage.classList.add(
          "visible"
        );

      }

    }
  );

}


/* =========================================================
   VOLTAR AO TOPO
========================================================= */

const backToTop =
  document.getElementById(
    "backToTop"
  );


function updateBackToTop() {

  if (!backToTop) return;

  if (window.scrollY > 500) {

    backToTop.classList.add(
      "visible"
    );

  } else {

    backToTop.classList.remove(
      "visible"
    );

  }

}

window.addEventListener(
  "scroll",
  updateBackToTop
);


if (backToTop) {

  backToTop.addEventListener(
    "click",
    () => {

      window.scrollTo({

        top: 0,

        behavior: "smooth"

      });

    }
  );

}


/* =========================================================
   ANO AUTOMÁTICO
========================================================= */

const year =
  document.getElementById(
    "year"
  );

if (year) {

  year.textContent =
    new Date().getFullYear();

}