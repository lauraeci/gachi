import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const LootListRow = ({loot}) => {
  return (
    <tr>
      <td><Link to={'/loot/' + loot.id}>{loot.name}</Link></td>
      <td><img src={loot.image_url} /> </td>
      <td>{loot.name}</td>
      <td>{loot.rarity_index}</td>
    </tr>
  );
};

LootListRow.propTypes = {
  loot: PropTypes.object.isRequired
};

export default LootListRow;
