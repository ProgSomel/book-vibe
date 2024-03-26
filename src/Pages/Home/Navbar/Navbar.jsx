import { NavLink } from "react-router-dom";

function Navbar() {
  const navlikks = <div className="flex items-center flex-col md:flex-row gap-8">
    <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? `active text-[#23BE0A] border border-[#23BE0A] px-3 py-1 rounded-md font-bold` : ""
  }
>
  Home
</NavLink>

    <NavLink
  to="/listedBooks"
  className={({ isActive, isPending }  ) =>
    isPending ? `pending` : isActive ? `active text-[#23BE0A] border border-[#23BE0A] px-3 py-1 rounded-md font-bold` : ""
  }
>
  Listed Books
</NavLink>

    <NavLink
  to="/pagesToRead"
  className={({ isActive, isPending }  ) =>
    isPending ? `pending` : isActive ? `active text-[#23BE0A] border border-[#23BE0A] px-3 py-1 rounded-md font-bold` : ""
  }
>
  Pages to Read
</NavLink>
    <NavLink
  to="/aboutPage"
  className={({ isActive, isPending }  ) =>
    isPending ? `pending` : isActive ? `active text-[#23BE0A] border border-[#23BE0A] px-3 py-1 rounded-md font-bold` : ""
  }
>
  About Us
</NavLink>

    <NavLink
  to="/contactUs"
  className={({ isActive, isPending }  ) =>
    isPending ? `pending` : isActive ? `active text-[#23BE0A] border border-[#23BE0A] px-3 py-1 rounded-md font-bold` : ""
  }
>
  Contact Us
</NavLink>



  </div>
  return (
    
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlikks}
              <div className=" md:hidden flex justify-center mt-2  gap-4">
          <a className="p-2 rounded-md bg-[#23BE0A] text-white font-bold">Sing In</a>
          <a className="p-2 rounded-md bg-[#59C6D2] text-white font-bold">Sing Up</a>
        </div>
            </ul>
          </div>
         
          <a className="btn btn-ghost text-xl text-green-400">Book <span className="italic">ViBe</span></a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
           {navlikks}
          </ul>
        </div>
        <div className=" hidden md:flex  navbar-end gap-4">
          <a className="p-2 rounded-md bg-[#23BE0A] text-white font-bold">Sing In</a>
          <a className="p-2 rounded-md bg-[#59C6D2] text-white font-bold">Sing Up</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
