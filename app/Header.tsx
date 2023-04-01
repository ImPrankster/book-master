import Link from "next/link";

const Header = () => {
  return (
    <header className="p-2">
      <div className="navbar rounded-box bg-primary text-primary-content shadow-md">
        <div className="flex-1">
          <a className="btn-ghost btn text-xl normal-case">Book Master</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="btn-ghost btn" href="">
                Home
              </Link>
            </li>
            <li>
              <Link className="btn-ghost btn" href="">
                Cateories
              </Link>
            </li>
            <li>
              <Link className="btn-ghost btn" href="">
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
