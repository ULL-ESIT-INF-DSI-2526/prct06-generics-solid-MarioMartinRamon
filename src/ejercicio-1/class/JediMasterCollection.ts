import { JediMaster } from '../interface/JediMaster';
import { BasicGalacticCollection } from './BasicGalacticCollection';
import { SearchByPowerLevel } from '../interface/SearchByPowerLevel';
import { SearchByYear } from '../interface/SearchByYear';
import { SearchByAffiliation } from '../interface/SearchByAffiliation';
import { SearchByPlanetOfOrigin } from '../interface/SearchByPlanetOfOrigin';

export class JediMasterCollection
  extends BasicGalacticCollection<JediMaster>
  implements
    SearchByPowerLevel<JediMaster>,
    SearchByYear<JediMaster>,
    SearchByAffiliation<JediMaster>,
    SearchByPlanetOfOrigin<JediMaster>
{
  getEntitiesByPowerLevel(powerLevel: number): JediMaster[] {
    return this.entities.filter((jedi) => jedi.powerLevel === powerLevel);
  }

  getEntitiesByYear(year: number): JediMaster[] {
    return this.entities.filter((jedi) => jedi.yearOfBirth === year);
  }

  getEntitiesByAffiliation(affiliation: string): JediMaster[] {
    return this.entities.filter((jedi) => jedi.affiliation === affiliation);
  }

  getEntitiesByPlanetOfOrigin(planet: string): JediMaster[] {
    return this.entities.filter((jedi) => jedi.planetOfOrigin === planet);
  }

  printEntities(): string {
    let result = 'Jedi Master Collection:\n';
    this.entities.forEach((jedi) => {
      result += `Name: ${jedi.name}, Affiliation: ${jedi.affiliation}, Power Level: ${jedi.powerLevel}, Year of Birth: ${jedi.yearOfBirth}, Planet of Origin: ${jedi.planetOfOrigin}\n`;
    });
    return result;
  }
}
