import { useEffect, useState } from "react";
import Button from "./Button";
const sideBar = ["Home", "About", "News", "ContactUs"];

const SideBar = () => {
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
  const [sideBarList, setSideBarList] = useState<string[]>(sideBar);

  useEffect(() => {
    if (windowWidth <= 580) {
      setSideBarList(sideBar.map((item) => item[0]));
    } else {
      setSideBarList(sideBar);
    }
  }, [windowWidth]);

  return (
    <section className={`min-w-[calc(150*${windowWidth}/1080)] h-full`}>
      <ul className="flex flex-col gap-3 py-3">
        {sideBarList.map((item, index) => (
          <Button text={item} key={index} className="mx-10" size="l" />
        ))}
      </ul>
    </section>
  );
};

export default SideBar;
