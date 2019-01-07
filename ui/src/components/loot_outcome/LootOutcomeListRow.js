import React, {PropTypes} from 'react';

const LootOutcomeListRow = ({lootOutcome}) => {
  return (
    <tr>
      <td><img src={lootOutcome.loot_image_url} /> </td>
      <td>{lootOutcome.id}</td>
      <td>{lootOutcome.loot_id}</td>
    </tr>
  );
};

LootOutcomeListRow.propTypes = {
  lootOutcome: PropTypes.object.isRequired
};

export default LootOutcomeListRow;
