/**
Третий компонент должен отображать информацию о текущем составе команды. Количество компонентов зависит только от вашей фантазии при реализации проекта. */

function FootballClubTeam(props) {
  const { players } = props;
  return (
    <div className="footballClub">
      <h3>Состав команды</h3>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default FootballClubTeam;