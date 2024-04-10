//event listener
document.getElementById("calc-btn").addEventListener("click", calcAll);

//event function
function calcAll() {

    var num1 = +document.getElementById("num1").value;
    var num2 = +document.getElementById("num2").value;
    var num3 = +document.getElementById("num3").value;

    var average = (num1 + num2 + num3) / 3;
    var sum = (num1 + num2 + num3);
    var product = (num1 * num2 * num3);
    var remainder = (num1 % num2);
    var power = (num1 ** num2);
    var round = num1.toFixed(2)
    var tangent = Math.tan(num3);
    var Random = Math.random() * (num2 - num1 + 1) + num1;


    document.getElementById("ave-out").innerHTML = average;
    document.getElementById("sum-out").innerHTML = sum;
    document.getElementById("prod-out").innerHTML = product;
    document.getElementById("rem-out").innerHTML = remainder;
    document.getElementById("power-out").innerHTML = power;
    document.getElementById("round-out").innerHTML = round;
    document.getElementById("tan-out").innerHTML = tangent;
    document.getElementById("rand-out").innerHTML= Random;
}