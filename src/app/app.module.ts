import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { InnerContainerComponent } from './components/inner-container/inner-container.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChatComponent } from './components/chat/chat.component'
import { messageService } from './services/message.service';
import { FormsModule } from '@angular/forms';
import { ThemeService } from './services/themer/theme.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InnerContainerComponent,
    SidebarComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltipModule,
    FormsModule,
    MatSlideToggleModule
  ],
  providers: [messageService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
