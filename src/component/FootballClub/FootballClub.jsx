/**# extra - task 2 
Первый компонент должен отображать краткую информацию о клубе: название клуба, город, дата основания клуба, герб клуба и т.д.
*/
import Image from "./Image";

function FootballClub(props) {
  const { name, city, founded, logo } = props;

  return (
    <div className="footballClub">
      <h2 className="clubName">{name}</h2>
      <p className="clubCity">Город: {city}</p>
      <p className="clubFounded">Основан: {founded}</p>
        <Image src={logo} alt={`${name} логотип`} />
    </div>
  );
}

export default FootballClub;
