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
  deleteImagesMarkup();
  imagesApiService.query = e.currentTarget.elements.query.value;
  imagesApiService.resetPage();
  imagesApiService.fetchArticles().then(addImagesMarkup);
}

function onLoadMore() { 
  imagesApiService.fetchArticles().then(addImagesMarkup);
}

function addImagesMarkup(hits) { 
  refs.imagesConatainer.insertAdjacentHTML('beforeend', imageCardsTemplate(hits))
}

function deleteImagesMarkup() { 
  refs.imagesConatainer.innerHTML = '';
}
