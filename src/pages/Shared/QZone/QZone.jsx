import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div>
            <div className='bg-secondary text-center my-4 py-4'>
            <h2>QZone</h2>
            <div>
            <img src={qzone1} alt="" />
            <img src={qzone2} alt="" />
            <img src={qzone3} alt="" />
            </div>
            </div>
        </div>
    );
};

export default QZone;