import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlackDataService {

  constructor() { }

  slack_data:any = [
    {
      channel_name:"frontend-batch-training",
      message_details: [
        {
          
        }
      ]
    }
  ]
}
