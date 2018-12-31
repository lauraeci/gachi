import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const LootCombinationListRow = ({lootCombination}) => {
  return (
    <tr>
      <td><Link to={'/loot_combination/' + lootCombination.id}>{lootCombination.loot_id}</Link></td>
      <td>{lootCombination.loot_id}</td>
      <td>{lootCombination.combined_with_loot_id}</td>
    </tr>
  );
};

LootCombinationListRow.propTypes = {
  lootCombination: PropTypes.object.isRequired
};

export default LootCombinationListRow;
