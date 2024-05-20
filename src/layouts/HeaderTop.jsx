import { Link } from "react-router-dom";

export default function HeaderTop() {
    return (
      <div className="py-4 primaryColor">
 <div className="flex flex-row gap-5 items-center justify-end pr-5 ">
       
        <nav className=" flex flex-row justify-between gap-3 text-xl font-bold text-white ">
          <Link to="/">
            {" "}
            <button className="">Product Website</button>
          </Link>
          <Link to="/logout">
            <button>Logout</button>
          </Link>{" "}
          
        </nav>
      
      </div>
       </div>
    );
  }