import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import Newsletter from '../Newsletter/Newsletter';
import Services from '../Services/Services';

const Home = () => {
    const { isLoading } = useAuth();
    if (isLoading) {
        return <div className="d-flex justify-content-center"><Spinner animation="border" variant="success"></Spinner> </div>
    }
    return (
        <div>
            <Banner></Banner>
            <Facilities></Facilities>
            <Services></Services>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;