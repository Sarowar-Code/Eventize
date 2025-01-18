import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="container flex justify-between items-center py-4">
                <div className="nav-brand">
                    <Link
                        className="font-bold text-3xl text-teal-600 "
                        href="/"
                    >
                        EVENTIZE
                    </Link>
                </div>

                <ul className="flex gap-4 text-[#9C9C9C] font-medium">
                    <li className="hover:text-teal-400 cursor-pointer">
                        About
                    </li>
                    <li className="hover:text-teal-400 cursor-pointer">
                        Contact Us
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
