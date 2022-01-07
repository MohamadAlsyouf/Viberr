var $genreList = document.querySelector('.genre-list');
var $searchPage = document.querySelector('.search-page');
var $searchForm = document.querySelector('#search-form');
var $vibesMessage = document.querySelector('.vibes-message');

function handleGenrePress(event) {
  var dataViewValue = event.target.getAttribute('data-view');
  if (dataViewValue === 'artist-search') {
    $genreList.className = 'hidden';
    $searchPage.className = 'view';
  }
}
document.addEventListener('click', handleGenrePress);

function handleSubmit(event) {
  $vibesMessage.textContent = 'Similar Vibes';
  var name = $searchForm.elements.q.value;
  var xhr = new XMLHttpRequest();
  var targetUrl = encodeURIComponent('https://tastedive.com/api/similar?k=429885-Bootcamp-CY4UKJN5&limit=10&info=1&q=');
  xhr.open('GET', 'https://lfz-cors.herokuapp.com/?url=' + targetUrl + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    // console.log(xhr.status);
    // console.log(xhr.response);
  });
  xhr.send();
}
$searchForm.addEventListener('submit', handleSubmit);
