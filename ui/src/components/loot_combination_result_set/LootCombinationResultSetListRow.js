import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const LootCombinationResultSetListRow = ({lootCombinationResultSet}) => {
  return (
    <tr>
      <td><Link to={'/lootCombinationResultSet/' + lootCombinationResultSet.id}>{lootCombinationResultSet.name}</Link></td>
      <td><img src={lootCombinationResultSet.image_url} /> </td>
      <td>{lootCombinationResultSet.loot_id}</td>
      <td>{lootCombinationResultSet.rarity}</td>
    </tr>
  );
};

LootCombinationResultSetListRow.propTypes = {
  lootCombinationResultSet: PropTypes.object.isRequired
};

export default LootCombinationResultSetListRow;
