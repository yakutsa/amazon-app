import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: itemModel[] = [
    new itemModel('TechMatte Car Mount', 8, 'It attaches to your dashboard and holds your phone in place so you can better check GPS, quickly control music, or make calls and texts in a safer, more convenient way.', 'http://static3.businessinsider.com/image/59638c41f5018467048b524b-1200/1-techmatte-maggrip-air-vent-magnetic-universal-car-mount.jpg'),
    new itemModel('Amazon Gift Card', 50, 'Customers who purchased gift cards got a $10 credit added to their Amazon account, which made this one an expected top-seller. Free money whether it comes as a gift from a friend.', 'http://static3.businessinsider.com/image/59638c4ef50184a5028b51b6-1200/2-50-amazoncom-gift-card-in-a-black-gift-box.jpg'),
    new itemModel('Bose SoundSport In-ear Headphones', 99, 'The SoundSport earbuds are among our favorite affordable options for someone looking for high-quality sound. Last year, this pair saw a 50% discount and Amazon customers responded with enthusiasm.', 'http://static3.businessinsider.com/image/59638c5df501842d4b8b4bc5-1200/3-bose-soundsport-in-ear-headphones.jpg'),
    new itemModel('SanDisk Cruzer USB 2.0 Flash Drive', 16, 'With its advanced data security options and spacious capacity, the Cruzer Fit USB Flash Drive gives you a secure, easy way to transfer your personal files. Never have enough storage space on your devices.', 'http://static1.businessinsider.com/image/59638c68f5018457018b5211-1200/4-sandisk-cruzer-64gb-flash-drive.jpg'),
    new itemModel('Amazon Echo', 90, 'The Amazon Echo is technically a Bluetooth speaker, but you would not buy one just to play music. You can ask for the weather, control smart lights, search the web, order from Alexa Deals.', 'https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/echo/hero_dot-echo-plus._CB515484415_.png'),
    new itemModel('Amazon Fire TV Stick', 40, 'Many of us are opting to cut cords in our lives wherever and whenever possible. For anyone opting for streaming services like Netflix, Hulu, or Prime Video over traditional cable TV.', 'http://static5.businessinsider.com/image/59638cccd9fccd3a008b51c6-1200/6-amazon-fire-tv-stick.jpg'),
    new itemModel('Fire Tablet 7', 50, 'The fast quad-core processor consists of 4 high-performance 1.3 GHz cores for quick app launches, smooth games and videos, and great overall performance.', 'http://static3.businessinsider.com/image/59638cdad9fccdc3278b4e68-1200/7-fire-7-tablet.jpg'),
    new itemModel('AUKEY Quick Charge', 32, 'Designed to work with all popular USB powered devices from iPhones to Android phones, tablets, photography gear, Bluetooth speakers, headphones and more.', 'http://static6.businessinsider.com/image/59638cf7d9fccd1b008b5262-1200/9-quick-charge-20-aukey-5-port-usb-charger.jpg'),
    new itemModel('AUKEY Power Bank', 30, 'Compatible with all popular USB powered devices including iPhones, Android phones, Bluetooth headphones and more. Your devices will each receive the safest maximum recharge rate possible.', 'http://static2.businessinsider.com/image/59638d09d9fccd03708b495c-1200/10-aukey-20000mah-power-bank.jpg')
  ];
}

export class itemModel {
  constructor(public itemName: string, public itemPrice: number, public itemDescription: string, public imagePath: string){
    this.itemName = itemName;
    this.itemPrice = itemPrice;
    this.itemDescription = itemDescription;
    this.imagePath = imagePath;
  }
}

