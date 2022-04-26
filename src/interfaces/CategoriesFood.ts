import Restaurant from './Restaurant';

export default interface CousinType {
  createdAt: Date;
  name: string;
  img: string;
  idCousinType: number;
  restaurants: Array<Restaurant>;
}
