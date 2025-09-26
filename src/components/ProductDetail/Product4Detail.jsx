import React from 'react'
import { useNavigate } from 'react-router-dom'
import ImageSlider from '../../Modules/Slider'

function Product4Detail() {
  const navigate = useNavigate()

  return (
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
          <p>PCB는 Printed Circuit Board의 줄임말로,<br />
          한국말로는 <strong>인쇄회로기판</strong> 이에요!</p>
          <p>쉽게 말하면 전자부품들을 서로 이어서 전기가 통하는 통로를 미리 그려놓은 판이라 생각하면 돼요.</p>
          <p>PCB가 있기 이전에는 복잡한 회로를 사람이 직접 연결하곤 했었죠.<br />
          PCB는 현대의 전자제품을 이루는 가장 기초적인 부분이라 볼 수 있어요.<br />
          또한 전자제품을 깔끔하고 쉽게 만들 수 있답니다.</p>
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

        <div className='explain-section'>
          <h2>PCB 에칭이란?</h2>
          <p><strong>PCB를 만드는 공정 중 하나에요.</strong></p>
          <p>전기가 통하는 동판에 유성매직으로 그림을 그리고<br/>
          <strong>특별한 용액(염화 제2철 용액)</strong>에 담그면 멋진 PCB가 완성돼요.</p>
          <p>여러분도 쉽게 나만의 PCB기판을 만들어 키링으로 만들어 볼 수 있답니다!</p>
        </div>

        <div className='experience-effect-section'>
          <h2>이번 체험의 기대 효과</h2>
          <p>• 체험자가 동판 위에 직접 그림을 그리고, 에칭 공정을 통해 실제pcb를 만드는 과정을 눈으로 확인.</p>
          <p> <strong>전자회로pcb 제작공정의 기본 원리를 자연스레 이해 가능</strong></p>
          <br />
          <p>• 전자분야 전공 서적을 공부를 통해 얻어야 하는 딱딱한 지식이 아닌 직접 만든 결과물과 연결된 "살아있는 지식"이 되기 때문에</p>
          <p><strong>단순히 키링을 만드는 것에 그치지않고, 과학과 공학 분야에 대한 새로운 호기심과 흥미를 유발</strong></p>
          <br />
          <p>• 직접 그린 형상이 담긴 키링으로 자신만의 특별한 패션 아이템 만들기 가능</p><br></br>
          <p>• <strong>실제로 사용할 수 있는 나만의 아이템을 만든다는 점에서 더 큰 가치를 제공</strong></p><br></br>
          <p>• 열쇠나 가방, 파우치등에 달아 일상적으로도 사용 할 수 있는 실용적 제품</p>
        </div>

        <div className='step-section'>
          <h2>PCB 기판 제작 상세 설명서</h2>
          <ImageSlider images={["/task4/step1.png", "/task4/step2.png", "/task4/step3-1.png", "/task4/step3-2.png", "/task4/step4-1.png",
            "/task4/step4-2.png", "/task4/step5-1.png", "/task4/step5-2.png", "/task4/step6.png"]} texts={[
              <>1. 부스에서 재단된 동판과 키링세트, 유성매직을 전달받습니다.</>,
              <>2. 유성매직을 이용하여 동판 위에 자신만의 형상을 그립니다.</>,
              <>3. 그림이 완성되었다면, 메이커가 여러분의 동판을 받아 에칭용기에 넣고, 에칭을 진행합니다. 이후 상온에서 약 25분간 에칭이 완료될 때까지 기다려 주세요.</>,
              <>3. 그림이 완성되었다면, 메이커가 여러분의 동판을 받아 에칭용기에 넣고, 에칭을 진행합니다. 이후 상온에서 약 25분간 에칭이 완료될 때까지 기다려 주세요.</>,
              <>4. 에칭이 완료되면 메이커가 여러분을 대신하여 동판을 에칭액에서 조심스럽게 꺼내고, 알콜로 겉면을 닦아 잔류 용액을 청소해 드립니다.</>,
              <>4. 에칭이 완료되면 메이커가 여러분을 대신하여 동판을 에칭액에서 조심스럽게 꺼내고, 알콜로 겉면을 닦아 잔류 용액을 청소해 드립니다.</>,
              <>5. 청소가 끝나면 pcb 기판이 완성됩니다! 이후 메이커가 완성된 커스텀 pcb 기판을 키링 세트를 끼워 여러분께 전달해 드립니다.</>,
              <>5. 청소가 끝나면 pcb 기판이 완성됩니다! 이후 메이커가 완성된 커스텀 pcb 기판을 키링 세트를 끼워 여러분께 전달해 드립니다.</>,
              <>6. 이제 여러분의 커스텀 pcb 기판을 엑세사리로 사용해보세요! <br /><strong>(TIP): pcb기판이 오염되었을 때에는 물로 청소가 가능합니다.</strong></>
            ]}/>
        </div>
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

export default Product4Detail