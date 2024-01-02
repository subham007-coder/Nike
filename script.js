//************ Dark mode************\\

// navone
const moon = document.querySelector(".ri-moon-fill")

const span = document.querySelector(".forshow")

const sun = document.createElement("i")

sun.className = "ri-sun-fill"
sun.id = "ani-sun"
// moon.id = "ani-moon"

const body = document.querySelector("body")

const container = document.querySelector(".container")

const html = document.querySelector("html")

const navOne = document.querySelector(".nav-one")

const navImg = document.querySelector(".bg-white")

const navLine = document.querySelectorAll(".nav-line")

const navOneLink = document.querySelectorAll(".all-a")

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
                html.style.backgroundColor = "#111111"
                container.style.backgroundColor = "#111111"
                moon.id = "ani-moon"
            }

        })

        sun.addEventListener("click", () => {
            if (sun.className === "ri-sun-fill") {
                sun.remove()
                span.append(moon)
                allLink.style.color = "#111111"
                allLine.style.color = "#111111"
                navOne.style.backgroundColor = "#fff"
                body.style.backgroundColor = "white"
                html.style.backgroundColor = "white"
                container.style.backgroundColor = "white"
            }
        })


    }); // navone "a" tag

}); // navone line


// navtwo

const navTwo = document.querySelector(".nav-two")


moon.addEventListener("click", () => {

    if (moon.className === "ri-moon-fill") {
        navTwo.style.backgroundColor = "#111111"
        navTwo.style.color = "white"
        // navItem.style.backgroundColor = "black"
        // navItem.style.color = "#fff"
    }

})


sun.addEventListener("click", () => {
    if (sun.className === "ri-sun-fill") {
        navTwo.style.backgroundColor = "white"
        navTwo.style.color = "#111111"
        // navItem.style.backgroundColor = "#fff"
        // navItem.style.color = "#111111"
    }
})


// curosal

const curosal = document.querySelector("#carouselExampleSlidesOnly")

const curosalItem = document.querySelector(".textWhite")

const curosalItem2 = document.querySelector(".textWhite2")

const curosalItem3 = document.querySelector(".textWhite3")

const curosalItem4 = document.querySelector(".textWhite4")


moon.addEventListener("click", () => {


    // console.log("subham");

    if (moon.className === "ri-moon-fill") {
        curosal.style.backgroundColor = "black"
        curosalItem.style.color = "white"
        curosalItem2.style.color = "white"
        curosalItem3.style.color = "white"
        curosalItem4.style.color = "white"
    }

})

sun.addEventListener("click", () => {
    if (sun.className === "ri-sun-fill") {
        curosal.style.backgroundColor = "#F5F5F5"
        curosalItem.style.color = "#111111"
        curosalItem2.style.color = "#111111"
        curosalItem3.style.color = "#111111"
        curosalItem4.style.color = "#111111"
    }
})

// text color change

const colorWhite = document.querySelectorAll("#colorwhite")

// console.log(colorWhite);

colorWhite.forEach((e) => {
    // console.log(e);

    let textColor = e;

    moon.addEventListener("click", () => {

        if (moon.className === "ri-moon-fill") {
            textColor.style.color = "white"
        }
    })


    sun.addEventListener("click", () => {

        if (sun.className === "ri-sun-fill") {
            textColor.style.color = "black"
        }
    })

})

// button color change

const button = document.querySelectorAll("#bgwhite")

const allBtn = button.forEach((e) => {
    // console.log(e);

    let bgBlackBtn = e;


    moon.addEventListener("click", () => {

        if (moon.className === "ri-moon-fill") {
            bgBlackBtn.style.backgroundColor = "white"
            bgBlackBtn.style.color = "black"

        }
    })


    sun.addEventListener("click", () => {

        if (sun.className === "ri-sun-fill") {
            bgBlackBtn.style.backgroundColor = "black"
            bgBlackBtn.style.color = "white"
        }
    })

})


// grid hover for dark mode

const allGridLink = document.querySelectorAll("#hover")

// console.log(allGridLink);

allGridLink.forEach((e) => {
    // console.log(e);
    let gridLink = e;

    moon.addEventListener("click", () => {

        if (moon.className === "ri-moon-fill") {
            gridLink.id = "hover-color"
        }
    })

    sun.addEventListener("click", () => {

        if (sun.className === "ri-sun-fill") {
            gridLink.id = "hover"
        }
    })
})

//******** for responcive navbar *********


const nav = document.querySelector("#line");

const span2 = document.querySelector("#span")

const span3 = document.querySelector("#span3")

const li = document.createElement('i')

li.className = "ri-close-fill"

// nav Item

const footer = document.querySelector("#footer-box")

const navText = document.querySelector("#spanText")

const buttonNav = document.querySelector("#spanbtn1")
const buttonNav2 = document.querySelector("#spanbtn2")

const navLogo = document.querySelector(".navLogo")

const navItem = document.querySelector('#navItem')

// console.log(navItem);

nav.addEventListener('click', () => {
    // console.log(nav);
    nav.id = "lineone"
    if (nav.id === "lineone") {
        nav.remove()
        span2.append(li)
        navItem.style.display = "flex"
        navItem.style.flexDirection = "column"
        navItem.style.zIndex = "1"
        navItem.style.backgroundColor = "black"
        navItem.style.color = "white"
        navItem.style.position = "absolute"
        navItem.style.top = "-25px"
        // navItem.style.right = "-7%"
        navItem.style.marginRight = "-16px"
        navItem.style.width = "300px"
        navItem.style.height = "800px"
        navOne.style.opacity = "0.3"
        container.style.opacity = "0.3"
        curosal.style.opacity = "0.3"
        footer.style.opacity = "0.3"
        navText.innerHTML = "Become a Nike Member for the best products, inspiration and stories in sport. <a href>learn more</a>";
        navText.style.width = "50%"
        navText.style.textAlign = "center"
        navText.style.marginTop = "10vw"
        navItem.id = "navZ"
        buttonNav.innerHTML = "<button>Join Us</button>"
        buttonNav2.innerHTML = "<button>Sign In</button>"
        navLogo.style.display = "flex"
        // navLogo.style.flexDirection = "column"
    }
})


li.addEventListener('click', () => {
    // console.log(li);
    li.id = "rong"
    if (li.id === "rong") {
        li.remove()
        span3.append(nav)
        navItem.style.display = "none"
        // navItem.style.width = "50%"
        navOne.style.opacity = "1"
        container.style.opacity = "1"
        curosal.style.opacity = "1"
        footer.style.opacity = "1"
    }
})



// hover to show more option


// show to hover box

const showBox = document.querySelector("#hide")


const showA = showBox.querySelectorAll("a")

// console.log(showA);

const myshowA = Array.from(showA)

// console.log(myshowA);

myshowA.filter( (e) => {
    // console.log(e);
    return e.addEventListener("mousemove", () => {
        showBox.style.display = "grid"
        showBox.className = "optionAni"

        return e.addEventListener("mouseout", () => {
            
            showBox.style.display = "none"

        })
    })
} )



// select h5

const hover = document.querySelector("#list-box")

const h5 = hover.querySelectorAll("h5")

// select all "a" tag

const hide = hover.querySelectorAll("a")

// console.log(hide);

const hideLink = Array.from(hide)

// console.log(hideLink);

hideLink.filter( (e) => {

    return e.addEventListener("mousemove", () => {
        showBox.style.display = "grid"
        
        return e.addEventListener("mouseout", () => {
            
            showBox.style.display = "none"
        })
    })
})


const myArr = Array.from(h5)

// console.log(myArr);

const filter = myArr.filter((e) => {

    return e.addEventListener("mousemove", () => {

        showBox.style.display = "grid"

        return e.addEventListener("mouseout", () => {

        showBox.style.display = "none"
        })
    })
})


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
})