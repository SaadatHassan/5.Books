import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    //title: title is same as title
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 100), title },
    ];
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      if (book.id !== id) {
        return book;
      }
    });
    setBooks(updatedBooks);
  };

  const EditBookById = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <>
      <div className="app">
        <h1>Reading List</h1>
        <BookList
          books={books}
          onDelete={deleteBookById}
          onEdit={EditBookById}
        />
        <BookCreate onCreate={createBook} />
      </div>
    </>
  );
}

export default App;
