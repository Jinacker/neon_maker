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
              <h2 className="main-product-title">2025 네오&메이커페어 제품 사용 설명서</h2>
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
            <h2>팀 소개</h2>
            <p>네온메이커 팀에 대한 소개가 들어갈 예정입니다.</p>
          </div>
        )}
        
        {activeTab === 'contact' && (
          <div className="contact-content">
            <h2>문의</h2>
            <p>연락처 정보가 들어갈 예정입니다.</p>
          </div>
        )}
      </main>

      {/* 푸터 영역 */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-copyright">© 2025 NeoN. All rights reserved.</div>
          <a href="https://www.makerfaireseoul.com/2025" target="_blank" rel="noopener noreferrer" className="homepage-link">
            메이커페어 서울 홈페이지
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App