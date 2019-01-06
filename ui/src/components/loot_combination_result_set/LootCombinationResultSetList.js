import React from 'react';
import LootCombinationResultSetListRow from './LootCombinationResultSetListRow';

const LootCombinationResultSetList = ({lootCombinationResultSets}) => {
  return (
    <div>
      <table className="table">
        <thead>
        <tr>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
          <th>Loot Id</th>
          <th>Id</th>
          <th>Rarity</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {lootCombinationResultSets && lootCombinationResultSets.map(lootCombinationResultSet =>
          <LootCombinationResultSetListRow key={lootCombinationResultSet.id}
                                           lootCombinationResultSet={lootCombinationResultSet}/>
        )}
        </tbody>
      </table>
    </div>
  );
};

export default LootCombinationResultSetList;
