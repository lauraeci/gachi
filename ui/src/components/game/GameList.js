import React, {PropTypes} from 'react';
import GameListRow from './GameListRow';

const GameList = ({games}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Name</th>
      </tr>
      </thead>
      <tbody>
      {games && games.map(game =>
        <GameListRow key={game.id} game={game}/>
      )}
      </tbody>
    </table>
  );
};

GameList.propTypes = {
  games: PropTypes.array.isRequired
};

export default GameList;
