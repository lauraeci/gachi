import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const LootSpecListRow = ({lootSpec}) => {
  return (
    <tr>
      <td><a href={lootSpec.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/loot_spec/' + lootSpec.id}>{lootSpec.name}</Link></td>
      <td>{lootSpec.name}</td>
      <td>{lootSpec.lvl}</td>
    </tr>
  );
};

LootSpecListRow.propTypes = {
  lootSpec: PropTypes.object.isRequired
};

export default LootSpecListRow;
