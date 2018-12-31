export function lootSpecsFormattedForDropdown(lootSpecs) {
  return lootSpecs.map(lootSpecs => {
    return {
      value: lootSpecs.id,
      text: lootSpecs.name
    };
  });
}

export function gamesFormattedForDropdown(games) {
  return games.map(games => {
    return {
      value: games.id,
      text: games.name
    }
  });
}
