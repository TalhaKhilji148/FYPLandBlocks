import FeaturedProperties from "./screens/BuyerAndSeller/featuredProperties/FeaturedProperties";
import Footer from "./screens/BuyerAndSeller/footer/Footer";
import Hero from "./screens/BuyerAndSeller/hero/Hero";
import Navbar from "./screens/BuyerAndSeller/navbar/Navbar";
import Newsletter from "./screens/BuyerAndSeller/newsletter/Newsletter";
import PopularProperties from "./screens/BuyerAndSeller/popularProperties/PopularProperties";
import Signin from "./screens/BuyerAndSeller/signin/Signin";
import Signup from "./screens/BuyerAndSeller/signup/Signup";
import Properties from "./screens/BuyerAndSeller/properties/Properties";
import PropertyDetail from "./screens/BuyerAndSeller/propertyDetail/PropertyDetail";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import AboutApp from "./screens/BuyerAndSeller/AboutApp";
import { useEffect } from "react";
import ContactUs from "./screens/BuyerAndSeller/ContactUs";
import AboutUs from "./screens/BuyerAndSeller/AboutUs";
import Feedback from "./screens/BuyerAndSeller/Feedback";
import Welcome from "./screens/BuyerAndSeller/Welcome";
import Services from "./screens/BuyerAndSeller/Services";
import Transactions from "./screens/BuyerAndSeller/Transactions";
import MyListings from "./screens/BuyerAndSeller/MyListings";
import AllPropertyList from "./screens/BuyerAndSeller/AllPropertyList";
import ErrorPage from "./screens/BuyerAndSeller/ErrorPage";
import LoginCompany from "./screens/CompanyPortal/LoginCompany/LoginCompany";
import SignUpCompany from "./screens/CompanyPortal/SignUpCompany/SignUpCompany";
import HeroCompany from "./screens/CompanyPortal/HeroCompany/HeroCompany";
import HeaderCompany from "./screens/CompanyPortal/HeaderCompany/HeaderCompany";
import Video from "./screens/CompanyPortal/Video/Video"
import FeaturesCompany from "./screens/CompanyPortal/Features/FeaturesCompany"
import FooterCompany from "./screens/CompanyPortal/FooterCompany/FooterCompany";
import AboutUsCompany from "./screens/CompanyPortal/AboutUsCompany.jsx"
import Brands from "./screens/CompanyPortal/Brands/Brands";
import Blog from "./screens/CompanyPortal/Blog/Blog";
import ScrollToTop from "./screens/CompanyPortal/ScrollToTop/ScrollToTop.jsx";
import BlogDetailsPage from "./screens/CompanyPortal/blog-details/BlogDetailsPage";
import IpfsScreen from "./screens/BuyerAndSeller/Ipfs";
import LoaderIpfs from "./components/LoaderIpfs";
import AllProperties from "./screens/BuyerAndSeller/AllProperties.jsx";
import ListProperty from "./screens/CompanyPortal/ListProperty/ListProperty";
import PropDetailsSeller from "./screens/BuyerAndSeller/propdetailseller/PropDetailsSeller.jsx";
import PredictPrices from "./screens/BuyerAndSeller/predictprices/PredictPrices.jsx";
import CompanyListings from "./screens/CompanyPortal/CompanyListings.jsx";
import ListBlog from "./screens/CompanyPortal/ListBlog/ListBlog.jsx";
import MyBlogs from "./screens/CompanyPortal/MyBlogs.jsx";
import CreateItem from "./screens/CompanyPortal/Auctions/CreateItem.jsx";
import Card from "./screens/CompanyPortal/Auctions/Card.jsx";
import Profile from "./screens/BuyerAndSeller/Profile.jsx";
function App() {
  const { user } = useSelector((state) => state.auth);
  const url = useLocation().pathname;

  useEffect(() => {
    url && window.scrollTo(0, 0);
  }, [url]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <>
                <ScrollToTop />

                <Navbar />
                <Hero />
                {/* <ListProperty /> */}

                {/* <ErrorPage/> */}
                {/* <Navbar /> */}
                {/* <Welcome /> */}
                {/* <Services /> */}
                {/* <Transactions /> */}
                {/* <Footer /> */}
                {/* <Achievements /> */}
                <PopularProperties />

                <FeaturedProperties />
                <Feedback />
                <AboutApp />
                <Newsletter />
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/companyhome"
          element={
            user ? (
              <>
                <ScrollToTop />

                {/* <Navbar /> */}
                <HeaderCompany />
                <HeroCompany />
                {/* <FeaturedProperties />
                <Feedback /> */}

                {/* <LoaderIpfs/> */}
                {/* <FeaturesCompany/> */}
                {/* <Video /> */}
                <Brands />
                <Blog />
                <AboutApp />
                <Newsletter />

                <Footer />
                {/* <ErrorPage/> */}
                {/* <Navbar /> */}
                {/* <Welcome /> */}
                {/* <Services /> */}
                {/* <Transactions /> */}
                {/* <Footer /> */}
                {/* <Achievements /> */}
                {/* <PopularProperties />

                <FeaturedProperties />
                <Feedback />
                <AboutApp />
                <Newsletter />

                <Footer /> */}
              </>
            ) : (
              <Navigate to="/signincompany" />
            )
          }
        />
        <Route
          path="/aboutuscompany"
          element={
            user ? (
              <>
                <HeaderCompany />
                <AboutUsCompany />

                <Footer />
              </>
            ) : (
              <Navigate to="/signincompany" />
            )
          }
        />
        <Route
          path="/companylistings/:id"
          element={
            user ? (
              <>
                <HeaderCompany />
                <CompanyListings />

                <Footer />
              </>
            ) : (
              <Navigate to="/signincompany" />
            )
          }
        />
        <Route
          path="/predictprices"
          element={
            user ? (
              <>
                <Navbar />
                <PredictPrices />
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/listproperty"
          element={
            user ? (
              <>
                <HeaderCompany />
                <ListProperty />

                <Footer />
              </>
            ) : (
              <Navigate to="/signincompany" />
            )
          }
        />
        <Route
          path="/listblog"
          element={
            user ? (
              <>
                <HeaderCompany />
                <ListBlog />

                <Footer />
              </>
            ) : (
              <Navigate to="/signincompany" />
            )
          }
        />
        <Route
          path="/listauctions"
          element={
            user ? (
              <>
                <HeaderCompany />
                <CreateItem />

                <Footer />
              </>
            ) : (
              <Navigate to="/signincompany" />
            )
          }
        />
        <Route
          path="/auction"
          element={
            user ? (
              <>
                <HeaderCompany />
                <Card />

                <Footer />
              </>
            ) : (
              <Navigate to="/signincompany" />
            )
          }
        />
        <Route
          path="/auctionsell"
          element={
            user ? (
              <>
                <Navbar />
                <Card />

                <Footer />
              </>
            ) : (
              <Navigate to="/signincompany" />
            )
          }
        />
        <Route
          path="/blogcompany"
          element={
            user ? (
              <>
                <HeaderCompany />
                <Blog />
                <Footer />
              </>
            ) : (
              <Navigate to="/signincompany" />
            )
          }
        />
        <Route
          path="/blog/:id"
          element={
            user ? (
              <>
                <HeaderCompany />
                <BlogDetailsPage />
                <Footer />
              </>
            ) : (
              <Navigate to="/signincompany" />
            )
          }
        />
        <Route
          path="/myblogs/:id"
          element={
            user ? (
              <>
                <HeaderCompany />
                <MyBlogs />
                <Footer />
              </>
            ) : (
              <Navigate to="/signincompany" />
            )
          }
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/signin"
          element={!user ? <Signin /> : <Navigate to="/" />}
        />
        <Route
          path="/logincompany"
          element={!user ? <LoginCompany /> : <Navigate to="/companyhome" />}
        />
        <Route
          path="/signupcompany"
          element={!user ? <SignUpCompany /> : <Navigate to="/companyhome" />}
        />
        <Route
          path="/properties"
          element={
            user ? (
              <>
                <Navbar />
                <Properties />
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/profile"
          element={
            user ? (
              <>
                <Navbar />
                <Profile />
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/ipfs/:id"
          element={
            user ? (
              <>
                <Navbar />
                <IpfsScreen />
                {/* <LoaderIpfs/> */}
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/ipfscompany"
          element={
            user ? (
              <>
                <HeaderCompany />
                <IpfsScreen />
                {/* <LoaderIpfs/> */}
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/propertyDetail/:id"
          element={
            user ? (
              <>
                <Navbar />
                <PropertyDetail />
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/propertyDetailsSeller/:id"
          element={
            user ? (
              <>
                <Navbar />
                <PropDetailsSeller />
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/companypropertyDetailsSeller/:id"
          element={
            user ? (
              <>
                <HeaderCompany />
                <PropDetailsSeller />
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/companyprofile"
          element={
            user ? (
              <>
                <HeaderCompany />
                <Profile />
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/contactus"
          element={
            user ? (
              <>
                <Navbar />
                <ContactUs />
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/contactuscompany"
          element={
            user ? (
              <>
                <HeaderCompany />
                <ContactUs />
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/aboutus"
          element={
            user ? (
              <>
                <Navbar />
                <AboutUs />
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/machinelearning"
          element={
            user ? (
              <>
                <Navbar />
                <PredictPrices />
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/allproperties"
          element={
            user ? (
              <>
                <Navbar />
                <AllProperties />
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/allpropertiescompany"
          element={
            user ? (
              <>
                <HeaderCompany />
                <AllProperties />
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/payment/:price/:propertyId/:user/:token"
          element={
            user ? (
              <>
                <Navbar />
                <Welcome />
                <Transactions />
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/services"
          element={
            user ? (
              <>
                <Navbar />

                <Services />
                <Blog />
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/mylistings/:id"
          element={
            user ? (
              <>
                <Navbar />

                <MyListings />
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
      </Routes>
      {/* <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
