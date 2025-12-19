/**Создайте простое приложение, которое отображает профиль пользователя и его список постов. Всё разбито по компонентам и файлам, с передачей props, подключением изображений и стилей.
Создайте следующие компоненты:

<UserProfile /> – отображает имя, аватар, короткое описание.
<PostList /> – список всех постов пользователя.
<PostCard /> – карточка одного поста (заголовок, дата, текст, изображение).

Используйте props для передачи данных между компонентами. 
Разнесите компоненты по отдельным файлам. 
Используйте стили (CSS или CSS-модули) для карточек, профиля и общей разметки. 
Подключите изображения для аватара и постов (можно из /public или через import). 
Сделайте композицию — профиль + посты на одной странице. 
Вынесите повторяющиеся элементы в отдельные компоненты (например, кнопку «лайк»).
*/

import "./App.css";
import Header from "./components/Header";
import PostList from "./components/PostList";
import UserProfile from "./components/UserProfile";
import { posts } from "./data";
import { user } from "./data";

function App() {
  return (
    <div className="App">
      <Header>
        <UserProfile
          name={user.name}
          avatar={user.avatar}
          description={user.bio}
          />
      <hr/>
      </Header>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
