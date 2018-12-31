import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const GameListRow = ({game}) => {
  return (
    <tr>
      <td><Link to={'/game/' + game.id}>{game.name}</Link></td>
      <td>{game.name}</td>
    </tr>
  );
};

GameListRow.propTypes = {
  game: PropTypes.object.isRequired
};

export default GameListRow;
