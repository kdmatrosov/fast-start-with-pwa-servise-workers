const main = document.getElementById('main');

async function fetchTrending() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  data.map(function (elem) {
    const title = document.createElement('div');
    title.innerText = elem.title;
    const body = document.createElement('div');
    body.innerText = elem.body;
    const container = document.createElement('div');
    container.className = 'post';
    container.append(title, body);
    main.append(container);
  });
}

window.addEventListener('load', async e => {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('serviceWorker.js');
      console.log('SW registered');
    } catch (error) {
      console.log('SW failed');
    }
  }
  await fetchTrending();
});

let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', function (e) {
  console.log('beforeinstallprompt');
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

document.querySelector('.center').addEventListener('click', addToHomeScreen);

function addToHomeScreen() {
  console.log('addToHomeScreen');
  deferredPrompt.prompt();
  deferredPrompt.userChoice
    .then(function (choiceResult) {
      console.log(choiceResult.outcome);
      deferredPrompt = null;
    });
}