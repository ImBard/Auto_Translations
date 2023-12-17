chrome.runtime.onInstalled.addListener(function() {
  // listener do evento
  chrome.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Sample Context Menu",
    "contexts": ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "sampleContextMenu") {
    // enviando a frase selecionada para o content.js
    chrome.tabs.sendMessage(tab.id, {text: 'contextMenuClicked', selectionText: info.selectionText});
  }
});