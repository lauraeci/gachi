import React from 'react';
import TextInput from '../common/TextInput';

const LootSpecForm = ({lootSpec, allAuthors, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage LootSpec</h1>
      <TextInput
        name="name"
        label="Name"
        value={lootSpec.name}
        onChange={onChange}
        error={errors.name}/>

      <TextInput
        name="lvl"
        label="Level"
        value={lootSpec.lvl}
        onChange={onChange}
        error={errors.lvl}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

LootSpecForm.propTypes = {
  lootSpec: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default LootSpecForm;
