// localStorage.clear()
const spans = document.querySelectorAll('.buttons-div span') 
const title = document.querySelector('.title')
const sliderBtn = document.querySelector('.slider-btn')
const sliderCloseBtn = document.querySelector('.slider-close-btn')
const shadowBox = document.querySelector(".sahdow-box")
// SECTIONS
const sections = document.querySelectorAll(".section")
const commadsSection = document.querySelector(".commadns")
const ta3a = document.querySelector('.ta3a')
const ta3aVideos = document.querySelector(".ta3a-videos")
const backBtn = document.querySelector(".back-btn")
const infoSction = document.querySelector(".info")
// MEMORES 
const form = document.getElementById("form")
const resultDiv = document.getElementById("result")
const removeBtn = document.getElementById("remove-btn")
// LOGIN FORM
const loginBtn = document.querySelector('.login-btn')
const loginDiv = document.querySelector('.login-div')
const dogName = document.querySelector('.dog-name')
const dogNameTitle = document.querySelector('.dog-name-title')
const worning = document.querySelector('.worning')
const imgInput = document.querySelector("#img-input")
// LOGIN FORM CONTENT
if(window.localStorage.getItem("dogName")) {
    loginDiv.style.visibility = "hidden"
    dogNameTitle.innerHTML = window.localStorage.getItem("dogName")
}
imgInput.addEventListener("change", function() {
    let reader = new FileReader()
    reader.addEventListener("load", () => {
        localStorage.setItem("headImage", reader.result)
    })
    reader.readAsDataURL(this.files[0])
    window.location = 'index.html'
})
document.addEventListener("DOMContentLoaded", () => {
    let resultImage = localStorage.getItem("headImage")
    if(resultImage) {
        document.querySelector(".loginImage").setAttribute("src", resultImage)
        document.querySelector(".headerImage").setAttribute("src", resultImage)
        
    }
})
loginBtn.addEventListener("click", () => {
    if(dogName.value !== "") {
        dogNameTitle.innerHTML = dogName.value
        loginDiv.style.left = "-100%"
        window.localStorage.setItem("dogName", dogName.value)
    }else {
        worning.style.display = 'block'
    }
})

// SPAN CONTROL
spans.forEach((span) => {
    span.addEventListener("click", (e) => {
        spans.forEach((span) => {
            span.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        title.innerHTML = e.currentTarget.innerHTML
        if(e.currentTarget.classList.contains("commands-btn")) {
            sections.forEach((section) => {
                section.style.visibility = "hidden"
            })
            commadsSection.style.visibility = "visible"
            if(commadsSection.style.visibility == "visible") {
                ta3aVideos.style.display = "none"
            }
        }
        if (e.currentTarget.classList.contains("info-btn")) {
            sections.forEach((section) => {
                section.style.visibility = "hidden"
            })
            infoSction.style.visibility = "visible"
            ta3aVideos.style.display = "none"
        }
    })
})
// SLIDER
sliderBtn.addEventListener("click", () => {
    shadowBox.style.display = "block"
})
sliderCloseBtn.addEventListener("click", () => {
    shadowBox.style.display = "none"
})
// ta3a-VIDEOS
ta3a.addEventListener("click", () => {
    commadsSection.style.visibility = "hidden"
    ta3aVideos.style.display = "block"
})
backBtn.addEventListener("click", () => {
    ta3aVideos.style.display = "none"
    commadsSection.style.visibility = "visible"
})

