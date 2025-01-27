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
    if (this.props.lootCombinationResultSet.loot_id != nextProps.lootCombinationResultSet.loot_id) {
      // Necessary to populate form when existing lootCombinationResultSet_spec is loaded directly.
      this.setState({lootCombinationResultSet: Object.assign({}, nextProps.lootCombinationResultSet)});
    }
  }

  updateLootCombinationResultSetState(event) {
    const field = event.target.name;
    let lootCombinationResultSet = Object.assign({}, this.state.lootCombinationResultSet);
    lootCombinationResultSet[field] = event.target.value;
    return this.setState({lootCombinationResultSet: lootCombinationResultSet});
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
    formData.append("rarity", this.state.lootCombinationResultSet.rarity);
    formData.append("loot_combination_id", this.state.lootCombinationResultSet.loot_combination_id);
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
    this.context.router.push('/loot_combinations');
  }

  render() {
    return (
      <LootCombinationResultSetForm
        lootCombinationResultSet={this.state.lootCombinationResultSet}
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
  const loot_combination_id = ownProps.params.id;

  let lootCombinationResultSet = {id: '', loot_combination_id: loot_combination_id, rarity: '', loot_id: ''}

  return {
    lootCombinationId: loot_combination_id,
    lootCombinationResultSet: lootCombinationResultSet,
    loots: lootsFormattedForDropdown(state.loots)
  };
}

const mapDispatchToProps = {
  saveLootCombinationResultSet: saveLootCombinationResultSet
};


export default connect(mapStateToProps, mapDispatchToProps)(ManageLootCombinationResultSetPage);
