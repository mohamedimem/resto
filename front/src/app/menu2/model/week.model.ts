import { Day } from "./day.model";

export class Week {
  id: number;
  name: string;
  days: Day[];

  constructor(id: number, name: string, days: Day[] = []) {
    this.id = id;
    this.name = name;
    this.days = days;
  }
}
