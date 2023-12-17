// document.onmouseup = function() {
//   const selectedText = window.getSelection().toString().trim();
//   if (selectedText) {
//     const tooltip = document.createElement('div');
//     tooltip.style.position = 'fixed';
//     tooltip.style.backgroundColor = '#000';
//     tooltip.style.color = '#fff';
//     tooltip.style.padding = '10px';
//     tooltip.style.borderRadius = '5px';
//     tooltip.textContent = selectedText;
//     document.body.appendChild(tooltip);

//     document.onmousemove = function(e) {
//       tooltip.style.left = (e.pageX + 20) + 'px';
//       tooltip.style.top = (e.pageY + 20) + 'px';
//     };
//   }
// };

// document.onmousedown = function() {
//   const tooltip = document.querySelector('div');
//   if (tooltip) {
//     tooltip.remove();
//   }
// };
