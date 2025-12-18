import "./assets/css/App.css";
import Timer from "./component/Timer.jsx";
import FootballClub from "./component/FootballClub/FootballClub";
import FootballClubAchievements from "./component/FootballClub/FootballClubAchievements";
import FootballClubTeam from "./component/FootballClub/FootballClubTeam";
import clubLogo from "./assets/images/clubLogo.svg";
import Header from "./component/Header.jsx";

function App() {
  const medals = [
    {
      medal: "Золотая медаль",
      year: 2011,
    },
    {
      medal: "Серебряная медаль",
      year: 2013,
    },
    { medal: "Бронзовая медаль", year: 2016 },
  ];

  const trophies = [
    {
      trophy: "Кубок Чемпионов",
      year: 2011,
    },
    {
      trophy: "Кубок Лиги",
      year: 2013,
    },
    { trophy: "Суперкубок", year: 2016 },
  ];

  const goals = [
    {
      player: "Денис Карбальен",
      goals: 120,
    },
    {
      player: "Игорь Саркисов",
      goals: 98,
    },
  ];
  const players = [
    {
      name: "Денис Карбальен",
      position: "Нападающий",
      number: 9,
    },
    {
      name: "Игорь Саркисов",
      position: "Полузащитник",
      number: 10,
    },
    {
      name: "Максим Левицкий",
      position: "Защитник",
      number: 5,
    },
  ];

  const clubInfo = {
    name: "Rabbits~",
    city: "Odessa",
    founded: "2005",
    logo: clubLogo,
    players,
    goals,
    trophies,
    medals,
  };

  return (
    <div className="App">
      <Header title={"время на сайте"}>
        <Timer />
      </Header>

      <FootballClub
        name={clubInfo.name}
        city={clubInfo.city}
        founded={clubInfo.founded}
        logo={clubInfo.logo}
      />
      <FootballClubAchievements
        medals={clubInfo.medals}
        trophies={clubInfo.trophies}
        goals={clubInfo.goals}
      />
      <FootballClubTeam players={clubInfo.players} />
    </div>
  );
}

export default App;
