import React, {PropTypes, Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {saveLootCombination} from "../../actions/lootCombinationActions";
import {lootsFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';
import {browserHistory} from "react-router";
import LootCombinationResultSetList from "../loot_combination_result_set/LootCombinationResultSetList";
import LootCombinationForm from "./LootCombinationForm"

export class ManageLootCombinationPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      lootCombination: Object.assign({}, props.lootCombination),
      lootCombinationResultSets: Object.assign([], props.lootCombinationResultSets),
      errors: {},
      saving: false
    };

    this.updateLootCombinationState = this.updateLootCombinationState.bind(this);
    this.saveNewLootCombination = this.saveNewLootCombination.bind(this);
    this.redirectToAddLootCombinationResultSetPage = this.redirectToAddLootCombinationResultSetPage.bind(this)
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

  redirectToAddLootCombinationResultSetPage() {
    browserHistory.push('/loot_combination/' + this.props.lootCombination.id + '/loot_combination_result_set');
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
      <div>
        <LootCombinationForm
          lootCombination={this.state.lootCombination}
          allLoots={this.props.loots}
          onChange={this.updateLootCombinationState}
          onSave={this.saveNewLootCombination}
          errors={this.state.errors}
          saving={this.state.saving}
        />
        <LootCombinationResultSetList lootCombinationResultSets={this.props.lootCombinationResultSets}/>

        <h1>LootCombinationResultSets</h1>
        <input type="submit"
               value="Add LootCombinationResultSet"
               className="btn btn-primary"
               onClick={this.redirectToAddLootCombinationResultSetPage}/>
      </div>
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

  let lootCombination = {id: '', loot_id: '', combined_with_loot_id: ''};
  let filteredLootCombinationResultsSet = [];

  if (lootCombinationId && state.lootCombinations.length > 0) {
    lootCombination = getLootCombinationById(state.lootCombinations, lootCombinationId);
    filteredLootCombinationResultsSet = state.lootCombinationResultSets.filter(set => set.loot_combination_id === lootCombination.id)
  }

  return {
    lootCombination: lootCombination,
    lootCombinationResultSets: filteredLootCombinationResultsSet,
    loots: lootsFormattedForDropdown(state.loots)
  };
}

const mapDispatchToProps = {
  saveLootCombination: saveLootCombination
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageLootCombinationPage);
