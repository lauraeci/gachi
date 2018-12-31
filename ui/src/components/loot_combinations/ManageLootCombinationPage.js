import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import LootCombinationForm from './LootCombinationForm';
import {saveLootCombination} from "../../actions/lootCombinationActions";
import { lootsFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageLootCombinationPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      lootCombination: Object.assign({}, props.lootCombination),
      errors: {},
      saving: false
    };

    this.updateLootCombinationState = this.updateLootCombinationState.bind(this);
    this.saveNewLootCombination = this.saveNewLootCombination.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.lootCombination.loot_id != nextProps.lootCombination.loot_id) {
      // Necessary to populate form when existing loot_spec is loaded directly.
      this.setState({lootCombination: Object.assign({}, nextProps.lootCombination)});
    }
  }

  updateLootCombinationState(event) {
    const field = event.target.name;
    let lootCombination = Object.assign({}, this.state.lootCombination);
    lootCombination[field] = event.target.value;
    return this.setState({lootCombination: lootCombination});
  }

  lootFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.lootCombination.loot_id.length < 1) {
      errors.title = 'Loot Id must be at set.';
      formIsValid = false;
    }

    if (this.state.lootCombination.combined_with_loot_id.length < 1) {
      errors.title = 'combined_with_loot_id must be at set.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }


  saveNewLootCombination(event) {
    event.preventDefault();

    if (!this.lootFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    const formData = new FormData();
    formData.append("loot_id", this.state.lootCombination.loot_id);
    formData.append("combined_with_loot_id", this.state.lootCombination.combined_with_loot_id);

    this.props.saveLootCombination(formData)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Loot saved');
    this.context.router.push('/loot_combinations');
  }

  render() {
    return (
      <LootCombinationForm
        lootCombination={this.state.lootCombination}
        allLoots={this.props.loots}
        onChange={this.updateLootCombinationState}
        onSave={this.saveNewLootCombination}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageLootCombinationPage.propTypes = {
  lootCombination: PropTypes.object.isRequired,
  loots: PropTypes.array.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageLootCombinationPage.contextTypes = {
  router: PropTypes.object
};

function getLootCombinationById(lootCombinations, id) {
  const lootCombination = lootCombinations.filter(lootCombination => lootCombination.id == id);
  if (lootCombination) return lootCombination[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const lootCombinationId = ownProps.params.id; // from the path `/lootCombination_spec/:id`

  let lootCombination = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if (lootCombinationId && state.lootCombinations.length > 0) {
    lootCombination = getLootCombinationById(state.lootCombinations, lootCombinationId);
  }

  return {
    lootCombination: lootCombination,
    loots: lootsFormattedForDropdown(state.loots),
  };
}

const mapDispatchToProps = {
  saveLootCombination: saveLootCombination
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageLootCombinationPage);
