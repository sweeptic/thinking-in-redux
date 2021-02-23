const example_state = {
  books: {
    selected: 3,
    count: 4,
    loading: false,
    collection: {
      1: { id: 1, title: 'book1' },
      2: { id: 2, title: 'book2' },
      3: { id: 3, title: 'book3' },
      4: { id: 4, title: 'book4' },
    },
  },
  users: {
    selectedUser: 2,
    list: {
      1: { id: 1, name: 'nir', email: 'nir@500tech.com' },
      2: { id: 2, name: 'max', email: 'max@500tech.com' },
      3: { id: 3, name: 'jor', email: 'joe@500tech.com' },
    },
  },
  library: {
    cards: {
      2: {
        books: [3, 4],
      },
    },
  },
};

const getSelectedUserDetails = state => {
  const books = getBooks(state);
  const users = getUsers(state);
  const selectedUser = getSelectedUser(state);
  const libraryCards = getLibraryCards(state);

  const booksForUser = libraryCards[selectedUser].books.reduce(
    (result = [], bookId) => {
      result.push(books[bookId]);
      return result;
    },
    []
  );

  return {
    [selectedUser]: {
      userProfile: users[selectedUser],
      books: booksForUser,
    },
  };
};
