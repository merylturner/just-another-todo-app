import React from 'react';

export const Link = ({ active, children, onClick }) => {
    if(active) return <div>{children}</div>;

    return (
        <a href="#" onClick={e => {
            e.preventDefault(); 
            onClick();
        }}>
            {children}
        </a>
    );
};