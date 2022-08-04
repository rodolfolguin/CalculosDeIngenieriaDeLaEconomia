function calcularvp() {

    var a1 = parseFloat(document.getElementById("a1").value);
    var ti1 = parseFloat(document.getElementById("ti1").value);
    var p1 = parseFloat(document.getElementById("p1").value);


    var vc1 = 1 + ti1;
    var ele1 = Math.pow(vc1, p1);
    var pre1 = a1 * ((ele1 - 1) / (ti1 * ele1));

    var number = pre1;
    var myNumeral = numeral (number);
    var currencyString = myNumeral.format('$0,0.00');

    document.getElementById('res1').innerHTML = currencyString;
}

function calcularan() {

    var vp2 = parseFloat(document.getElementById("vp2").value);
    var ti2 = parseFloat(document.getElementById("ti2").value);
    var p2 = parseFloat(document.getElementById("p2").value);


    var vc2 = 1 + ti2;
    var ele2 = Math.pow(vc2, p2);
    var pre2 = vp2 * ((ti2*ele2) / (ele2-1));

    var number = pre2;
    var myNumeral = numeral (number);
    var currencyString = myNumeral.format('$0,0.00');

    document.getElementById('res2').innerHTML = currencyString;
}