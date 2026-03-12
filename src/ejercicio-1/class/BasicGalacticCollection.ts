import { GalacticRegistry } from '../interface/GalacticRegistry';

export abstract class BasicGalacticCollection<
  T extends { name: string },
> implements GalacticRegistry<T> {
  protected entities: T[] = [];

  addEntity(entity: T): void {
    this.entities.push(entity);
  }

  eraseEntity(entity: T): void {
    for (let i = 0; i < this.entities.length; i++) {
      if (this.entities[i] === entity) {
        this.entities.splice(i, 1);
        break;
      }
    }
  }

  getEntitiesByName(name: string): T[] {
    return this.entities.filter((entity) => {
      return entity.name === name;
    });
  }

  abstract printEntities(): void;
}
