import React, {PropTypes} from 'react';
import LootListRow from './LootListRow';

const LootList = ({loots}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th>Name</th>
        <th>Rarity Index</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {loots.map(loot =>
        <LootListRow key={loot.id} loot={loot}/>
      )}
      </tbody>
    </table>
  );
};

LootList.propTypes = {
  loots: PropTypes.array.isRequired
};

export default LootList;
