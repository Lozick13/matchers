export function healthSorting(heroes) {
  return heroes.sort((hero1, hero2) => hero2.health - hero1.health);
}
