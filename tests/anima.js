document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.animated-section');
    const pillars = document.querySelectorAll('.pillar');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
  
    // Função para criar e animar retângulos
    function createRectangle() {
      const rectangle = document.createElement('div');
      rectangle.classList.add('rectangle');
      
      // Tamanho aleatório entre 50x50 e 100x100
      const size = Math.random() * 500 + 10;
      rectangle.style.width = `${size}px`;
      const size2 = Math.random() * 20 + 10;
      rectangle.style.height = `${size2}px`;
  
      // Posição inicial aleatória fora da tela (no lado direito)
      rectangle.style.top = `${Math.random() * containerHeight}px`;
      rectangle.style.left = `${containerWidth}px`;
  
      // Adiciona o retângulo ao container
      container.appendChild(rectangle);
  
      // Velocidade aleatória (3 a 8 px por frame)
      const speed = Math.random() * 40 + 1;
  
      // Animação do retângulo
      function animate() {
        const rectPosX = parseFloat(rectangle.style.left);
  
        // Move o retângulo para a esquerda
        rectangle.style.left = `${rectPosX - speed}px`;
  
        // Remove o retângulo quando sair da tela
        if (rectPosX + size < 0) {
          rectangle.remove();
        } else {
          requestAnimationFrame(animate);
        }
      }
  
      animate();
    }
  
    // Cria retângulos a cada intervalo de tempo
    setInterval(createRectangle, 30);
  
    // Animação dos pilares
    document.addEventListener('mousemove', (event) => {
      pillars.forEach((pillar, index) => {
        const speed = (index + 1) * 0.5;
        const xPos = ((event.clientX / containerWidth) * 100 - 50) * speed;
        // pillar.style.transform = ` skewY(${xPos }deg)`;
      });
    });
  });