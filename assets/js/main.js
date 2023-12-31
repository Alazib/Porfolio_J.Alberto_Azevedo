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

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header")
  if (this.scrollY >= 80) {
    nav.classList.add("scroll-header-shadow")
  } else nav.classList.remove("scroll-header-shadow")
}
window.addEventListener("scroll", scrollHeader)

/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up")
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll")
  else scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconLightTheme = "uil-sun"

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconLightTheme)
})
function initWithDarkMode() {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconLightTheme)
}
initWithDarkMode()
