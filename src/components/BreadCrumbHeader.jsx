import { Link } from "react-router-dom";

const BreadCrumbHeader = ({title, page}) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
            <h2 className="text-white text-xl font-semibold">{title}</h2>
            <p className="text-gray-400 text-sm">Welcome {page} Page</p>
            </div>

            <nav className="text-sm text-gray-400 mt-3 md:mt-0">
                <Link to='/' className="hover:text-white cursor-pointer">Home</Link>
                <span className="mx-1">{">"}</span>
                <span className="text-primary">{page}</span>
            </nav>
        </div>
    )
}

export default BreadCrumbHeader;