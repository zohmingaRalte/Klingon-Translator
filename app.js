var btnTranslator = document.querySelector('#btn-translator')
var txtInput = document.querySelector('#txt-input')
var outputDiv = document.querySelector('#output')

var serverURL = 'https://api.funtranslations.com/translate/klingon.json'

function getTranslationURL(text) {
  return serverURL + '?' + 'text=' + text
}

function errorHandler(error) {
  console.log('error occured', error)
  alert('something wrong with server !! try again some time')
}

function clickEventHandler() {
  var inputText = txtInput.value //taking input from user
  // calling server
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated
      outputDiv.innerText = translatedText
    })
    .catch(errorHandler)
}

btnTranslator.addEventListener('click', clickEventHandler)
