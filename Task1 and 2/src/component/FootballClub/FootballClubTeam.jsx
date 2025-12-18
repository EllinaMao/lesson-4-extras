/**
Третий компонент должен отображать информацию о текущем составе команды. Количество компонентов зависит только от вашей фантазии при реализации проекта. */
import RenderList from "./RenderList";
function FootballClubTeam(props) {
  const { players } = props;
  return (
    <div className="club-card">
      <h4>Состав команды</h4>
      <RenderList
        items = {players}
        renderItem={(item)=> `${item.name} - ${item.position} (#${item.number})`}
      />
    </div>
  );
}

export default FootballClubTeam;