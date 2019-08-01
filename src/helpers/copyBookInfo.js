import { store } from '../store/index';

export default function copyBookInfo(i, dataName) {
  console.log(dataName);
  const selected = store.getters.searchResults.items[i].volumeInfo;
  const title = selected.title;
  const image = selected.imageLinks['smallThumbnail'];
  const authors = selected.authors;
  const bookInfo = {
    title,
    image,
    authors,
  };
  //send back to store
  // add to want to read view
  store.dispatch('addBook', { bookInfo, dataName });
}
