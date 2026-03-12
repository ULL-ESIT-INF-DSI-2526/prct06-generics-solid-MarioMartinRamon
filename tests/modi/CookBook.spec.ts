import { describe, expect, test } from 'vitest';
import { CookBook } from '../../src/modi/class/CookBook';
import { Salty } from '../../src/modi/class/Salty';
import { Sweet } from '../../src/modi/class/Sweet';
import { Elaborable } from '../../src/modi/interface/Elaborable';


describe('CookBook test', () => {
  test('CookBook add y get', () => {
    const cooking = new CookBook();
    const recetaSalada = new Salty('sopa', 'india', 10, 'entrante');
    const recetaDulce = new Sweet('candy', 4, 10, 11, 12);
  
    cooking.add(recetaDulce);
    cooking.add(recetaSalada);
    expect(cooking.get(0)).toEqual(recetaDulce);
    expect(cooking.get(1)).toEqual(recetaSalada);
    expect(cooking.get(2)).toEqual(undefined);
  });

  test('CookBook erase y size', () => {
    const cooking2 = new CookBook();
    const recetaSalada2 = new Salty('sopa', 'india', 10, 'entrante');
    const recetaDulce2 = new Sweet('candy', 4, 10, 11, 12);
    
    cooking2.add(recetaDulce2);
    cooking2.add(recetaSalada2);
    expect(cooking2.get(0)).toEqual(recetaDulce2);
    expect(cooking2.get(1)).toEqual(recetaSalada2);
    
    cooking2.remove(0);
    expect(cooking2.get(0)).toEqual(recetaSalada2);
    expect(cooking2.size()).toEqual(1);
  });

  test('CookBook filter', () => {
    const cooking3 = new CookBook();
    const recetaSalada3 = new Salty('sopa', 'india', 10, 'entrante');
    const recetaDulce3 = new Sweet('candy', 4, 10, 11, 12);

    cooking3.add(recetaDulce3);
    cooking3.add(recetaSalada3);

    function Predi(recetaSalada3: Elaborable<unknown>): boolean {
      if (recetaSalada3.time() < 15) {
        return true;
      }
      return false
    }

    const cooking_test = new CookBook();
    cooking_test.add(recetaSalada3)

    expect(cooking3.filter(Predi)).toEqual(cooking_test)
  });
  

  test('CookBook AVG', () => {
    const cooking4 = new CookBook();
    const recetaSalada4 = new Salty('sopa', 'india', 10, 'entrante');
    const recetaDulce4 = new Sweet('candy', 4, 10, 10, 12);
    
    cooking4.add(recetaDulce4);
    cooking4.add(recetaSalada4);

    expect(cooking4.avgTime()).toEqual(21); //42 / 2 = 21
    cooking4.remove(1);
    cooking4.remove(0);
    expect(cooking4.avgTime()).toEqual(0);


});

});
