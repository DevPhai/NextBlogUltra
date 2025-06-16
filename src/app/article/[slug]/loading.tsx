import React from 'react';

export default function Loading() {
    return (
        <>
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-100 bg-opacity-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <span>Loading...</span>
        </div>
        </>
        
    );
}