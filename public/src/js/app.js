
var deferredPrompt;

if (!window.Promise) {
  window.Promise = Promise;
}

//adding a condition in order for the navigator to check if it has serviceWorker

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log('Service worker registered!');
    })
    .catch(function(err) {
      console.log(err);
    });
}

window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

// In SW get/ajax requests won't work as its syncronous and SW only accepts assyncronous requests (fetch and promises)
// example of get req below
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://httpbin.org/ip');
// xhr.responseType = 'json';
// xhr.onload = function() {
//     console.log(xhr.response)
// };

// xhr.onerror = function(){
//     console.log('Error!');
// };

// xhr.send();

// FETCH API EXAMPLE
// fetch('https://httpbin.org/ip')
//     .then(function(response){
//         console.log(response)
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(err){
//         console.log(err);
//     });

// fetch('https://httpbin.org/post', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     mode: 'cors',
//     body: JSON.stringify({message: 'Does this work?'})
// })
//     .then(function(response){
//         console.log(response)
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(err){
//         console.log(err);
//     });

// var promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         reject({code: 500, message: 'An error ocurred!'});
//     }, 3000);
// });
// promise.then(function(text){
//     return (text);
// }, function(err){
//     console.log(err.code, err.message)
// }).then(function(newText){
//     console.log(newText);
// });

// console.log('This is executed');

// promise.then(function(text){
//     return (text);
// }).then(function(newText){
//     console.log(newText);
// }).catch(function(err){
//     console.log(err.code, err.message);
// });
