// Constants and Variables
const API_KEY = '89194dedd2cd4815893a2c41dbd7adcb'; //CONFIG.newsAPIKey
const BASE_URL = 'https://newsapi.org/v2/top-headlines?';

//Cached element references



// event listeners



// functions

$.ajax(BASE_URL + API_KEY)
    .then(function(data) {
        newsData = data;
        render();
    }, function(error) {
        console.log('Error: ', error);
    });