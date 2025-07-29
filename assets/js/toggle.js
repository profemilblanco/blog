document.addEventListener('DOMContentLoaded', function() {
  // Selecciona todos los botones toggle
  const toggleButtons = document.querySelectorAll('.toggle-button');
  
  toggleButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Obtiene el ID del contenido a mostrar/ocultar
      const targetId = this.getAttribute('data-target');
      const content = document.getElementById(targetId);
      
      // Alterna la visibilidad
      if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        this.textContent = 'Ocultar contenido';
      } else {
        content.style.display = 'none';
        this.textContent = 'Mostrar Modelo de Respuesta';
      }
    });
  });
});
