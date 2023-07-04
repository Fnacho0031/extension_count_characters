chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'countCharacters') {
      var selectedText = window.getSelection().toString();
      var characterCount = selectedText.length;
      sendResponse({count: characterCount});
    }
  });
  
