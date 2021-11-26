import React from "react";
import { CgLogOut } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { BsCashCoin } from "react-icons/bs";
import { RiFileList3Line, RiPlantLine, RiUser3Line } from "react-icons/ri";
import "./Dashboard.css";
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineDashboard,
  MdRateReview,
} from "react-icons/md";
import AddPlants from "./Admin/AddPlants/AddPlants";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import PlantList from "./Admin/PlantList/PlantList";
import OrderList from "./Admin/OrdersList/OrderList";
import AddAdmin from "./Admin/AddAdmin/AddAdmin";
import AdminRoute from "../../Private/AdminRoute";
import SubmitReview from "./Clients/SubmitReview/SubmitReview";
import MyOrders from "./Clients/MyOrders/MyOrders";
import Pay from "./Clients/Pay/Pay";
import { AiFillBackward } from "react-icons/ai";
import AllUserList from "./Admin/AllUsers/AllUserLinst";

const Dashboard = () => {
  const { path, url } = useRouteMatch();
  const { user, admin, logOut } = useAuth();
  const history = useHistory();
  const ogHome = () => {
    history.push("/");
  };

  return (
    <>
      {admin ? (
        <div className="flex h-screen">
        <aside className="dashboard  bg-bgPrimary mr-1 h-full block w-14 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-r-lg py-2 pl-2  top-2 bottom-2 left-2">
          <div
            title={user.displayName}
            className="w-full flex my-2  md:pr-20 cursor-pointer bg-bgPrimary items-center text-white py-3 rounded-l-lg"
          >
            <img
              className="w-10 h-auto rounded-full mr-3"
              src={
                user.photoURL ||
                "https://i.ibb.co/fScLdY0/pic-1171831236-1.png"
              }
              alt=""
            />
            <span className=" hidden md:block">{user.displayName}</span>
          </div>

          <NavLink
            title="Dashboard"
            to={`${url}`}
            className="w-full flex my-2 md:px-5 md:pr-20  items-center text-white  py-3 rounded-l-lg"
            activeClassName="shadow-md relative dashboardLink w-full block py-3 bg-blue-500"
          >
            <MdOutlineDashboard className="ml-3 text-xl" />{" "}
            <span className="ml-0 hidden md:block w-full">Dashboard</span>
          </NavLink>
          <button
              title="My Orders"
              onClick={ogHome}
              className="w-full flex my-2 md:px-5 md:pr-20  items-center text-white py-3 rounded-l-lg hover:shadow-md relative hover:text-textPrimary dashboardLink hover:bg-white"
            >
              <AiFillBackward className="ml-3 text-xl" />{" "}
              <span className="ml-1 hidden md:block w-full">Go Home</span>
            </button>
          <NavLink
            title="Add Plant"
            to={`${url}/add_plant`}
            className="w-full flex my-2 md:px-5 md:pr-20  items-center text-white py-3 rounded-l-lg  "
            activeClassName="shadow-md relative dashboardLink w-full block py-3 bg-white text-textPrimary"
          >
            <IoMdAdd className="ml-3 text-xl" />{" "}
            <span className="ml-0 hidden md:block w-full">Add Plant</span>
          </NavLink>
          <NavLink
            title="Plants List"
            to={`${url}/plants_list`}
            className="w-full flex my-2 md:px-5 md:pr-20  items-center text-white py-3 rounded-l-lg"
            activeClassName="shadow-md relative dashboardLink w-full block py-3 bg-white text-textPrimary"
          >
            <RiPlantLine className="ml-3 text-xl" />{" "}
            <span className="ml-0 hidden md:block w-full">Plants List</span>
          </NavLink>
          <NavLink
            title="Manage Orders"
            to={`${url}/manage_orders`}
            className="w-full flex my-2 md:px-5 md:pr-20  items-center text-white py-3 rounded-l-lg  "
            activeClassName="shadow-md relative dashboardLink w-full block py-3 bg-white text-textPrimary"
          >
            <RiFileList3Line className="ml-3 text-xl" />{" "}
            <span className="ml-0 hidden md:block w-full">Orders</span>
          </NavLink>
          <NavLink
            title="All Users"
            to={`${url}/all_users`}
            className="w-full flex my-2 md:px-5 md:pr-20  items-center text-white py-3 rounded-l-lg  "
            activeClassName="shadow-md relative dashboardLink w-full block py-3 bg-white text-textPrimary"
          >
            <RiUser3Line className="ml-3 text-xl" />{" "}
            <span className="ml-0 hidden md:block w-full">All Users</span>
          </NavLink>

          <NavLink
            title="Make Admin"
            to={`${url}/make_admin`}
            className="w-full flex my-2 md:px-5 md:pr-20  items-center text-white py-3 rounded-l-lg  "
            activeClassName="shadow-md relative dashboardLink w-full block py-3 bg-white text-textPrimary"
          >
            <MdOutlineAdminPanelSettings className="ml-3 text-xl" />{" "}
            <span className="ml-0 hidden md:block w-full">
              Add Admin
            </span>
          </NavLink>
          <button
            title="LogOut"
            onClick={logOut}
            className="w-full flex my-2 md:px-5 md:pr-20  items-center  py-3 rounded-l-lg font-bold text-red-700"
          >
            <CgLogOut className="ml-3 text-xl" />{" "}
            <span className="ml-5 hidden md:block w-full">LogOut</span>
          </button>
        </aside>

        <div className="h-auto w-full overflow-y-auto px-0 py-0 bg-gray-100">
          <ScrollToTop />
          <Switch>
            <Route exact path={path}>
            <PlantList />
            </Route>
            <AdminRoute path={`${path}/add_plant`}>
              <AddPlants />
            </AdminRoute>
            <AdminRoute path={`${path}/plants_list`}>
              <PlantList />
            </AdminRoute>
            <AdminRoute path={`${path}/manage_orders`}>
              <OrderList />
            </AdminRoute>
            <AdminRoute path={`${path}/make_admin`}>
              <AddAdmin />
            </AdminRoute>
            <AdminRoute path={`${path}/all_users`}>
              <AllUserList />
            </AdminRoute>
          </Switch>
        </div>
      </div>
      ):(
        <div className="flex h-screen">
          <aside className="dashboard  bg-bgPrimary mr-1 h-full block w-14 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-r-lg py-2 pl-2  top-2 bottom-2 left-2">
            <div
              title={user.displayName}
              className="w-full flex my-2  md:pr-20 cursor-pointer bg-bgPrimary items-center text-white py-3 rounded-l-lg"
            >
              <img
                className="w-10 h-auto rounded-full mr-3"
                src={
                  user.photoURL ||
                  "https://i.ibb.co/fScLdY0/pic-1171831236-1.png"
                }
                alt=""
              />
              <span className=" hidden md:block">{user.displayName}</span>
            </div>

            <button
              title="My Orders"
              onClick={ogHome}
              className="w-full flex my-2 md:px-5 md:pr-20  items-center text-white py-3 rounded-l-lg hover:shadow-md relative hover:text-textPrimary dashboardLink hover:bg-white"
            >
              <AiFillBackward className="ml-3 text-xl" />{" "}
              <span className="ml-1 hidden md:block w-full">Go Home</span>
            </button>
            <NavLink
              title="My Orders"
              to={`${url}/my_orders`}
              className="w-full flex my-2 md:px-5 md:pr-20  items-center text-white py-3 rounded-l-lg  "
              activeClassName="shadow-md relative dashboardLink w-full block py-3 bg-white text-textPrimary"
            >
              <FiShoppingBag className="ml-3 text-xl" />{" "}
              <span className="ml-1 hidden md:block w-full">My Orders</span>
            </NavLink>
            <NavLink
              title="Submit Review"
              to={`${url}/submit_review`}
              className="w-full flex my-2 md:px-5 md:pr-20  items-center text-white py-3 rounded-l-lg"
              activeClassName="shadow-md relative dashboardLink w-full block py-3 bg-white text-textPrimary"
            >
              <MdRateReview className="ml-3 text-xl" />{" "}
              <span className="ml-1 hidden md:block  w-full">Add Review</span>
            </NavLink>
            <NavLink
              title="Pay"
              to={`${url}/pay`}
              className="w-full flex my-2 md:px-5 md:pr-20  items-center text-white py-3 rounded-l-lg  "
              activeClassName="shadow-md relative dashboardLink w-full block py-3 bg-white text-textPrimary"
            >
              <BsCashCoin className="ml-3 text-xl" />{" "}
              <span className="ml-1 hidden md:block w-full text-left">pay</span>
            </NavLink>

            <button
              title="LogOut"
              onClick={logOut}
              className="w-full flex my-2 md:px-5 md:pr-20  items-center  py-3 rounded-l-lg font-bold text-red-700"
            >
              <CgLogOut className="ml-3 text-xl" />{" "}
              <span className="ml-1 hidden md:block w-full text-left">LogOut</span>
            </button>
          </aside>

          <div className="h-auto w-full overflow-y-auto px-0 py-0 bg-gray-100">
            <ScrollToTop />

            <Switch>
              <Route exact path={path}>
                <MyOrders />
              </Route>
              <Route path={`${path}/my_orders`}>
                <MyOrders />
              </Route>
              <Route path={`${path}/submit_review`}>
                <SubmitReview />
              </Route>
              <Route path={`${path}/pay`}>
                <Pay />
              </Route>
            </Switch>
          </div>
        </div>
      )}
        
    </>
  );
};

export default Dashboard;
