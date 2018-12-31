import React from 'react';
import SelectInput from '../common/SelectInput';

const LootCombinationForm = ({lootCombination, allLoots, onChange, fileChangeHandler, onSave, saving, errors}) => {
  return (
    <form>
      <h1>Manage LootCombinations</h1>

      <SelectInput
        name="loot_id"
        label="Loot 1"
        value={lootCombination.loot_id}
        defaultOption="Select Loot"
        options={allLoots}
        onChange={onChange} error={errors.loot_id}/>


      <SelectInput
        name="combined_with_loot_id"
        label="Combined with Loot 2"
        value={lootCombination.combined_with_loot_id}
        defaultOption="Select Loot"
        options={allLoots}
        onChange={onChange} error={errors.combined_with_loot_id}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

LootCombinationForm.propTypes = {
  lootCombination: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default LootCombinationForm;
