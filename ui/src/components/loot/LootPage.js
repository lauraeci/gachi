import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import LootList from './LootList';
import {browserHistory} from 'react-router';

class LootPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddLootPage = this.redirectToAddLootPage.bind(this);
  }

  lootRow(loot, index) {
    return <div key={index}>{loot.name}</div>;
  }

  redirectToAddLootPage() {
    browserHistory.push('/loot');
  }

  render() {
    const {loots} = this.props;

    return (
      <div>
        <h1>Loots</h1>
        <input type="submit"
               value="Add Loot"
               className="btn btn-primary"
               onClick={this.redirectToAddLootPage}/>
        <LootList loots={loots}/>
      </div>
    );
  }
}

LootPage.propTypes = {
  loots: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loots: state.loots
  };
}


export default connect(mapStateToProps)(LootPage);
