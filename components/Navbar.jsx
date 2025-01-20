import Link from "next/link";
import SignInOut from "./auth/SignInOut";

const Navbar = () => {
    return (
        <nav>
            <div className="container flex justify-between items-center py-4">
                <div className="nav-brand">
                    <Link
                        className="font-bold text-3xl text-teal-400 "
                        href="/"
                    >
                        EVENTIZE
                    </Link>
                </div>

                <ul className="flex items-center gap-4 text-[#9C9C9C] font-medium">
                    <li className="bg-teal-400 text-[#18191A] hover:bg-teal-600 px-3 py-1 rounded-md cursor-pointer">
                        <SignInOut />
                    </li>
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
