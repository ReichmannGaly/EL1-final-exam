import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner: React.FC = () => {
    return (
        <div id="spinnerContainer">
            <div className="spinner-border text-primary mt-5" role="status" id="spinner">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default LoadingSpinner;