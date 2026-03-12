export interface GalacticRegistry<T extends { name: string }> {
  addEntity(entity: T): void;
  getEntitiesByName(name: string): T[];
}
