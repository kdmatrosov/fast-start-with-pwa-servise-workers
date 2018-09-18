const apiKey = 'okOInoQ8SUawA8pv3hAaTzPDoAm4rwj9';
const main = document.getElementById('main');

async function fetchTrending() {
  const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25`);
  const json = await res.json();

  json.data.map(function (elem) {
    const div = document.createElement('div');
    div.innerText = elem.embed_url;
    main.append(div);
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

