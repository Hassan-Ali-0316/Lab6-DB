import React from 'react'
import AddBook from './components/AddBook';
import BookList from './components/BookList';

function App() {
  return (
    <div className='App'>
      <h1>LIBRARY MANAGEMENT SYSTEM</h1>
      <AddBook />
      <BookList />
    </div>
  )
}

export default App
