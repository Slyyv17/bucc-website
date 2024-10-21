// ExecutiveList.js
import React from 'react';
import PropTypes from 'prop-types';

export default function ExecutiveCard({executive}) {
    return (
        <main>
            <div className="flex flex-col items-center">
    
                <img src={executive.image} alt="Executive" className="w-3/4 rounded-lg h-3/4 backdrop-contrast-50" />
                
                <h3 className="text-lg font-semibold">{executive.name}</h3>
                <p className="text-center">{executive.position}</p>
            </div>
        </main>
    );
};

ExecutiveCard.propTypes = {
    executive: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
    }).isRequired,
};
