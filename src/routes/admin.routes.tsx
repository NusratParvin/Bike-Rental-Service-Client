import ProtectedDashboardLayout from "../layouts/ProtectedDashboardLayout";
import AdminDashboard from "../pages/AdminDashboard";

export const adminRoutes = {
  path: "/admin",
  element: (
    <ProtectedDashboardLayout role="admin">
      <AdminDashboard />
    </ProtectedDashboardLayout>
  ),
  children: [
    {
      path: "dashboard",
      element: <AdminDashboard />,
    },
    // Add more nested admin routes here if needed
  ],
};
