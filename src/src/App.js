import { Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";
import Dashboard from "./components/pages/Dashboard";
import VehiclesDetails from "./components/pages/VehiclesDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "./components/pages/products/Products";
import Complaints from "./components/pages/complaints/Complaints";
import Auction from "./components/pages/auction/Auction";
import PaymentGateway from "./components/pages/paymentgateway/PaymentGateway";
import Meeting from "./components/pages/meeting/Meeting";
import Dealers from "./components/pages/dealers/Dealers";
import Delivery from "./components/pages/delivery/Delivery";
import Discounts from "./components/pages/discounts/Discounts";
import VendorManages from "./components/pages/vendormanages/VendorManages";
import Category from "./components/pages/category/Category ";
import Banner from "./components/pages/banner/Banner";
import Orders from "./components/pages/orders/Orders";
import Reports from "./components/pages/reports/Reports";
import Terms from "./components/pages/terms/Terms";
import PrivacyPolicy from "./components/pages/privacyPolicy/PrivacyPolicy";
import Support from "./components/pages/support/Support";
import Wishlist from "./components/pages/wishlist/Wishlist";
import AddProduct from "./components/pages/products/AddProduct";
import VendorLogin from "./vendorPanel/components/forms/VendorLogin.jsx";
import VendorProducts from "./vendorPanel/components/pages/products/VendorProducts";
import VendorCategories from "./vendorPanel/components/pages/categories/VendorCategories";
import VendorOrders from "./vendorPanel/components/pages/orders/VendorOrders";
import VendorSupport from "./vendorPanel/components/pages/support/VendorSupport";
import Commission from "./vendorPanel/components/pages/commission/Commission";
import VendorReports from "./vendorPanel/components/pages/reports/VendorReports";
import VendorComplaints from "./vendorPanel/components/pages/complaints/VendorComplaints";
import VendorComments from "./vendorPanel/components/pages/comments/VendorComments";
import VendorTransactions from "./vendorPanel/components/pages/transactions/VendorTransactions";
import VendorUsers from "./vendorPanel/components/pages/users/VendorUsers";
import VendorDashboard from "./vendorPanel/components/pages/VendorDashboard";
import VendorPrivacy from "./vendorPanel/components/pages/privacyPolicy/VendorPrivacy";
import VendorFavorites from "./components/pages/favorites/VendorFavorites";
import CouponsDiscount from "./vendorPanel/components/pages/couponsDiscount/CouponsDiscount";
import Forgot from "./components/forms/Forgot";
import Vendors from "./components/pages/vendors/Vendors";
import VerifyOtp from "./components/forms/VerifyOtp";
import VendorAddProduct from "./vendorPanel/components/pages/products/VendorAddProduct";
import VendorViewProduct from "./vendorPanel/components/pages/products/VendorViewProduct";



function App() {
  return (
    <>
    
      <ToastContainer />
      <Routes>
        <Route index element={<Login />} />
        <Route path="/forgotPassword" element={<Forgot />} />
        <Route path="/verifyOtp" element={<VerifyOtp />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/meeting" element={<Meeting />} />
        <Route path="/dealers" element={<Dealers />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/vehiclesdetails" element={<VehiclesDetails />} />
        <Route path="/delivery" element={<Delivery/>} />
        <Route path="/discounts" element={<Discounts/>} />
        <Route path="/vendormanages" element={<VendorManages/>} />
        <Route path="/category" element={<Category />} />
        <Route path="/paymentgateway" element={<PaymentGateway />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/banners" element={<Banner />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/support" element={<Support />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/addProduct" element={<AddProduct />} />
        {/* ---------------Vendor Panel----------------------- */}
        <Route path="/vendorLogin" element={<VendorLogin />} />
        <Route path="/vendorDashboard" element={<VendorDashboard />} />
        <Route path="/vendorProducts" element={<VendorProducts />} />
        <Route path="/vendorViewProduct/:id" element={<VendorViewProduct />} />
        <Route path="/vendorAddProduct" element={<VendorAddProduct />} />
        <Route path="/vendorCategories" element={<VendorCategories />} />
        <Route path="/vendorOrders" element={<VendorOrders />} />
        <Route path="/vendorSupport" element={<VendorSupport />} />
        <Route path="/commission" element={<Commission />} />
        <Route path="/vendorReports" element={<VendorReports />} />
        <Route path="/vendorComplaints" element={<VendorComplaints />} />
        <Route path="/vendorComments" element={<VendorComments />} />
        <Route path="/vendorTransactions" element={<VendorTransactions />} />
        <Route path="/vendorUsers" element={<VendorUsers />} />
        <Route path="/vendorPrivacy" element={<VendorPrivacy />} />
        <Route path="/vendorFavorites" element={<VendorFavorites />} />
        <Route path="/vendorCoupons" element={<CouponsDiscount />} />
        <Route path="/vendorCommission" element={<Commission />} />
       
       
      </Routes>
    </>
  );
}

export default App;
