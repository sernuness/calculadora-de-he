function calcular() {
    var salary = document.querySelector("#salaryin")
    salary = Number(salary.value)
    var carg = document.querySelector('#cargahin')
    carg = Number(carg.value)
    var porc = document.querySelector('#porcentin')
    porc = Number(porc.value)
    var horae = document.querySelector('#horasein')
    horae = Number(horae.value)
    if (salary <= 0 || carg <= 0 || porc <= 0 || horae <= 0) {
        window.alert('Está faltando alguma informação, por favor verifique!')
    } else {
        var hour = salary / carg
        var p = porc / 100
        var h = horae
        var result = hour * h + (hour * h * p)
        var resultrs = result.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        res.innerHTML = `O valor aproximado a ser recebido é de ${resultrs}`
    }
}