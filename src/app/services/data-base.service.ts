import { Injectable } from '@angular/core';
import { User, UserDTO } from '../model/user.model';
import { IcecreamType } from '../model/icecreamtype.model';
import { Unit } from '../model/unit.model';
import { Order, OrderDTO, OrderItemDailySummaryDTO } from '../model/order.model';
import { OrderItem } from '../model/orderItem.model';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})

export class DataBaseService {
  private users: User[] = [
    new User (1, 'Anna', 'secret', 'owner'),
    new User (2, 'Zyta', 'secret', 'customer'),
    new User (3, 'Jan', 'secret', 'customer'),
  ];

  private types: string[] = [ 'customer', 'owner'];

  private icecreamTypes: IcecreamType[] = [
    new IcecreamType ('vanilla'),
    new IcecreamType ('chocolate'),
  ];

  private units: Unit[] = [
    new Unit ('small', 250),
    new Unit ('medium', 500),
    new Unit ('big', 1000),
  ];

  private orderNumber = 1;

  private orders: Order[] = [
    new Order ( this.orderNumber++, 1, new Date(),
                [new OrderItem ( new IcecreamType ('vanilla') , new Unit ('small', 250 ))]),
    new Order ( this.orderNumber++, 1, new Date(),
                [new OrderItem ( new IcecreamType ('chocolate') , new Unit ('medium', 500 ))]),
    new Order ( this.orderNumber++, 2, new Date(),
                [new OrderItem ( new IcecreamType ('chocolate') , new Unit ('medium', 500 ))]),
    new Order ( this.orderNumber++, 2, new Date(),
                [new OrderItem ( new IcecreamType ('chocolate') , new Unit ('large', 1000 ))]),
  ];

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  getUsersDTO(): UserDTO[] {
    return this.users.map(
      user => new UserDTO (user.id, user.name)
    );
  }

  getUserDTO(userId: number): UserDTO {
    return this.users
      .filter(user => userId === user.id)
      .map(
        user => new UserDTO (user.id, user.name)
      )[0];
  }

  getOrders(): Order[] {
    return this.orders;
  }

  getOrderDTO(): OrderDTO[] {
    return this.orders.map(
        order => new OrderDTO(order.orderNumber, this.getUserDTO(order.userId), order.orderDate, order.orderItems)
      );
  }

  getCustomerOrderDTO(customerId: number): OrderDTO[] {
    return this.orders
      .filter(order => order.userId === customerId)
      .map(order => new OrderDTO(order.orderNumber, this.getUserDTO(order.userId), order.orderDate, order.orderItems));
  }

  getOrderItemDailySummaryDTO(selectedDate: Date): OrderItemDailySummaryDTO[] {
    const initial = this.orders
      .filter(order => order.orderDate.getFullYear() === selectedDate.getFullYear()
        && order.orderDate.getMonth() === selectedDate.getMonth()
        && order.orderDate.getDay() === selectedDate.getDay())
      .map(order => order.orderItems)
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
}
