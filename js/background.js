const images = ["0.jfif", "1.jfif", "2.jfif"]

const choosenImg = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img")

bgImage.src = `img/${choosenImg}`

document.body.appendChild(bgImage)