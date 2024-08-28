import BikeDetails from "../components/BikeDetails";
import BikeListing from "../components/BikeListing";
import MyProfile from "../components/MyProfile";
import MyRentals from "../components/MyRentals";
import ProtectedDashboardLayout from "../layouts/ProtectedDashboardLayout";
import UserDashboard from "../pages/UserDashboard";

export const userRoutes = {
  path: "/user",
  element: (
    <ProtectedDashboardLayout role="user">
      <UserDashboard />
    </ProtectedDashboardLayout>
  ),
  children: [
    {
      path: "dashboard",
      // element: <UserDashboard />,
      children: [
        { path: "profile", element: <MyProfile /> },
        { path: "bike-listing", element: <BikeListing /> },
        { path: "my-rentals", element: <MyRentals /> },
        { path: "bike-details/:bikeId", element: <BikeDetails /> }, // Example route for bike details
      ],
    },
  ],
};
