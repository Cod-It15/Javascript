
function sumValues(){
    let number1 = Number(document.getElementById("value1").value);
    let operator = document.getElementById("operator").value;
    let number2 = Number(document.getElementById("value2").value);
    if (operator == "+") {
        let result1 = eval(`${number1} ${operator} ${number2}`)
        let result=document.getElementById("result")
        result.innerHTML=result1
    }
    if (operator == "-") {
        let result2 = eval(`${number1} ${operator} ${number2}`)
        let result=document.getElementById("result")
        result.innerHTML=result2
        
    }
    if (operator == "*") {
        let result3 = eval(`${number1} ${operator} ${number2}`)
        let result=document.getElementById("result")
        result.innerHTML=result3
    }
    if (operator == "/") {
        let result4 = eval(`${number1} ${operator} ${number2}`)
        let result=document.getElementById("result")
        result.innerHTML=result4
    }
    if (operator == "**") {
        let result5 = eval(`${number1} ${operator} ${number2}`)
        let result=document.getElementById("result")
        result.innerHTML=result5
        
    }
    
}
