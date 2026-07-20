// ===== COPIAR CONTRASEÑA =====
function copiar(elementId, boton) {
    const texto = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(texto).then(() => {
        const original = boton.innerText;
        boton.innerText = '✓ Copiado';
        boton.classList.add('copied');
        setTimeout(() => {
            boton.innerText = original;
            boton.classList.remove('copied');
        }, 2000);
    }).catch(() => {
        alert('No se pudo copiar. Selecciona el texto manualmente.');
    });
}

// ===== COPIAR HASH =====
function copiarHash(elementId, boton) {
    const texto = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(texto).then(() => {
        const original = boton.innerText;
        boton.innerText = '✓ Copiado';
        boton.classList.add('copied');
        setTimeout(() => {
            boton.innerText = original;
            boton.classList.remove('copied');
        }, 2000);
    }).catch(() => {
        alert('No se pudo copiar. Selecciona el texto manualmente.');
    });
}

// ===== BUSCADOR =====
function filtrar() {
    const busqueda = document.getElementById('searchBar').value.toLowerCase().trim();
    const todasLasCards = document.querySelectorAll('.card');

    let visiblesJuegos = 0;
    let visiblesHerramientas = 0;

    todasLasCards.forEach(card => {
        const nombre = card.getAttribute('data-nombre') || '';
        const textoInterno = card.textContent.toLowerCase();
        const coincide = busqueda === '' || nombre.includes(busqueda) || textoInterno.includes(busqueda);

        if (coincide) {
            card.classList.remove('hidden');
            const seccion = card.closest('.section');
            if (seccion) {
                const categoria = seccion.getAttribute('data-categoria');
                if (categoria === 'juegos') visiblesJuegos++;
                else if (categoria === 'herramientas') visiblesHerramientas++;
            }
        } else {
            card.classList.add('hidden');
        }
    });

    document.getElementById('countJuegos').textContent = visiblesJuegos;
    document.getElementById('countHerramientas').textContent = visiblesHerramientas;
}

// ===== INICIALIZAR CONTADORES =====
document.addEventListener('DOMContentLoaded', () => {
    const juegos = document.querySelectorAll('#gridJuegos .card:not(.hidden)');
    const herramientas = document.querySelectorAll('#gridHerramientas .card:not(.hidden)');
    document.getElementById('countJuegos').textContent = juegos.length;
    document.getElementById('countHerramientas').textContent = herramientas.length;
});