import { useEffect, useState } from "react"
import Book from "../Book/Book";

function Books () {
    const [books, setBooks] = useState([]);
    useEffect(()=> {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
  return (
    <div className="">
        <h1 className="text-5xl font-bold text-center mt-12">Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            {books.map(book => <Book key={book.bookId} book={book}></Book>)}
        </div>
        
    </div>
  )
}

export default Books