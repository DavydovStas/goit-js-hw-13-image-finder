import './styles.css';
import ImagesApiService from './js/apiService';
import imageCardsTemplate from './templates/image-card.hbs';

const refs = {
  searchForm: document.querySelector('#search-form'),
  loadMore: document.querySelector('.load-more'),
  imagesConatainer: document.querySelector('.gallery'),
}

const imagesApiService = new ImagesApiService();

refs.searchForm.addEventListener('submit', onSearch)
refs.loadMore.addEventListener('click', onLoadMore)

function onSearch(e) { 
  e.preventDefault();

  if (e.currentTarget.elements.query.value === '') { return alert('Please enter your request text in the input field')} 
  deleteImagesMarkup();
  imagesApiService.searchQuery = e.currentTarget.elements.query.value;
  imagesApiService.resetPage();
  addImagesOnPage()
}

function onLoadMore() { 
  addImagesOnPage()
}

function addImagesMarkup(hits) { 
  refs.imagesConatainer.insertAdjacentHTML('beforeend', imageCardsTemplate(hits))
}

function deleteImagesMarkup() { 
  refs.imagesConatainer.innerHTML = '';
}

function addImagesOnPage() { 
  imagesApiService.fetchArticles().then(addImagesMarkup);
}
