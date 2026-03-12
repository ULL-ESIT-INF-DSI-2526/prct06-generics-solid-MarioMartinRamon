import { BasicGalacticCollection } from './BasicGalacticCollection';
import { Starship } from '../interface/Starship';
import { SearchByPowerLevel } from '../interface/SearchByPowerLevel';
import { SearchByYear } from '../interface/SearchByYear';
import { SearchByAffiliation } from '../interface/SearchByAffiliation';

export class StarshipCollection
  extends BasicGalacticCollection<Starship>
  implements
    SearchByPowerLevel<Starship>,
    SearchByYear<Starship>,
    SearchByAffiliation<Starship>
{
  getEntitiesByPowerLevel(powerLevel: number): Starship[] {
    return this.entities.filter(
      (starship) => starship.powerLevel === powerLevel
    );
  }

  getEntitiesByYear(year: number): Starship[] {
    return this.entities.filter((starship) => starship.yearOfBirth === year);
  }

  getEntitiesByAffiliation(affiliation: string): Starship[] {
    return this.entities.filter(
      (starship) => starship.affiliation === affiliation
    );
  }

  printEntities(): string {
    let result = 'Starship Collection:\n';
    this.entities.forEach((starship) => {
      result += `Name: ${starship.name}, Affiliation: ${starship.affiliation}, Power Level: ${starship.powerLevel}, Year of Birth: ${starship.yearOfBirth}\n`;
    });
    return result;
  }
}
