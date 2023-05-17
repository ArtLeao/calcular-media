function Calcular(){
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value

    //isNan verifica se a variável pode ser tratada com um inteiro, se puder ela retorna true
    if(numero1 != "" && numero2 != ""){
        if(!isNaN(numero1) && !isNaN(numero2)){
        
            numero1 = parseInt(numero1)
            numero2 = parseInt(numero2)
            const media = (numero1 + numero2) / 2;
    
            alert(`A média dos valores digitados é: ${media}`)
    
        }else{
            alert("Erro! Algum dos valores digitados não é um número!")
        }
    }else{
        alert("Preencha todos os campos!")
    }
}

