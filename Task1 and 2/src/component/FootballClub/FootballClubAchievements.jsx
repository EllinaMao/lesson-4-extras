/**Второй компонент должен отображать информацию о достижениях клуба: медали, кубки, забитые голы и т.д.
 */

import RenderList from "./RenderList"; 

function FootballClubAchievements({ trophies, medals, goals }) {
  return (
    <div className="club-card">
      <h3>Достижения клуба</h3>
      <div className="achievements-grid">
        
        {/* Кубки */}
        <div className="section">
          <h4>Кубки</h4>
          <RenderList 
            items={trophies} 
            renderItem={(item) => `${item.trophy} (${item.year})`} 
          />
        </div>

        {/* Медали */}
        <div className="section">
          <h4>Медали</h4>
          <RenderList 
            items={medals} 
            renderItem={(item) => `${item.medal} (${item.year})`} 
          />
        </div>

        {/* Голы */}
        <div className="section">
          <h4>Забитые голы</h4>
          <RenderList 
            items={goals} 
            renderItem={(item) => `${item.player}: ${item.goals} голов`} 
          />
        </div>

      </div>
    </div>
  );
}

export default FootballClubAchievements;