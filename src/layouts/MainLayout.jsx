import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import Sidebar from "@/components/Sidebar";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = ({ children }) => {
  const pathname = usePathname(); // Get current route

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">{children}</div>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;