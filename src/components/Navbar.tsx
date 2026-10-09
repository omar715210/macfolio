import { navLinks, navIcons } from "@constants/index";
import dayjs from "dayjs";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Omar's Portfolio</p>
        <ul>
          {navLinks.map((item: { id: number; name: string }) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map((item: { id: number; img: string }) => (
            <li key={item.id}>
              <img src={item.img} alt={`icon${item.id}`} />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
