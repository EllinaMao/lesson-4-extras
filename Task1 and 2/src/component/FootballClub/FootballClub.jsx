/**# extra - task 2 
Первый компонент должен отображать краткую информацию о клубе: название клуба, город, дата основания клуба, герб клуба и т.д.
*/
import Image from './Image';
import React from 'react';

function FootballClub(props) {
  const { name, city, founded, logo } = props;

  return (
    <div className="footballClub">
      <div className="club-info-left">
        <h2 className="clubName">{name}</h2>
        <div className="club-details">
          <p className="clubCity">Город: {city}</p>
          <p className="clubFounded">Основан: {founded}</p>
        </div>
      </div>

      <div className="club-logo-right">
        <Image src={logo} alt={`${name} логотип`} />
      </div>
    </div>
  );
}

export default FootballClub;