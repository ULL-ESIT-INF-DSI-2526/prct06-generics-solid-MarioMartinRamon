export interface SearchByPowerLevel<T> {
  getEntitiesByPowerLevel(powerLevel: number): T[];
}
