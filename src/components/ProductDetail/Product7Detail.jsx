import React from 'react'
import ImageSlider from '../../Modules/Slider'
import ImageSliderWithThum from '../../Modules/SliderWithThum'

function Product7Detail() {
  return (
    <>
      <div className="product-info-section">
        <h2>제품 정보</h2>
        <img src="/task7/main.jpg" alt="완성된 pcb 사진" style={{ width: "300px", height: "auto" }} className="product-info-image" />
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">제품명: 버려지는 어댑터로 만드는 휴대폰 충전기 </span>
            <span className="info-value"></span>
          </div>
          <div className="info-item">
            <span className="info-label">사양:</span>
            <span className="info-value">220v 60Hz 입력 / USB-A 5V 2A (10W) 출력</span>
          </div>
          <div className="info-item">
            <span className="info-label">가격:</span>
            <span className="info-value">3,000원</span>
          </div>
          <div className="info-item">
            <span className="info-label">제품 총 수량:</span>
            <span className="info-value">9개</span>
          </div>
          <div className="info-item">
            <span className="info-label">사후 통신판매 계획:</span>
            <span className="info-value">아니오(공급처 사정으로 발주가 불가능함)</span>
          </div>
        </div>
      </div>

      <div className='image-slider-section'>
        <h3>제품 이미지 상세</h3>
        <div className='image-slider-container' >
          <ImageSliderWithThum images={[
            "/task7/prod_f.png",
            "/task7/prod_fs.png",
            "/task7/prod_s.png",
            "/task7/prod_b.png",
            "/task7/prod_bs.png",
          ]} />
        </div>
      </div>

      <div className="features-section">
        <div className='step-section'>
          <h2>제품 제작 과정</h2>
          <ul>
            <li>출력단 케이블 손상으로 인해 폐기되는 5v DC 어댑터를 재활용하여, 새로운 USB 충전기로 탈바꿈시키는 "업사이클링" 제작 사례로부터 영감</li>
            <li>모든 케이블을 분리형 구조로 설계함으로써 단선 및 손상에 따른 재교체나 유지보수를 용이하게 설계</li>
            <li>간단한 회로 지식과 납땜 기술만으로 누구나 구현할 수 있는 점, 기존 자원의 수명을 연장하고 전자 폐기물을 줄이는 지속 가능한 메이킹 철학을 실현</li>
          </ul>
        </div>

        <div className='step-section'>
          <div className="features-section">
            <h2>사용 기대효과</h2>
            <ul>
              <li>전자 폐기물 문제에 대한 인식을 높이고, 지속 가능한 소비와 생산에 대한 메시지를 전달한다.</li>
              <li>버려질 뻔한 어댑터가 새로운 가치를 지닌 제품으로 재탄생하는 과정을 보며, 일상 속 작은 실천으로도 환경 보호에 기여할 수 있다는 영감을 얻을 수 있다.</li>
              <li>환경 문제에 대한 경각심을 일깨우고 친환경적인 가치관을 공유하는 좋은 기회 제공</li>
              <li>간단한 회로 지식과 납땜 기술'만 있다면 쉽게 제작 과정을 보고 따라하기 충분하다는 점에서 관람객들에게 making 활동에 대한 진입 장벽을 낮춰준다.</li>
              <li>스스로 제품을 완성함으로써 '나도 할 수 있겠다'는 자신감을 얻고, DIY 문화에 대한 흥미를 전달할 수 있다.</li>
              <li>단순한 소비를 넘어 능동적인 창작 활동으로 이어질 수 있는 동기를 부여, 기술적인 지식 없이도 재활용과 창조가 가능하다는 사실을 알게 된다.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="manual-section">
        <div className='step-section'>
          <div className="features-section">
            <h2>준비물</h2>
            <div className='sub-steps'>
              <ul>
                <li>m3(10mm)규격의 볼트와 너트 2개</li>
                <li>충전기 케이스 하판 </li>
                <li>충전기 케이스 상판</li>
                <li>전원 포트와 usb포트가 연결된 충전 기판</li>
                <ul>
                  <li>전원 포트: iec c8 </li>
                  <li>usb 포트: usb-a</li>
                  <li>충전기판: 전력변환장치</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>

        <div className='step-section'>
          <h2>재활용 충전기 상세 설명서</h2>
          <ImageSlider images={["/task7/step1.png", "/task7/step2.png", "/task7/step3.png", "/task7/step4.png", "/task7/step5.png",
            "/task7/step6.png"]} texts={[
              <>1. 충전 기판과 충전기 케이스 하판을 준비합니다.</>,
              <>2. 충전 기판을 기판의 전원 포트가 케이스의 나사 구멍이 양 옆에 있는 홈의 위치에 오도록 넣어줍니다.</>,
              <>3. 전원 포트를 홈에 끼운 다음, 양 옆 나사 구멍에 볼트와 너트를 연결하여 단단히 끼워줍니다.</>,
              <>4. 충전기 케이스 상판에 usb 포트를 끼울 수 있는 홈이 있습니다. 여기에 충전 기판과 연결된 usb 포트를 끼워 맞춥니다. </>,
              <>5. usb 포트와 연결된 상판을 충전 기판과 결합한 하판에 덮어서 맞춰주면 완성!</>,
              <>5. usb 포트와 연결된 상판을 충전 기판과 결합한 하판에 덮어서 맞춰주면 완성!</>
            ]} />
        </div>
      </div>

      <div className='use-guide-section'>
        <h3>사용 예시</h3>
        <div className='use-guide-item'>
          <img src="/task7/guideimg.png" alt="guideimg1"></img>
          <div className='use-guide-text'>
            <p>전원선과 usb 선을 연결하여 다음과 같이 사용할 수 있습니다</p>
          </div>
        </div>
        <div className='use-guide-item'>
          <img src="/task7/guideimg2.png" alt="guideimg1"></img>
          <div className='use-guide-text'>
            <p>전원포트는 IEC C8(돼지코) 규격을 사용합니다.<br></br>
            호환 가능한 케이블을 꽂아 사용할 수 있습니다</p>
          </div>
        </div>
        <div className='use-guide-item'>
          <img src="/task7/guideimg3.png" alt="guideimg1"></img>
          <div className='use-guide-text'>
            <p>실제 충전 시</p>
          </div>
        </div>
      </div>

      <div className="link-section">
        <a href="https://blog.neo-n.org/jaehwalyong-cungjeongiyi-saempeuleul-jejaghada/" className='link-box'>
          <img src="/task7/link_img.jpg" alt="비하인드 링크"></img>
          <p>조금 더 자세한 제작 비하인트가 궁금하시다면?</p>
        </a>
      </div>
    </>
  )
}

export default Product7Detail