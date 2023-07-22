import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-screen-xl mx-auto my-20 md:p-0 p-4'>
            {children}
        </div>
    );
};

export default Container;