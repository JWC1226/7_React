// 리스트(배열)의 각 항목을 화면 조각(컴포넌트)으로 바꿀 때
    // "map"을 사용한다
const snacks = ["포카칩", "미쯔", "새우깡"]
const todos = [
    {id: 1, title: '점심 메뉴 고르기', done: true},
    {id: 2, title: '회의록 작성', done: false},
    {id: 3, title: '화면 설계서 기획 구성', done: false},
    {id: 4, title: 'WBS, 기획서 초안 구조 설계', done: false},
]
function Example() {
    return (
        <>
            <h3>문자열 목록</h3>
            <ul>
                {/* map을 사용하여 동일한 컴포넌트를 표시할 때는
                    최상위 요소에 `key` 속성을 지정해줘야 한다
                */}
                {
                    snacks.map((snack) => {
                        return <li>{snack}</li>
                    })
                }
            </ul>
            <h3>객체 목록</h3>
            <ul>
                {
                    todos.map((todo)=>{
                        return (
                            <li key={todo.id}>
                                {todo.done ? '✔':'■'}{todo.title}
                            </li>
                        )
                    })
                }
            </ul>
            <h4>남은 할 일</h4>
            <p>filter로 먼저 거르고 map으로 표시</p>
            <ul>
                {
                    todos.filter((todo)=>!todo.done)
                        .map((todo)=><li key={todo.id}>{todo.title}</li>)
                }
            </ul>
        </>
    )
}
export default Example