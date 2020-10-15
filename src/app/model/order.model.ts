import { OrderItem } from './orderItem.model';

export interface Order {
  id: number;
  customerId: string;
  date: Date;
  orderedIcecream: OrderItem[];
}
