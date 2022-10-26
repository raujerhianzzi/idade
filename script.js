function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[Erro] Verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'crianca-homem.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-homem1.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-homem1.png')
            }else {
                //idoso
                img.setAttribute('src', 'velho-homem1.png')
            }              
            
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'crianca-mulher.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-mulher1.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-mulher1.png')
            }else {
                //idoso
                img.setAttribute('src', 'velho-mulher1.png')
            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}