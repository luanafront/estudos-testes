function soma(a , b){
    return a + b
}

function testeSoma (){
    let resultado = soma(5,7)
    let esperado = 12
    

    if( resultado === esperado){
        console.log("passou")
    } else {
        console.log("falhou")
    }
}

testeSoma()

let terreno = {
    area: 305,
    valor: 100000,
    localidade: "Eusébio",
    taVendido: false
}

function testeTerreno(){
    console.assert(terreno.area === 305, {
        esperado: 305, 
        recebido: terreno.area
    })
    console.assert(terreno.valor === 100000, {
        esperado: 100000, 
        recebido: terreno.valor
    })
    console.assert(terreno.localidade === "Eusébio", {
        esperado: "Eusébio", 
        recebido: terreno.localidade
    })
    console.assert(terreno.taVendido === false, {
        esperado: false, 
        recebido: terreno.taVendido
    })
}

testeTerreno()


function titulo(){
    const tituloH1 = document.createElement("h1")
    tituloH1.classList.add("titulo")
    tituloH1.innerText = "Texto na tela"

    return tituloH1
}

function testeTitulo(){
    let resultado = titulo()

    console.assert(resultado.innerText === "Texto na tela", `O teste falhou, e o resultado esperado era: "Texto na tela", E o resultado recebido foi: ${resultado.innerText} `)
    console.assert(resultado.nodeName === "H1", `O Teste falhou, e o resultado esperado era: "H1". E o resultado recebido foi: ${resultado.nodeName}`)
    console.assert(resultado.className === "titulo", `O Teste falhou, e o resultado esperado era: "titulo". E o resultado recebido foi: ${resultado.className}`)
}

testeTitulo()