import { useParams, useNavigate } from 'react-router-dom'
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
            <p className="product-detail-description">이 제품의 사용법과 주요 기능을 단계별로 안내합니다.</p>
          </div>
          
          <div className="product-manual">
            {id === '1' ? (
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
                    <p>탁상시계를 구입했다 - 오래 사용하니 시간 오차 발생.<br/>
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
                    <li>시간 뿐만 아니라 날짜 및 요일 / →이번 달← 과, -지난 달-, +다음 달+ 표기</li>
                    <li>wifi가 끊기더라도, 내부 RTC를 이용하여 최대 30일동안 오프라인으로 사용 가능<br/>
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
                    <p>wifi 시계에 표시된 정보를 참조하십시오.<br/>
                    표기된 "ssid"는 생성된 wifi 이름을,<br/>
                    "page"는 사용자가 브라우저에 입력해야 할 ip주소입니다.</p>
                    
                    <div className="sub-steps">
                      <p><strong>2-1.</strong> 사용자의 휴대폰에서 wifi 기능을 켠 뒤,<br/>
                      시계의 디스플레이에 나타난 "WiFi_Config" 이름의 wifi에 연결하여 주십시오.</p>
                      <img src="/task1/two_1.png" alt="WiFi 연결" className="step-image" />
                      
                      <p><strong>2-2.</strong> "인터넷 연결 확실치 않음" 메시지가 뜰 경우,<br/>
                      하단의 "항상 연결"을 누릅니다.</p>
                      <img src="/task1/two_2.png" alt="인터넷 연결 확인" className="step-image" />
                      <img src="/task1/two_2_2.png" alt="항상 연결" className="step-image" />
                      
                      <p><strong>2-3.</strong> 사용자의 휴대폰에서 인터넷 브라우저를 실행하고, 주소창에<br/>
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
                      
                      <p><strong>에러 화면</strong></p>
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
                    <p>시계는 연결된 wifi에서 지속적으로 시간을 받아옵니다.<br/>
                    이때, 디스플레이 하단에 "! WiFi mode" 라 표기됩니다.</p>
                  </div>

                  <div className="step-section">
                    <h3>5. 오프라인 모드</h3>
                    <p>wifi 연결이 불량하여 오프라인 상태인 경우, 아래와 같은 문구가 나타나며<br/>
                    최대 30일간 지속적으로 사용하실 수 있습니다.</p>
                    <img src="/task1/wifi_clock.png" alt="RTC 모드" className="step-image" />
                    
                    <div className="sub-steps">
                      <p>이 경우, 디스플레이 하단에 "! RTC mode" 라 표기되며<br/>
                      오프라인 상태에서 최대 30일동안 사용할 수 있습니다.</p>
                      
                      <p><strong>만약, 30일이 초과한 경우</strong><br/>
                      시계는 강제 재부팅을 하게 되며</p>
                      
                      <p>재부팅 이후에 wifi 연결에 실패할 경우,<br/>
                      2번 섹션로 돌아가 wifi 설정을 완료하여 주십시오.</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h2>사용 방법</h2>
                <p>여기에 {product.title}의 상세한 사용 설명서가 들어갈 예정입니다.</p>
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