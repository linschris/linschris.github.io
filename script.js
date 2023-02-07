// window.onload = function() {
//     loadStars(50)
// }


// function loadStars(numStars) {
//     let containerElement = document.getElementById("bg-container")
//     let transitionElement = document.getElementById("transition")
//     for (let i = 0; i < numStars; i++) {
//         console.log(i)
//         let currStarDiv = document.createElement("img")
//         currStarDiv.src = './assets/star.svg'
//         currStarDiv.style.position = 'absolute';

//         // currStarDiv.className = 'star'
//         currStarDiv.style.left = (Math.random() * 100) + "%"
//         currStarDiv.style.top = (Math.random() * 25) + "%"
//     containerElement.insertBefore(currStarDiv, transitionElement)
//     }
// }