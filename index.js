const txtTemp = document.getElementById("txtTemp");
const paraFa = document.getElementById("paraFa");
const paraCel = document.getElementById("paraCel");
const resultado = document.getElementById("resultado");

let temp

function convert(){
    if(paraFa.checked){
        temp = txtTemp.value * 1.8 + 32
        resultado.textContent = temp.toFixed(1) + "ºF"
    }else if(paraCel.checked){
        temp = (txtTemp.value-32)*5/9
        resultado.textContent = temp.toFixed(1) + "ºC"
    }else{
        resultado.textContent = "Selecione para converter"
    }

    if(temp<0){
        document.getElementById("form").style.boxShadow = "5px 5px 15px rgba(106, 98, 179, 0.5)";
        document.getElementById("h1").style.color = "rgb(106, 98, 179)";
    }
    else{
        document.getElementById("form").style.boxShadow = "5px 5px 15px rgb(179, 98, 98,0.5)";
        document.getElementById("h1").style.color = "rgb(179, 98, 98)";
    }
}
