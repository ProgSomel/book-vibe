import { useEffect, useState } from "react"

function Books () {
    const [books, seBooks] = useState([]);
    useEffect(()=> {
        fetch('books.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
  return (
    <div>
        <h1 className="text-5xl font-bold text-center mt-12">Books</h1>
        
    </div>
  )
}

export default Books