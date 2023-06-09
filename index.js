function sum(){
    let x = document.getElementById('sum1').value;
    let y = document.getElementById('sum2').value;
    let num1 = parseInt(x);
    let num2 = parseInt(y);
    document.getElementById('r1').innerHTML = num1 + num2;
}

function sub(){
    let x = document.getElementById('sub1').value;
    let y = document.getElementById('sub2').value;
    let num1 = parseInt(x);
    let num2 = parseInt(y);
    document.getElementById('r2').innerHTML = num1 - num2;
}

function multi(){
    let x = document.getElementById('multi1').value;
    let y = document.getElementById('multi2').value;
    let num1 = parseInt(x);
    let num2 = parseInt(y);
    document.getElementById('r3').innerHTML = num1 * num2;
}

function devid(){
    let x = document.getElementById('divid1').value;
    let y = document.getElementById('divid2').value;
    let num1 = parseInt(x);
    let num2 = parseInt(y);
    document.getElementById('r4').innerHTML = num1 / num2;
}