function calcular() {
    var salary = document.querySelector("#salaryin")
    salary = parseInt(salary.value)
    var carg = document.querySelector('#cargahin')
    carg = parseInt(carg.value)
    var porc = document.querySelector('#porcentin')
    porc = parseInt(porc.value)
    var horae = document.querySelector('#horasein')
    horae = parseInt(horae.value)
    if (salary <= 0 || carg <= 0 || porc <= 0 || horae <= 0) {
        window.alert('Está faltando alguma informação, por favor verifique!')
    }
}