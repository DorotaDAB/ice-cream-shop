import { OrderItem } from './orderItem.model';
import { UserDTO } from './user.model';

export class Order {
  orderId: number;
  userId: number;
  orderDate: Date;
  orderItem: OrderItem;

  constructor(orderId: number, userId: number, orderDate: Date, orderItem: OrderItem) {
    this.orderId = orderId;
    this.userId = userId;
    this.orderDate = orderDate;
    this.orderItem = orderItem;
  }
}

export class OrderDTO {
  orderId: number;
  userDTO: UserDTO;
  orderDate: Date;
  orderItem: OrderItem;

  constructor(orderId: number, userDTO: UserDTO, orderDate: Date, orderItem: OrderItem) {
    this.orderId = orderId;
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
