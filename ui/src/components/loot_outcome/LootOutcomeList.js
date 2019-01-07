import React, {PropTypes} from 'react';
import LootOutcomeListRow from './LootOutcomeListRow';

const LootOutcomeList = ({lootOutcomes}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Id</th>
        <th>Loot Id</th>
      </tr>
      </thead>
      <tbody>
      {lootOutcomes.map(lootOutcome =>
        <LootOutcomeListRow key={lootOutcome.id} lootOutcome={lootOutcome}/>
      )}
      </tbody>
    </table>
  );
};

LootOutcomeList.propTypes = {
  lootOutcomes: PropTypes.array.isRequired
};

export default LootOutcomeList;
