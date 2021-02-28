import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { INotification, NotificationType } from '../interfaces/inotification';
import { IChatMessage } from '../interfaces/ichat-message';
import { channelMessage } from '../interfaces/channel-messages';

@Injectable()
export class messageService {

    constructor() { }
    notificationsChanged = new Subject<INotification[]>();
    messagesChanged = new Subject<IChatMessage[]>();
    channelsChanged = new Subject<channelMessage[]>();
    private notifications: INotification[] = [
        {
            name: 'general',
            unread: 1,
            type: 'channel'
        },
        {
            name: 'kudos',
            type: 'channel'
        },
        {
            name: 'random',
            type: 'channel'
        },
        {
            name: 'technical',
            unread: 24,
            type: 'channel'
        },
        {
            name: 'winwire',
            unread: 20,
            type: 'channel'
        },

        // messages 
        {
            name: 'Balaji',
            unread: 1,
            active: true,
            type: 'message',
            userId: 'ash1234'
        },
        {
            name: 'Kishore',
            type: 'message',
            userId: 'Kishore1234',
        },
        {
            name: 'Vinoth',
            type: 'message',
            userId: 'vinoth55',

        },
        {
            name: 'Karthik',
            type: 'message',
            userId: 'karthik78',
        },
        {
            name: 'Jayaharish',
            type: 'message',
            userId: 'Jayaharish11'
        }, {
            name: 'Arun',
            type: 'message',
            userId: 'arun15'
        },
        {
            name: 'Shankar',
            type: 'message',
            userId: 'shankar15'
        },
        {
            name: 'Vinoth',
            type: 'message',
            userId: 'vinoth15'
        }
    ];

    private chatMessages: IChatMessage[] = [
        {
            userId: 'ash1234',
            username: 'Balaji',
            message: 'Hello thanks for viewing my slack ui clone',
            timestamp: new Date(),
            bold: false,
            italic: false
        },
        {
            userId: 'Kishore1234',
            username: 'Kishore',
            message: 'Hope you enjoy using it in bold',
            timestamp: new Date(),
            bold: false,
            italic: false
        },
        {
            userId: 'Kishore1234',
            username: 'Kishore',
            message: 'Have a nice day',
            timestamp: new Date(),
            bold: false,
            italic: false
        },
        {
            userId: 'karthik78',
            username: 'Karthik',
            message: 'This is a very nice slack clone UI',
            timestamp: new Date(),
            bold: false,
            italic: false
        },
        {
            userId: 'karthik78',
            username: 'Karthik',
            message: 'This is a very new slack clone UI',
            timestamp: new Date(),
            bold: false,
            italic: false
        },
        {
            userId: 'vinoth55',
            username: 'Vinoth',
            message: 'This is a very nice slack clone UI',
            timestamp: new Date(),
            bold: false,
            italic: false
        },
        {
            userId: 'Jayaharish11',
            username: 'Jayaharish',
            message: 'This is a very nice slack clone UI',
            timestamp: new Date(),
            bold: false,
            italic: false
        },
        {
            userId: 'Jayaharish11',
            username: 'Jayaharish',
            message: 'This is a very nice slack clone UI',
            timestamp: new Date(),
            bold: false,
            italic: false
        },
        {
            userId: 'vinoth55',
            username: 'Vinoth',
            message: 'This is a very nice slack clone UI',
            timestamp: new Date(),
            bold: false,
            italic: false
        }

    ]

    private channelMessages: channelMessage[] = [
        {
            name: "general",
            messages: [
                {
                    username: "Balaji",
                    userId: "ash1234",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Kishore",
                    userId: "Kishore1234",
                    message: "Hello",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Vinoth",
                    userId: "vinoth55",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Karthik",
                    userId: "karthik78",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Jayaharish",
                    userId: "Jayaharish11",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                }
            ]
        },
        {
            name: "kudos",
            messages: [
                {
                    username: "Balaji",
                    userId: "ash1234",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },

                {
                    username: "Vinoth",
                    userId: "vinoth55",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Kishore",
                    userId: "Kishore1234",
                    message: "Hello",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Kishore",
                    userId: "Kishore1234",
                    message: "Hello",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Karthik",
                    userId: "karthik78",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Jayaharish",
                    userId: "Jayaharish11",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                }
            ]
        },
        {
            name: "random",
            messages: [
                {
                    username: "Kishore",
                    userId: "Kishore1234",
                    message: "Hello",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Balaji",
                    userId: "ash1234",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },

                {
                    username: "Vinoth",
                    userId: "vinoth55",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Vinoth",
                    userId: "vinoth55",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Karthik",
                    userId: "karthik78",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Jayaharish",
                    userId: "Jayaharish11",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                }
            ]
        },
        {
            name: "technical",
            messages: [
                {
                    username: "Balaji",
                    userId: "ash1234",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Balaji",
                    userId: "ash1234",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Balaji",
                    userId: "ash1234",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Kishore",
                    userId: "Kishore1234",
                    message: "Hello",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Vinoth",
                    userId: "vinoth55",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Karthik",
                    userId: "karthik78",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Jayaharish",
                    userId: "Jayaharish11",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                }
            ]
        },
        {
            name: "winwire",
            messages: [
                {
                    username: "Balaji",
                    userId: "ash1234",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Kishore",
                    userId: "Kishore1234",
                    message: "Hello",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Vinoth",
                    userId: "vinoth55",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Vinoth",
                    userId: "vinoth55",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Vinoth",
                    userId: "vinoth55",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Karthik",
                    userId: "karthik78",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                },
                {
                    username: "Jayaharish",
                    userId: "Jayaharish11",
                    message: "Hi",
                    timestamp: new Date(),
                    bold: false,
                    italic: false
                }
            ]
        }
    ]

    getNotification() {
        return this.notifications.slice();
    }

    getMessages() {
        return this.chatMessages.slice();
    }

    getChannels() {
        return this.channelMessages.slice();
    }

    addNotification(name: string, type: NotificationType) {
        this.notifications.push({
            name: name,
            type: type
        })
        this.notificationsChanged.next(this.notifications);
    }

    createChannel(channelname: string) {
        this.channelMessages.push({ name: channelname, messages: [] });
    }

    createTeammate(name: string) {
        this.chatMessages.push({
            username: name,
            userId: name,
            message: "",
            timestamp: new Date(),
            bold: false,
            italic: false
        })
    }

    addMessage(message: IChatMessage) {
        console.log(message);
        this.chatMessages.push(message);
        this.messagesChanged.next(this.chatMessages);
    }

    addChannels(channelname: string, message: IChatMessage) {
        this.channelMessages.forEach(function (data, index) {
            if (data.name == channelname) {
                data.messages.push(message);
            }
        })
        this.channelsChanged.next(this.channelMessages);
    }




}