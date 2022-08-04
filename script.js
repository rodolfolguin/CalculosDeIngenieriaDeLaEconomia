function calcularVp() /* Calculo valor presente */
{

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

function calcularAnVp()/* Calculo anualidad valor presente */
{

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

function calcularVf()/* Calculo valor futuro*/
{

    var a3 = parseFloat(document.getElementById("a3").value);
    var ti3 = parseFloat(document.getElementById("ti3").value);
    var p3 = parseFloat(document.getElementById("p3").value);


    var vc3 = 1 + ti3;
    var ele3 = Math.pow(vc3, p3);
    var pre3 = a3 * ((ele3 - 1) / ti3);

    var number = pre3;
    var myNumeral = numeral (number);
    var currencyString = myNumeral.format('$0,0.00');

    document.getElementById('res3').innerHTML = currencyString;
}

function calcularAnVf()/* Calculo anualidad valor futuro */
{

    var vf4 = parseFloat(document.getElementById("vf4").value);
    var ti4 = parseFloat(document.getElementById("ti4").value);
    var p4 = parseFloat(document.getElementById("p4").value);


    var vc4 = 1 + ti4;
    var ele4 = Math.pow(vc4, p4);
    var pre4 = vf4 * (ti4 / (ele4 - 1) );

    var number = pre4;
    var myNumeral = numeral (number);
    var currencyString = myNumeral.format('$0,0.00');

    document.getElementById('res4').innerHTML = currencyString;
}

function calcularG() /* Calculo valor presente */
{

    var a5 = parseFloat(document.getElementById("a5").value);
    var ti5 = parseFloat(document.getElementById("ti5").value);
    var p5 = parseFloat(document.getElementById("p5").value);
    var g5 =parseFloat(document.getElementById("g5").value);


    var vc5 = 1 + ti5;
    var ele5 = Math.pow(vc5, p5);

    var g = g5/ti5;
    var g2 = ((ele5-1)/ti5)-p5;
    var g3 = 1/ele5;

    var pre5 = g*g2*g3;

    var number = pre5;
    var myNumeral = numeral (number);
    var currencyString = myNumeral.format('$0,0.00');

    document.getElementById('res5').innerHTML = currencyString;
}