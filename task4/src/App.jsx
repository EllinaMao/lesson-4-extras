
import './App.css'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Header from './components/Header'
// import Header from './components/Header'
/**
 * 
 * @returns 
# extra - task 4
Композиция компонентов и повторное использование.

1) Создайте функциональный компонент Header, который отображает заголовок сайта.
2) Создайте функциональный компонент Footer с любым текстом.
3) Создайте класс MainContent, который хранит состояние counter (число) и две кнопки: увеличить и уменьшить значение.
4) Создайте компонент App, который рендерит Header, MainContent и Footer в одном дереве.
5) Попробуйте разделить компоненты по файлам и использовать экспорт/импорт.
6) Добавьте пропсы для Header и Footer, чтобы можно было менять текст.
7) Добавьте изображение или иконку в Header через импорт.
 */
function App() {

  return (
    <>
  <Header>Header of the site</Header>
  <MainContent />
  <Footer text="Footer of the site"></Footer>
    </>
  )
}






export default App
