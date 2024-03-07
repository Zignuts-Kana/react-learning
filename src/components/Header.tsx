import { useEffect, useState } from "react";
import logo from "../assets/react.svg";
import Button from "./Button";
import Input from "./Input";
const headerRoughs = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/news", name: "News" },
  { path: "/contactUs", name: "ContactUs" },
];
const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to update windowWidth when window is resized
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="flex justify-between py-2 gap-1 max-sm:flex-col max-sm:justify-center p-2">
      <div
        className={`min-w-[calc(300*${windowWidth}/1080)] max-w-100 flex gap-1 items-center flex-wrap`}
      >
        <div
          className={`min-w-[calc(50*${windowWidth}/1080)] flex justify-center items-center`}
        >
          <img src={logo} alt="Img" className="w-[30px] h-[30px]" />
        </div>

        <ul
          className={`min-w-[calc(250*${windowWidth}/1080)] max-w-100 flex gap-1 items-center flex-wrap`}
        >
          {headerRoughs.map((item, index) => (
            <Button link={item.path} text={item.name} size="s" key={index} />
          ))}
        </ul>
      </div>
      <div
        className={`min-w-[calc(350*${windowWidth}/1080)] max-w-100 flex gap-1 items-center justify-around flex-wrap`}
      >
        {/* <input name="search" type="text" placeholder="Search"></input> */}
        <Input placeholder="Search" />
        <Button text="Search" size="s" />
      </div>
    </section>
  );
};
export default Header;
