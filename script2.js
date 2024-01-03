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

let imgArr = Array.from(mainImg);

let whiteShoes = document.querySelectorAll(".white-shoes");
let blackShoes = document.querySelectorAll(".black-shoes");


whiteShoes.forEach((e) => {
    e.addEventListener("mouseover", () => {
        console.log("i am white shose");
        imgArr[0].src = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoes-WrLlWX.png"

        imgArr[1].src = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7a83d03e-80eb-4759-9f7d-6b265a5fcb55/blazer-low-77-vintage-shoes-5Gw9TZ.png"
    })
})


blackShoes.forEach((e) => {
    e.addEventListener("mouseover", () => {
        console.log("i am black shose");
        imgArr[0].src = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/21d38052-598b-44f6-a857-123c9f72b015/air-force-1-07-shoes-WrLlWX.png"

        imgArr[1].src = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/600fc4b5-3b5e-4c10-8145-ed04773bbd53/blazer-low-77-vintage-shoes-5Gw9TZ.png"
    })
})

blackShoes.forEach((e) => {
    e.addEventListener("mouseover", () => {
        console.log("i am black green");
        imgArr[1].src = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1ef5e709-2a24-4385-9457-7ef8ed4d917f/blazer-low-77-vintage-shoes-5Gw9TZ.png"
    })
})