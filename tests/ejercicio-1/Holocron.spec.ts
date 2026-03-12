import { describe, expect, test } from 'vitest';
import { Holocron } from '../../src/ejercicio-1/interface/Holocron';
import { HolocronCollection } from '../../src/ejercicio-1/class/HolocronCollection';

describe('Holocron Collection', () => {
  const holocronSith: Holocron = {
    name: 'Holocron Sith',
    powerLevel: 5000,
    yearOfBirth: 1000,
  };
  const holocronJedi: Holocron = {
    name: 'Holocron Jedi',
    powerLevel: 8000,
    yearOfBirth: 1200,
  };

  const registroHolocrones = new HolocronCollection();

  registroHolocrones.addEntity(holocronSith);
  registroHolocrones.addEntity(holocronJedi);

  test('Buscar por nombre', () => {
    const resultado = registroHolocrones.getEntitiesByName('Holocron Sith');
    expect(resultado).toEqual([holocronSith]);
  });
  test('Buscar por nivel de poder', () => {
    const resultado = registroHolocrones.getEntitiesByPowerLevel(8000);
    expect(resultado).toEqual([holocronJedi]);
  });
  test('Buscar por año de nacimiento', () => {
    const resultado = registroHolocrones.getEntitiesByYear(1000);
    expect(resultado).toEqual([holocronSith]);
  });
  test('Borrar entidad', () => {
    registroHolocrones.eraseEntity(holocronSith);
    const resultado = registroHolocrones.getEntitiesByName('Holocron Sith');
    expect(resultado).toEqual([]);
  });
  test('Imprimir entidades', () => {
    expect(registroHolocrones.printEntities()).toBe(
      'Holocron Collection:\nName: Holocron Jedi, Power Level: 8000, Year of Birth: 1200\n'
    );
  });
});