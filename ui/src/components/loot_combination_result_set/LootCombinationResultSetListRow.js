import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const LootCombinationResultSetListRow = ({lootCombinationResultSet}) => {
  return (
    <tr>
      <td><Link to={'/lootCombinationResultSet/' + lootCombinationResultSet.id}>{lootCombinationResultSet.name}</Link></td>
      <td><img src={lootCombinationResultSet.loot_image_url} /> </td>
      <td>{lootCombinationResultSet.loot_id}</td>
      <td><img src={lootCombinationResultSet.loot_combination_id_image_url} /> </td>
      <td>{lootCombinationResultSet.rarity}</td>
    </tr>
  );
};

LootCombinationResultSetListRow.propTypes = {
  lootCombinationResultSet: PropTypes.object.isRequired
};

export default LootCombinationResultSetListRow;
