import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import GameList from './GameList';
import {browserHistory} from 'react-router';

class GamesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddGamePage = this.redirectToAddGamePage.bind(this);
  }

  gameRow(game, index) {
    return <div key={index}>{game.name}</div>;
  }

  redirectToAddGamePage() {
    browserHistory.push('/game');
  }

  render() {
    const {games} = this.props;

    return (
      <div>
        <h1>Games</h1>
        <input type="submit"
               value="Add Game"
               className="btn btn-primary"
               onClick={this.redirectToAddGamePage}/>
        <GameList games={games}/>
      </div>
    );
  }
}

GamesPage.propTypes = {
  games: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    games: state.games
  };
}


export default connect(mapStateToProps)(GamesPage);
