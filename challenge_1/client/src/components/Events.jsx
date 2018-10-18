import React from 'react';

const Events = (props) => {
    if (props.length === 0) {
        return (
            <div> 
            No content to display
            </div>
        )
    } else {
        return props.data.map(event => {
            return (
                <div> 
                {event.description}
                </div>
            )
        });
    }
}

export default Events;