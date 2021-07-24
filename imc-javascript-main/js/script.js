function calcular() {

    // ENTRE 18, 5 E 24, 9	NORMAL	0
    // ENTRE 25, 0 E 29, 9	SOBREPESO	I
    // ENTRE 30, 0 E 39, 9	OBESIDADE	II
    // MAIOR QUE 40, 0	OBESIDADE GRAVE	III
    
    let peso = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)
    
    cadastro = {
        nome: document.getElementById('nome').value,
        imc: calcularImc(peso, altura),
        // Situação: situation()
    }
    
    function calcularImc(peso, altura) {
        return 18
        // return (altura * altura) / peso
    }

    console.log(calcularImc(`imc ${peso, altura}`))
    
    if(calcularImc(peso, altura) < 18,5){
        console.log("MENOR QUE 18, 5	MAGREZA	0")
    }

}


// Apenas continuar os IFs com as condiçoes de imc