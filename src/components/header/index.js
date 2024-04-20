import { AiOutlineSearch } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import { MdOutlineExploreOff } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import "./style.css";
import { IconContext } from "react-icons";

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <img
          className="logo"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />
        <div className="inputFake">
          <IconContext.Provider value={{ color: "#8e8e8e", size:'20px' }}>
            <AiOutlineSearch />
          </IconContext.Provider>
          <input placeholder="Pesquisar" />
        </div>

        <div className="menu-icons">
          <IconContext.Provider value={{ size: "26px" }}>
            <div>
              <AiFillHome />
            </div>
            <div>
              <RiMessengerLine />
            </div>
            <div>
              <BsPlusSquare />
            </div>
            <div>
              <MdOutlineExploreOff />
            </div>
            <FiHeart />
          </IconContext.Provider>
          <img
            className="img-user"
            src="https://avatars.githubusercontent.com/u/110493965?s=400&u=eb04efddbf13ad5ff668e9462d01b72cb512a5f0&v=4"
          />
        </div>
      </div>
    </header>
  );
}
