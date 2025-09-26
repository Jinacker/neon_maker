import React from 'react'

function Product2Detail() {
  return (
    <>
      <div className="product-info-section">
        <h2>제품 정보</h2>
        <img src="/task2/one.jpg" alt="하만/카돈 블루투스 스피커" className="product-info-image" />
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">제품명:</span>
            <span className="info-value">하만/카돈 유닛 활용, 거치형 블루투스 스피커</span>
          </div>
          <div className="info-item">
            <span className="info-label">사양:</span>
            <span className="info-value">스테레오 2채널 / L채널 20W, R채널 20W 총 40W 출력 / 블루투스 5.0 무선연결 / AUX 유선연결 / 베이스-트레블 조절 가능</span>
          </div>
          <div className="info-item">
            <span className="info-label">가격:</span>
            <span className="info-value">35,000원</span>
          </div>
          <div className="info-item">
            <span className="info-label">제품 총 수량:</span>
            <span className="info-value">10대</span>
          </div>
          <div className="info-item">
            <span className="info-label">사후 통신판매 계획:</span>
            <span className="info-value">아니오 (소량 제작되어 현장 판매 전용)</span>
          </div>
        </div>
      </div>

      <div className="explain-section">
        <h2>제품 출품 의도</h2>
        <p>• KT 기가지니 2 제품에서 사용되었던 <strong>하만/카돈(Harman/Kardon) 스피커 유닛을 활용하여 제작한 거치형 블루투스 스피커</strong></p>
        <br />
        <p>• 기가지니 2 기기가 단종되고 새 모델이 출시되는 이유로 사용되지 못한 수리용 부품이 재활용 시장에 저렴하게 유통되고 있고, 이러한 고성능 스피커 유닛을 활용함으로써 <strong>버려지는 전자 부품에 새로운 가치를 부여하는 지속 가능한 메이킹 철학을 추구</strong></p>
        <br />
        <p>• <strong>고급 오디오 브랜드 하만/카돈의 음향을 보다 합리적인 가격으로 경험할 수 있는 기회 제공</strong></p>
        <br />
        <p>• 폐기될 뻔한 자원의 재활용 가능성과 업사이클링의 실용적 모델을 제시</p>
      </div>

      <div className="experience-effect-section">
        <h2>기대 효과</h2>
        <p>• 전자 폐기물 문제에 대한 인식을 높이고, 지속 가능한 소비와 생산에 대한 메시지를 전달한다.</p><br></br>
        <p>• 누구나 따라 할 수 있는 제작 과정을 전부 공개함으로써 관람객들에게 making 활동에 대한 진입 장벽을 낮춰준다.</p>
        <br />
        <p>• 관람객들은 완성된 제품을 보아 '나도 할 수 있겠다'는 자신감을 얻고, DIY 문화에 대한 흥미를 전달할 수 있다.</p>
        <br />
        <p>• 단순한 소비를 넘어 능동적인 창작 활동으로 이어질 수 있는 동기를 부여, 기술적인 지식 없이도 재활용과 창조가 가능하다는 점을 일깨워 줄 것이다.</p>
      </div>

      <div className="explain-section">
        <h2>제품 특장점</h2>
        <p>• 하만/카돈 스피커를 가장 합리적 가격으로 경험</p>
        <p>• 스테레오 2채널 음향</p>
        <p>• L채널 20W, R채널 20W 총 합산 40W 출력</p>
        <p>• 블루투스 5.0 무선연결 지원 / AUX 유선연결 지원</p>
        <p>• 사용자의 취향껏 베이스(저음)와 트레블(고음) 조절 가능</p>
      </div>

      <div className="manual-section">
        <h2>제품 제작 방법</h2>

        <div className="step-section">
          <h3>1단계</h3>
          <img src="/task2/two.png" alt="스피커 고정 과정" className="step-image" />
          <p>체험자는 부스에서 반조립이 완료된 스피커 본체와 하만/카돈 유닛을 전달받습니다.</p>
        </div>

        <div className="step-section">
          <h3>2단계</h3>
          <img src="/task2/two-2.png" alt="스피커 고정 과정 2" className="step-image" />
          <img src="/task2/two-3.png" alt="스피커 고정 과정 3" className="step-image" />
          <p>하만/카돈 스피커를 스피커 가이드에 끼우고,<br />
          4곳의 나사를 십자 드라이버를 이용해 조여줍니다.</p>
        </div>

        <div className="step-section">
          <h3>3단계</h3>
          <img src="/task2/three.png" alt="전선 피복 제거" className="step-image" />
          <p>하만 카돈 유닛에 연결된 전선의 피복을<br />
          와이어스트리퍼를 이용하여 벗겨줍니다.</p>
        </div>

        <div className="step-section">
          <h3>4단계</h3>
          <img src="/task2/four.png" alt="전선 통과 과정" className="step-image" />
          <p>피복이 벗겨진 전선을<br />
          본체에 미리 뚫어둔 전선 통과 구멍과 통과시켜줍니다. <br></br>
          이때, 앰프보드에 인쇄된 +, -극에 맞추어 구멍을 통과시켜줍니다.
          </p>
        </div>

        <div className="step-section">
          <h3>5단계</h3>
          <p>이때, 앰프보드에 인쇄된 +, -극에 맞추어 구멍을 통과시켜줍니다.<br />
          십자 드라이버를 이용해 앰프 보드와 스피커 유닛을 결선합니다.</p>
          <img src="/task2/five-1.png" alt="결선 과정 1" className="step-image" />
          <p>결선이 완료된 모습입니다. 극성은 +,- / -,+ 임에 유의합니다.</p>
          <img src="/task2/five-2.png" alt="결선 과정 2" className="step-image" />
          <p><br />
          이때, 전선을 단자대에 꽂을 때에는<br />
          반드시 나사가 회전하는 방향으로 넣어야 합니다.</p>
          <img src="/task2/five-3.png" alt="결선 과정 3" className="step-image" />
        </div>

        <div className="step-section">
          <h3>6단계</h3>
          <img src="/task2/six.png" alt="결선 완료" className="step-image" />
          <p>제품과 함께 제공되는 12V 5A 어댑터를 끼워 작동을 시험합니다.<br />
          (단, 전원케이블은 별매)<br /> </p>
        </div>

        <div className="step-section" style={{ marginBottom: '0' }}>
          <h3>7단계</h3>
          <p>제작이 완료되었습니다.<br></br>작동을 시험하는 방법은 아래에서 계속됩니다.</p>
        </div>
      </div>

      <div className="manual-section">
        <h2>제품 사용 설명서</h2>

        <div className="step-section">
          <h3>1. 전원을 투입합니다.</h3>
          <img src="/task2/menu_2.png" alt="전원 투입" className="step-image" />
          <p>제품 전면의 볼륨 노브를 시계방향으로 "딱" 소리가 날 때까지 돌려 주십시오.<br />
          이는 볼륨 노브가 전원 스위치를 겸하고 있음을 나타냅니다.</p>
          <p><strong>2-1.</strong> 무선연결 (블루투스) 시, 아래 3번 섹션을 따르십시오.<br />
          <strong>2-2.</strong> 유선연결 (AUX) 시, 하단 4번 섹션을 따르십시오.</p>
        </div>

        <div className="step-section">
          <h3>3. 무선연결 (블루투스) 시</h3>
          <p>사용자의 휴대폰에서 블루투스 기능을 켠 뒤,<br />
          하단의 "연결 가능한 기기"에서 "WZ-BT5.0" 이름의 기기에 연결하여 주십시오.</p>

          <img src="/task2/menu_3-1.png" alt="블루투스 켜기" className="step-image" />
          <p>블루투스를 켭니다.</p>

          <img src="/task2/menu_3-2.png" alt="WZ-BT5.0 선택" className="step-image" />
          <p>WZ-BT5.0을 터치합니다.</p>

          <img src="/task2/menu_3-3.png" alt="등록 버튼" className="step-image" />
          <p>"등록"을 누릅니다.</p>

          <img src="/task2/menu_3-4.png" alt="연결 완료" className="step-image" />
          <p>연결이 완료되었습니다.<br />
          사용할 준비가 완료되었습니다.</p>
        </div>

        <div className="step-section">
          <h3>4. 유선연결 (AUX) 시</h3>
          <img src="/task2/menu_4.png" alt="AUX 연결" className="step-image" />
          <p>AUX케이블을 제품 뒷면에 "AUX-IN"에 꽂아주십시오.</p>
        </div>

        <div className="step-section">
          <h3>5. 사용할 준비가 완료되었습니다.</h3>
          <p><strong>음원 재생 및 테스트</strong></p>

          <div className="youtube-container">
            <iframe
              src="https://www.youtube.com/embed/7W38_QmWeNU"
              title="음원 재생 테스트 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
            </iframe>
          </div>

          <div className="youtube-container">
            <iframe
              src="https://www.youtube.com/embed/0cuKT0bsrWo"
              title="음원 재생 테스트 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
            </iframe>
          </div>

          <p>소스 기기에서 음원을 재생하여 음악을 감상합니다.</p>
        </div>
      </div>
    </>
  )
}

export default Product2Detail