import React, { useState, useEffect } from 'react';

// 스타일은 따로 분리하는 것이 좋지만, 예시를 위해 컴포넌트 안에 포함합니다.
const sliderStyles = {
    container: {
        position: 'relative',
        width: '100%',
        height: '400px', 
        borderRadius: '10px',
        backgroundColor: '#1a1a1a',
    },
    imgWrapper1: {
        padding:'30px',
        width: '100%',
        height: '100%',
    },
    imgWrapper2: {
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    image: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: '0',
        width: '100%',
        height: 'auto',
        maxHeight: '100%',
        borderRadius: '10px',
        display: 'block',
        opacity: "0",
        transition: 'opacity 0.5s ease-in-out'
    },
    active: {
        opacity:"1"
    },
    navButton: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        border: 'none',
        padding: '10px',
        cursor: 'pointer',
        fontSize: '20px',
        zIndex: 1,
    },
    leftArrow: {
        left: '10px',
    },
    rightArrow: {
        right: '10px',
    },
    indicatorContainer: {
        position: 'absolute',
        bottom: '10px',
        width: '100%',
        textAlign: 'center',
        zIndex: 1,
    },
    indicator: {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        margin: '0 5px',
        cursor: 'pointer',
    },
    activeIndicator: {
        backgroundColor: 'white',
    },
    explainBox: {
        margin: '15px 10px 10px 10px',
        minHeight: '100px',
        textAlign: 'start',
        padding: '5px 8px',
        borderRadius: '5px',
        border: '2px solid gray',
        transition: 'opacity 0.5s ease-in-out'
        
    }
};

const ImageSlider = ({ images, texts}) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {

        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }

    return (
        <>
        <div style={sliderStyles.container}>
                <div style={sliderStyles.imgWrapper1}>
                    <div style={sliderStyles.imgWrapper2}>
            {images.map((image, index) => (
                <>
                    <div
                        key={index}
                        className={index === current ? 'slide active' : 'slide'}>    
                        <img src={image} alt="slider-image" style={{ ...sliderStyles.image, ...(index === current ? sliderStyles.active : '')}} />
                    </div>
                </>
            ))}
                    </div>
                </div>
            <button
                style={{ ...sliderStyles.navButton, ...sliderStyles.leftArrow }}
                onClick={prevSlide}
            >
                &#10094;
            </button>
            <button
                style={{ ...sliderStyles.navButton, ...sliderStyles.rightArrow }}
                onClick={nextSlide}
            >
                &#10095;
            </button>

            <div style={sliderStyles.indicatorContainer}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        style={{
                            ...sliderStyles.indicator,
                            ...(index === current ? sliderStyles.activeIndicator : {}),
                        }}
                        onClick={() => setCurrent(index)}
                    ></span>
                ))}
            </div>
        </div>
            {texts.map((text, index) => (
                <>
                    {index === current && (

                        <div
                            key={index}
                            className={index === current ? 'text active' : 'text'}
                            style={sliderStyles.explainBox}>
                            <h3 style={{color:'black'}}>{texts[index]}</h3>
                        </div>

                    )}

                </>
            ))}

        </>
    );
};

export default ImageSlider;