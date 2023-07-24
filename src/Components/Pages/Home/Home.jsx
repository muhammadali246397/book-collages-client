import React from 'react';
import Container from '../../SharePage/Container';
import Search from './Search';
import TopCollege from './TopCollege/TopCollege';
import PhotoGallery from './PhotoGallery/PhotoGallery';

const Home = () => {
    return (
     <div>
        <Search></Search>
        <TopCollege></TopCollege>
        <PhotoGallery></PhotoGallery>
     </div>
    );
};

export default Home;