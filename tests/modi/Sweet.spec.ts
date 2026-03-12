import { describe, expect, test } from 'vitest';
import { Sweet, ISweet } from '../../src/modi/class/Sweet';

describe('Salty test', () => {
  const recetaDulce = new Sweet('candy', 4, 10, 11, 12);
  const recetaDulce2 = new Sweet('', 0, 0, 0, 0);

  test('Sweet getters', () => {
    expect(recetaDulce.name).toBe('candy');
    expect(recetaDulce.difficulty).toBe(4);
    expect(recetaDulce.tiempo_prep).toEqual(10);
    expect(recetaDulce.tiempo_horn).toEqual(11);
    expect(recetaDulce.tiempo_ref).toEqual(12);

    expect(recetaDulce2.name).toBe(undefined);
    expect(recetaDulce2.difficulty).toBe(undefined);
    expect(recetaDulce2.tiempo_horn).toBe(undefined);
    expect(recetaDulce2.tiempo_prep).toBe(undefined);
    expect(recetaDulce2.tiempo_ref).toBe(undefined);

  });

  test('Sweet desc', () => {
    const Dulcillo: ISweet = {
      name: 'candy',
      difficulty: 4,
    };

    expect(recetaDulce.desc()).toEqual(Dulcillo);
  });
  test('Salty time', () => {
    expect(recetaDulce.time()).toBe(33);
  });
});
