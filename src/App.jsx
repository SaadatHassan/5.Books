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
  return (
    <>
      <div className="app">
        <BookList books={books} />
        <BookCreate onCreate={createBook} />
      </div>
    </>
  );
}

export default App;
