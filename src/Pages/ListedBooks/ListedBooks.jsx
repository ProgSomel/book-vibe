import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utils/localStorage";
import ReadBooks from "../ReadBooks/ReadBooks";

const ListedBooks = () => {
  const booksFromLoader = useLoaderData();
  const readbooksIds = getStoredBook("read");

  const readBooks = booksFromLoader.filter(book => readbooksIds.includes(book.bookId));




  return (
    <div>
      <div className="flex justify-center items-center bg-[#1313130D] p-4 rounded-lg font-bold mt-5">
        <h1>Books</h1>
      </div>

      <div>
        <div className="flex justify-center">
          <select className="select select-primary bg-[#23BE0A] border-none max-w-xs text-white font-bold mt-8">
            <option disabled selected>
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
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
