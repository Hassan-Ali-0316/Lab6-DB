import React, { useState } from 'react';
import axios from 'axios';

function AddBook() {
  const [book, setBook] = useState({ ISBN: '', Title: '', Author: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/books', book);
      alert('Book added successfully');
      setBook({ ISBN: '', Title: '', Author: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="ISBN"
        placeholder="ISBN_NO"
        value={book.ISBN}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="Title"
        placeholder="Title"
        value={book.Title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="Author"
        placeholder="Author"
        value={book.Author}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;
