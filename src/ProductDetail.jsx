import { useParams, useNavigate } from 'react-router-dom'
import { manualContents } from './ProductManualContents'
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
  
  const innerManualJsx = manualContents[id] || (
    <>
      <h2>사용 방법</h2>
      <p>여기에 {product.title}의 상세한 사용 설명서가 들어갈 예정입니다.</p>
    </>
  );

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
            {innerManualJsx}
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