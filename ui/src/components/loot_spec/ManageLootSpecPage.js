import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as lootSpecActions from '../../actions/lootSpecActions';
import LootSpecForm from './LootSpecForm';
import {lootSpecsFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageLootSpecPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      lootSpec: Object.assign({}, props.lootSpec),
      errors: {},
      saving: false
    };

    this.updateLootSpecState = this.updateLootSpecState.bind(this);
    this.saveLootSpec = this.saveLootSpec.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.lootSpec.id != nextProps.lootSpec.id) {
      // Necessary to populate form when existing loot_spec is loaded directly.
      this.setState({lootSpec: Object.assign({}, nextProps.lootSpec)});
    }
  }

  updateLootSpecState(event) {
    const field = event.target.name;
    let lootSpec = Object.assign({}, this.state.lootSpec);
    lootSpec[field] = event.target.value;
    return this.setState({lootSpec: lootSpec});
  }

  lootSpecFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.lootSpec.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }


  saveLootSpec(event) {
    event.preventDefault();

    if (!this.lootSpecFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    this.props.actions.saveLootSpec(this.state.lootSpec)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('LootSpec saved');
    this.context.router.push('/loot_specs');
  }

  render() {
    return (
      <LootSpecForm
        onChange={this.updateLootSpecState}
        onSave={this.saveLootSpec}
        lootSpec={this.state.lootSpec}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageLootSpecPage.propTypes = {
  lootSpec: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageLootSpecPage.contextTypes = {
  router: PropTypes.object
};

function getLootSpecById(lootSpecs, id) {
  const lootSpec = lootSpecs.filter(lootSpec => lootSpec.id == id);
  if (lootSpec) return lootSpec[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const lootSpecId = ownProps.params.id; // from the path `/loot_spec/:id`

  let lootSpec = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if (lootSpecId && state.lootSpecs.length > 0) {
    lootSpec = getLootSpecById(state.lootSpecs, lootSpecId);
  }

  return {
    lootSpec: lootSpec,
    lootSpecs: lootSpecsFormattedForDropdown(state.lootSpecs)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(lootSpecActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageLootSpecPage);
