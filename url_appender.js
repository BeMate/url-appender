function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;

    callback(url);
  });
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

function copyToClipboard(text) {
  var copyFrom      = document.createElement('textarea');
  var statusElement = document.getElementById('status');

  copyFrom.textContent = text;
  statusElement.appendChild(copyFrom);

  copyFrom.select();
  document.execCommand('copy');

  statusElement.removeChild(copyFrom);
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    var newUrl = url+'utm_nooverride=1';

    copyToClipboard(newUrl);
    renderStatus(newUrl);
  });
});
