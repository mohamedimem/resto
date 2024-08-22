export class Reservation {
  id: number;
  dayId: number;
  chosenMenu: string;
  repasRating: number;
  serviceRating: number;
  propreteRating: number;
  feedback: string;

  constructor(
    id: number,
    dayId: number,
    chosenMenu: string,
    repasRating: number,
    serviceRating: number,
    propreteRating: number,
    feedback: string = ''
  ) {
    this.id = id;
    this.dayId = dayId;
    this.chosenMenu = chosenMenu;
    this.repasRating = repasRating;
    this.serviceRating = serviceRating;
    this.propreteRating = propreteRating;
    this.feedback = feedback;
  }
}
