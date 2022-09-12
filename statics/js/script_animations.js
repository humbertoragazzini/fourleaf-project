
//testing animations

document.addEventListener('readystatechange', event => { 
    if (event.target.readyState === "complete") {
        element = document.getElementById("tittle-safety-and-sustainability")
        element.classList.add("transparent-animation");
        console.log(element)
    }
});