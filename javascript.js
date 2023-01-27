//PEGAR DADOS DO INPUT:
let input_nome_perfil = document.getElementById('input_nome_perfil')
let nome_trocado = input_nome_perfil.value
let mostrar_nome_perfil = document.getElementById
    ('nome_perfil')
document.getElementById('input_nome_perfil').placeholder = localStorage.valor
backgrounds = [
    "url('background_1.webp')",
    "url('background_2.webp')",
    "url('background_3.webp')",
    "url('https://www.teahub.io/photos/full/162-1621646_gif-wallpapers-hd-wallpapercraft-free-outer-space-background.gif')",
    "url('https://i.pinimg.com/originals/1d/26/c5/1d26c5b022c071fb8f1e3ae2f0f65ba9.gif')"
]
document.getElementById('texto_strong').style.display = 'none'
//MODIFICAR NOME, BLOCK PASS AO CLICAR EM SALVAR:
function salvar() {
    //input sem valor:
    if (input_nome_perfil.value.length == 0) {
        nome_trocado = input_nome_perfil.value
        mostrar_nome_perfil.innerHTML = localStorage.valor
        document.getElementById('texto_strong').style.display = 'block' // aparece o <p>
        document.getElementById('input_nome_perfil').style.border = '1px solid red' //borda vermelha
    }
    else {
        localStorage.valor = document.getElementById('input_nome_perfil').value
        nome_perfil.innerHTML = localStorage.valor
    }

    if (input_nome_perfil.value.length > 0) {
        window.location.replace("index.html")
    }

}

//FUNÇÃO PARA TROCAR DE PAGINA:
//Ao clicar em CANCELAR
function cancelar() {
    window.location.replace("index.html")
}
//Ao clicar em GERENCIAR PERFIS:
function gerenciar_perfil() {
    window.location.replace("hbo_gerence.html")
}
//Ao clicar em CONCLUÍDO:
function conclui() {
    window.location.replace("index.html")
}
//Ao clicar na IMAGEM:
function imagem() {
    window.location.replace("hbo_change.html")
}


//FUNÇÕES PARA TROCAR E SALVAR A IMAGEM QUANDO CLICAR:
function trocar_1() {
    localStorage.imagem = document.body.style.background = backgrounds[0]
    document.body.style.transition = '1s'
}
function trocar_2() {
    localStorage.imagem = document.body.style.background = backgrounds[1]
    document.body.style.transition = '1s'

}
function trocar_3() {
    localStorage.imagem = document.body.style.background = backgrounds[2]
    document.body.style.transition = '1s'
}
function trocar_4() {
    localStorage.imagem = document.body.style.background = backgrounds[3]
    document.body.style.transition = '1s'
}
function trocar_5() {
    localStorage.imagem = document.body.style.background = backgrounds[4]
    document.body.style.transition = '1s'
}

//Navegar pelas paginas com nome salvo:
function carregada() {
    document.body.style.backgroundImage = "url('background_1.webp')"
    nome_perfil.innerHTML = localStorage.valor
    document.body.style.background = localStorage.imagem
}