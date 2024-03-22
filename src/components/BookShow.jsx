import { useState } from "react";
import BookEdit from "./BookEdit";
import { useBooksContext } from "../hooks/use-books-context";

const BookShow = ({ book }) => {
  const { deleteBookById } = useBooksContext();

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = showEdit ? (
    <BookEdit book={book} onSubmit={handleSubmit} />
  ) : (
    <h3>{book.title}</h3>
  );

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
