import React from 'react';
import './homepage.css';
import userfriendly from "./assets/user.jpg";
import Main1 from "./assets/Main1.jpg";
import system from "./assets/proj.jpg";
import transparent from "./assets/Transparent_pricing.jpg";
import selection from "./assets/wide_vehicle_selection.jpg";
import flexible from "./assets/Flexible_booking.jpg";
import easy from "./assets/easy_to_rent.jpg";
import Br from "./assets/CarBrLogos.jpg";
import kia from "./assets/Kia-Logo.jpg";
import tata from "./assets/Tata-Logo.jpg";
import mer from "./assets/Mercedes-Logo.jpg";
import volk from "./assets/Volkswagen-Logo.jpg";
import vr from "./assets/Buga.webp";

const HomePage: React.FC = () => {
    return (
        <div className="home-body">

            <main className="home-main">
                <div className="home-hero" style={{background: `url(${Main1}) no-repeat center center/cover`}}>
                    <h1>Searching for a Vehicle? Rent One Quickly with Just a Few Simple Steps.</h1>
                    <div className="home-steps">
                        <div className="home-step">
                            <div className="home-step-number">1</div>
                            <h2>Select Your Preferred Vehicle</h2>
                            <p>Choose a vehicle that fits your preferences and budget.</p>
                        </div>
                        <div className="home-step">
                            <div className="home-step-number">2</div>
                            <h2>Submit Your Details</h2>
                            <p>Complete the form with your details and submit your rental request effortlessly.</p>
                        </div>
                        <div className="home-step">
                            <div className="home-step-number">3</div>
                            <h2>Receive Your Confirmation</h2>
                            <p>Get a confirmation of your rental and prepare to start your journey.</p>
                        </div>
                    </div>
                </div>
            </main>

            <div className="home-background" style={{background: `url(${system}) no-repeat center center/cover`}}>
                <div className="home-content">
                    <div className="home-main-heading">Why Choose Our Vehicle Rental Service?</div>

                    <div className="home-section home-user-friendly">
                        <img src={userfriendly} alt="Easy to Use" className="home-icon"/>
                        <div className="home-text-content">
                            <div className="home-sub-heading">Intuitive User Experience</div>
                            <p>Our system is designed for ease of use, ensuring a smooth rental process.</p>
                        </div>
                    </div>

                    <div className="home-section home-transparent-pricing">
                        <img src={transparent} alt="Clear Pricing" className="home-icon"/>
                        <div className="home-text-content">
                            <div className="home-sub-heading">Clear Pricing</div>
                            <p>Understand exactly what you’re paying for with no hidden charges.</p>
                        </div>
                    </div>

                    <div className="home-section home-wide-selection">
                        <img src={selection} alt="Extensive Choices" className="home-icon"/>
                        <div className="home-text-content">
                            <div className="home-sub-heading">Wide Range of Choices</div>
                            <p>Pick from a wide variety of vehicles to meet your needs.</p>
                        </div>
                    </div>

                    <div className="home-section home-flexible-booking">
                        <img src={flexible} alt="Adaptable Booking" className="home-icon"/>
                        <div className="home-text-content">
                            <div className="home-sub-heading">Flexible Booking Options</div>
                            <p>Book your vehicle at your convenience with our flexible options.</p>
                        </div>
                    </div>

                    <div className="home-section home-easy-to-rent">
                        <img src={easy} alt="Simple Rental Process" className="home-icon"/>
                        <div className="home-text-content">
                            <div className="home-sub-heading">Simple Rental Process</div>
                            <p>Experience a hassle-free rental with our efficient process.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-brands">
                <p>We Deliver On Time</p>
                <div className="home-container">
                    <div className="home-img-container">
                        <img src={volk} alt="Volkswagen" className="home-img"/>
                        <img src={mer} alt="Mercedes-Benz" className="home-img"/>
                        <img src={vr} alt="buga" className="home-img"/>
                        <img src={Br} alt="Br" className="home-img"/>
                        <img src={tata} alt="Tata" className="home-img"/>
                        <img src={kia} alt="Kia" className="home-img"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
