import React from 'react';

export default function LoadingIndicator() {
    const LoadingIndicator = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '9999',
    }
    const spinnerBorder = {
        width: '3rem',
        height: '3rem',
        borderWidth: '0.25rem',
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '50%',
        borderTopColor: '#fff',
        animation: 'spinner-border 1s linear infinite',
    }
    return (
        <div style={LoadingIndicator}>
            <span className="sr-only">Loading...</span>
            <div style={spinnerBorder} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}