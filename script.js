// Função que verifica a posição dos elementos na tela
function animarScroll() {
    const elementos = document.querySelectorAll(".reveal");

    elementos.forEach((elemento) => {
        const topoElemento = elemento.getBoundingClientRect().top;
        const alturaJanela = window.innerHeight;
        
        // Se o topo do elemento estiver a menos de 150px do fundo da tela
        if (topoElemento < alturaJanela - 150) {
            elemento.classList.add("active");
        }
    });
}

// Escuta o evento de rolagem (scroll)
window.addEventListener("scroll", animarScroll);

// Executa uma vez ao carregar para mostrar o que já está no topo (como o Hero)
animarScroll();