import './styles.css';
import ImagesApiService from './js/apiService';


const refs = {
  searchForm: document.querySelector('#search-form'),
  loadMore: document.querySelector('.load-more'),
}

const imagesApiService = new ImagesApiService();

refs.searchForm.addEventListener('submit', onSearch)
refs.loadMore.addEventListener('click', onLoadMore)

function onSearch(e) { 
  e.preventDefault();

  imagesApiService.query = e.currentTarget.elements.query.value;
  imagesApiService.resetPage();
  imagesApiService.fetchArticles().then(hits => console.log(hits));
}

function onLoadMore() { 
  imagesApiService.fetchArticles().then(hits => console.log(hits));
}

