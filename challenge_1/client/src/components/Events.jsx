import React from 'react';

const Events = (props) => {
        return props.data.map(event => {
            return (
                <div contentEditable='true'> 
                {event.description}
                </div>
            )
        });
}

export default Events;