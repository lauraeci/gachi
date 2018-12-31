import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const LootForm = ({loot, allGames, onChange, fileChangeHandler, onSave, saving, errors}) => {
  return (
    <form>
      <h1>Manage Loot</h1>

      <td><img src={loot.image_url}/></td>

      <input type="file" onChange={fileChangeHandler}/>

      <TextInput
        name="name"
        label="Name"
        value={loot.name}
        onChange={onChange}
        error={errors.name}/>

      <SelectInput
        name="game_id"
        label="Game"
        value={loot.game_id}
        defaultOption="Select Game"
        options={allGames}
        onChange={onChange} error={errors.game_id}/>

      <TextInput
        name="rarity_index"
        label="Rarity Index"
        value={loot.rarity_index}
        onChange={onChange}
        error={errors.rarity_index}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

LootForm.propTypes = {
  loot: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default LootForm;
