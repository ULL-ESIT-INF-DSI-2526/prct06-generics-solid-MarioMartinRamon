export interface SearchByPlanetOfOrigin<T> {
  getEntitiesByPlanetOfOrigin(planet: string): T[];
}
