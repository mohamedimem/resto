export class Day {
  id: number;
  date: string;
  entree: string;
  suite: string[];
  salade: string;
  garniture: string[];
  dessert: string[];

  constructor(
    id: number,
    date: string,
    entree: string = '',
    suite: string[] = [],
    salade: string = '',
    garniture: string[] = [],
    dessert: string[] = []
  ) {
    this.id = id;
    this.date = date;
    this.entree = entree;
    this.suite = suite;
    this.salade = salade;
    this.garniture = garniture;
    this.dessert = dessert;
  }
}
