import "./styles.css";
import playerX from "../../assets/player-x.png";
import playerO from "../../assets/player-o.png";

const Player = ({ player }) => {
  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;

  return (
    <button className="player">
      <img src={players[player]} alt={`Jogador ${player.toUpperCase()}`} />
    </button>
  );
};

export default Player;
