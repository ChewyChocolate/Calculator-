    function add() {
    x = parseInt(document.getElementById("1stNumber").value);
    y = parseInt(document.getElementById("2ndNumber").value);
    sum = x += y
    document.getElementById("answer").innerHTML = sum;
  }
    function Subtract() {
    var x, y, difference
    x = document.getElementById("1stNumber").value;
    y = document.getElementById('2ndNumber').value;
    difference = x - y ;
    document.getElementById("answer").innerHTML = difference;
    }
    function Multiply() {
    var x, y, product
    x = document.getElementById("1stNumber").value;
    y = document.getElementById('2ndNumber').value;
    product = x * y ;
    document.getElementById("answer").innerHTML = product;
    }
    function Devide() {
    var x, y, quotient
    x = document.getElementById("1stNumber").value;
    y = document.getElementById('2ndNumber').value;
    quotient = x / y ;
    document.getElementById("answer").innerHTML = quotient;
    }