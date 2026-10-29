import styled from "styled-components"
import TodoList from "../components/TodoList"
import TodoForm from "../components/TodoForm"
import { PageTitle } from "../styles/common"
import { useState } from "react"
import { useTodoStore } from "../store/useTodoStore"

const Filters = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`
const FilterButton = styled.button`
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid var(--input-border);
  cursor: pointer;
  background: ${({ $active }) => ($active ? 'var(--primary)' : 'var(--surface)')};
  color: ${({ $active }) => ($active ? '#fff' : 'var(--sub-text)')};
`
const FILTERS = [
  { key: 'all', label: '전체' },
  { key: 'active', label: '진행 중' },
  { key: 'done', label: '완료' },
]

function TodoListPage() {
    const todos = useTodoStore((state) => state.todos)
    const [filter, setFilter] = useState('all')
    
    const filteredTodos = todos.filter((todo) => {
        if (filter === 'active') return !todo.done
        if (filter === 'done') return todo.done
        return true     // filter === 'all'
    })

    return(
        <>
            <PageTitle>할 일 목록</PageTitle>
            <TodoForm />
            <Filters>
                {
                    FILTERS.map(({key, label}) => {
                        return (
                            <FilterButton key={key} onClick={()=>{setFilter(key)}} $active={filter === key}>
                                {label}
                            </FilterButton>
                        )
                    })
                }
            </Filters>
            <TodoList todos={filteredTodos} />
        </>
    )
}
export default TodoListPage