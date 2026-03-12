import { describe, expect, test } from 'vitest';
import { Starship } from '../../src/ejercicio-1/interface/Starship';
import { StarshipCollection } from '../../src/ejercicio-1/class/StarshipCollection';

describe('Starship Collection', () => {
  const starshipXWing: Starship = {
    name: 'X-Wing',
    affiliation: 'Alianza Rebelde',
    powerLevel: 7000,
    yearOfBirth: 1977,
  };
  const starshipTIEFighter: Starship = {
    name: 'TIE Fighter',
    affiliation: 'Imperio Galáctico',
    powerLevel: 6000,
    yearOfBirth: 1977,
  };

  const registroNaves = new StarshipCollection();

  registroNaves.addEntity(starshipXWing);
  registroNaves.addEntity(starshipTIEFighter);

  test('Buscar por nombre', () => {
    const resultado = registroNaves.getEntitiesByName('X-Wing');
    expect(resultado).toEqual([starshipXWing]);
  });
  test('Buscar por nivel de poder', () => {
    const resultado = registroNaves.getEntitiesByPowerLevel(6000);
    expect(resultado).toEqual([starshipTIEFighter]);
  });
  test('Buscar por año de nacimiento', () => {
    const resultado = registroNaves.getEntitiesByYear(1977);
    expect(resultado).toEqual([starshipXWing, starshipTIEFighter]);
  });
  test('Buscar por afiliación', () => {
    const resultado = registroNaves.getEntitiesByAffiliation('Alianza Rebelde');
    expect(resultado).toEqual([starshipXWing]);
  });
  test('Borrar entidad', () => {
    registroNaves.eraseEntity(starshipTIEFighter);
    const resultado = registroNaves.getEntitiesByName('TIE Fighter');
    expect(resultado).toEqual([]);
  });
  test('Imprimir entidades', () => {
    expect(registroNaves.printEntities()).toBe(
      'Starship Collection:\nName: X-Wing, Affiliation: Alianza Rebelde, Power Level: 7000, Year of Birth: 1977\n'
    );
  });
});
