// ===== ACTUALIZAR CONTADORES =====
function actualizarContadores() {
  const juegos = document.querySelectorAll('#gridJuegos .card:not(.hidden)').length;
  const herramientas = document.querySelectorAll('#gridHerramientas .card:not(.hidden)').length;

  document.getElementById('countJuegos').textContent = juegos;
  document.getElementById('countHerramientas').textContent = herramientas;
}

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

  todasLasCards.forEach(card => {
    const nombre = card.getAttribute('data-nombre') || '';
    const textoInterno = card.textContent.toLowerCase();
    const coincide = busqueda === '' || nombre.includes(busqueda) || textoInterno.includes(busqueda);

    if (coincide) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });

  // Actualiza los contadores dinámicamente según lo que esté visible en pantalla
  actualizarContadores();
}

// ===== INICIALIZAR CONTADORES AL CARGAR LA PÁGINA =====
document.addEventListener('DOMContentLoaded', () => {
  actualizarContadores();
});