import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FootbarComponent } from './footbar/footbar.component';

@NgModule({
  declarations: [SidebarComponent, FootbarComponent],
  imports: [CommonModule],
  exports: [SidebarComponent, FootbarComponent], 
})
export class SharedModule {}