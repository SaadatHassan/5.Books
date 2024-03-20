import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log(`Need to add this book with ${title}`);
    const updatedBooks = [...books, { id: 1, title: title }];
    setBooks(updatedBooks);
  };
  return (
    <>
      <div>
        {books.length}
        <BookCreate onCreate={createBook} />
      </div>
    </>
  );
}

export default App;
