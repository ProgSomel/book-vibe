import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utils/localStorage";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishListBooks from "../WishListBooks/WishListBooks";

const ListedBooks = () => {
  const booksFromLoader = useLoaderData();
  const readbooksIds = getStoredBook("read");

  const readBooks = booksFromLoader.filter(book => readbooksIds.includes(book.bookId));

  const whishListBooksIds = getStoredBook('wished');
  const whishListBooks = booksFromLoader.filter(book => whishListBooksIds.includes(book.bookId));




  return (
    <div>
      <div className="flex justify-center items-center bg-[#1313130D] p-4 rounded-lg font-bold mt-5">
        <h1>Books</h1>
      </div>

      <div>
        <div className="flex justify-center">
          <select className="select select-primary bg-[#23BE0A] border-none max-w-xs text-white font-bold mt-8">
            <option disabled selected hidden>
              Sort by
            </option>
            <option>Game of Thrones</option>
            <option>Lost</option>
            <option>Breaking Bad</option>
            <option>Walking Dead</option>
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
                readBooks.map(book => <ReadBooks key={book.bookId} book={book}></ReadBooks>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div>
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
