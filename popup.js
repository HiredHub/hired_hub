document.addEventListener('DOMContentLoaded', () => {
  // Retrieve localized strings using chrome.i18n.getMessage
  const greeting = chrome.i18n.getMessage('greeting');
  const buttonText = chrome.i18n.getMessage('greeting');
  const popupMessage = chrome.i18n.getMessage('popupMessage');


  // Set the text content
  document.getElementById('greeting').textContent = greeting;
  document.getElementById('greetButon').textContent = buttonText;
  document.getElementById('greetButon').addEventListener('click', () => {
    alert(popupMessage);
  });
});
