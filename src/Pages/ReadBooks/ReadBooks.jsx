import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { MdPeople } from "react-icons/md";
import { MdOutlineInsertPageBreak } from "react-icons/md";
const ReadBooks = ({ book }) => {
  const {
    bookName,
    author,
    category,
  
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    image,
  } = book;
  return (
    <div>
      <div className="flex flex-col md:flex-row border-2 rounded-lg p-5 gap-12">
        <div className="bg-[#1313130D] md:w-[300px] flex justify-center py-5 rounded-lg">
          <img className="w-[200px] h-[200px]" src={image} alt="" />
        </div>
        <div>
          <div className="">
            <h1 className="text-3xl font-bold">{bookName}</h1>
            <p className=" py-4">By: {author}</p>

            <div className="flex flex-col lg:flex-row gap-5  pb-3">
              <p className="font-bold">Tag</p>
              {tags.map((tag, idx) => (
                <p
                  className="text-[#23BE0A]  rounded-lg text-center bg-[#23BE0A0D] px-2"
                  key={idx}
                >
                  #{tag}
                </p>
              ))}
              <div className="flex  items-center gap-1">
                <CiLocationOn />
                <p>Year of Publishing: {yearOfPublishing}</p>
              </div>
            </div>
            <div className="flex items-center border-b-2 py-3 gap-5">
              <div className="flex items-center gap-1 ">
                <MdPeople />
                <p className="font-extralight">Publisher: {publisher}</p>
              </div>
              <div className="flex items-center gap-1 font-light ">
                <MdOutlineInsertPageBreak />
                <p>Page: {totalPages}</p>
              </div>
            </div>

            <div className="mt-3 flex flex-col lg:flex-row gap-5">
                <p className="bg-[#328EFF26] inline py-1 px-2 rounded-full text-[#328EFF]">Category: {category}</p>
                <p className="bg-[#FFAC3326] inline text-[#FFAC33] py-1 px-2 rounded-full">Rating: {rating}</p>
                <button className=" bg-[#23BE0A] py-1 px-2 rounded-full text-white">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReadBooks.propTypes = {
  book: PropTypes.object.isRequired,
};

export default ReadBooks;
