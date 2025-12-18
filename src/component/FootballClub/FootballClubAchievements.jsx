/**Второй компонент должен отображать информацию о достижениях клуба: медали, кубки, забитые голы и т.д.
 */

function FootballClubAchievements(props) {
  const { trophies, medals, goals } = props;
  return (
    <div className="footballClub">
      <h3>Достижения клуба</h3>
      <div className="clubTrophies">Кубки: {trophies}</div>
      <div className="clubMedals">Медали: {medals}</div>
      <div className="clubGoals">Забитые голы: {goals}</div>
    </div>
  );
}

export default FootballClubAchievements;
