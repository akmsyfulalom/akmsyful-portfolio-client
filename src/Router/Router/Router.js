import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";

const { createBrowserRouter } = require("react-router-dom");
const { default: Dashboard } = require("../../Layout/Dashboard");
const { default: Main } = require("../../Layout/Main");
const { default: Blogs } = require("../../Pages/Blogs/Blogs");
const { default: DashboardAdmin } = require("../../Pages/DashboardAdmin/DashboardAdmin");
const { default: Home } = require("../../Pages/Home/Home");
const { default: Projects } = require("../../Pages/Projects/Projects");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardAdmin></DashboardAdmin>
            }
        ]
    }
])

export default router;