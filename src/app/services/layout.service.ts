import { Injectable } from '@angular/core';
import { IUser } from '@models/user.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  user = new BehaviorSubject<IUser | null>({
    username: 'Vu Tran',
    tableNo: 20
  });
  isShowSidebar = new BehaviorSubject<boolean>(false);

  
  setUserInfo(user: IUser) {
    this.user.next(user);
  }
}
