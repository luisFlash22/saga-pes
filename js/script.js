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

// ===== FILTRADO AUTOMÁTICO POR URL (?b=termino) =====
document.addEventListener('DOMContentLoaded', () => {
  actualizarContadores();

  // Leer los parámetros de la URL (ej: ?b=pes-2017, ?b=pes+2017 o ?b=pes 2017)
  const params = new URLSearchParams(window.location.search);
  const parametroUrl = params.get('b') || params.get('juego');

  if (parametroUrl) {
    const searchBar = document.getElementById('searchBar');
    if (searchBar) {
      // Reemplaza automáticamente guiones y signos de más por espacios para evitar errores
      const busquedaLimpia = parametroUrl.replace(/[-+]/g, ' ').trim();

      searchBar.value = busquedaLimpia;
      filtrar();

      // Hace un scroll suave directo hacia la primera tarjeta visible
      setTimeout(() => {
        const tarjetaVisible = document.querySelector('.card:not(.hidden)');
        if (tarjetaVisible) {
          tarjetaVisible.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Pequeño efecto visual de enfoque
          tarjetaVisible.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
          tarjetaVisible.style.transform = 'scale(1.02)';
          tarjetaVisible.style.boxShadow = '0 0 20px rgba(52, 152, 219, 0.6)';
          setTimeout(() => {
            tarjetaVisible.style.transform = 'none';
            tarjetaVisible.style.boxShadow = 'none';
          }, 1500);
        }
      }, 2005);
    }
  }
});