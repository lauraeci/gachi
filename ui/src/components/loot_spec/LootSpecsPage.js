import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import LootSpecList from './LootSpecList';
import {browserHistory} from 'react-router';

class LootSpecsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddLootSpecPage = this.redirectToAddLootSpecPage.bind(this);
  }

  lootSpecRow(lootSpec, index) {
    return <div key={index}>{lootSpec.title}</div>;
  }

  redirectToAddLootSpecPage() {
    browserHistory.push('/loot_spec');
  }

  render() {
    const {lootSpecs} = this.props;

    return (
      <div>
        <h1>LootSpecs</h1>
        <input type="submit"
               value="Add LootSpec"
               className="btn btn-primary"
               onClick={this.redirectToAddLootSpecPage}/>
        <LootSpecList lootSpecs={lootSpecs}/>
      </div>
    );
  }
}

LootSpecsPage.propTypes = {
  lootSpecs: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    lootSpecs: state.lootSpecs
  };
}


export default connect(mapStateToProps)(LootSpecsPage);
