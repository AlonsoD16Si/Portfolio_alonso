import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  emojiVisible: boolean = false;

  showEmoji() {
    this.emojiVisible = true;

   
    setTimeout(() => {
      this.emojiVisible = false;
    }, 3000); 
  }
}
