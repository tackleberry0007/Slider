const slides = document.querySelectorAll(".slide")
let count = 0;

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }

)
const goPrev = () => {
    count-- 
    // alert()
    slideImage()
}
const goNext = () => {
    count++
    // alert()
    slideImage()
}
const slideImage = () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${count * 100}%)`
        }
    )
}