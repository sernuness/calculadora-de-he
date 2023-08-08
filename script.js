function calcular() {
    var salary = document.querySelector("#salaryin")
    salary = parseInt(salary.value)
    var carg = document.querySelector('#cargahin')
    carg = parseInt(carg.value)
    var porc = document.querySelector('#porcentin')
    porc = parseInt(porc.value)
    var horae = document.querySelector('#horasein')
    horae = parseInt(horae.value)
    window.alert(`TESTE:\n Os valores inseridos são: ${salary}; ${carg}; ${porc}, ${horae}!`)
}