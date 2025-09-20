import React, { useState, useEffect } from 'react';

// 스타일은 따로 분리하는 것이 좋지만, 예시를 위해 컴포넌트 안에 포함합니다.
const sliderStyles = {
    container: {
        position: 'relative',
        width: '100%',
        margin: 'auto',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        display: 'block',
        transition: 'opacity 0.5s ease-in-out',
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
        marginTop: '15px',
        textAlign: 'center',
        padding: '5px 8px',
        borderRadius: '5px',
        border: '2px solid gray',
        
    }
};

const ImageSlider = ({ images, texts, autoPlay = false, interval = 3000 }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    // 자동 슬라이드 기능
    useEffect(() => {
        if (!autoPlay) return;
        const slideInterval = setInterval(nextSlide, interval);
        return () => clearInterval(slideInterval);
    }, [current, autoPlay, interval]);

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }

    return (
        <>
        <div style={sliderStyles.container}>
            {images.map((image, index) => (
                <>
                    <div
                        key={index}
                        className={index === current ? 'slide active' : 'slide'}>
                        {index === current && (
                            <img src={image} alt="slider-image" style={sliderStyles.image} />
                        )}
                    </div>
                </>
            ))}
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
                            <h3 style={{color:'black'}}>{(index + 1)}. {texts[index]}</h3>
                        </div>

                    )}

                </>
            ))}

        </>
    );
};

export default ImageSlider;