import React from 'react';
import './LateReturnPolicy.css';

const LateReturnPolicy: React.FC = () => {
    return (
        <div className="late-return-policy-container">
            <h2 className="late-return-policy-heading">Late Return Fee Policy</h2>
            <ul className="late-return-policy-list">
                <li className="late-return-policy-item">
                    <strong>Grace Period:</strong> Enjoy a 30-minute grace period after the scheduled return time.
                </li>
                <li className="late-return-policy-item">
                    <strong>Initial Fee:</strong> A standard fee of $20 applies once the grace period ends.
                </li>
                <li className="late-return-policy-item">
                    <strong>Hourly Fee:</strong> An extra $10 per hour is charged following the initial fee.
                </li>
                <li className="late-return-policy-item">
                    <strong>Daily Limit:</strong> The daily maximum fee is capped at $100.
                </li>
                <li className="late-return-policy-item">
                    <strong>Weekend Surcharge:</strong> Returns on weekends incur an additional $50 fee.
                </li>
                <li className="late-return-policy-item">
                    <strong>Appeals:</strong> Disputes can be addressed within 7 days by contacting our support team.
                </li>
            </ul>
        </div>
    );
}

export default LateReturnPolicy;
