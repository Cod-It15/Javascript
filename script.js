let c_btn = document.getElementById("clear");
let question = document.getElementById("question");
let answer = document.getElementById("answer");
function clear() {
    if (question.innerText !== "") {
        question.innerText = "";
        // return        
    }
    if (answer.innerText !== "") {
        answer.innerText = "";
        // return
    } 
    else {
        // return
    }
}