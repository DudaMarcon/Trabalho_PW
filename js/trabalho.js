
    $("#ordenar").click(function () {

        var x = parseInt($("#X").val());
        var y = parseInt($("#Y").val());
        var z = parseInt($("#Z").val());
    
if (isNaN(x) || isNaN(y) || isNaN(z)) {
    alert("Digite números válidos");
    return;
}

// X menor 
if (x <= y && x <= z && y <= z) {
    $("#txtresultado").html("Resultado: x = " + x + ", y = " + y + ", z = " + z);
}
else if (x <= y && x <= z && y >= z) {
    $("#txtresultado").html("Resultado: x = " + x + ", z = " + z + ", y = " + y);
}

// Y menor
else if (y <= x && y <= z && z >= x) {
    $("#txtresultado").html("Resultado: y = " + y + ", x = " + x + ", z = " + z);
}
else if (y <= x && y <= z && z <= x) {
    $("#txtresultado").html("Resultado: y = " + y + ", z = " + z + ", x = " + x);
}

// Z menor 
else if (z <= x && z <= y && y >= x) {
    $("#txtresultado").html("Resultado: z = " + z + ", x = " + x + ", y = " + y);
}
else if (z <= x && z <= y && y <= x) { 
    $("#txtresultado").html("Resultado: z = " + z + ", y = " + y + ", x = " + x);
}
else {
    alert("Digite números válidos");
}
     });


      