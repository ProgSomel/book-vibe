import { NavLink } from "react-router-dom";
import bannerImg from "../../../../public/images/banner.png"
function Banner() {
  return (
    <div className=" bg-[#1313130D] rounded-lg mt-5">
      <div className="flex flex-col md:flex-row items-center justify-evenly p-10">
        <div>
          <h1 className="font-bold text-6xl">
            Books to freshen <br />
            up your bookself
          </h1>
          <NavLink to="/listedBooks">
            <button className="bg-[#23BE0A] text-white font-bold p-3 rounded-lg mt-8">
              view The List
            </button>
          </NavLink>
        </div>
        <div>
          <img className="" src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
