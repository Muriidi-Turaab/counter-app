const number = document.querySelector("#tiro");
const incrementBtn = document.querySelector("#incrememtBtn");
const resetBtn = document.querySelector("#resetBtn");
const decrementBtn = document.querySelector("#decrementBtn");

let count = 0

incrementBtn.addEventListener("click", () => {
    count++
    number.innerHTML = count;

    if(count == 4){
        document.body.style.backgroundColor = "green";
    }
    else if(count == 2) {
        number.style.color = "red";
    }
    else if(count == 5) {
        document.body.style.backgroundColor = "orange";
    }

    else if(count == 6) {
        document.body.style.backgroundColor = "red";
    }
    else if(count == 7) {
        document.body.style.backgroundColor = "blue";
    }

    else if(count == 8) {
        document.body.style.backgroundColor = "black";
        number.style.color = "#fff"
    }
    else{
        document.body.style.backgroundColor = "#fff";
    }
})


resetBtn.addEventListener("click", () => {
    count = 0;
    number.innerHTML = count;

    if(count <= 0) {
        document.body.style.backgroundColor = 'skyblue';
    }
    
})



decrementBtn.addEventListener("click", () => {

        count--;
    number.innerHTML = count;
    
    if(count <= -1) {
        document.body.style.backgroundColor = "green";
    }
    
})

// another way ok

// decrementBtn.onclick = function () {
//     count--;
//     number.innerHTML = count;
// }