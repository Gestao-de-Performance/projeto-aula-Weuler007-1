// Exemplo simples de interação
document.addEventListener("DOMContentLoaded", () => {
  const habilidades = document.querySelectorAll("#habilidades li");

  habilidades.forEach(item => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "#cbd5e0";
      item.style.cursor = "pointer";
    });

    item.addEventListener("mouseout", () => {
      item.style.backgroundColor = "#e2e8f0";
    });
  });
});
