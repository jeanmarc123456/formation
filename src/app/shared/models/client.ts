import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  id: number;
  name: string;
  ca: number;
  comment: string;
  state: string;
  tva: number = 10;

  constructor(obj?: Partial<Client>) {
    if(obj) {
      Object.assign(this, obj);
    }
  }
}
