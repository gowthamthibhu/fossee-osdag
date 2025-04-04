import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useHome } from './HomeContext';
import '../../styles/Home.css';

const StartButton = () => {
    const { fetchNavigationData, loading, activeTab, secondaryTab } = useHome();
    const navigate = useNavigate();

    const handleStart = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/select-connection/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    connection_type: activeTab,
                    secondary_tab: secondaryTab,
                    checkbox_option: 'End Plate',
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Error response:', errorText);
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Connection selected:', data);

            if (data.connection_type === 'moment-connection' && data.secondary_tab === 'beam-to-column') {
                navigate('/BeamToColumnConnection');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="startButtonContainer">
            <button
                className="startButton"
                onClick={handleStart}
                disabled={loading}
            >
                {loading ? (
                    <i className="fas fa-spinner fa-spin"></i>
                ) : (
                    <i className="fas fa-play"></i>
                )}
                {loading ? 'Loading...' : 'Start'}
            </button>
        </div>
    );
};

export default StartButton;