/**
Третий компонент должен отображать информацию о текущем составе команды. Количество компонентов зависит только от вашей фантазии при реализации проекта. */
import RenderList from "./RenderList";
function FootballClubTeam(props) {
  const { players } = props;
  return (
    <div className="footballClub">
      <h3>Состав команды</h3>
      <RenderList
        items = {players}
        renderItem={(item)=> `${item.name} - ${item.position} (#${item.number})`}
      />
    </div>
  );
}

export default FootballClubTeam;