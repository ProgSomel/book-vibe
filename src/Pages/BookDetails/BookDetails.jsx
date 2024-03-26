import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.bookId === parseInt(id));
  const {
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    image,
  } = book;
  return (
    <div>
      <div className="hero min-h-screen mt-5">
        <div className="hero-content flex-col gap-8 lg:flex-row">
          <div className="bg-base-200 rounded-lg  p-12 lg:w-1/2 flex justify-center">
            <img src={image} className=" md:w-[83%] p-5  rounded-lg " />
          </div>
          <div className="lg:w-1/2">
          <div className="">
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p className="border-b py-4">By: {author}</p>
            <p className="border-b py-2">{category}</p>
            <p className="py-6">
              <span className="font-bold">Review</span>: {review}
            </p>
            <div className="flex gap-5 border-b pb-3">
            <p className="font-bold">Tag</p>
                {
                    tags.map((tag, idx) => <p className="text-[#23BE0A]  rounded-lg text-center bg-[#23BE0A0D] px-2" key={idx}>#{tag}</p>)
                }
            </div>
            <div className="mt-5">
                <div className="flex gap-20">
                    <p>Number of Pages: </p>
                    <p>{totalPages}</p>
                </div>
                <div className="flex gap-20 mt-2">
                    <p>Publisher: </p>
                    <p className="ml-12">{publisher}</p>
                </div>
                <div className="flex gap-20 mt-2">
                    <p>Year Of Publishing: </p>
                    <p className="ml-0">{yearOfPublishing}</p>
                </div>
                <div className="flex gap-20 mt-2">
                    <p>Rating: </p>
                    <p className="ml-20">{rating}</p>
                </div>

                <div className="flex gap-5 mt-5">
                    <button className="btn btn-outline">Read</button>
                    <button className="btn bg-[#50B1C9] text-white">Wishlist</button>
                </div>

            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
