import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/model/user.model';
import { UsersService } from 'src/app/services/users.service';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: User[] = [];

  constructor(private dialog: MatDialog,
              private usersService: UsersService) {
    this.getSortedUsers(usersService);
  }

  getSortedUsers(usersService: UsersService): void {
    this.customers = usersService.getCustomers()
      .sort(this.alphabeticalUserComparator);
  }

  alphabeticalUserComparator(a: User, b: User): number {
    const userA = a.name.toLowerCase();
    const userB = b.name.toLowerCase();

    let comparison = 0;
    if (userA > userB) {
      comparison = 1;
    } else if (userA < userB) {
      comparison = -1;
    }
    return comparison;
  }

  userAdditionDialog(): void {
    const dialogRef = this.dialog.open(CustomerDetailsComponent);

    dialogRef.componentInstance.userSubmit.subscribe(
      newUser => {
        this.usersService.addUser(newUser);
        this.getSortedUsers(this.usersService);
      },
    );
  }

  ngOnInit(): void {
  }

}
