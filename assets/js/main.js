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
const iconTheme = "uil-sun"

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light"
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun"

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  )
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  )
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme())
  localStorage.setItem("selected-icon", getCurrentIcon())
})
