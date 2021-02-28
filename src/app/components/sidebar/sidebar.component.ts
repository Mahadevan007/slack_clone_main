import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { INotification } from 'src/app/interfaces/inotification';
import { messageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  channels: INotification[] = [];
  directMessages: INotification[] = [];
  subscription!: Subscription;
  // @Output() modalEvent: EventEmitter<void> = new EventEmitter<void>();
  showModal: boolean = false;
  showModal2: boolean = false;
  showBackdrop: boolean = false;
  newChannelName: string = "";
  newTeammateName: string = "";
  notifications: INotification[] = [];
  footerChatListShow: boolean = true;
  footerChannelListShow: boolean = true;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private messageService: messageService) { }

  ngOnInit(): void {
    this.subscription = this.messageService.notificationsChanged.subscribe((data: INotification[]) => {
      this.notifications = data;
      this.channels = this.notifications.filter(notification => notification.type === 'channel');
      this.directMessages = this.notifications.filter(notification => notification.type === 'message');
    })
    this.notifications = this.messageService.getNotification();
    this.channels = this.notifications.filter(notification => notification.type === 'channel');
    this.directMessages = this.notifications.filter(notification => notification.type === 'message');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // openModal() {
  //   this.modalEvent.emit();
  // }

  // navigateToDirectMessage() {
  //   this.router.navigate(['app/directmessage'])
  // }



  openModal() {
    this.showModal = true;
    this.showBackdrop = true;
  }

  closeModal() {
    this.showBackdrop = false;
    this.showModal = false;
    this.showModal2 = false;
  }

  openModal2() {
    this.showBackdrop = true;
    this.showModal2 = true;
  }

  addChannel() {
    console.log(this.newChannelName);
    this.messageService.createChannel(this.newChannelName);
    this.messageService.addNotification(this.newChannelName, "channel");
    this.closeModal();
  }

  addTeamate() {
    console.log(this.newTeammateName);
    this.messageService.createTeammate(this.newTeammateName);
    this.messageService.addNotification(this.newTeammateName, "message");
    this.closeModal();
  }

  showfooterChannelList() {
    this.footerChannelListShow = true;
  }

  hidefooterChannelList() {
    this.footerChannelListShow = false;
  }

  showfooterChatList() {
    this.footerChatListShow = true;
  }

  hidefooterChatList() {
    this.footerChatListShow = false;
  }
}
