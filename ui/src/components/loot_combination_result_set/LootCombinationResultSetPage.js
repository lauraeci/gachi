import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import LootCombinationResultSetList from './LootCombinationResultSetList';
import {browserHistory} from 'react-router';

class LootCombinationResultSetPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddLootCombinationResultSetPage = this.redirectToAddLootCombinationResultSetPage.bind(this);
  }

  lootCombinationResultSetRow(lootCombinationResultSet, index) {
    return <div key={index}>{lootCombinationResultSet.name}</div>;
  }

  redirectToAddLootCombinationResultSetPage() {
    browserHistory.push('/lootCombinationResultSet');
  }

  render() {
    const {lootCombinationResultSets} = this.props;

    return (
      <div>
        <h1>LootCombinationResultSets</h1>
        <input type="submit"
               value="Add LootCombinationResultSet"
               className="btn btn-primary"
               onClick={this.redirectToAddLootCombinationResultSetPage}/>
        <LootCombinationResultSetList lootCombinationResultSets={lootCombinationResultSets}/>
      </div>
    );
  }
}

LootCombinationResultSetPage.propTypes = {
  lootCombinationResultSets: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    lootCombinationResultSets: state.lootCombinationResultSets
  };
}


export default connect(mapStateToProps)(LootCombinationResultSetPage);
