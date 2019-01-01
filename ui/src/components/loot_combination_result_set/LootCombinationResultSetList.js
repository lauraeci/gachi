import React, {PropTypes, Fragment, Component} from 'react';
import LootCombinationResultSetListRow from './LootCombinationResultSetListRow';
import {connect} from "react-redux";

export class LootCombinationResultSetList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lootCombinationResultSets: Object.assign({}, props.lootCombinationResultSets)
    }
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
          <tr>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>Name</th>
            <th>Rarity</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {this.props.lootCombinationResultSets && this.props.lootCombinationResultSets.map(lootCombinationResultSet =>
            <LootCombinationResultSetListRow key={lootCombinationResultSet.id}
                                             lootCombinationResultSet={lootCombinationResultSet}/>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}


LootCombinationResultSetList.propTypes = {
  lootCombinationResultSets: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    lootCombinationResultSets: state.lootCombinationResultSets
  }
}

export default connect(mapStateToProps)(LootCombinationResultSetList);
