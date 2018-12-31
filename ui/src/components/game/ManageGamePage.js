import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import GameForm from './GameForm';
import {saveGame} from "../../actions/gameActions";
import {gamesFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageGamePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      game: Object.assign({}, props.game),
      errors: {},
      saving: false
    };

    this.updateGameState = this.updateGameState.bind(this);
    this.saveNewGame = this.saveNewGame.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.game.name != nextProps.game.name) {
      // Necessary to populate form when existing loot_spec is loaded directly.
      this.setState({game: Object.assign({}, nextProps.game)});
    }
  }

  updateGameState(event) {
    const field = event.target.name;
    let game = Object.assign({}, this.state.game);
    game[field] = event.target.value;
    return this.setState({game: game});
  }

  gameFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.game.name.length < 1) {
      errors.title = 'Name must be at set.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }


  saveNewGame(event) {
    event.preventDefault();

    if (!this.gameFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    this.props.saveGame(this.state.game)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Game saved');
    this.context.router.push('/games');
  }

  render() {
    return (
      <GameForm
        onChange={this.updateGameState}
        onSave={this.saveNewGame}
        game={this.state.game}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageGamePage.propTypes = {
  game: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageGamePage.contextTypes = {
  router: PropTypes.object
};

function getGameById(games, id) {
  const game = games.filter(game => game.id == id);
  if (game) return game[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const gameId = ownProps.params.id; // from the path `/loot_spec/:id`

  let game = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if (gameId && state.games.length > 0) {
    game = getGameById(state.games, gameId);
  }

  return {
    game: game,
    image: state.image,
    games: gamesFormattedForDropdown(state.games)
  };
}

const mapDispatchToProps = {
  saveGame
};


export default connect(mapStateToProps, mapDispatchToProps)(ManageGamePage);
