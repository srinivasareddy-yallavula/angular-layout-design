import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  // activeTab: string = 'person1';
  
  // openTab(tabId: string): void {
  //   this.activeTab = tabId;
  // }
  activeTab: string = ''; 

  constructor() { }

  openTab(tabId: string): void {
    const tabContents = document.querySelectorAll('.tabcontent');
    tabContents.forEach((tab) => {
      (tab as HTMLElement).style.display = 'none';
    });

    const tabLinks = document.querySelectorAll('.tablinks');
    tabLinks.forEach((link) => {
      link.classList.remove('active');
    });

    
    const selectedTabContent = document.getElementById(tabId);
    if (selectedTabContent) {
      selectedTabContent.style.display = 'block';
    }

    const selectedTabLink = document.getElementById(tabId + '-link');
    if (selectedTabLink) {
      selectedTabLink.classList.add('active');
    }

    this.activeTab = tabId;
  }

  activeAccordion: number | null = null;

  

  toggleAccordion(accordionNumber: number): void {
    if (this.activeAccordion === accordionNumber) {
      // If the clicked accordion is already active, close it
      this.activeAccordion = null;
    } else {
      // Open the clicked accordion
      this.activeAccordion = accordionNumber;
    }
  }
  
}
