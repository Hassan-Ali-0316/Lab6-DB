import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/books');
        setBooks(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBooks();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ISBN</th>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.ISBN}>
            <td>{book.ISBN}</td>
            <td>{book.Title}</td>
            <td>{book.Author}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookList;
