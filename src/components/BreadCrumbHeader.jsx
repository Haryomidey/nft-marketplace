import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const BreadCrumbHeader = ({ title, page }) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
                <h2 className="text-dark dark:text-white text-xl font-semibold">
                    {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Welcome {page} Page
                </p>
            </div>

            <nav className="text-sm text-gray-600 dark:text-gray-400 mt-3 md:mt-0 flex items-center gap-1">
                <Link
                    to="/"
                    className="hover:text-primary focus:text-primary transition-colors"
                >
                    Home
                </Link>
                <span className="text-gray-400"><IoIosArrowForward /></span>
                <span className="text-primary font-medium">{page}</span>
            </nav>
        </div>
    );
};

export default BreadCrumbHeader;