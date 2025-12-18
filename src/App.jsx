import "./assets/css/App.css";
import Timer from "./component/Timer.jsx";
import FootballClub from "./component/FootballClub/FootballClub";
import FootballClubAchievements from "./component/FootballClub/FootballClubAchievements";
import FootballClubTeam from "./component/FootballClub/FootballClubTeam";
import clubLogo from "./assets/images/clubLogo.svg";
import Header from "./component/Header.jsx";

function App() {

  const medals = [
    "Золотая медаль - 2011",
    "Серебряная медаль - 2013",
    "Бронзовая медаль - 2016",
  ]
  const trophies = [
    "Кубок Чемпионов - 2011",
    "Кубок Лиги - 2013",
    "Суперкубок - 2016",
  ];
  const goals = [
    "Лучший бомбардир сезона 2010 - 53 голов",
  ];
  const players = [
    "Денис Карбальен",
    "Игорь Саркисов",
    "Чарло Педорони",
    "Ичиро Накамура",
    "Явор Гринвов",
  ];

  const clubInfo = {
    name: "Rabbits~",
    city: "Odessa",
    founded: "2005",
    logo: clubLogo,
    players: players,
    goals: goals,
    trophies: trophies,
    medals: medals,

  }

  return (
    <div className="App">

      <Header title={"время на сайте"}>
        <Timer />
      </Header>

      <FootballClub name={clubInfo.name} city={clubInfo.city} founded={clubInfo.founded} logo={clubInfo.logo} />
      <FootballClubAchievements medals={clubInfo.medals} trophies={clubInfo.trophies} goals={clubInfo.goals} />
      <FootballClubTeam players={clubInfo.players} />
    </div>
  );
}

export default App;
