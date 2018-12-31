import React from 'react';
import TextInput from '../common/TextInput';

const GameForm = ({game, onChange, onSave, saving, errors}) => {
  return (
    <form>
      <h1>Manage Game</h1>

      <TextInput
        name="name"
        label="Name"
        value={game.name}
        onChange={onChange}
        error={errors.name}/>
      
      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

GameForm.propTypes = {
  game: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default GameForm;
