import { describe, expect, test } from 'vitest';
import { Salty } from '../../src/modi/class/Salty';

describe('Salty test', () => {
  const recetaSalada = new Salty('sopa', 'india', 10, 'entrante');
  const recetaSalada2 = new Salty('', '', 0, 'principal');

  test('Salty getters', () => {
    expect(recetaSalada.name).toBe('sopa');
    expect(recetaSalada.pais).toBe('india');
    expect(recetaSalada.tiempo).toEqual(10);
    expect(recetaSalada.tipo).toBe('entrante');

    expect(recetaSalada2.name).toBe(undefined);
    expect(recetaSalada2.pais).toBe(undefined);
    expect(recetaSalada2.tiempo).toEqual(undefined);

  });

  test('Salty desc', () => {
    expect(recetaSalada.desc()).toBe('sopa, india');
  });
  test('Salty time', () => {
    expect(recetaSalada.time()).toBe(10);
  });
});
