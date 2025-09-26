import React from 'react'
import { useNavigate } from 'react-router-dom'
import ImageSlider from '../../Modules/Slider'
import ImageSliderWithThum from '../../Modules/SliderWithThum'

function Product3Detail() {
  const navigate = useNavigate()

  return (
    <>
      <div className="product-info-section">
        <h2>제품 정보</h2>
        <img src="/task3/main.jpg" alt="완성된 pcb 사진" style={{ width: "300px", height: "auto" }} className="product-info-image" />
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">제품명</span>
            <span className="info-value">SKY 스톤 유닛 활용, 휴대용 블루투스 스피커</span>
          </div>
          <div className="info-item">
            <span className="info-label">사양:</span>
            <span className="info-value">스테레오 2채널 / L채널 8W, R채널 8W 총 합산 16W 출력</span>
          </div>
          <div className="info-item">
            <span className="info-label"></span>
            <span className="info-value">블루투스 5.0 무선연결 지원 / C타입 충전단자 (5v 1.2a / 6w입력) / TWS연결 지원</span>
          </div>
          <div className="info-item">
            <span className="info-label">가격:</span>
            <span className="info-value">15,000원</span>
          </div>
          <div className="info-item">
            <span className="info-label">제품 총 수량:</span>
            <span className="info-value">10개</span>
          </div>
          <div className="info-item">
            <span className="info-label">사후 통신판매 계획:</span>
            <span className="info-value">아니오</span>
          </div>
        </div>
      </div>

      <div className='image-slider-section'>
        <h3>제품 이미지 상세</h3>
        <div className='image-slider-container' >
          <ImageSliderWithThum images={[
            "/task3/prod_fs.png",
            "/task3/prod_on_fs.png",
            "/task3/prod_on_bs.png",
            "/task3/prod_b.png",
          ]} />
        </div>
      </div>

      <div className="features-section">
        <div className='step-section'>
          <h2>제품 설명</h2>
          <ul>
            <li><a href="https://namu.wiki/w/%EC%8A%A4%EC%B9%B4%EC%9D%B4%20IM-100#s-3.2.1">SKY IM-100 스마트폰과 함께 제공되었던 '스톤(Stone)' 블루투스 스피커의 스피커</a> 유닛을 활용하여 제작한 휴대용 블루투스 스피커</li>
            <li>해당 스마트폰의 단종 이후 대량으로 방치되거나 폐기될 위기에 처한 부품인 유휴 자원을 활용하여, 낮은 제작비용에도 불구하고 고음질의 오디오 경험을 제공할 수 있는 휴대용 스피커로 재탄생시켰음</li>
            <li>전자부품 재활용을 통해 새로운 가치를 창출하는 메이커 정신을 실현을 할 수 있음</li>
          </ul>
        </div>

        <div className='step-section'>
          <div className="features-section">
            <h2>제품의 특징</h2>
            <ul>
              <li>컴팩트한 사이즈의 16w 블루투스 스피커</li>
              <li>스테레오 2채널 음향</li>
              <li>TWS연동 기능 지원(제품 2개가 가까이 있고, 제품 상단의 TWS버튼을 짧게 눌러 하나의 스피커는 왼쪽 채널로, 하나의 스피커는 오른쪽 채널로 스테레오 출력하는 기능)</li>
              <li>간단한 회로 지식과 납땜 기술'만 있다면 쉽게 제작 과정을 보고 따라하기 충분하다는 점에서 관람객들에게 making 활동에 대한 진입 장벽을 낮춰준다.</li>
              <li>블루투스 5.0 무선연결 지원</li>
              <li>물리 노브를 좌, 우로 돌려 음량을 직관적으로 조절</li>
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
                <li>반조립이 완료된 스피커 본체</li>
                <li>케이스 하판</li>
                <li>케이스 상판</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='step-section'>
          <h2>SKY 스톤 유닛 활용, 휴대용 블루투스 스피커 제작 상세 설명서</h2>
          <ImageSlider images={["/task3/step1.png", "/task3/step2.png", "/task3/step3.png", "/task3/step3-2.png", "/task3/step4.png", "/task3/step4-2.png", "/task3/step5.png",
            "/task3/step5-2.png"]} texts={[
              <>1. 스피커 본체와 보드를 나사와 십자드라이버를 이용하여 고정해줍니다.</>,
              <>2. 볼륨 조절 노브의 신호선을 보드와 연결해줍니다.</>,
              <>3. 보드에 충전포트 전원선과 배터리를 연결해줍니다.</>,
              <>3. 보드에 충전포트 전원선과 배터리를 연결해줍니다.</>,
              <>4. 결합이 완료된 스피커 본체를 케이스에 끼워줍니다.</>,
              <>4. 결합이 완료된 스피커 본체를 케이스에 끼워줍니다.</>,
              <>5. 마지막으로, 덮개를 덮어주면 완성입니다.</>,
              <>5. 마지막으로, 덮개를 덮어주면 완성입니다.</>
            ]} />
        </div>
      </div>

      <div className='use-guide-section'>
        <h3>사용 설명서</h3>
        <div className='use-guide-item'>
          <div className='use-guide-text'>
            <p>1. 볼륨 노브를 길게 눌러 전원을 켭니다.</p>
          </div>
        </div>
        <div className='use-guide-item'>
          <div className='use-guide-text'>
            <p>2. "POWER ON" 이라는 음성과 함께, 전원이 켜집니다.</p>
          </div>
        </div>

        <h3 id="anchor">스피커 1대와 휴대폰을 연결하는 경우</h3>
        <div className='use-guide-item'>
          <ImageSlider images={["/task3/use-step1.png", "/task3/use-step2.png", "/task3/use-step3.png", "/task3/use-step4.png"]} texts={[
            <>1. 블루투스를 켭니다.</>,
            <>2. E-HOMEMADE를 터치합니다.</>,
            <>3. "등록"을 누릅니다.</>,
            <>4. 연결이 완료되었습니다.</>
          ]} />
        </div>

        <h3>스피커 2대와 휴대폰을 연결하는 경우</h3>
        <p>휴대폰과 스피커를 연결하지 않고 하기 방법을 진행합니다</p>
        <div className='use-guide-item'>
          <img src="/task3/use-step5.png" alt="guideimg1"></img>
          <div className='use-guide-text'>
            <p>1. 서로 연결하고자 하는 두 제품 상단의 TWS버튼을 눌러 TWS기능을 활성화 합니다.</p>
          </div>
        </div>
        <div className='use-guide-item'>
          <div className='use-guide-text'>
            <p>2. 두 스피커가 서로를 찾기 시작합니다.<br />
              연동이 완료 되었다면 효과음과 함께 서로의 LED 조명 색상이 동일하게 싱크됩니다.</p>
          </div>
        </div>
        <div className='use-guide-item'>
          <div className='use-guide-text'>
            <p>스피커가 연동된 이후, <a href='#anchor'>스피커 1대와 휴대폰을 연결하는 경우</a>를 참고하여 완료해주세요.</p>
          </div>
        </div>
        <div className='use-guide-item'>
          <div className='use-guide-text'>
            <h3>기타 사용 방법</h3>
            <p><strong>상단 LED 끄는 법: </strong>TWS버튼을 빠르게 두 번 누르면 LED조명이 on/off 됩니다.</p>
            <p><strong>충전: </strong>C타입 충전기를 연결해서 충전을 진행하며, 제품 상단 LED가 빨간 색으로 빛납니다.<br />충전이 완료되면 LED가 꺼집니다.</p>
          </div>
        </div>
      </div>

      <div className='video-section'>
        <div className='step-section'>
          <h3 style={{color:"black"}}>음원 테스트 영상</h3>
          <iframe width="100%" height="250px"
            src="https://www.youtube.com/embed/up9OLhHxnoI"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      </div>

      <div className="link-section">
        <a href="https://blog.neo-n.org/seuton-beulrutuseu-seupikeoyi-saempeuleul-jejaghada/" className='link-box'>
          <img src="/task3/linkimg1.jpg" alt="비하인드 링크"></img>
          <p>자세한 제작 비하인드 보러가기</p>
        </a>
      </div>

      <div className="link-section">
        <a href="https://blog.neo-n.org/seuton-beulrutuseu-seupikeoyi-modeli-wanseongdoeda/" className='link-box'>
          <img src="/task3/linkimg2.png" alt="비하인드 링크"></img>
          <p>3D모델은 어떻게 만들었을까요?</p>
        </a>
      </div>

    </>
  )
}

export default Product3Detail