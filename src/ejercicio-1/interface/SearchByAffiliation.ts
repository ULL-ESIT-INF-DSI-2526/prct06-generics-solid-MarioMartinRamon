export interface SearchByAffiliation<T> {
  getEntitiesByAffiliation(affiliation: string): T[];
}
