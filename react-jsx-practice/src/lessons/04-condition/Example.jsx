// 조건에 따라 표시
    // - JSX 안의 중괄호에는 if문을 사용할 수 없다
    //   대신에 "삼항 연산자"와 "&&"를 사용한다
function Example() {
    const isLoggined = true;
    const count = 3
    const stock = 0

    return (
        <>
            {/* 삼항 연산자 (조건식 ? 참일_때 : 거짓일_때 */}
            {/* isLoggined 값이 true이면 "로그인 상태" 표시
                               false이면 "로그인 필요" */}
            <p>
                {isLoggined ? '로그인 상태' : '로그인 필요'}
            </p>
            {/* 조건식 && 표시할_내용 ⇒ 조건이 참일 때만 표시 */}
            {count > 0 && <p>count 값: {count}</p>}

            {/* 삼항 연산자를 사용하여 조건을 만족할 때는 변수에 저장된 값을 표시、만족하지 않을 때는 텍스트를 표시 */}
            <p>재고: {stock > 0 ? `${stock}개` : '품절'}</p>
            <p>재고 상태: {stock && '재고 있음'}</p>
            <p>{stock > 0 && '재고 있음'}</p>
            <hr/>
            <UserRole role="admin"/>
            <UserRole role="member"/>
            <UserRole role=""/>
        </>
    )
}
function UserRole({role}) {
    if (role === '') {
        return null             // null 을 리턴하면 화면에 아무것도 표시하지 않는다！
    }
    if (role === 'admin') {
        return <p> 관리자 </p>
    }
    return <p> 일반 회원 </p>
}
export default Example