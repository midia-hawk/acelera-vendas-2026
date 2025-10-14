// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle")
const nav = document.getElementById("nav")

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active")
  menuToggle.classList.toggle("active")
})

// Close menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active")
    menuToggle.classList.remove("active")
  })
})

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Header Scroll Effect
const header = document.getElementById("header")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }

  lastScroll = currentScroll
})

// Fade In Animation on Scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Add fade-in class to elements
const fadeElements = document.querySelectorAll(".section, .speaker-card, .program-day, .benefit-card, .stat-card")
fadeElements.forEach((el) => {
  el.classList.add("fade-in")
  observer.observe(el)
})

// Form Submission
const registrationForm = document.getElementById("registrationForm")
const formSuccess = document.getElementById("formSuccess")

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(registrationForm)
  const data = Object.fromEntries(formData)

  // Log form data (in production, send to server)
  console.log("Form submitted:", data)

  // Hide form and show success message
  registrationForm.style.display = "none"
  formSuccess.classList.add("show")

  // Reset form after 5 seconds
  setTimeout(() => {
    registrationForm.reset()
    registrationForm.style.display = "block"
    formSuccess.classList.remove("show")
  }, 5000)
})

// Phone mask
const telefoneInput = document.getElementById("telefone")
telefoneInput.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "")
  if (value.length > 11) value = value.slice(0, 11)

  if (value.length > 10) {
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
  } else if (value.length > 6) {
    value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3")
  } else if (value.length > 2) {
    value = value.replace(/(\d{2})(\d{0,5})/, "($1) $2")
  } else {
    value = value.replace(/(\d*)/, "($1")
  }

  e.target.value = value
})
