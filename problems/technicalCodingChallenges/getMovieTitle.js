let https = require('https');

function getMovieTitle(substr) {
  https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`, (response) => {
    let data = '',
      movies = [];
    response.on('data', (chunk) => {
      data += chunk;
    })
    response.on('end', () => {
      let resp = JSON.parse(data);
      pages = resp.total_pages;
      if (resp.total_pages > 1) {
        for (let i = 1; i < resp.total_pages + 1; i++) {
          https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=${i}`, res => {
            let data = '';
            res.on('data', chunk => {
              data += chunk;
            })
            res.on('end', () => {
              let resp = JSON.parse(data);
              resp.data.forEach(movie => {
                movies.push(movie.Title);
              })
              console.log(movies.sort().join('\n'))
            })
          })
        }
      }
    })
  })
}

getMovieTitle('spiderman');