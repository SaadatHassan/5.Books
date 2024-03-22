import { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../context/books";
import { useBooksContext } from "../hooks/use-books-context";

const BookList = () => {
  const { books } = useBooksContext();
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
};
export default BookList;
