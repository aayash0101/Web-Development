import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import TermsAndConditions from './TermsAndConditions';
import Footer from './Footer';
import FAQs from './FAQs';
import PrivacyPolicy from './PrivacyPolicy';
import FeedbackForm from './FeedbackForm';
import LoginSignup from './LoginSignup';
import LateReturnPolicy from "./LateReturnPolicy";
import CancellationPolicy from "./ CancellationPolicy.tsx";


// import AddBike from './admin/addbike';
import Sidebar from './admin/Sidebar';
import BikeList from './admin/BikeList';
import CarList from "./admin/CarList.tsx";
import UserList from "./admin/UserList.tsx";
import BikeBookingList from "./admin/BikeBookingList.tsx";
import CarBookingList from "./admin/CarBookingList.tsx";
import BikeAll from "./BikeAll.tsx";
import CarAll from "./CarAll.tsx";
import Navbar from "./Navbar.tsx";


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginSignup/>} />

                <Route path="*" element={<MainLayout />} />
                <Route path="/admin/*" element={<AdminLayout/>}/>

            </Routes>
        </BrowserRouter>

    );
};

const MainLayout: React.FC = () => (
    <>

        <Navbar/>
        <Routes>

            <Route path="/" element={<HomePage />} />
             <Route path="/about" element={<AboutUs />} />
            <Route path="/contract" element={<TermsAndConditions />} />
            <Route path="/fa" element={<FAQs />} />
            <Route path="/pri" element={<PrivacyPolicy/>} />
            <Route path="/fee" element={<FeedbackForm/>} />
            <Route path="/LateReturnPolicy" element={<LateReturnPolicy/>} />
            <Route path="/CancellationPolicy" element={<CancellationPolicy/>} />

            <Route path="/bike" element={<BikeAll/>} />
            <Route path="/car" element={<CarAll/>} />

        </Routes>
        <Footer/>

    </>
);

const AdminLayout: React.FC = () => (
    <div className="admin-layout">
        <Sidebar />
        <div className="admin-content">
            <Routes>
                <Route path="/bikelist" element={<BikeList />} />
                <Route path="/carlist" element={<CarList />} />
                <Route path="/userlist" element={<UserList />} />
                <Route path="/bikebookinglist" element={<BikeBookingList />} />
                <Route path="/carbookinglist" element={<CarBookingList />} />

            </Routes>

        </div>
</div>
);

export default App;





