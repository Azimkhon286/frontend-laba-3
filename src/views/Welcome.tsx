import React from 'react';
import './Welcome.css';

export default function Welcome() {
    return (
        <section className="Welcome" id="welcome">
            <div className="Welcome__preview_content-container">
                <h1>ХАКАСИЯ</h1>
                <h6>Туристическое Агенство Республики Хакасия</h6>
            </div>
            <div className="Welcome__arrow-down">
                <svg
                    className="arrow-down"
                    width="46"
                    height="24"
                    viewBox="0 0 46 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line x1="0.353553" y1="0.646447" x2="22.981" y2="23.2739" stroke="white"/>
                    <line x1="0.353553" y1="0.646447" x2="22.981" y2="23.2739" stroke="white"/>
                    <line x1="22.6464" y1="23.2739" x2="45.2739" y2="0.646471" stroke="white"/>
                    <line x1="22.6464" y1="23.2739" x2="45.2739" y2="0.646471" stroke="white"/>
                </svg>
            </div>
        </section>
    );
}