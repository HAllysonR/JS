function horario(){
    var hora = prompt('Digite a hora atual (1 <> 23.59): ')
    hora = parseFloat(hora)

    if ( hora > 1 && hora < 12){
        document.write('bom dia' )
    } else if(hora >= 12  && hora <= 17){
        document.write('Boa tarde')
    } else{
        document.write('Boa noite')
    }

}

function idade(){
    var idade = prompt('Digite sua idade: ')
    idade = parseInt(idade)

    if( idade > 18 || idade == 18 ){
        document.write('Maior de idade: ' + idade)
    } else{
        document.write('Aqui não, Juvenil !!!')
    }
}

function media(){

    var nota = prompt('Digite dua nota: ' )
    nota = parseFloat(nota)
    var faltas = prompt('Numero de faltas: ')
    faltas = parseInt(faltas)

    var faltasMaxima = 10
    media = 7

    if(nota >= media && faltas < faltasMaxima){
        document.write('Aluno aprovado')
    } else {
        document.write('Reprovado')
    }
}

//console.log(horario())
//console.log(idade())
//console.log(media())