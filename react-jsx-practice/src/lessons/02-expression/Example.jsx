// JSX 안에서 자바스크립트 문법을 사용하려면
    // 중괄호 {} 안에 작성할 수 있다!
function Example() {
    const name = '사용자'
    const age = 21
    const hobbies = ["운동", "산책", "러닝"]
    const user = {nickname: '닉네임', level: 10}

    function welcome(who) {
        return `${who}님, 환영합니다!`
    }

    return (
        <>
            {/*변수 사용*/}
            <h2>{name}</h2>
            
            {/*계산식 사용*/}
            <p>나이: {age}</p>
            <p>내년 나이: {age+1}</p>

            {/*함수 호출*/}
            <p>{welcome(name)}</p>

            {/*객체, 배열 값 표현*/}
            <p>
                취미 개수: {hobbies.length}
                첫번째 취미: {hobbies[0]} <br></br>
                닉네임: {user.nickname} / 레벨: {user['level']}
            </p>
            <p>
                [{true}] [{false}] [{null}] [{undefined}] <br/>
                true, false, null, undefined 는 화면에 표시되지 않는다!
            </p>
        </>
    )
}
export default Example