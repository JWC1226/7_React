/*
    useState: 상태 관리 Hook
    const [상태변수, 상태변경함수] = useState(초기값)
    특징
    - 값이 바뀌면 컴포넌트가 다시 실행 (리랜더링)되어 화면이 갱신된다
    - 이전 값 기준으로 바꿀 땐 함수형 업데이트   setXX(prev ⇒ ...)
    - 객체, 배열은 직접 수정하지 않고、 "새로 만들어서" 넘겨줘야 한다
*/
import { useState } from 'react'

// 일반 변수 VS state
function Step1() {
    let plain = 0
    const [count, setCount] = useState(0)
    return (
        <div className="card">
            <h3>STEP 1. 일반 변수 vs state</h3>
            <p>일반 변수: {plain} / state: {count}</p>
            <div className="btn-row">
                <button onClick={()=>{plain += 1; console.log('plain=', plain)}}>
                    일반 변수 +1
                </button>
                <button onClick={()=>{setCount(count+1)}}>
                    state +1
                </button>
            </div>
        </div>
    )
}

function Step2() {
    
}