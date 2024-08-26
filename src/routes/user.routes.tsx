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
      element: <UserDashboard />,
    },
    // Add more nested admin routes here if needed
  ],
};
