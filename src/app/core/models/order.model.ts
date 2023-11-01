import { OrderStateEnum } from '../enum/order-state-enum';
import { Entry } from '../interfaces/entry';
import { Media } from '../interfaces/media';
import { Response } from '../interfaces/response';
import { Products } from './products.model';
import { User } from './user.model';
export class Order  {
  // id !: number
  qte !: number;
  customer !: any;
  product !: any;
  order_state =  OrderStateEnum
  createdAt !: Date;
    
  
}

