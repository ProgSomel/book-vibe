import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utils/localStorage";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishListBooks from "../WishListBooks/WishListBooks";
import { useState } from "react";

const ListedBooks = () => {
  const booksFromLoader = useLoaderData();
  const readbooksIds = getStoredBook("read");

  const [sortedBooks, setSortedBooks] = useState([]);

  

  let readBooks = booksFromLoader.filter(book => readbooksIds.includes(book.bookId));

  const whishListBooksIds = getStoredBook('wished');
  const whishListBooks = booksFromLoader.filter(book => whishListBooksIds.includes(book.bookId));


  const handleBooksFilter = (filterText) => {
    if(filterText === 'rating') {
       
        const sortedValues = readBooks.sort((a, b) => b.rating - a.rating);
        setSortedBooks(sortedValues);

    }
    else if (filterText === 'page') {
        const sortedValues = readBooks.sort((a, b) => b.totalPages - a.totalPages);
        setSortedBooks(sortedValues);
    }
    else if(filterText === 'year') {
        const sortedValues = readBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        setSortedBooks(sortedValues);
    }
  }




  return (
    <div>
      <div className="flex justify-center items-center bg-[#1313130D] p-4 rounded-lg font-bold mt-5">
        <h1>Books</h1>
      </div>

      <div>
        <div className="flex justify-center">
          <select onChange={(e)=> handleBooksFilter(e.target.value)} className="select select-primary bg-[#23BE0A] border-none max-w-xs text-white font-bold mt-8">
            <option disabled selected hidden>
              Sort by
            </option>
            <option value="rating" className="bg-white text-black font-bold">Rating</option>
            <option value="page" className="bg-white text-black font-bold">Number Pages</option>
            <option value="year" className="bg-white text-black font-bold">Published Year</option>
            
          </select>
        </div>
      </div>

      {/*! tab  */}
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Whishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col gap-8">
            {
               sortedBooks.length == 0 ? readBooks.map(book => <ReadBooks key={book.bookId} book={book}></ReadBooks>) : sortedBooks.map(book => <ReadBooks key={book.bookId} book={book}></ReadBooks>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col gap-8">
            {
                whishListBooks.map(book => <WishListBooks key={book.bookId} book={book}></WishListBooks>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
