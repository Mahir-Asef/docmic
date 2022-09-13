import React from 'react';
import './Services.css';
import hearts from '../../images/medical-icon_i-cardiology.png';
import clip from '../../images/clip.png';
import dental from '../../images/medical-icon_i-dental.png';
import kit from '../../images/kit.png';
const Services = () => {
    return (
        <div className='container'>
            <p className='service-1 pt-5 secondary'>Our Services</p>
            <p className='service-2'>Services For Your Health</p>
            <div className='d-sm-flex  flex-sm-colum flex-lg-row justify-content-between'>
            <div className='d-sm-flex flex-sm-row ms-4 mb-3 service'>
                <div className='p-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p>Cardiology</p>
                        <img src={hearts} alt=""></img>
                    </div>
                    <p>Seduahag perspiciati under <br/> omnised atused error.</p>
                    <p className='explore'>Explore Now</p>
                </div>
            </div>
            <div className='d-flex flex-sm-row ms-4 mb-3 service'>
                <div className='p-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p>Monthly Check Up</p>
                        <img src={clip} alt=""></img>
                    </div>
                    <p>Seduahag perspiciati under <br/> omnised atused error.</p>
                    <p className='explore'>Explore Now</p>
                </div>
            </div>
            <div className='d-flex ms-4 mb-3 flex-sm-row service'>
                <div className='p-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p>Dental Care</p>
                        <img src={dental} alt=""></img>
                    </div>
                    <p>Seduahag perspiciati under <br/> omnised atused error.</p>
                    <p className='explore'>Explore Now</p>
                </div>
            </div>
            <div className='d-flex flex-sm-row ms-4 mb-3 service'>
                <div className='p-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p>Opthalmology</p>
                        <img src={kit} alt=""></img>
                    </div>
                    <p>Seduahag perspiciati under <br/> omnised atused error.</p>
                    <p className='explore'>Explore Now</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Services;