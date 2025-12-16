/**Второй компонент должен отображать информацию о достижениях клуба: медали, кубки, забитые голы и т.д.
 */

function FootballClubAchievements(props) {
  const { trophies, medals, goals } = props;
  return (
    <div className="footballClubAchievements">
      <h3>Достижения клуба</h3>
      <p className="clubTrophies">Кубки: {trophies}</p>
      <p className="clubMedals">Медали: {medals}</p>
      <p className="clubGoals">Забитые голы: {goals}</p>
    </div>
  );
}

export default FootballClubAchievements;
