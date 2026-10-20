// HTML 속성 (class, style, href, ...) 을 거의 그대로 사용하지만
    // 일부 이름이 달라지는 항목들이 있다
    // - class ⇒ className
    // - for ⇒　htmlfor
    // - css 스타일 속성명: kebbab-case ⇒ camelCase
function Example() {
    const boxStyle = {
        backgroundColor: 'darkgray',
        padding: 12,        // 
        boardRadius: 8
    }
    return (
        <>
            <p className="highlight">클래스를 지정할 때 className을 사용한다！</p>
            {/*바깥쪽 중괄호: JavaScript 작성을 위해 표현,
               안쪽 중괄호: 스타일 정보를 담은 객체를 표현
            */}
            <p style={{color: 'indigo', fontsize: 20}}>
                style은 객체 형태로 입력! 스타일 속성명은 camelCase 사용</p>
            <p style={boxStyle}>스타일 객체를 변수로 따로 저장하여 사용이 가능하다！</p>
            
            {/*for 속성 대신 htmlFor를 사용해야 한다！*/}
            <label htmlFor="nickname">닉네임</label>
            <input type="text" id="nickname" placeholder="여기에 닉네임을 입력하세요.."/><br/>
            {/*true/false 값을 가지는 속성은 이름만 작성해도 true로 동작된다*/}
            <button disabled>
                비활성화 버튼
            </button>
        </>   
    )
}
export default Example