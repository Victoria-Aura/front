import React from 'react';

import { Spinner } from 'react-bootstrap';

const Loader = ({style}) => {
    return (
    <Spinner animation="border" role="status" className='mx-auto col align-self-center' style={style}>
        <span className="visually-hidden">Loading...</span>
    </Spinner>
    );
};

export default Loader;