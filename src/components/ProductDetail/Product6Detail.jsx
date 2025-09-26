import React from 'react'
import { useNavigate } from 'react-router-dom'
import ImageSlider from '../../Modules/Slider'
import ImageSliderWithThum from '../../Modules/SliderWithThum'

function Product6Detail() {
  const navigate = useNavigate()

  return (
    <>
      <div className="product-info-section">
        <h2>제품 정보</h2>
        <img src="/task6/main.jpg" alt="완성된 pcb 사진" style={{ width: "300px", height: "auto" }} className="product-info-image" />
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">제품명: DIY 무선충전기 </span>
            <span className="info-value"></span>
          </div>
          <div className="info-item">
            <span className="info-label">가격:</span>
            <span className="info-value">3,000원</span>
          </div>
          <div className="info-item">
            <span className="info-label">제품 총 수량:</span>
            <span className="info-value">23개</span>
          </div>
          <div className="info-item">
            <span className="info-label">사후 통신판매 계획:</span>
            <span className="info-value">아니오(공급처 사정으로 발주가 불가능함)</span>
          </div>
        </div>
      </div>

      <div className='image-slider-section'>
        <h3>제품 이미지 상세</h3>
        <div className='image-slider-container'>
          <ImageSliderWithThum images={[
            "/task6/production_f.jpg",
            "/task6/production_b.jpg",
            "/task6/production_ps.jpg",
            "/task6/production_h.jpg",
            "/task6/productionInfo2.jpg",
            "/task6/productionInfo1.jpg"
          ]}/>
        </div>
      </div>

      <div className="features-section">
        <div className='step-section'>
          <h2>제품 특장점</h2>
          <ul>
            <li>기능을 가장 우선시한 정사각형의 디자인으로, 공대감성을 녹여내었음</li>
            <li>5w 출력의 Qi표준 Low Power(rel 1.2 Basic/Baseline Power Profile)을 지원하는 모듈을 사용, 안정적인 무선충전이 가능</li>
            <li>기기 감지 시, "삐-" 하는 부저음과 전면부 led가 점멸하여 사용자 친화적</li>
            <li>상단 뚜껑의 색상을 고를 수 있어, 커스텀이 가능 (투명 / 검정 / 흰색)</li>
          </ul>
        </div>
      </div>

      <div className="manual-section">
        <div className='step-section'>
          <div className="features-section">
            <h2>준비물</h2>
            <div className='sub-steps'>
              <ul>
                <li>덮개 부품</li>
                <li>무선충전모듈</li>
                <li>베이스 부품</li>
                <li>글루건</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='step-section'>
          <h2>DIY 무선충전기 상세 설명서</h2>
          <ImageSlider images={["/task6/step1.png", "/task6/step2.png", "/task6/step3.png", "/task6/step4.png", "/task6/step5.png",
            "/task6/step6.png", "/task6/step7.png", "/task6/step8.jpg", "/task6/step9.png"]} texts={[
              <>1. 메이커로부터 [덮개 부품, 무선충전모듈, 베이스 부품]을 전달받습니다.</>,
              <>2. 전달받은 무선충전모듈을 충전 단자 방향에 유의하여 베이스 모델 안에 위치합니다.<br />
                → 이때, 좌/우로 흔들림을 미연에 방지하기 위해, 글루건을 사용하여 무선충전모듈을 고정합니다.</>,
              <>2. 전달받은 무선충전모듈을 충전 단자 방향에 유의하여 베이스 모델 안에 위치합니다.<br />
                → 이때, 좌/우로 흔들림을 미연에 방지하기 위해, 글루건을 사용하여 무선충전모듈을 고정합니다.</>,
              <>3. 덮개 부품을 고르고, 덮개 부품을 베이스 부품과 결합 합니다.</>,
              <>3. 덮개 부품을 고르고, 덮개 부품을 베이스 부품과 결합 합니다.</>,
              <>4. 제품을 사용할 준비가 되었다면,<br />제품 후면의 마이크로 5핀 단자에 전원 케이블을 꽂아 주십시오.</>,
              <>이때, 제품 전면에는 빨간색의 led가 켜집니다.<br />이는 무선충전기가 충전을 위해 대기중임을 나타냅니다.</>,
              <>5. Qi규격의 무선충전이 지원되는 기기를 충전 패드에 올려줍니다.<br />휴대폰 뿐만 아니라 갤럭시 버즈나, 에어팟 프로 등의 기기가 Qi규격 무선충전을 지원합니다.<br />
                <strong>부저가 짧게 울리며, 충전이 시작됩니다.</strong></>,
              <>5. Qi규격의 무선충전이 지원되는 기기를 충전 패드에 올려줍니다.<br />휴대폰 뿐만 아니라 갤럭시 버즈나, 에어팟 프로 등의 기기가 Qi규격 무선충전을 지원합니다.<br />
                <strong>부저가 짧게 울리며, 충전이 시작됩니다.</strong></>
            ]} />
        </div>
      </div>

      <div className="link-section">
        <a href="https://blog.neo-n.org/diy-museon-cungjeongiyi-modeli-wanseongdoeda/" className='link-box'>
          <img src="/task6/behind.png" alt="비하인드 링크"></img>
          <p>DIY 무선충전기 제작 비하인드</p>
        </a>
      </div>

      {/* 홈으로 버튼 */}
      <div style={{ textAlign: 'left', marginTop: '40px' }}>
        <button
          className="bottom-home-button"
          onClick={() => navigate('/?tab=products')}
        >
          홈으로
        </button>
      </div>
    </>
  )
}

export default Product6Detail