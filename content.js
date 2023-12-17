document.addEventListener('mouseup', function() {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText) {
    const tooltip = document.createElement('div');
    tooltip.id = 'myTooltip';
    tooltip.textContent = 'Texto selecionado: ' + selectedText;
    document.body.appendChild(tooltip);

    const rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = (rect.top - tooltip.offsetHeight) + 'px';
  }
});

document.addEventListener('mousedown', function() {
  const tooltip = document.getElementById('myTooltip');
  if (tooltip) {
    tooltip.remove();
  }
});
