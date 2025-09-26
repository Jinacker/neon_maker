import React from 'react'

function Product5Detail() {
  return (
    <>
      <div className="product-info-section">
        <h2>제품 정보</h2>
        <img src="/task5/port16.png" alt="16포트 멀티 충전기" className="product-info-image" />
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">제품명:</span>
            <span className="info-value">PC파워를 개조한 16포트 멀티 충전기</span>
          </div>
          <div className="info-item">
            <span className="info-label">상태:</span>
            <span className="info-value">폐기</span>
          </div>
        </div>
      </div>

      <div className="explain-section" style={{ marginBottom: '40px' }}>
        <h2>프로젝트 폐기 안내</h2>
        <p>이 프로젝트는</p>
        <p><strong>안전성·완성도 문제와 제작 일정의 한계로 폐기되었습니다.</strong></p>
      </div>

      <div className="link-section" style={{ marginBottom: '40px' }}>
        <h3>폐기 사유가 궁금하시다면 ?</h3>
        <a href="https://blog.neo-n.org/gingeub-16poteu-meolticungjeongi-eobdeiteu/" className='link-box' target="_blank" rel="noopener noreferrer">
          폐기 사유 상세 보기
        </a>
      </div>

      <div className="link-section" style={{ marginBottom: '40px' }}>
        <h3>제작 과정이 궁금하시다면 ?</h3>
        <a href="https://blog.neo-n.org/16poteu-meolticungjeongi-bodeureul-nabddaemhada/" className='link-box' target="_blank" rel="noopener noreferrer">
          16포트 멀티충전기 보드를 납땜하다
        </a>
        <a href="https://blog.neo-n.org/16poteu-meolticungjeongie-sseuil-paweoreul-sonboda/" className='link-box' target="_blank" rel="noopener noreferrer">
          16포트 멀티충전기에 쓸 파워를 손보다
        </a>
      </div>
    </>
  )
}

export default Product5Detail