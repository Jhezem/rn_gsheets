/**
 * Update Book information
 *
 * @param {function} Navigation - React Navigation
 * @param {array} books - Books data
 * @param {string} bookId - The id of the book to update
 */
export const update = (navigation, books, bookId) => {
  const currentBook = books.find(book => book.id === bookId);
  navigation.navigate('UpdateBook', {book: currentBook});
};

/**
 * Remove Book from database
 *
 * @param {string} id - The id of the book to remove
 * @param {function} mutate - React-Query Mutate function
 */
export const remove = (id, mutate) => {
  const libroData = {
    id: id,
    action: 'delete',
    collection: 'books',
  };
  mutate(libroData);
};

/**
 * View Book information
 *
 * @param {function} Navigation - React Navigation
 * @param {array} books - Books data
 * @param {string} bookId - The id of the book to view
 */
export const view = (navigation, books, bookId) => {
  const currentBook = books.find(book => book.id === bookId);
  navigation.navigate('Libro', {book: currentBook});
};