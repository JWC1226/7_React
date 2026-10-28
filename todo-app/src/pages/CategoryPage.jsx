import { useParams } from "react-router-dom"
import { useTodoStore } from "../store/useTodoStore"
import { CATEGORIES } from "../constants"
import { Card, EmptyText, PageTitle } from "../styles/common"
import TodoForm from "../components/TodoForm"
import TodoList from "../components/TodoList"


function CategoryPage() {
    // store에서 todos 상태를 선택하여 가저오기
    const todos = useTodoStore((state) => state.todos)
    const {category} = useParams()  // "/category/:category"
    if (!CATEGORIES[category]) {
        return (
            <>
                <PageTitle>없는 카테고리입니다</PageTitle>
                <Card>
                    <EmptyText>{category}카테고리는 존재하지 않습니다</EmptyText>
                </Card>
            </>
        )
    }

    const {label} = CATEGORIES[category]
    const filtered = todos.filter((todo)=>todo.category === category)

    return(
        <>
            <PageTitle>{label} ({filtered.length})</PageTitle>
            <TodoForm key={category} defaultCategory={category}/>
            <TodoList todos={filtered} />
        </>
    )
}
export default CategoryPage