import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import LootCombinationResultSetForm from './LootCombinationResultSetForm';
import {saveLootCombinationResultSet} from "../../actions/lootCombinationResultSetActions";
import {
  lootCombinationResultSetsFormattedForDropdown,
  lootsFormattedForDropdown
} from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageLootCombinationResultSetPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      lootCombinationResultSet: Object.assign({}, props.lootCombinationResultSet),
      errors: {},
      saving: false
    };

    this.updateLootCombinationResultSetState = this.updateLootCombinationResultSetState.bind(this);
    this.saveNewLootCombinationResultSet = this.saveNewLootCombinationResultSet.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.lootCombinationResultSet.name != nextProps.lootCombinationResultSet.name) {
      // Necessary to populate form when existing lootCombinationResultSet_spec is loaded directly.
      this.setState({lootCombinationResultSet: Object.assign({}, nextProps.lootCombinationResultSet)});
    }
  }

  updateLootCombinationResultSetState(event) {
    const field = event.target.name;
    let lootCombinationResultSet = Object.assign({}, this.state.lootCombinationResultSet);
    let image = Object.assign({}, this.state.image);
    lootCombinationResultSet[field] = event.target.value;
    return this.setState({lootCombinationResultSet: lootCombinationResultSet, state: image});
  }

  lootCombinationResultSetFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (!this.state.lootCombinationResultSet.loot_id || this.state.lootCombinationResultSet.loot_id.length < 1) {
      errors.title = 'Loot Id must be set.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }


  saveNewLootCombinationResultSet(event) {
    event.preventDefault();

    if (!this.lootCombinationResultSetFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    const formData = new FormData();
    formData.append("rarity", this.state.lootCombinationResultSet.rarity_index);
    formData.append("loot_combinations_id", this.state.lootCombinationResultSet.loot_combinations_id);
    formData.append("loot_id", this.state.lootCombinationResultSet.loot_id);

    this.props.saveLootCombinationResultSet(formData)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('LootCombinationResultSet saved');
    this.context.router.push('/lootCombinationResultSet_specs');
  }

  render() {
    return (
      <LootCombinationResultSetForm
        lootCombinationResultSet={this.state.lootCombinationResultSet}
        loot_combination_id={this.props.lootCombinationId}
        allLoots={this.props.loots}
        onChange={this.updateLootCombinationResultSetState}
        onSave={this.saveNewLootCombinationResultSet}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageLootCombinationResultSetPage.propTypes = {
  lootCombinationResultSet: PropTypes.object.isRequired,
  loots: PropTypes.array.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageLootCombinationResultSetPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const loot_combination_id = ownProps.params.id; // from the path `/lootCombinationResultSet_spec/:id`

  console.log("LOOT_COMBINATION_ID");
  console.log(loot_combination_id);
  return {
    lootCombinationId: loot_combination_id,
    lootCombinationResultSets: lootCombinationResultSetsFormattedForDropdown(state.lootCombinationResultSets),
    loots: lootsFormattedForDropdown(state.loots)
  };
}

const mapDispatchToProps = {
  saveLootCombinationResultSet: saveLootCombinationResultSet
};


export default connect(mapStateToProps, mapDispatchToProps)(ManageLootCombinationResultSetPage);
