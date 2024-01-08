import React from "react";
import { Link } from "react-router-dom";
import { FaVideo } from "react-icons/fa6";
import { RiGhostSmileFill } from "react-icons/ri";
import { MdSportsVolleyball } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa6";
export default function NavHeader() {
  return (
    <header>
      <Link to="/">
        <h1>OverTheTop</h1>
      </Link>
      <nav>
        <button>
          <FaVideo />
          <span>영화</span>
        </button>
        <button>
          <RiGhostSmileFill />
          <span>애니메이션</span>
        </button>
        <button>
          <MdSportsVolleyball />
          <span>스포츠</span>
        </button>
        <button>
          <FaNewspaper />
          <span>뉴스</span>
        </button>
      </nav>
    </header>
  );
}
