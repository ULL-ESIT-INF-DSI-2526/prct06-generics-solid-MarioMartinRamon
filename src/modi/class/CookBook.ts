import { Elaborable } from '../interface/Elaborable';

export class CookBook<T extends Elaborable<unknown>> {
  private _recetas: T[];

  constructor() {
    this._recetas = [];
  }

  /**
   * Añade al CookBOok
   * @param receta 
   */
  add(receta: T): void {
    this._recetas.push(receta);
  }

  /**
   * Elimina del recetario
   * @param index 
   */
  remove(index: number): void {
    this._recetas.splice(index, 1);
  }

  /**
   * Obtiene receta
   * @param index 
   * @returns receta
   */
  get(index: number): T {
    return this._recetas[index];
  }

  /**
   * Tamaño del recetario
   * @returns Tamaño
   */
  size(): number {
    return this._recetas.length;
  }

  /**
   * Evalua como filtro un predicado logico
   * @param predicado 
   * @returns recetario con el filtro aplicado
   */
  filter(predicado: (receta: T) => boolean): CookBook<T> {
    const filtro = new CookBook<T>();
    this._recetas.filter(predicado).forEach((item) => filtro.add(item));
    return filtro;
  }

  /**
   * Calcula el tiempo medio de elaboracion de recetas del recetario
   * @returns media de la preparacion
   */
  avgTime(): number {
    let avg: number = 0;
    if (this._recetas.length === 0) {
      return 0;
    }
    this._recetas.forEach((receta) => avg += receta.time())
    avg = Math.floor(avg / this.size());
    return avg;
  }
}
