
import React, { useState, useEffect, useRef } from 'react';
import './SliderWithThum.css'

const Slider = ({ images, currentSlide, setCurrentSlide }) => {
    const [isOpen, setIsOpen] = useState(false);
    const touchStartX = useRef(0);

    // 모바일 터치 이벤트 핸들러
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        if (touchStartX.current === 0) return;
        const currentX = e.touches[0].clientX;
        const diff = touchStartX.current - currentX;

        if (Math.abs(diff) > 50) { // 일정 스와이프 거리를 넘으면 슬라이드 변경
            if (diff > 0) { // 좌측으로 스와이프 (다음 슬라이드)
                setCurrentSlide((prev) => (prev + 1) % images.length);
            } else { // 우측으로 스와이프 (이전 슬라이드)
                setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
            }
            touchStartX.current = 0; // 스와이프 완료 후 초기화
        }
    };

    const handleTouchEnd = () => {
        touchStartX.current = 0; // 터치가 끝났을 때 초기화
    };

    return (
        <div
            className="slider-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={`slide-image ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setIsOpen(true)}
                />
            ))}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    style={{
                        position: "fixed",
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: "rgba(0,0,0,0.6)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000
                    }}
                >

                    <img
                        src={images[currentSlide]}
                        style={{ maxWidth: "50%", maxHeight: "50%", borderRadius: "8px" }}
                    />
                </div>
            )}
        </div>
    );
};


//main module//
const ImageSliderWithThum = ({ images, width = '100%', height = '500px' }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const THUMBS_PER_PAGE = 3;

    // 썸네일 클릭 시 슬라이드 변경 함수
    const handleThumbnailClick = (index) => {
        setCurrentSlide(index);
    };

    // 다음 썸네일 그룹으로 이동 (버튼 클릭)
    const nextThumbs = () => {
        const newIndex = Math.min(
            currentSlide + THUMBS_PER_PAGE,
            images.length - 1
        );
        setCurrentSlide(newIndex);
    };

    // 이전 썸네일 그룹으로 이동 (버튼 클릭)
    const prevThumbs = () => {
        const newIndex = Math.max(
            currentSlide - THUMBS_PER_PAGE,
            0
        );
        setCurrentSlide(newIndex);
    };

    // 현재 썸네일 그룹의 시작 인덱스 계산
    const thumbStartIndex = Math.floor(currentSlide / THUMBS_PER_PAGE) * THUMBS_PER_PAGE;
    const visibleThumbs = images.slice(thumbStartIndex, thumbStartIndex + THUMBS_PER_PAGE);

    return (
        <div className="image-slider" style={{ width, height }}>
            {/* 메인 슬라이더 뷰에 상태와 상태 변경 함수 전달 */}
            <Slider images={images} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />

            {/* 축약된 이미지 뷰 컨테이너 */}
            <div className="thumbnail-container">
                <button onClick={prevThumbs} disabled={thumbStartIndex === 0}>
                    &lt;
                </button>
                <div className="thumbnails">
                    {visibleThumbs.map((image, index) => {
                        const globalIndex = thumbStartIndex + index;
                        return (
                            <img
                                key={globalIndex}
                                src={image}
                                alt={`Thumbnail ${globalIndex + 1}`}
                                className={`thumbnail ${globalIndex === currentSlide ? 'active' : ''}`}
                                onClick={() => handleThumbnailClick(globalIndex)}
                            />
                        );
                    })}
                </div>
                <button onClick={nextThumbs} disabled={thumbStartIndex + THUMBS_PER_PAGE >= images.length}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default ImageSliderWithThum;