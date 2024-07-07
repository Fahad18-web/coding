
document.body.style.backgroundColor = "#313131"

const cnt =  document.querySelector(".cnt")

const h1 = document.querySelector("h1")

const img = document.querySelector("#img")

const yes = document.querySelector("#yes")

const no = document.querySelector("#No")


cnt.style.width = "40vw"
cnt.style.marginTop = "5vw"
cnt.style.marginLeft = "25vw"
cnt.style.padding = "10px 5px"

h1.style.color = "#fff"

img.style.width = "40vw"

yes.style.backgroundColor = "orange"
yes.style.padding = "10px 5px"
yes.style.border = "none"
yes.style.width = "8vw"

no.style.backgroundColor = "orange"
no.style.padding = "10px 5px"
no.style.border = "none"
no.style.width = "8vw"

yes.addEventListener("click", ()=>{
    alert("that great good to hear that")
})

no.addEventListener("click", ()=>{
    alert("no worries coding is not made for everybody")
})

