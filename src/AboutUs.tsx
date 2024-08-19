import React from 'react';
import './AboutUs.css';
import nirajan from "./assets/nirajan.jpg"
import dipesh from "./assets/dipesh.jpg"
import suraj from "./assets/suraj.jpg"
import ritesh from "./assets/ritesh.jpg"
import laxmi from "./assets/laxmi.jpg"

const AboutUs: React.FC = () => {
    return (
        <main className="about-main">
            <section className="about-us">
                <h1 className="about-title">About Us</h1>
                <p className="about-description">Welcome to our vehicle rental website! We're a team of passionate car enthusiasts dedicated to providing you with the best rental experience possible.</p>
                <div className="mission-statement">
                    <h2>Our Mission</h2>
                    <p>To provide a wide range of vehicles for rent, ensuring a hassle-free and enjoyable experience for our customers.</p>
                </div>
                <div className="our-story">
                    <h2>Our Story</h2>
                    <p>Founded in 2010, our company has grown to become one of the leading vehicle rental services in the region. With a fleet of over 500 vehicles, we cater to individuals, families, and businesses alike.</p>
                </div>
                <div className="team">
                    <h2>Meet Our Team</h2>
                    <ul className="team-list">
                        <li className="team-member">
                            <img src={nirajan} alt="Nirajan Bhattarai Khatri" className="team-photo"/>
                            <h3>Nirajan Bhattarai Khatri</h3>
                            <p>Founder & CEO</p>
                        </li>
                        <li className="team-member">
                            <img src={suraj} alt="Suraj Tamang" className="team-photo"/>
                            <h3>Suraj Tamang</h3>
                            <p>Operations Manager</p>
                        </li>
                        <li className="team-member">
                            <img src={dipesh} alt="Dipesh Bohora Ramtel" className="team-photo"/>
                            <h3>Dipesh Bohora Ramtel</h3>
                            <p>Fleet Manager</p>
                        </li>
                        <li className="team-member">
                            <img src={ritesh}alt="Ritesh Das Kathbaniya" className="team-photo"/>
                            <h3>Ritesh Das Kathbaniya</h3>
                            <p>Marketing Manager</p>
                        </li>
                        <li className="team-member">
                            <img src={laxmi}alt="Laxmi Narayan Mahoto" className="team-photo"/>
                            <h3>Laxmi Narayan Mahoto</h3>
                            <p>Customer Service Representative</p>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default AboutUs;
