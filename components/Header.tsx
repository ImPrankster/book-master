import Link from "next/link";

const Header = () => {
  return (
    <div className="p-2">
      <div className="navbar rounded-box bg-primary text-primary-content shadow-md">
        <div className="flex-1">
          <Link href="/" className="btn-ghost btn text-xl normal-case">
            Book Master
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="btn-ghost btn" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="btn-ghost btn" href="/categories">
                Categories
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
