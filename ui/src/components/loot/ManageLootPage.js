import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import LootForm from './LootForm';
import {saveLoot} from "../../actions/lootActions";
import {gamesFormattedForDropdown, lootsFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageLootPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loot: Object.assign({}, props.loot),
      image: Object.assign({}, props.image),
      errors: {},
      saving: false
    };

    this.updateLootState = this.updateLootState.bind(this);
    this.saveNewLoot = this.saveNewLoot.bind(this);
    this.fileChangeHandler = this.fileChangeHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.loot.name != nextProps.loot.name) {
      // Necessary to populate form when existing loot_spec is loaded directly.
      this.setState({loot: Object.assign({}, nextProps.loot)});
    }
  }

  fileChangeHandler(event) {
    const file = event.target.files[0];
    this.setState({image: file})
  }

  updateLootState(event) {
    const field = event.target.name;
    let loot = Object.assign({}, this.state.loot);
    let image = Object.assign({}, this.state.image);
    loot[field] = event.target.value;
    return this.setState({loot: loot, state: image});
  }

  lootFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.loot.name.length < 1) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }


  saveNewLoot(event) {
    event.preventDefault();

    if (!this.lootFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    const formData = new FormData()
    formData.append("image", this.state.image);
    formData.append("rarity_index", this.state.loot.rarity_index);
    formData.append("name", this.state.loot.name);
    formData.append("game_id", this.state.loot.game_id);

    this.props.saveLoot(formData)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Loot saved');
    this.context.router.push('/loot_specs');
  }

  render() {
    return (
      <LootForm
        loot={this.state.loot}
        allGames={this.props.games}
        onChange={this.updateLootState}
        fileChangeHandler={this.fileChangeHandler}
        onSave={this.saveNewLoot}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageLootPage.propTypes = {
  loot: PropTypes.object.isRequired,
  games: PropTypes.array.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageLootPage.contextTypes = {
  router: PropTypes.object
};

function getLootById(loots, id) {
  const loot = loot.filter(loot => loot.id == id);
  if (loot) return loot[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const lootId = ownProps.params.id; // from the path `/loot_spec/:id`

  let loot = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if (lootId && state.loots.length > 0) {
    loot = getLootById(state.loots, lootId);
  }

  return {
    loot: loot,
    image: state.image,
    loots: lootsFormattedForDropdown(state.loots),
    games: gamesFormattedForDropdown(state.games)
  };
}

const mapDispatchToProps = {
  saveLoot: saveLoot
};


export default connect(mapStateToProps, mapDispatchToProps)(ManageLootPage);
