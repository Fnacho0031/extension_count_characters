document.addEventListener('DOMContentLoaded', function() {
    var countButton = document.getElementById('countButton');
    var countResult = document.getElementById('countResult');
  
    countButton.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript(
          {
            target: { tabId: tabs[0].id },
            function: getCount,
          },
          function(result) {
            var charCount = result[0].result;
            countResult.textContent = '字符数：' + charCount;
          }
        );
      });
    }); 
  });
  
  function getCount() {
    var selectedText = window.getSelection().toString();
    return selectedText.length;
  }
  