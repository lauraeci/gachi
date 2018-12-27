export function lootSpecsFormattedForDropdown(lootSpecs) {
  return lootSpecs.map(lootSpecs => {
    return {
      value: lootSpecs.id,
      text: lootSpecs.name
    };
  });
}
