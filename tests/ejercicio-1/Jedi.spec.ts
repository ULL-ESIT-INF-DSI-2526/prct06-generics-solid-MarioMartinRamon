import { describe, expect, test } from 'vitest';
import { JediMaster } from '../../src/ejercicio-1/interface/JediMaster';
import { JediMasterCollection } from '../../src/ejercicio-1/class/JediMasterCollection';

describe('JediMaster Collection', () => {
  const maestroYoda: JediMaster = {
    name: 'Yoda',
    affiliation: 'República',
    powerLevel: 10000,
    yearOfBirth: 896,
    planetOfOrigin: 'Desconocido',
  };
  const maestroLuke: JediMaster = {
    name: 'Luke Skywalker',
    affiliation: 'Alianza Rebelde',
    powerLevel: 9000,
    yearOfBirth: 19,
    planetOfOrigin: 'Tatooine',
  };

  const registroJedi = new JediMasterCollection();

  registroJedi.addEntity(maestroYoda);
  registroJedi.addEntity(maestroLuke);

  test('Buscar por nombre', () => {
    const resultado = registroJedi.getEntitiesByName('Yoda');
    expect(resultado).toEqual([maestroYoda]);
  });
  test('Buscar por nivel de poder', () => {
    const resultado = registroJedi.getEntitiesByPowerLevel(9000);
    expect(resultado).toEqual([maestroLuke]);
  });
  test('Buscar por año de nacimiento', () => {
    const resultado = registroJedi.getEntitiesByYear(896);
    expect(resultado).toEqual([maestroYoda]);
  });
  test('Buscar por afiliación', () => {
    const resultado = registroJedi.getEntitiesByAffiliation('Alianza Rebelde');
    expect(resultado).toEqual([maestroLuke]);
  });
  test('Buscar por planeta de origen', () => {
    const resultado = registroJedi.getEntitiesByPlanetOfOrigin('Tatooine');
    expect(resultado).toEqual([maestroLuke]);
  });
  test('Borrar entidad', () => {
    registroJedi.eraseEntity(maestroYoda);
    const resultado = registroJedi.getEntitiesByName('Yoda');
    expect(resultado).toEqual([]);
  });
  test('Imprimir entidades', () => {
    expect(registroJedi.printEntities()).toBe(
      'Jedi Master Collection:\nName: Luke Skywalker, Affiliation: Alianza Rebelde, Power Level: 9000, Year of Birth: 19, Planet of Origin: Tatooine\n'
    );
  });
});
