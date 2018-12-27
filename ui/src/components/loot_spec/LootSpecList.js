import React, {PropTypes} from 'react';
import LootSpecListRow from './LootSpecListRow';

const LootSpecList = ({lootSpecs}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Name</th>
        <th>Level</th>
      </tr>
      </thead>
      <tbody>
      {lootSpecs.map(lootSpec =>
        <LootSpecListRow key={lootSpec.id} lootSpec={lootSpec}/>
      )}
      </tbody>
    </table>
  );
};

LootSpecList.propTypes = {
  lootSpecs: PropTypes.array.isRequired
};

export default LootSpecList;
