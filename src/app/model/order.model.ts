import { OrderItem } from './orderItem.model';
import { UserDTO } from './user.model';

export class Order {
  orderNumber: number;
  userId: number;
  orderDate: Date;
  orderItem: OrderItem;

  constructor(orderNumber: number, userId: number, orderDate: Date, orderItem: OrderItem) {
    this.orderNumber = orderNumber;
    this.userId = userId;
    this.orderDate = orderDate;
    this.orderItem = orderItem;
  }
}

export class OrderDTO {
  orderNumber: number;
  userDTO: UserDTO;
  orderDate: Date;
  orderItem: OrderItem;

  constructor(orderNumber: number, userDTO: UserDTO, orderDate: Date, orderItem: OrderItem) {
    this.orderNumber = orderNumber;
    this.userDTO = userDTO;
    this.orderDate = orderDate;
    this.orderItem = orderItem;
  }
}

export class OrderItemDailySummaryDTO {
  orderItem: OrderItem;
  orderedQuantityTotal: number;

  constructor(orderItem: OrderItem, orderedQuantityTotal: number) {
    this.orderItem = orderItem;
    this.orderedQuantityTotal = orderedQuantityTotal;
  }
}
