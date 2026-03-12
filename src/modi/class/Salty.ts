import { Elaborable } from '../interface/Elaborable';

type tipoPlato = 'entrante' | 'principal' | 'guarnición';

/**
 * Clase de recetas saladas
 */
export class Salty implements Elaborable<string> {
  private _name: string;
  private _pais: string;
  private _tiempo: number;
  private _tipo: tipoPlato;

  constructor(name: string, pais: string, tiempo: number, tipo: tipoPlato) {
    this._name = name;
    this._pais = pais;
    this._tiempo = tiempo;
    this._tipo = tipo;
  }

  /**
   * Describe la receta
   * @returns descripcion
   */
  desc(): string {
    return `${this.name}, ${this.pais}`;
  }

  /**
   * Tiempo de preparacion
   * @returns Tiempo de la receta
   */
  time(): number {
    return this.tiempo;
  }

  /**
   * Obtiene el nombre
   * @returns Nombre de la receta
   */
  get name(): string | undefined {
    if (this._name === '') {
      return undefined;
    }
    return this._name;
  }

  /**
   * Pais de la receta
   * @returns Pais de la receta
   */
  get pais(): string | undefined {
    if (this._pais === '') {
      return undefined;
    }
    return this._pais;
  }

  /**
   * Getter de tiempo
   * @returns Tiempo de cocción
   */
  get tiempo(): number | undefined {
    if (this._tiempo <= 0) {
      return undefined;
    }
    return this._tiempo;
  }

  /**
   * Tipo de receta
   * @returns Tipo de receta
   * 
   */
  get tipo(): string {
    return this._tipo;
  }
}
