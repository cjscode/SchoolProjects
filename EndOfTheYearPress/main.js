let elements = document.querySelectorAll("*")
setTimeout(function() {
    for (let elem of elements) {
        elem.style.opacity = 1
        elem.style.translate = "0% 0%"
    }
},50)
function goURL (url) {
    for (let elem of elements) {
        elem.style.opacity = 0
        elem.style.translate = "-50% 0%"
    }
    setTimeout(function(){
        location.href = url
    },1000)
}
function scrollTo (n) {
    alert("t")
    document.querySelector("."+n).scrollIntoView()
}