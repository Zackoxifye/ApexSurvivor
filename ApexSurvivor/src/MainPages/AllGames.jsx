import React from "react";
import { Link } from "react-router-dom";

export default function AllGames({ games }) {
  const groupGamesByLetter = () => {
    const groupedGames = {};

    if (!games || games.length === 0) {
      return groupedGames;
    }

    games.forEach((game) => {
      const firstLetter = game.charAt(0).toUpperCase();
      if (!groupedGames[firstLetter]) {
        groupedGames[firstLetter] = [];
      }
      groupedGames[firstLetter].push(game);
    });
    return groupedGames;
  };

  const renderGamesByLetter = () => {
    const groupedGames = groupGamesByLetter();

    return Object.keys(groupedGames).map((letter) => (
      <div key={letter}>
        {groupedGames[letter].length > 0 && (
          <h2 className="letterHeaderAllGames">{letter}</h2>
        )}
        {groupedGames[letter].map((game) => (
          <Link
            key={game}
            to={`/${game.replace(/\s+/g, "")}`}
            className="allGamesListItem"
          >
            {game}
          </Link>
        ))}
      </div>
    ));
  };

  return (
    <div>
      <h1 className="allGamesPageHeader">All Games A - Z</h1>
      {renderGamesByLetter()}
    </div>
  );
}
