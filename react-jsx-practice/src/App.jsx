import './App.css'
import Lesson  from './lessons/01-jsx-basic/Example'
import Lesson2 from './lessons/02-expression/Example'
import Lesson3 from './lessons/03-attribute/Example'

function App() {
  return (
    <>
      <h1>JSX 실습</h1>
      <hr></hr>
      {/*<Lesson></Lesson>*/}
      <Lesson/>
      {/*<Lesson>만 사용금지*/}
      <Lesson2/>
      <Lesson3/>
      {/*오류 발생시 터미널에 `npm run lint` 사용*/}
    </>
  )
}
export default App