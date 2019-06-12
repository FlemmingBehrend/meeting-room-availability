import React from 'react';

export default function AvailableRooms({ available, label }) {
    return (
        <div>
            {label}: {available}
        </div>
    );
}
