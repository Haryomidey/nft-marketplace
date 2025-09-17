import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/dashboard";
import PrivateRoutes from "../components/PrivateRoutes";
import TrendingBids from "../pages/trending-bids";
import ActiveBids from "../pages/active-bid";
import FavoriteBids from "../pages/favorite-bids";
import Collections from "../pages/collections";
import Profile from "../pages/profile";
import Settings from "../pages/settings";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/login";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            { path: "/login", element: <Login /> }
        ]
    },
    {
        element: <PrivateRoutes />,
        children: [
            {
                path: "/",
                element: <DashboardLayout />,
                children: [
                    { path: "", element: <Dashboard /> },
                    { path: "/trending-bids", element: <TrendingBids /> },
                    { path: "/active-bid", element: <ActiveBids /> },
                    { path: "/favorite-bids", element: <FavoriteBids /> },
                    { path: "/collections", element: <Collections /> },
                    { path: "/profile", element: <Profile /> },
                    { path: "/settings", element: <Settings /> },
                ],
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
