//************ Dark mode************\\

// navone
const moon = document.querySelector(".ri-moon-fill")

const span = document.querySelector(".forshow")

const sun = document.createElement("i")

sun.className = "ri-sun-fill"
sun.id = "ani-sun"

const body = document.querySelector("body")

const container = document.querySelector(".container")

const html = document.querySelector("html")

const navOne = document.querySelector(".nav-one")

const navImg = document.querySelector(".bg-white")

const navLine = document.querySelectorAll(".nav-line")

const navOneLink = document.querySelectorAll(".all-a")

const navTwo = document.querySelector(".nav-two")

const navLeft = document.querySelector(".left2-nav")

const allAtag = document.querySelectorAll(".left2-nav a")

let arr = Array.from(allAtag);

arr.map((e) => { // nav link
    let navLink = e;

    navLine.forEach(linee => {
        let allLine = linee
        // console.log(allLine)


        navOneLink.forEach((e) => {
            let allLink = e;
            // console.log(allLink);

            moon.addEventListener("click", () => {

                if (moon.className === "ri-moon-fill") {
                    moon.remove()
                    span.append(sun)
                    sun.style.color = "yellow"
                    navImg.style.backgroundColor = "#111111"
                    navOne.style.backgroundColor = "#111111"
                    allLink.style.color = "white"
                    allLine.style.color = "white"
                    body.style.backgroundColor = "#111111"
                    body.style.color = "#fff"
                    html.style.color = "#fff"
                    html.style.backgroundColor = "#111111"
                    moon.id = "ani-moon"
                    navTwo.style.backgroundColor = "#111111"
                    navTwo.style.color = "white"
                    navLink.style.color = "white"
                    navLeft.style.color = "white"
                }

            })

            sun.addEventListener("click", () => {
                if (sun.className === "ri-sun-fill") {
                    sun.remove()
                    span.append(moon)
                    allLink.style.color = "#111111"
                    allLine.style.color = "#111111"
                    navOne.style.backgroundColor = "#fff"
                    body.style.color = "#000"
                    html.style.color = "#0000"
                    body.style.backgroundColor = "white"
                    html.style.backgroundColor = "white"
                    navTwo.style.backgroundColor = "#fff"
                    navTwo.style.color = "#111111"
                    navLink.style.color = "#111111"
                    navLeft.style.color = "#111111"
                }
            })

        }); // navone "a" tag

    }); // navone line

});

// footer box mouseOver

const footerLink = document.querySelector(".nav-all-link")

// console.log(footerLink);

const lastHover = document.querySelector(".nav-item")

const link = lastHover.querySelector("a")

link.addEventListener("mousemove", () => {
    footerLink.style.display = "inline Grid"
})

link.addEventListener("mouseout", () => {
    footerLink.style.display = "none"
})

footerLink.addEventListener("mousemove", () => {
    footerLink.style.display = "inline Grid"
})

footerLink.addEventListener("mouseout", () => {
    footerLink.style.display = "none"
});

// shoes color change
let mainImg = document.querySelectorAll("#main-img")

let whiteShoes = document.querySelectorAll(".white-shoes");
let blackShoes = document.querySelectorAll(".black-shoes");


whiteShoes.forEach((e) => {
    e.addEventListener("mouseover", () => {
        console.log("i am white shose");
    })
})


blackShoes.forEach((e) => {
    e.addEventListener("mouseover", () => {
        console.log("i am black shose");
    })
})