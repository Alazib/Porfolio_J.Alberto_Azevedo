/*==================== MENU SHOW AND HIDDEN ====================*/

const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu")
  })
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
  })
}

/*==================== REMOVE MENU MOBILE  ====================*/

const navLink = document.querySelectorAll(".nav__link")

function linkAction() {
  const navMenu = document.getElementById("nav-menu")
  navMenu.classList.remove("show-menu")
}
navLink.forEach((n) => n.addEventListener("click", linkAction))

/*==================== ACCORDION SKILLS  ====================*/

const skillsContent = [...document.getElementsByClassName("skills__content")]
const skillsHeader = document.querySelectorAll(".skills__header")

function toggleSkills() {
  let skillsContentClass = this.parentNode.className

  skillsContent.forEach((el) => {
    el.className = "skills__content skills__close"
  })

  if (skillsContentClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open"
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll("[data-target]")
const tabContents = document.querySelectorAll("[data-content]")

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active")
    })
    target.classList.add("qualification__active")

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active")
    })

    tab.classList.add("qualification__active")
  })
})

/*==================== PORTFOLIO SWIPER ====================*/

var swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})

/*==================== INTEGRATION WITH EMAILJS SERVICE ====================*/
const btn = document.getElementById("button")
const formNotificationSuccess = document.querySelector(
  ".form__notification-success"
)
const formNotificationError = document.querySelector(
  ".form__notification-error"
)

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault()

  const serviceID = "default_service"
  const templateID = "template_zeon1wk"

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      formNotificationSuccess.classList.add("form__notification-success--show")

      setTimeout(() => {
        formNotificationSuccess.classList.remove(
          "form__notification-success--show"
        )
      }, 10000)
    },
    (err) => {
      formNotificationError.classList.add("form__notification-error--show")

      setTimeout(() => {
        formNotificationError.classList.remove("form__notification-error--show")
      }, 10000)
    }
  )
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll("section[id]")

function scrollActive() {
  const scrollY = window.scrollY

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 500
    const sectionName = current.getAttribute("id")
    console.log("altura de la sección" + sectionName, sectionTop)
    console.log(scrollY)

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionName + "]")
        .classList.add("active-link")
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionName + "]")
        .classList.remove("active-link")
    }
  })
}
window.addEventListener("scroll", scrollActive)
