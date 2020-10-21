import { Injectable } from '@angular/core';
import { CustomerDTO, User, UserDTO } from '../model/user.model';
import { IcecreamType } from '../model/icecreamtype.model';
import { Unit } from '../model/unit.model';
import { Order, OrderDTO, OrderItemDailySummaryDTO } from '../model/order.model';
import { OrderItem } from '../model/orderItem.model';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})

export class DataBaseService {
  private orderId = 1;
  private userId = 1;

  private users: User[] = [
    new User(this.userId++, 'Anna', 'secret', 'owner', null, null),
    new User(this.userId++, 'Zyta', 'secret', 'customer', new Unit('small', 250), [new IcecreamType('vanilla'), new IcecreamType('lemon')]),
    new User(this.userId++, 'Jan', 'secret', 'customer', new Unit('medium', 500), [new IcecreamType('chocolate')]),
  ];

  private types: string[] = [ 'customer', 'owner'];

  private icecreamTypes: IcecreamType[] = [
    new IcecreamType('vanilla'),
    new IcecreamType('chocolate'),
    new IcecreamType('lemon'),
  ];

  private units: Unit[] = [
    new Unit('small', 250),
    new Unit('medium', 500),
    new Unit('big', 1000),
  ];

  private orders: Order[] = [
    new Order(this.orderId++, 3, new Date(),
                new OrderItem( new IcecreamType ('vanilla') , new Unit ('small', 250 ), 1)),
    new Order(this.orderId++, 3, new Date(),
                new OrderItem( new IcecreamType ('chocolate') , new Unit ('medium', 500 ), 1)),
    new Order(this.orderId++, 2, new Date(),
                new OrderItem( new IcecreamType ('chocolate') , new Unit ('medium', 500 ), 1)),
    new Order(this.orderId++, 2, new Date(),
                new OrderItem( new IcecreamType('chocolate') , new Unit('large', 1000 ), 1)),
  ];

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  getCustomersDTO(): UserDTO[] {
    return this.users
      .filter(user => user.type === 'customer')
      .map(user => new UserDTO (user.id, user.name)
    );
  }

  getUserDTO(userId: number): UserDTO {
    return this.users
      .filter(user => userId === user.id)
      .map(
        user => new UserDTO (user.id, user.name)
      )[0];
  }

  getCustomerDTO(userId: number): CustomerDTO {
    return this.users
      .filter(user => userId === user.id)
      .map(
        user => new CustomerDTO (user.id, user.name, user.unit, user.favoriteIcecream)
      )[0];
  }

  getOrders(): Order[] {
    return this.orders;
  }

  getOrderDTO(): OrderDTO[] {
    return this.orders.map(
        order => new OrderDTO(order.orderId, this.getUserDTO(order.userId), order.orderDate, order.orderItem)
      );
  }

  getCustomerOrderDTO(customerId: number): OrderDTO[] {
    return this.orders
      .filter(order => order.userId === customerId)
      .map(order => new OrderDTO(order.orderId, this.getUserDTO(order.userId), order.orderDate, order.orderItem));
  }

  getOrderItemDailySummaryDTO(selectedDate: Date): OrderItemDailySummaryDTO[] {
    const initial = this.orders
      .filter(order => order.orderDate.getFullYear() === selectedDate.getFullYear()
        && order.orderDate.getMonth() === selectedDate.getMonth()
        && order.orderDate.getDay() === selectedDate.getDay())
      .map(order => order.orderItem)
      .reduce((x, y) => x.concat(y), []);

    const groupedOrders: any = _.groupBy(initial, (item) => {
      return item.icecreamType.flavour + '-' + item.unit.name;
    });
    return Object.values(groupedOrders).map(
      (item: any[]) => new OrderItemDailySummaryDTO(item[0], item.length));
    }

  getTypes(): string[] {
    return this.types;
  }

  getUnits(): Unit[] {
    return this.units;
  }

  getIcecreamTypes(): IcecreamType[] {
    return this.icecreamTypes;
  }

  addUser(newUser: User): void {
    this.users.push(newUser);
  }

  addIcecreamType(newIcecreamType: IcecreamType): void {
    this.icecreamTypes.push(newIcecreamType);
  }

  addUnit(newUnit: Unit): void {
    this.units.push(newUnit);
  }

  addOrder(newOrderDTO: OrderDTO): void {
    const newOrder = new Order(this.orderId++, newOrderDTO.userDTO.id, new Date(), newOrderDTO.orderItem);
    this.orders.push(newOrder);
  }
}
