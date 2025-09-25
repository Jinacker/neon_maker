import { useParams, useNavigate } from 'react-router-dom'
import ImageSlider from './Modules/Slider'
import ImageSliderWithThum from './Modules/SliderWithThum'
import './App.css'

/**
 * 제품 상세 페이지 컴포넌트
 * 개별 제품의 사용 설명서를 표시
 */
function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  // 제품 정보 (App.jsx와 동일하게 유지)
  const products = [
    { id: 1, number: '①', title: 'ESP8266을 이용한 WiFi 시계' },
    { id: 2, number: '②', title: '하만/카돈 유닛 활용, 거치형 블루투스 스피커' },
    { id: 3, number: '③', title: 'SKY 스톤 유닛 활용, 휴대용 블루투스 스피커' },
    { id: 4, number: '④', title: '나만의 커스텀PCB 키링 만들기' },
    { id: 5, number: '⑤', title: 'PC파워를 개조한 USB 16포트 멀티 충전기' },
    { id: 6, number: '⑥', title: 'DIY 무선충전기' },
    { id: 7, number: '⑦', title: '버려지는 어댑터로 만드는 휴대폰 충전기' }
  ]

  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return <div>제품을 찾을 수 없습니다.</div>
  }

  const handleHomeClick = () => {
    navigate('/')
  }

  return (
    <div className="app">
      {/* 헤더 영역 (동일) */}
      <header className="header">
        <div className="logo-section">
          <img src="/maker_logo.png" alt="네온메이커 로고" className="logo" />
        </div>
      </header>

      {/* 홈 버튼 네비게이션 */}
      <nav className="home-navigation">
        <button
          className="home-button"
          onClick={handleHomeClick}
        >
          홈으로
        </button>
      </nav>

      {/* 메인 콘텐츠 */}
      <main className="main-content">
        <div className="product-detail-content">
          <div className="product-detail-intro">
            <img src="/makey.png" alt="메이커 로고" className="intro-small-logo" />
            <h1 className="product-detail-title">{product.number} {product.title}</h1>
            <p className="product-detail-subtitle">제품 사용 설명서</p>
            <p className="product-detail-description">이 페이지는 제품의 주요 기능과 사용 방법을 안내합니다.</p>
          </div>

          <div className="product-manual">
            {id === '1' && (
              <>
                <div className="product-info-section">
                  <h2>제품 정보</h2>
                  <img src="/task1/wifi_clock.png" alt="WiFi 시계 제품" className="product-info-image" />
                  <div className="info-grid">
                    <div className="info-item">
                      <span className="info-label">제품명:</span>
                      <span className="info-value">네오&wifi_clock</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">가격:</span>
                      <span className="info-value">18,000원</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">제품 총 수량:</span>
                      <span className="info-value">18대</span>
                    </div>
                  </div>
                </div>

                <div className="problem-section">
                  <h2>문제 제기</h2>
                  <div className="problem-item">
                    <span className="problem-number">①</span>
                    <p>탁상시계를 구입했다 - 오래 사용하니 시간 오차 발생.<br />
                      <strong>"영원히 시간을 맞출 필요가 없는 탁상시계는 없을까?"</strong></p>
                  </div>
                  <div className="problem-item">
                    <span className="problem-number">②</span>
                    <p>백라이트가 없어, 어두운 곳에서는 시간 확인이 불가능</p>
                  </div>
                  <div className="problem-item">
                    <span className="problem-number">③</span>
                    <p>시야각에 크게 제한이 있음</p>
                  </div>
                </div>

                <div className="solution-section">
                  <h2>해결책 제시</h2>
                  <ul>
                    <li>탁상시계에 wifi 기능을 접목하여 언제 어디서든 한국 표준시를 불러오는 시계를 만들어보자.</li>
                    <li>백라이트 LCD 디스플레이로 기존 흑백 LCD대비 시인성 확보</li>
                  </ul>
                </div>

                <div className="features-section">
                  <h2>제품 특장점</h2>
                  <ul>
                    <li>미니멀리즘 디자인으로, 컴퓨터 책상 및 탁상 어느 곳에서도 어우러지는 디자인</li>
                    <li>한 번 wifi에 연결하면, 그 wifi를 기억하여 집 안 어느 곳에서도 사용이 가능</li>
                    <li>한국 표준시를 "시", "분" 뿐만 아니라 "초" 단위로 표기</li>
                    <li>시간 뿐만 아니라 날짜 및 요일 <br />/ →이번 달← 과, -지난 달-, +다음 달+ 표기</li>
                    <li>wifi가 끊기더라도, 내부 RTC를 이용하여 최대 30일동안 오프라인으로 사용 가능<br />
                      (이 때, 디스플레이 하단에는 "! RTC mode" 라 표기됨.)</li>
                    <li>각 고객 취향에 맞는 디스플레이 색상 선택 (블루, 그린, 화이트)</li>
                  </ul>
                </div>

                <div className="manual-section">
                  <h2>제품 사용 설명서</h2>

                  <div className="step-section">
                    <h3>1. 전원을 투입합니다</h3>
                    <img src="/task1/one.png" alt="전원 연결" className="step-image" />
                    <p>제품 타입에 따라 usb-C 혹은 ac어댑터로 연결할 수 있습니다.</p>
                    <p>디스플레이에는 "SETUP from WiFi" 라는 문구가 나타나며,</p>
                    <ul>
                      <li><strong>1-1.</strong> 저장된 wifi 정보가 있을 시, 해당 wifi에 접속을 시도합니다.</li>
                      <li><strong>1-2.</strong> 저장된 wifi 정보가 없거나, wifi의 비밀번호가 틀린 경우 - 아래 2번 섹션을 따르십시오.</li>
                    </ul>
                  </div>

                  <div className="step-section">
                    <h3>2. 시계에 wifi 정보를 입력합니다</h3>
                    <img src="/task1/two.png" alt="wifi 정보 입력" className="step-image" />
                    <p>wifi 시계에 표시된 정보를 참조하십시오.<br />
                      표기된 "ssid"는 생성된 wifi 이름을,<br />
                      "page"는 사용자가 브라우저에 입력해야 할 ip주소입니다.</p>

                    <div className="sub-steps">
                      <p><strong>2-1.</strong> 사용자의 휴대폰에서 wifi 기능을 켠 뒤,<br />
                        시계의 디스플레이에 나타난 "WiFi_Config" 이름의 wifi에 연결하여 주십시오.</p>
                      <img src="/task1/two_1.png" alt="WiFi 연결" className="step-image" />

                      <p><strong>2-2.</strong> "인터넷 연결 확실치 않음" 메시지가 뜰 경우,
                        하단의 "항상 연결"을 누릅니다.</p>
                      <img src="/task1/two_2.png" alt="인터넷 연결 확인" className="step-image" />
                      <img src="/task1/two_2_2.png" alt="항상 연결" className="step-image" />

                      <p><strong>2-3.</strong> 사용자의 휴대폰에서 인터넷 브라우저를 실행하고, 주소창에
                        시계의 디스플레이에 나타난 "192.168.4.1" 을 작성한 다음, 엔터를 눌러 주십시오.</p>
                      <img src="/task1/two_3.png" alt="브라우저 주소 입력" className="step-image" />
                      <img src="/task1/two_3_2.png" alt="IP 주소 결과" className="step-image" />

                      <p><strong>2-4.</strong> "Configure WiFi" 를 터치합니다.</p>
                      <img src="/task1/two_4.png" alt="Configure WiFi 선택" className="step-image" />
                      <img src="/task1/two_4_2.png" alt="WiFi 목록" className="step-image" />

                      <p><strong>2-5.</strong> 연결하고자 하는 wifi 를 터치합니다.</p>
                      <img src="/task1/two_5.png" alt="WiFi 선택" className="step-image" />

                      <p><strong>2-6.</strong> 해당 wifi의 비밀번호를 입력합니다.</p>
                      <img src="/task1/two_6.png" alt="WiFi 비밀번호 입력" className="step-image" />

                      <p><strong>2-7.</strong> "Save" 버튼을 눌러 입력한 wifi 정보를 저장합니다.</p>
                      <img src="/task1/two_7.png" alt="Save 버튼" className="step-image" />
                      <p>아래와 같은 화면이 나타나면, 성공적으로 저장되었음을 나타냅니다.</p>
                      <img src="/task1/two_7_2.png" alt="저장 완료" className="step-image" />
                    </div>
                  </div>

                  <div className="step-section">
                    <h3>3. 시계의 디스플레이를 확인합니다</h3>
                    <div className="sub-steps">
                      <p><strong>3-1.</strong> 만약, 디스플레이가 아래와 같이 나타난다면, wifi의 비밀번호가 틀렸을 가능성이 있습니다. (연결실패), 이 경우 2번 섹션으로 돌아가 다시 wifi 정보를 입력해 줍니다.</p>

                      <p><strong>[에러 화면]</strong></p>
                      <img src="/task1/three_1.jpg" alt="연결 실패 화면" className="step-image" />
                      <img src="/task1/three_1_2.jpg" alt="연결 실패 에러" className="step-image" />

                      <p>곧이어 시계는 자동으로 재부팅 합니다.</p>

                      <p><strong>3-2.</strong> 아래와 같이 디스플레이의 변화가 없다면, 이는 wifi 연결 과정에서 문제가 생긴 것입니다. (인증 관련 문제) 따라서 이 경우 2번 섹션으로 돌아가 다시 wifi 정보를 입력해 줍니다.</p>
                      <img src="/task1/three_2.png" alt="연결 실패 변화없음" className="step-image" />

                      <p><strong>3-3.</strong> 위 문제에 해당하지 않는다면 다음 섹션으로 이동하십시오.</p>
                    </div>
                  </div>

                  <div className="step-section">
                    <h3>4. 시계를 사용할 준비가 되었습니다</h3>
                    <img src="/task1/four.png" alt="WiFi 시계 완성" className="step-image" />
                    <p>시계는 연결된 wifi에서 지속적으로 시간을 받아옵니다.<br />
                      이때, 디스플레이 하단에 "! WiFi mode" 라 표기됩니다.</p>
                  </div>

                  <div className="step-section" style={{ marginBottom: '0' }}>
                    <h3>5. 오프라인 모드</h3>
                    <p>wifi 연결이 불량하여 오프라인 상태인 경우, 아래와 같은 문구가 나타나며
                      최대 30일간 지속적으로 사용하실 수 있습니다.</p>
                    <img src="/task1/wifi_clock.png" alt="RTC 모드" className="step-image" />

                    <div className="sub-steps">
                      <p>이 경우, 디스플레이 하단에 "! RTC mode" 라 표기되며
                        오프라인 상태에서 최대 30일동안 사용할 수 있습니다.</p>

                      <p><strong>만약, 30일이 초과한 경우</strong><br />
                        시계는 강제 재부팅을 하게 되며</p>

                      <p style={{ marginBottom: '0' }}>재부팅 이후에 wifi 연결에 실패할 경우,<br />
                        2번 섹션로 돌아가 wifi 설정을 완료하여 주십시오.</p>
                    </div>
                  </div>
                </div>
              </>
            )}
            {id === '4' && (
              <>
                <div className="product-info-section">
                  <h2>제품 정보</h2>
                  <img src="/task4/main.png" alt="완성된 pcb 사진" className="product-info-image" />
                  <div className="info-grid">
                    <div className="info-item">
                      <span className="info-label">제품명:</span>
                      <span className="info-value"> 나만의 PCB 회로기반</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">가격:</span>
                      <span className="info-value">8,000원</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">제품 총 수량:</span>
                      <span className="info-value">40개</span>
                    </div>
                  </div>
                </div>
                <div className="explain-section">
                  <div className="explain-item">
                    <h2>PCB란?</h2>
                    <p>pcb란 Printed Circuit Board의 약자로 한국말로는 인쇄회로기판이라고 해요. 전문적으로 말하면, 전자 부품들을 연결하기 위한 전도성 경로(회로)가 인쇄된 기판이라고 합니다.
                      예전에는 전선을 납땜하거나 브레드보드에 줄 같은 선을 꽂아서 회로를 만들었어요. 하지만 PCB(인쇄회로기판)를 사용하면 훨씬 편리해지죠.
                      PCB는 회로가 미리 판에 그려져 있어서 복잡하게 선을 연결하지 않아도 되고, 여러 개를 똑같이 많이 만들 수 있어요. 또 사람이 직접 납땜하다가 실수하는 경우가 줄어들어서 고장 나는 물건이 적게 나오지요.
                      그래서 제품이 고장이 덜 나고 오래 잘 쓸 수 있게 되며, 작은 공간에서도 알맞게 회로를 짤 수 있는 장점이 있어요</p>
                  </div>
                </div>
                <div className="manual-section">
                  <div className='step-section'>
                  <h2>PCB 만들기</h2>
                  <div className="features-section">
                    <p>준비물</p>
                    <div className='sub-steps'>
                    <ul>
                      <li>유성매직</li>
                      <li>동판</li>
                      <li>애칭액</li>
                    </ul>
                    </div>
                  </div>
                  </div>
                  <div className='step-section'>
                    <h2>PCB 에칭이란?</h2>
                    <p>일반적으로 pcb는 공장에서 기계로 정밀하고 빠르게 대량 생산을 하여 만들어집니다. <b>하지만 여러분도 몇가지 간단한 재료만 있다면 쉽게 만들 수 있다는 사실, 아시나요?</b>
                      유성 매직, 동판, 에칭액만 있으면 여러분도 간단하게 PCB를 만들 수 있답니다. 제공된 동판에 유성 매직으로 여러분만의 회로를 새겨보세요! 
                      그런 다음 저희 메이커 팀원들이 여러분이 만든 동판을 염화 제2철 용액에 담가드립니다. 
                      조금만 기다리면 완성된 PCB 기판을 얻을 수 있습니다! 
                      이처럼 동판에 회로를 새기고 염화 제2철에 담그는 과정을 통해 PCB 기판을 만드는 방법을 <b>PCB에칭(Etching)</b>이라고 합니다.</p>
                  </div>

                  <div className='step-section'>
                    <h2>이번 체험의 기대 효과</h2>
                   
                      <ul>
                          <li>체험자가 동판 위에 직접 그림을 그리고, 에칭 공정을 통해 실제pcb를 만드는 과정을 눈으로 확인  <br></br><b>전자회로pcb 제작공정의 기본 원리를 자연스레 이해 가능</b></li>
                          <li>전자분야 전공 서적을 공부를 통해 얻어야 하는 딱딱한 지식이 아닌 직접 만든 결과물과 연결된 "살아있는 지식"이 되기 때문에 <br></br>단순히 키링을 만드는 것에 그치지않고, 과학과 공학 분야에 대한 새로운 호기심과 흥미를 유발</li>
                          <li>직접 그린 형상이 담긴 키링으로 자신만의 특별한 패션 아이템 만들기 가능 <br></br><b>실제로 사용할 수 있는 나만의 아이템을 만든다는 점에서 더 큰 가치를 제공</b></li>
                          <ul>
                            <li>열쇠나 가방, 파우치등에 달아 일상적으로도 사용 할 수 있는 실용적 제품</li>
                          </ul>
                      </ul>
                  </div>                   
                  <div className='step-section'>
                    <h2>PCB 기판 제작 상세 설명서</h2>
                    <ImageSlider images={["/task4/step1.png", "/task4/step2.png", "/task4/step3-1.png", "/task4/step3-2.png", "/task4/step4-1.png", 
                      "/task4/step4-2.png", "/task4/step5-1.png", "/task4/step5-2.png", "/task4/step6.png"]} texts={[
                        <>부스에서 재단된 동판과 키링세트, 유성매직을 전달받습니다.</>,
                        <>유성매직을 이용하여 동판 위에 자신만의 형상을 그립니다.</>,
                        <>그림이 완성되었다면, 메이커가 여러분의 동판을 받아 에칭용기에 넣고, 에칭을 진행합니다. 이후 상온에서 약 25분간 에칭이 완료될 때까지 기다려 주세요.</>,
                        <>그림이 완성되었다면, 메이커가 여러분의 동판을 받아 에칭용기에 넣고, 에칭을 진행합니다.이후 상온에서 약 25분간 에칭이 완료될 때까지 기다려 주세요.</>,
                        <>에칭이 완료되면 메이커가 여러분을 대신하여 동판을 에칭액에서 조심스럽게 꺼내고, 알콜로 겉면을 닦아 잔류 용액을 청소해 드립니다.</>,
                        <>에칭이 완료되면 메이커가 여러분을 대신하여 동판을 에칭액에서 조심스럽게 꺼내고, 알콜로 겉면을 닦아 잔류 용액을 청소해 드립니다.</>,
                        <>청소가 끝나면 pcb 기판이 완성됩니다! 이후 메이커가 완성된 커스텀 pcb 기판을 키링 세트를 끼워 여러분께 전달해 드립니다.</>,
                        <>청소가 끝나면 pcb 기판이 완성됩니다! 이후 메이커가 완성된 커스텀 pcb 기판을 키링 세트를 끼워 여러분께 전달해 드립니다.</>,
                        <>이제 여러분의 커스텀 pcb 기판을 엑세사리로 사용해보세요! <br /><strong>(TIP): pcb기판이 오염되었을 때에는 물로 청소가 가능합니다.</strong></>

                      ]}/>
                  </div>
                </div>
              </>
            )}
            {id === '6' && (
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
              </>
            )}
            {id === '7' && (
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
                    <h2>DIY 무선충전기 상세 설명서</h2>
                    <ImageSlider images={["/task7/step1.png", "/task7/step2.png", "/task7/step3.png", "/task7/step4.png", "/task7/step5.png",
                      "/task7/step6.png", "/task6/step7.png", "/task6/step8.jpg", "/task6/step9.png"]} texts={[
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
                      <p>전원 포트가 iec c8만 지원하기 때문에 규격에 맞는 케이블을 사용하셔야 합니다</p>
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
            )}

            {id === '3' && (
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
            )}
          </div>
        </div>
      </main>

      {/* 푸터 영역 (동일) */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-copyright">© 2025 Neo&. All rights reserved.</div>
          <a href="https://www.makerfaireseoul.com/2025" target="_blank" rel="noopener noreferrer" className="homepage-link">
            메이커페어 서울 홈페이지
          </a>
        </div>
      </footer>
    </div>
  )
}

export default ProductDetail