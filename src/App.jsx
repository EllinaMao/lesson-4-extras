import "./assets/css/App.css";
import Timer from "./component/Timer.jsx";
import FootballClub from "./component/FootballClub/FootballClub";
import FootballClubAchievements from "./component/FootballClub/FootballClubAchievements";
import FootballClubTeam from "./component/FootballClub/FootballClubTeam";
import clubLogo from "./assets/images/clubLogo.svg";

function App() {

  const medals = [
    "Золотая медаль - 2010",
    "Серебряная медаль - 2012",
    "Бронзовая медаль - 2015",
  ]
  const trophies = [
    "Кубок Чемпионов - 2011",
    "Кубок Лиги - 2013",
    "Суперкубок - 2016",
  ];
  const goals = [
    "Лучший бомбардир сезона 2010 - 30 голов",
    "Лучший бомбардир сезона 2012 - 28 голов",
    "Лучший бомбардир сезона 2015 - 25 голов",
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
    <>
      <Timer />
      <FootballClub name={clubInfo.name} city ={clubInfo.city} founded={clubInfo.founded} logo={clubInfo.logo} />
      <FootballClubAchievements medals={clubInfo.medals} trophies={clubInfo.trophies} goals={clubInfo.goals} />
      <FootballClubTeam players={clubInfo.players} />
    </>
  );
}

export default App;
