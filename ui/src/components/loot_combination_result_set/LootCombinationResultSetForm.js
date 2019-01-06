import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const LootCombinationResultSetForm = ({lootCombinationResultSet, loot_combination_id, allLoots, onChange, onSave, saving, errors}) => {
  return (
    <form>
      <h1>Manage Loot Combinations Result Set</h1>
      <p>Rarity of Loot Combinations add up to 100%</p>

      <SelectInput
        name="loot_id"
        label="Loot"
        value={lootCombinationResultSet.loot_id}
        defaultOption="Select Loot"
        options={allLoots}
        onChange={onChange} error={errors.loot_id}/>

      <TextInput
        name="rarity"
        label="Rarity"
        value={lootCombinationResultSet.rarity}
        onChange={onChange}
        error={errors.rarity}/>

      <TextInput
        name="loot_combinations_id"
        label="loot_combinations_id Index"
        value={loot_combination_id}
        onChange={onChange}
        error={errors.loot_combinations_id}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

LootCombinationResultSetForm.propTypes = {
  lootCombinationResultSet: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default LootCombinationResultSetForm;
