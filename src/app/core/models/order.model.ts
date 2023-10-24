import { Entry } from '../interfaces/entry';
import { Media } from '../interfaces/media';
import { Response } from '../interfaces/response';
import { Customer } from './customer.model';
import { Products } from './products.model';
import { User } from './user.model';
export class Order  {
  // id !: number
  qte !: number;
  customer !: any;
  product !: any;
  createdAt !: Date;
    
  
}
export { Customer };

