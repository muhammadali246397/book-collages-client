import React from 'react';
import Container from '../../../SharePage/Container';
import './PhotoGallery.css'
import img1 from '../../../../assets/grimage/img1.jpg';
import img2 from '../../../../assets/grimage/img2.jpg';
import img3 from '../../../../assets/grimage/img3.jpg';
import img4 from '../../../../assets/grimage/img4.jpg';
import img5 from '../../../../assets/grimage/img5.jpg';
import img6 from '../../../../assets/grimage/img6.jpg';

const PhotoGallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },
    ]
    return (
        <div>
            <Container>
                <div className='my-10'>
                    <h2 className='font-bold text-4xl text-center '><span className='border-b-2 border-rose-700 p-2'>Photo Gallery</span></h2>
                </div>

                <div className="gallery my-10">
                    {
                        data.map((item,index) => {
                            return <div className='pics' key={index}>
                                <img src={item.imgSrc} alt="" style={{width:'100%'}}/>
                            </div>
                        })
                    }
                </div>

            </Container>
        </div>
    );
};

export default PhotoGallery;