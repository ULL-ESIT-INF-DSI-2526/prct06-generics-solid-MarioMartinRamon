export interface SearchByYear<T> {
  getEntitiesByYear(year: number): T[];
}
