import { Elaborable } from '../interface/Elaborable';

export interface ISweet {
  name: string;
  difficulty: number;
}

/**
 * Clase de recetas dulces
 */
export class Sweet implements Elaborable<ISweet> {
  private _name: string;
  private _difficulty: number;
  private _tiempo_prep: number;
  private _tiempo_horn: number;
  private _tiempo_ref: number;

  constructor(
    name: string,
    difficulty: number,
    tiempo_prep: number,
    tiempo_horn: number,
    tiempo_ref: number
  ) {
    this._name = name;

    if (difficulty <= 1 || difficulty > 10) {
      this._difficulty = null;
    } else {
      this._difficulty = difficulty;
    }
    this._tiempo_prep = tiempo_prep;
    this._tiempo_horn = tiempo_horn;
    this._tiempo_ref = tiempo_ref;
  }

    /**
   * Describe la receta
   * @returns descripcion
   */

  desc(): ISweet {
    return {
      name: this._name,
      difficulty: this._difficulty,
    };
  }

  /**
   * Suma los tiempos de la receta
   * @returns Suma de tiempos
   */
  time(): number {
    return this.tiempo_prep + this.tiempo_horn + this.tiempo_ref;
  }

  /**
   * Nombre de la receta
   * @returns nombre de receta
   */
  get name(): string | undefined {
    if (this._name === '') {
      return undefined;
    }
    return this._name;
  }

  /**
   * Getter de dificultad
   */
  get difficulty(): number | undefined {
    if (this._difficulty === null) {
      return undefined;
    }
    return this._difficulty;
  }

  /**
   * Getter de tiempo de preparacion
   */
  get tiempo_prep(): number | undefined {
    if (this._tiempo_prep <= 0) {
      return undefined;
    }
    return this._tiempo_prep;
  }

  /**
   * Getter de tiempo de horneado
   */
  get tiempo_horn(): number | undefined {
    if (this._tiempo_horn <= 0) {
      return undefined;
    }
    return this._tiempo_horn;
  }

  /**
   * Getter de tiempo de refrigeracion
   */
  get tiempo_ref(): number | undefined {
    if (this._tiempo_ref <= 0) {
      return undefined;
    }
    return this._tiempo_ref;
  }
}
