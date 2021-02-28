import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IChatMessage } from '../../interfaces/ichat-message';
import { Subscription } from 'rxjs';
import { HostListener } from "@angular/core";
import { messageService } from 'src/app/services/message.service';
import { channelMessage } from 'src/app/interfaces/channel-messages';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  channels: channelMessage[] = [];
  subscription!: Subscription;
  subscription2!: Subscription;
  subscription3!: Subscription;
  showBackdrop2: boolean = false;
  newChannelName: string = "";
  showModal: boolean = false;
  showBackdrop: boolean = false;
  displaysidebar: boolean = false;
  chatMessages: any[] = [];
  boldText: boolean = false;
  italicText: boolean = false;
  // userName: string = "";
  currentUser: any[] = [];
  userName: string = "";
  message: string = "";
  userId: string = "";
  currentChatType: string = "";
  currentChannel: any[] = [];
  channelName: string = "";
  // @ViewChild('f', { static: true }) messagetext: Input
  constructor(private route: ActivatedRoute, private messageService: messageService) { }

  ngOnInit(): void {
    var that = this;
    this.subscription3 = this.route.params.subscribe((params: Params) => {
      const type = this.route.snapshot.params['type']
      console.log(type);
      this.currentChatType = type;
      if (type == "message") {
        this.chatMessages = this.messageService.getMessages();
        this.subscription = this.messageService.messagesChanged.subscribe((data: IChatMessage[]) => {
          this.chatMessages = data;
          this.currentUser = [];
          const id = this.route.snapshot.params['id'];
          const type = this.route.snapshot.params['type']
          console.log("ID========== ", id);
          console.log("Type===========", type);
          this.userId = id;
          console.log("ID======", id);
          this.chatMessages.forEach(function (data, index) {
            // console.log(data);
            if (data.userId == id) {
              console.log(that.currentUser)
              that.userName = data.username;
              that.currentUser.push(data)
            }
          })
        })
        this.subscription2 = this.route.params.subscribe(
          (params: Params) => {
            this.currentUser = [];
            const id = this.route.snapshot.params['id'];
            this.userId = id;
            // const id = this.route.snapshot.params['id'];
            const type = this.route.snapshot.params['type']
            console.log("ID========== ", id);
            console.log("Type===========", type);
            this.chatMessages.forEach(function (data, index) {
              // console.log(data);
              if (data.userId == id) {
                console.log(that.currentUser)
                that.userName = data.username;
                that.currentUser.push(data)
              }
            })
          }
        )
      } else {
        this.channels = this.messageService.getChannels();
        this.subscription = this.messageService.channelsChanged.subscribe((data: channelMessage[]) => {
          this.channels = data;
          that.currentChannel = [];
          const id = this.route.snapshot.params['id'];
          this.channelName = id;
          console.log("ID======", id);
          this.channels.forEach(function (data, index) {
            console.log(data);
            if (data.name == id) {
              data.messages.forEach(function (data, index) {
                that.currentChannel.push(data)
              })

              console.log(that.currentChannel)
            }
          })
        })
        this.subscription2 = this.route.params.subscribe(
          (params: Params) => {
            that.currentChannel = [];
            const id = this.route.snapshot.params['id'];
            this.channelName = id;
            console.log("ID======", id);
            this.channels.forEach(function (data, index) {
              console.log(data);
              if (data.name == id) {
                data.messages.forEach(function (data, index) {
                  that.currentChannel.push(data)
                })

                console.log(that.currentChannel)
              }
            })
          }
        )
      }
    })
    // console.log(this.currentUser);
  }

  ngOnDestroy() {
    this.subscription2.unsubscribe();
    this.subscription.unsubscribe()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.showBackdrop = false;
    this.displaysidebar = false;

  }

  sendMessage() {
    if (this.message != "") {
      if (this.currentChatType == "message") {

        console.log(this.message)
        this.messageService.addMessage({
          message: this.message,
          userId: this.userId,
          username: "You",
          timestamp: new Date(),
          bold: this.boldText,
          italic: this.italicText
        })
        this.message = "";
        this.boldText = false;
        this.italicText = false;
      } else {
        this.messageService.addChannels(this.channelName, {
          message: this.message,
          userId: "you",
          username: "You",
          timestamp: new Date(),
          bold: this.boldText,
          italic: this.italicText
        })
        this.message = "";
        this.boldText = false;
        this.italicText = false;
      }
    }
  }

  openSidebar() {
    this.displaysidebar = true;
    this.showBackdrop = true;
  }

  closeSidebar() {
    this.displaysidebar = false;
    this.showBackdrop = false;
  }

  toggleBoldText() {
    this.boldText = this.boldText == true ? false : true;
  }

  toggleItalicText() {
    this.italicText = this.italicText == true ? false : true;
  }

  log(val: any) {
    console.log(val);
  }

  toggleSidebar() {

  }

  // openModal() {
  //   console.log("show Modal")
  //   this.showModal = true;
  //   this.showBackdrop = true;
  // }

  // closeModal() {
  //   this.showBackdrop = false;
  //   this.showModal = false;
  // }



  // addChannel() {
  //   console.log(this.newChannelName);
  //   this.messageService.addNotification(this.newChannelName, "channel");
  //   this.messageService.createChannel(this.newChannelName);
  //   // this.closeModal();
  // }

}
