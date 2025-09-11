import { useState } from 'react'
import './App.css'

/**
 * 메인 앱 컴포넌트
 * 메이커페어 서울 2025 네온메이커 부스 랜딩 페이지
 */
function App() {
  // 탭 상태 관리
  const [activeTab, setActiveTab] = useState('products')
  
  // 제품 목록
  const products = [
    { id: 1, number: '①', title: 'ESP8266을 이용한 WiFi 시계' },
    { id: 2, number: '②', title: '하만/카돈 유닛 활용, 거치형 블루투스 스피커' },
    { id: 3, number: '③', title: 'SKY 스톤 유닛 활용, 휴대용 블루투스 스피커' },
    { id: 4, number: '④', title: '나만의 커스텀PCB 키링 만들기' },
    { id: 5, number: '⑤', title: 'PC파워를 개조한 USB 16포트 멀티 충전기' },
    { id: 6, number: '⑥', title: 'DIY 무선충전기' },
    { id: 7, number: '⑦', title: '버려지는 어댑터로 만드는 휴대폰 충전기' }
  ]
  
  const handleProductClick = (productId) => {
    // 나중에 각 제품 상세 페이지로 이동하는 로직
    console.log(`제품 ${productId} 클릭됨`)
  }
  
  return (
    <div className="app">
      {/* 헤더 영역 */}
      <header className="header">
        <div className="logo-section">
          <img src="/maker_logo.png" alt="네온메이커 로고" className="logo" />
        </div>
      </header>

      {/* 탭 네비게이션 */}
      <nav className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => setActiveTab('products')}
        >
          제품 소개
        </button>
        <button 
          className={`tab-button ${activeTab === 'team' ? 'active' : ''}`}
          onClick={() => setActiveTab('team')}
        >
          팀 소개
        </button>
        <button 
          className={`tab-button ${activeTab === 'location' ? 'active' : ''}`}
          onClick={() => setActiveTab('location')}
        >
          부스 위치
        </button>
        <button 
          className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          문의
        </button>
      </nav>

      {/* 메인 콘텐츠 */}
      <main className="main-content">
        {activeTab === 'products' && (
          <>
            <div className="product-intro">
              <img src="/makey.png" alt="메이커 로고" className="intro-small-logo" />
              <h2 className="main-product-title">2025 Neo& 제품 사용 설명서</h2>
              <p className="product-subtitle">이 문서는 제품의 주요 기능과 사용 방법을 안내합니다.</p>
              <p className="product-description">처음 사용하시는 분도 쉽게 따라 하실 수 있도록 단계별로 설명했습니다.</p>
            </div>
            <div className="product-list">
            {products.map(product => (
              <div 
                key={product.id}
                className="product-item"
                onClick={() => handleProductClick(product.id)}
              >
                <span className="product-number">{product.number}</span>
                <span className="product-title">{product.title}</span>
              </div>
            ))}
            </div>
          </>
        )}
        
        {activeTab === 'team' && (
          <div className="team-content">
            <div className="team-intro">
              <img src="/makey.png" alt="메이커 로고" className="intro-small-logo" />
              <h2 className="team-title">Neo& 소개</h2>
              <div className="team-logo-section">
                <img src="/neon.png" alt="Neo& 팀 로고" className="team-logo" />
              </div>
              <p className="team-subtitle">일상 속 호기심을 7가지의 특별한 발명으로 풀어낸 "네오&" 입니다.</p>
              <p className="team-description">다양한 분야의 메이커들과 함께 직접 경험하고, 여러분의 숨겨진 '메이커 본능'을 발견해보세요!</p>
            </div>
            
            <div className="team-members">
              <div className="member-card">
                <div className="member-header">
                  <img src="/members/park.png" alt="박성훈 프로필" className="member-photo" />
                  <div className="member-info">
                    <div className="member-role">Leader / Maker</div>
                    <div className="member-name">박성훈</div>
                    <div className="member-affiliation">안양대학교 정보전기전자공학과 재학</div>
                  </div>
                </div>
                <div className="member-description">
                  <p>안녕하세요. 네오& 리더 박성훈 입니다.</p>
                  <p>이번 네오&에서 프로젝트를 전반적으로 관리하는 팀장을 맡았으며 전기공학을 전공하여 앞으로도 전기, 전자 관련한 메이킹을 이어나가고자 합니다.</p>
                  <a href="https://blog.neo-n.org" target="_blank" rel="noopener noreferrer" className="blog-link">자세히 보기</a>
                </div>
              </div>
              
              <div className="member-card member-card-right">
                <div className="member-header member-header-right">
                  <div className="member-info member-info-right">
                    <div className="member-role">Product Designer</div>
                    <div className="member-name">김현호</div>
                    <div className="member-affiliation">경희대학교 산업디자인학과 재학</div>
                  </div>
                  <img src="/members/kim.png" alt="김현호 프로필" className="member-photo" />
                </div>
                <div className="member-description member-description-right">
                  <p>안녕하세요, 저는 이번 메이커페어 프로젝트에서 프로덕트 디자이너를 맡고 있는 김현호입니다.</p>
                  <p>아이디어를 시각적·물리적 프로토타입으로 구체화하는 역할을 하고 있습니다.</p>
                  <a href="https://www.instagram.com/hyeonho_kkim/" target="_blank" rel="noopener noreferrer" className="blog-link">자세히 보기</a>
                </div>
              </div>
              
              <div className="member-card">
                <div className="member-header">
                  <img src="/members/jin.png" alt="김진 프로필" className="member-photo" />
                  <div className="member-info">
                    <div className="member-role">Web Designer / FrontEnd</div>
                    <div className="member-name">김진</div>
                    <div className="member-affiliation">인하대학교 공간정보공학과 재학</div>
                  </div>
                </div>
                <div className="member-description">
                  <p>안녕하세요, 떠오른 발상을 프로덕트로 잇는 기쁨으로 개발자의 길을 선택한 김진입니다.</p>
                  <p>혼자서도 뭐든 뚝딱 만드는 풀스택을 목표로 성장 중이며,<br></br>지금 보시는 웹의 디자인/개발을 맡았습니다 :)</p>
                  <a href="https://github.com/Jinacker" target="_blank" rel="noopener noreferrer" className="blog-link">자세히 보기</a>
                </div>
              </div>
              
              <div className="member-card member-card-right">
                <div className="member-header member-header-right">
                  <div className="member-info member-info-right">
                    <div className="member-role">FrontEnd</div>
                    <div className="member-name">최재정</div>
                    <div className="member-affiliation">경기대학교 컴퓨터공학과 재학</div>
                  </div>
                  <img src="/members/choi.jpeg" alt="최재정 프로필" className="member-photo" />
                </div>
                <div className="member-description member-description-right">
                  <p>도움이 필요한 곳이라면 어디서든, 늘 관심과 사랑을 가지고 문제를 해결하려는 소프트웨어 엔지니어 최재정입니다.</p>
                  <p>현재 보고계신 웹을 작업했습니다.</p>
                  <a href="https://github.com/jaejoengsin" target="_blank" rel="noopener noreferrer" className="blog-link">자세히 보기</a>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'location' && (
          <div className="location-content">
            <div className="location-intro">
              <img src="/makey.png" alt="메이커 로고" className="intro-small-logo" />
              <h2 className="location-title">찾아오시는 길</h2>
              <p className="location-subtitle">메이커페어 서울 2025에서 네오&을 만나보세요!</p>
              <p className="location-description">전체 지도와 상세 위치를 확인하여 쉽게 찾아오실 수 있습니다.</p>
            </div>
            
            <div className="event-details">
              <p><strong>일시:</strong> 2025.09.27.(토) ~ 09.28(일)</p>
              <p><strong>시간:</strong> 10:30 ~ 17:30</p>
              <p><strong>장소:</strong> 서울시립과학관 일대</p>
            </div>
            
            <div className="map-section">
              <h3>① 전체 행사장 지도</h3>
              <img src="/map_full.png" alt="메이커페어 서울 2025 전체 지도" className="map-image" />
              
              <h3>② 네오& 부스 위치 (3-5번 부스)</h3>
              <img src="/map_zoom.png" alt="네오& 부스 상세 위치" className="map-image" />
            </div>
          </div>
        )}
        
        {activeTab === 'contact' && (
          <div className="contact-content">
            <div className="contact-intro">
              <img src="/makey.png" alt="메이커 로고" className="intro-small-logo" />
              <h2 className="contact-title">문의</h2>
              <p className="contact-subtitle">궁금한 점이 있으시면 언제든 연락해주세요!</p>
              <p className="contact-description">제품 문의부터 협업 제안까지 모든 문의를 환영합니다.</p>
            </div>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">팀 Neo&</span>
                <a href="mailto:mfs2025@neo-n.org" className="contact-value">mfs2025@neo-n.org</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">메이커페어 주최</span>
                <a href="mailto:mfs2025@makerfaire.kr" className="contact-value">mfs2025@makerfaire.kr</a>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 푸터 영역 */}
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

export default App