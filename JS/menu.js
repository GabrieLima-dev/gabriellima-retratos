window.addEventListener("scroll", function(){
    let header = this.document.querySelector('.cabecalho')
    header.classList.toggle('rolagem', window.scrollY > 0)
})