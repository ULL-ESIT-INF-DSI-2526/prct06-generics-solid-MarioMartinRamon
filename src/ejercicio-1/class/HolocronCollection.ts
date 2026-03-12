import { BasicGalacticCollection } from './BasicGalacticCollection';
import { Holocron } from '../interface/Holocron';
import { SearchByPowerLevel } from '../interface/SearchByPowerLevel';
import { SearchByYear } from '../interface/SearchByYear';

export class HolocronCollection
  extends BasicGalacticCollection<Holocron>
  implements SearchByPowerLevel<Holocron>, SearchByYear<Holocron>
{
  getEntitiesByPowerLevel(powerLevel: number): Holocron[] {
    return this.entities.filter(
      (holocron) => holocron.powerLevel === powerLevel
    );
  }

  getEntitiesByYear(year: number): Holocron[] {
    return this.entities.filter((holocron) => holocron.yearOfBirth === year);
  }

  printEntities(): string {
    let result = 'Holocron Collection:\n';
    this.entities.forEach((holocron) => {
      result += `Name: ${holocron.name}, Power Level: ${holocron.powerLevel}, Year of Birth: ${holocron.yearOfBirth}\n`;
    });
    return result;
  }
}
