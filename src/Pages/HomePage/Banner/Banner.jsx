import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';
import BannerImage from '../../../assets/whiteBackground.jpg';

const Banner = () => {
    const [bannerTitle, setBannerTitle] = useState('');
    const [count, setCount] = useState(0);
    const name = "김혜린";
    const intro = `console.log("${name} 포트폴리오")`;

    useEffect(() => {
        const typingInterval = setInterval(() => {
            setBannerTitle(prevTitle => {
                let result = prevTitle ? prevTitle + intro[count] : intro[0];
                setCount(count + 1);

                if (count >= intro.length) {
                    setCount(0);
                    setBannerTitle('');
                }

                return result;
            });
        }, 140);

        return () => {
            clearInterval(typingInterval);
        };
    });

    return (
        <>
            <div className="BannerContainer">
                <img className="BannerImage" src={BannerImage} alt="Banner" />
                <Container className="BannerText">{bannerTitle}</Container>
            </div>
        </>
    );
};

export default Banner;
