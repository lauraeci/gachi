export function lootSpecsFormattedForDropdown(lootSpecs) {
  return lootSpecs.map(lootSpecs => {
    return {
      value: lootSpecs.id,
      text: lootSpecs.name
    };
  });
}

export function lootsFormattedForDropdown(loots) {
  return loots.map(loots => {
    return {
      value: loots.id,
      text: loots.name
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

export function lootsFormattedForDropdown(lootCombinations) {
  return lootCombinations.map(lootCombinations => {
    return {
      value: lootCombinations.id,
      text: lootCombinations.loot_id
    }
  });
}
