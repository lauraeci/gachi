import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import LootCombinationList from './LootCombinationList';
import {browserHistory} from 'react-router';

class LootCombinationPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddLootCombinationPage = this.redirectToAddLootCombinationPage.bind(this);
  }

  lootCombinationRow(lootCombination, index) {
    return <div key={index}>{lootCombination.loot_id}</div>;
  }

  redirectToAddLootCombinationPage() {
    browserHistory.push('/loot_combination');
  }

  render() {
    const {lootCombinations} = this.props;

    return (
      <div>
        <h1>Loot Combinations</h1>
        <input type="submit"
               value="Add Loot Combination"
               className="btn btn-primary"
               onClick={this.redirectToAddLootCombinationPage}/>
        <LootCombinationList lootCombinations={lootCombinations}/>
      </div>
    );
  }
}

LootCombinationPage.propTypes = {
  lootCombinations: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    lootCombinations: state.lootCombinations
  };
}


export default connect(mapStateToProps)(LootCombinationPage);
