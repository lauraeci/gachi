import React, {PropTypes} from 'react';
import LootCombinationListRow from './LootCombinationListRow';

const LootCombinationList = ({lootCombinations}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Id</th>
        <th>Loot Id</th>
        <th></th>
        <th>combined_with_loot_id</th>
        <th></th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {lootCombinations.map(lootCombination =>
        <LootCombinationListRow key={lootCombination.id} lootCombination={lootCombination}/>
      )}
      </tbody>
    </table>
  );
};

LootCombinationList.propTypes = {
  lootCombinations: PropTypes.array.isRequired
};

export default LootCombinationList;
