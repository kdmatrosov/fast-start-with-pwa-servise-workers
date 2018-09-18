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
  await fetchTrending();

  if ('serviceWorker' in navigator) {
    try {
      navigator.serviceWorker.register('serviceWorker.js');
      console.log('SW registered');

    } catch (error) {
      console.log('SW failed');

    }
  }
});

