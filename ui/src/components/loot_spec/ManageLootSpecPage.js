import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import LootSpecForm from './LootSpecForm';
import {saveLoot} from "../../actions/lootSpecActions";
import {lootsFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageLootSpecPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      lootSpec: Object.assign({}, props.lootSpec),
      image: Object.assign({}, props.image),
      errors: {},
      saving: false
    };

    this.updateLootstate = this.updateLootstate.bind(this);
    this.saveNewLootSpec = this.saveNewLootSpec.bind(this);
    this.fileChangeHandler = this.fileChangeHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.lootSpec.name != nextProps.lootSpec.name) {
      // Necessary to populate form when existing loot_spec is loaded directly.
      this.setState({lootSpec: Object.assign({}, nextProps.lootSpec)});
    }
  }

  fileChangeHandler(event) {
    const file = event.target.files[0];
    this.setState({image: file})
  }

  updateLootstate(event) {
    const field = event.target.name;
    let lootSpec = Object.assign({}, this.state.lootSpec);
    let image = Object.assign({}, this.state.image);
    lootSpec[field] = event.target.value;
    return this.setState({lootSpec: lootSpec, state: image});
  }

  lootSpecFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.lootSpec.name.length < 1) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }


  saveNewLootSpec(event) {
    event.preventDefault();

    if (!this.lootSpecFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    const formData = new FormData()
    formData.append("image", this.state.image);
    formData.append("lvl", this.state.lootSpec.lvl);
    formData.append("name", this.state.lootSpec.name);

    this.props.saveLootSpec(formData)
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
        onChange={this.updateLootstate}
        fileChangeHandler={this.fileChangeHandler}
        onSave={this.saveNewLootSpec}
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

function getLootSpecById(loots, id) {
  const lootSpec = loots.filter(lootSpec => lootSpec.id == id);
  if (lootSpec) return lootSpec[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const lootSpecId = ownProps.params.id; // from the path `/loot_spec/:id`

  let lootSpec = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if (lootSpecId && state.loots.length > 0) {
    lootSpec = getLootSpecById(state.loots, lootSpecId);
  }

  return {
    lootSpec: lootSpec,
    image: state.image,
    loots: lootsFormattedForDropdown(state.loots)
  };
}

const mapDispatchToProps = {
  saveLootSpec: saveLoot
};


export default connect(mapStateToProps, mapDispatchToProps)(ManageLootSpecPage);
