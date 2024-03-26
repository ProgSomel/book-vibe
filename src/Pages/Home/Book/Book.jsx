import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Book = ({book}) => {
    const {bookId, image, bookName, author, rating, category, tags} = book;
  return (
    <Link to={`/book/${bookId}`}>
        <div>
      <div className="card  border h-[450px]  bg-base-100 ">
        <div className="px-5 pt-4 ">
        <div className="bg-gray-200 rounded-lg pb-8">
        <figure className="px-10 pt-10 ">
          <img 
            src={image}
            alt="Shoes"
            className="rounded-xl w-[150px] h-[150px]"
          />
        </figure>
        </div>
        </div>
        <div className="card-body ">
        <div className="flex gap-4">
            {tags.map((tag, idx) => <p className="text-[#23BE0A]  rounded-lg text-center bg-[#23BE0A0D]" key={idx}>{tag}</p>)}
        </div>
          <h2 className="card-title">{bookName}</h2>
          <p className="border-b-2 border-dotted pb-3">By: {author}</p>
          <div className="card-actions">
            <p>{category}</p>
            <div className="flex items-center gap-2">
                <p>{rating}</p>
                <FaRegStar />

            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
