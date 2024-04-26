import { createSlice } from '@reduxjs/toolkit';
import Airpod11 from '../../assets/products/airpodes/boAt Airdopes 111 1.webp'
import Airpod21 from '../../assets/products/airpodes/boAt Airdopes 131 1.webp'
import Airpod31 from '../../assets/products/airpodes/boAt Airdopes 192 1.webp'
import Airpod41 from '../../assets/products/airpodes/boAt Airdopes 201 1.webp'
import Airpod51 from '../../assets/products/airpodes/boAt Airdopes 381 1.webp'
import Airpod61 from '../../assets/products/airpodes/boAt Airdopes 381 MKI 1.webp'
import Airpod71 from '../../assets/products/airpodes/boAt Airdopes 411 ANC 1.webp'
import Airpod81 from '../../assets/products/airpodes/boAt Airdopes 451v2 1.webp'
import Airpod91 from '../../assets/products/airpodes/boAt Airdopes 501 ANC 1.webp'
import Airpod101 from '../../assets/products/airpodes/boAt Airdopes 511 V2 1.webp'
import Camera11 from '../../assets/products/camera/Canon EOS 5D Mark IV 30.4 MP Digital SLR Camera (Black) + EF 24-105mm is II USM Lens Kit 1.jpg'
import Camera21 from '../../assets/products/camera/Canon EOS 200D II 24.1MP Digital SLR Camera + EF-S 18-55mm f4 is STM Lens (Black) 1.jpg'
import Camera3 from '../../assets/products/camera/Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens 2.jpg'
import Camera4 from '../../assets/products/camera/Nikon D780 DSLR Body with 24-120mm VR Lens, 3X Optical Zoom, Black 1.jpg'
import Camera5 from '../../assets/products/camera/Nikon D850 45.7MP Digital SLR Camera (Black) with AF-S Nikkor 24-120mm F-4G ED VR Lens and 64GB Memory Card 1.jpg'
import Camera6 from '../../assets/products/camera/Sony Alpha ILCE-6400 24.2MP Mirrorless Digital SLR Camera Body (APS-C Sensor, Real-Time Eye Auto Focus, 4K Vlogging Camera, Tiltable LCD) - Black 1.jpg'
import Earphone1 from '../../assets/products/earphones/boAt Rockerz 103 Pro 1.webp'
import Earphone2 from '../../assets/products/earphones/boAt Rockerz 400 1.webp'
import Earphone3 from '../../assets/products/earphones/boAt Rockerz 450 Batman DC Edition 1.webp'
import Earphone4 from '../../assets/products/earphones/boAt Rockerz 510.webp'
import earphone5 from '../../assets/products/earphones/boAt Rockerz 558 1.webp'
import Earphone6 from '../../assets/products/earphones/boAt TRebel Rockerz 450 1.webp'
import Mobile1 from '../../assets/products/mobile/realme 7 Pro (Mirror Silver, 128 GB) (6 GB RAM) 1.webp'
import Mobile2 from '../../assets/products/mobile/realme 9 5G (Stargaze White, 128 GB) (6 GB RAM) 1.webp'
import Mobile3 from '../../assets/products/mobile/realme 9 Pro 5G (Midnight Black, 128 GB) (6 GB RAM) 1.webp'
import Mobile4 from '../../assets/products/mobile/realme 9i 5G (Soulful Blue, 64 GB) (4 GB RAM) 1.webp'
import Mobile5 from '../../assets/products/mobile/realme C25s (Watery Grey, 128 GB) (4 GB RAM) 1.webp'
import Mobile6 from '../../assets/products/mobile/realme C30 (Bamboo Green, 32 GB) (2 GB RAM) 1.webp'
import Mobile7 from '../../assets/products/mobile/realme GT 5G (Racing Yellow, 256 GB) (12 GB RAM) 2.webp'
import Mobile8 from '../../assets/products/mobile/realme GT NEO 2 (NEO Black, 128 GB) (8 GB RAM) 1.webp'
import Mobile9 from '../../assets/products/mobile/realme GT Neo 3 (Asphalt Black, 128 GB) (8 GB RAM) 1.webp'
import Mobile10 from '../../assets/products/mobile/realme Narzo 50 (Speed Blue, 64 GB) (4 GB RAM) 1.webp'
import Mouse1 from '../../assets/products/mouse/ASUS Marshmallow - Silent, Adj. DPI, Multi-Mode, With Solar Cover Wireless Optical Mouse (2.4GHz Wireless, Bluetooth, Quiet Blue) 1.webp'
import Mouse2 from '../../assets/products/mouse/DELL MS 116 Wired Optical Mouse (USB, Black) 1.webp'
import Mouse3 from '../../assets/products/mouse/HP 250 Wireless Optical Mouse (2.4GHz Wireless, Black) 2.webp'
import Mouse4 from '../../assets/products/mouse/HP x1000 Wired Optical Mouse (USB 2.0, Black) 1.webp'
import Mouse5 from '../../assets/products/mouse/Lenovo 130 Wireless Optical Mouse (2.4GHz Wireless, Black) 1.webp'
import Mouse6 from '../../assets/products/mouse/Lenovo mice_bo 400 mouse(model l300) Wireless Optical Mouse 1.webp'
import Mouse7 from '../../assets/products/mouse/Logitech B100 Wired Optical Mouse (USB, Black) 1.webp'
import Mouse8 from '../../assets/products/mouse/Portronics Toad 22, POR 1612 Wireless Optical Mouse (2.4GHz Wireless, Black) 1.webp'
import Speaker1 from '../../assets/products/speakers/BLITZ 2000 1.webp'
import Speaker2 from '../../assets/products/speakers/boAt Rugby Plus 2.webp'
import Speaker3 from '../../assets/products/speakers/boAt Stone 170.webp'
import Speaker4 from '../../assets/products/speakers/boAt Stone 1200 1.webp'
import Speaker5 from '../../assets/products/speakers/boAt Stone 1450 1.webp'
import Speaker6 from '../../assets/products/speakers/boAt Stone 1508 1.webp'
import Speaker7 from '../../assets/products/speakers/boAt Stone Symphony.webp'
import Speaker8 from '../../assets/products/speakers/Stone 500 1.webp'
import Trimmer1 from '../../assets/products/trimmers/Ambrane AGK-11 Trimmer 60 min Runtime 18 Length Settings (Black) 1.webp'
import Trimmer2 from '../../assets/products/trimmers/Mi XXQ01HM Trimmer 90 min Runtime 40 Length Settings (Black) 1.webp'
import Trimmer3 from '../../assets/products/trimmers/NOVA NHT 1039-05 USB Trimmer 45 min Runtime 4 Length Settings (Blue) 1.webp'
import Trimmer4 from '../../assets/products/trimmers/NOVA NHT 1052 USB Trimmer 90 min Runtime 40 Length Settings (Black) 1.webp'
import Trimmer5 from '../../assets/products/trimmers/NOVA NHT 1073-00 USB Trimmer 60 min Runtime 4 Length Settings (Black, Blue) 1.webp'
import Trimmer6 from '../../assets/products/trimmers/PHILIPS BT1232-15 Trimmer 30 mins Runtime 3 Length Settings (Blue) 1.webp'
import Trimmer7 from '../../assets/products/trimmers/PHILIPS MG3710-65 Trimmer 60 min Runtime 8 Length Settings (Black) 1.webp'
import Trimmer8 from '../../assets/products/trimmers/PHILIPS BT3231-15 Trimmer 60 min Runtime 20 Length Settings (Green) 1.webp'
import Tv1 from '../../assets/products/TV/acer I Series 127 cm (50 inch) Ultra HD (4K) LED Smart Android TV with Android 11, 30W Dolby Audio, MEMC (2022 Model) (AR50AR2851UDFL) 1.webp'
import Tv2 from '../../assets/products/TV/iFFALCON by TCL F53 100 cm (40 inch) Full HD LED Smart Android TV with Android 11 (40F53) 1.webp'
import Tv3 from '../../assets/products/TV/LG 123 cm (49 inch) Ultra HD (4K) LED Smart WebOS TV (49UK7500PTA) 1.webp'
import Tv4 from '../../assets/products/TV/LG 123 cm (49 inch) Ultra HD (4K) LED Smart WebOS TV 1.webp'
import Tv5 from '../../assets/products/TV/LG 164 cm (65 inch) OLED Ultra HD (4K) Smart TV 1.webp'
import Tv6 from '../../assets/products/TV/LG 164 cm (65 inch) OLED Ultra HD (4K) Smart TV 1.webp'
import Tv7 from '../../assets/products/TV/MOTOROLA ZX2 100 cm (40 inch) Full HD LED Smart Android TV with Dolby Atmos and Dolby Vision (40SAFHDME) 1.webp'
import Tv8 from '../../assets/products/TV/OnePlus Y1 100 cm (40 inch) Full HD LED Smart Android TV with Dolby Audio (40FA1A00) 1.webp'
import Tv9 from '../../assets/products/TV/Panasonic 100 cm (40 inch) Full HD LED Smart Android TV (TH-40HS450DX) 1.webp'
import Tv10 from '../../assets/products/TV/SAMSUNG 108 cm (43 inch) Ultra HD (4K) LED Smart Tizen TV (UA43TU8570UXXL) 1.webp'
import Watch1 from '../../assets/products/watches/boAt Cosmos Pro 1.webp'
import Watch2 from '../../assets/products/watches/boAt Storm 1.webp'
import Watch3 from '../../assets/products/watches/boAt Storm Call 1.webp'
import Watch4 from '../../assets/products/watches/boAt Storm Pro Call 1.webp'
import Watch5 from '../../assets/products/watches/boAt Storm RTL 1.webp'
import Watch6 from '../../assets/products/watches/boAt TRebel Matrix 1.webp'
import Watch7 from '../../assets/products/watches/boAt Wave Beat 1.webp'
import Watch8 from '../../assets/products/watches/boAt Wave Connect 1.webp'



const initialState = {
  products: [
    {
      id: 1,
      pname: "Airpod 1",
      price: 1000,
      category: "Airpods",
      image: Airpod11,
     
    }, {
        id: 2,
        pname: "Airpod 2",
        price: 1070,
        category: "Airpods",
        image: Airpod21,
       
      },
      {
        id: 3,
        pname: "Airpod 3",
        price: 1570,
        category: "Airpods",
        image: Airpod31,
       
      },
      {
        id: 4,
        pname: "Airpod 4",
        price: 1570,
        category: "Airpods",
        image: Airpod41,
       
      },
      {
        id: 5,
        pname: "Airpod 5",
        price: 1570,
        category: "Airpods",
        image: Airpod51,
       
      },
      {
        id: 6,
        pname: "Airpod 6",
        price: 1770,
        category: "Airpods",
        image: Airpod61,
        
      },
      {
        id: 7,
        pname: "Airpod 7",
        price: 1780,
        category: "Airpods",
        image: Airpod71,
        
      },
      {
        id: 8,
        pname: "Airpod 8",
        price: 1480,
        category: "Airpods",
        image: Airpod81,
       
      },
      {
        id: 9,
        pname: "Airpod 9",
        price: 1480,
        category: "Airpods",
        image: Airpod91,
       
      },
      {
        id: 10,
        pname: "Airpod 10",
        price: 1480,
        category: "Airpods",
        image: Airpod101,
      
      },
      {
        id: 11,
        pname: "Camera 1",
        price: 1480,
        category: "Camera",
        image: Camera11,
       
      },
      {
        id: 12,
        pname: "Camera 2",
        price: 1480,
        category: "Camera",
        image: Camera21,
      },
      {
        id: 13,
        pname: "Camera 3",
        price: 140080,
        category: "Camera",
        image: Camera3,
      },
      {
        id: 14,
        pname: "Camera 4",
        price: 148760,
        category: "Camera",
        image: Camera4,
      },
      {
        id: 15,
        pname: "Camera 5",
        price: 148760,
        category: "Camera",
        image: Camera5,
      },
      {
        id: 16,
        pname: "Camera 6",
        price: 140760,
        category: "Camera",
        image: Camera6,
      },
      {
        id: 17,
        pname: "Earphone 1",
        price: 140760,
        category: "Earphone",
        image: Earphone1,
      },
      {
        id: 18,
        pname: "Earphone 2",
        price: 1407,
        category: "Earphone",
        image: Earphone2,
      },
      {
        id: 19,
        pname: "Earphone 3",
        price: 1460,
        category: "Earphone",
        image: Earphone3,
      },
      {
        id: 20,
        pname: "Earphone 4",
        price: 1600,
        category: "Earphone",
        image: Earphone4,
      },
      {
        id: 21,
        pname: "Earphone 5",
        price: 1060,
        category: "Earphone",
        image: earphone5,
      },
      {
        id: 22,
        pname: "Earphone 6",
        price: 1400,
        category: "Earphone",
        image: Earphone6,
      },
      {
        id: 23,
        pname: "Mobile 1",
        price: 15000,
        category: "Mobile",
        image: Mobile1,
      },
      {
        id: 24,
        pname: "Mobile 2",
        price: 15500,
        category: "Mobile",
        image: Mobile2,
      },
      {
        id: 25,
        pname: "Mobile 3",
        price: 16000,
        category: "Mobile",
        image: Mobile3,
      },
      {
        id: 26,
        pname: "Mobile 4",
        price: 11000,
        category: "Mobile",
        image: Mobile4,
      },
      {
        id: 27,
        pname: "Mobile 5",
        price: 13000,
        category: "Mobile",
        image: Mobile5,
      },
      {
        id: 28,
        pname: "Mobile 6",
        price: 17000,
        category: "Mobile",
        image: Mobile6,
      },
      {
        id: 29,
        pname: "Mobile 7",
        price: 18000,
        category: "Mobile",
        image: Mobile7,
      },
      {
        id: 30,
        pname: "Mobile 8",
        price: 20000,
        category: "Mobile",
        image: Mobile8,
      },
      {
        id: 31,
        pname: "Mobile 9",
        price: 22000,
        category: "Mobile",
        image: Mobile9,
      },
      {
        id: 32,
        pname: "Mobile 10",
        price: 15000,
        category: "Mobile",
        image: Mobile10,
      },
      {
        id: 33,
        pname: "Mouse 1",
        price: 600,
        category: "Mouse",
        image: Mouse1,
      },
      {
        id: 34,
        pname: "Mouse 2",
        price: 800,
        category: "Mouse",
        image: Mouse2,
      },
      {
        id: 35,
        pname: "Mouse 3",
        price: 700,
        category: "Mouse",
        image: Mouse3,
      },
      {
        id: 36,
        pname: "Mouse 4",
        price: 300,
        category: "Mouse",
        image: Mouse4,
      },
      {
        id: 37,
        pname: "Mouse 5",
        price: 400,
        category: "Mouse",
        image: Mouse5,
      },
      {
        id: 38,
        pname: "Mouse 6",
        price: 680,
        category: "Mouse",
        image: Mouse6,
      },
      {
        id: 39,
        pname: "Mouse 7",
        price: 300,
        category: "Mouse",
        image: Mouse7,
      },
      {
        id: 40,
        pname: "Mouse 8",
        price: 900,
        category: "Mouse",
        image: Mouse8,
      },
      {
        id: 41,
        pname: "Speaker 1",
        price: 900,
        category: "Speaker",
        image: Speaker1,
      },
      {
        id: 42,
        pname: "Speaker 2",
        price: 400,
        category: "Speaker",
        image: Speaker2,
      },
      {
        id: 43,
        pname: "Speaker 3",
        price: 900,
        category: "Speaker",
        image: Speaker3,
      },
      {
        id: 44,
        pname: "Speaker 1",
        price: 700,
        category: "Speaker",
        image: Speaker4,
      },
      {
        id: 45,
        pname: "Speaker 5",
        price: 750,
        category: "Speaker",
        image: Speaker5,
      },
      {
        id: 46,
        pname: "Speaker 6",
        price: 950,
        category: "Speaker",
        image: Speaker6,
      },
      {
        id: 47,
        pname: "Speaker 7",
        price: 2900,
        category: "Speaker",
        image: Speaker7,
      },
      {
        id: 48,
        pname: "Speaker 8",
        price: 1900,
        category: "Speaker",
        image: Speaker8,
      },
      {
        id: 49,
        pname: "Trimmer 1",
        price: 1200,
        category: "Trimmer",
        image: Trimmer1,
      },
      {
        id: 50,
        pname: "Trimmer 2",
        price: 1200,
        category: "Trimmer",
        image: Trimmer2,
      },
      {
        id: 51,
        pname: "Trimmer 3",
        price: 1400,
        category: "Trimmer",
        image: Trimmer3,
      },
      {
        id: 52,
        pname: "Trimmer 4",
        price: 2300,
        category: "Trimmer",
        image: Trimmer4,
      },
      {
        id: 53,
        pname: "Trimmer 5",
        price: 1700,
        category: "Trimmer",
        image: Trimmer5,
      },
      {
        id: 54,
        pname: "Trimmer 6",
        price: 1100,
        category: "Trimmer",
        image: Trimmer6,
      },
      {
        id: 55,
        pname: "Trimmer 7",
        price: 1800,
        category: "Trimmer",
        image: Trimmer7,
      },
      {
        id: 56,
        pname: "Trimmer 8",
        price: 1500,
        category: "Trimmer",
        image: Trimmer8,
      },
      {
        id: 57,
        pname: "Tv 1",
        price: 15000,
        category: "Tv",
        image: Tv1,
      },
      {
        id: 58,
        pname: "Tv 2",
        price: 18000,
        category: "Tv",
        image: Tv2,
      },
      {
        id: 59,
        pname: "Tv 3",
        price: 12000,
        category: "Tv",
        image: Tv3,
      },
      {
        id: 60,
        pname: "Tv 4",
        price: 12500,
        category: "Tv",
        image: Tv4,
      },
      {
        id: 61,
        pname: "Tv 5",
        price: 14500,
        category: "Tv",
        image: Tv5,
      },
      {
        id: 62,
        pname: "Tv 6",
        price: 13500,
        category: "Tv",
        image: Tv6,
      },
      {
        id: 63,
        pname: "Tv 7",
        price: 16500,
        category: "Tv",
        image: Tv7,
      },
      {
        id: 64,
        pname: "Tv 8",
        price: 11500,
        category: "Tv",
        image: Tv8,
      },
      {
        id: 65,
        pname: "Tv 9",
        price: 17500,
        category: "Tv",
        image: Tv9,
      },
      {
        id: 66,
        pname: "Tv 10",
        price: 11500,
        category: "Tv",
        image: Tv10,
      },
      {
        id: 67,
        pname: "Watch 1",
        price: 3000,
        category: "Watch",
        image: Watch1,
      },
      {
        id: 68,
        pname: "Watch 2",
        price: 2000,
        category: "Watch",
        image: Watch2,
      },
      {
        id: 69,
        pname: "Watch 3",
        price: 3500,
        category: "Watch",
        image: Watch3,
      },
      {
        id: 70,
        pname: "Watch 4",
        price: 3800,
        category: "Watch",
        image: Watch4,
      },
      {
        id: 71,
        pname: "Watch 5",
        price: 2800,
        category: "Watch",
        image: Watch5,
      },
      {
        id: 72,
        pname: "Watch 6",
        price: 3060,
        category: "Watch",
        image: Watch6,
      },
      {
        id: 73,
        pname: "Watch 7",
        price: 3000,
        category: "Watch",
        image: Watch7,
      },
      {
        id: 74,
        pname: "Watch 8",
        price: 2850,
        category: "Watch",
        image: Watch8,
      },
     
    
  ], filteredProducts:[]
 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState, 
  reducers: {
    filterByCategory(state, action) {
      const { categories } = action.payload;
      if (categories.length === 0) {
        state.filteredProducts = [...state.products];
      } else {
        state.filteredProducts = state.products.filter((product) =>
          categories.includes(product.category)
        );
      }
    }, 
  }
});

export const{filterByCategory}= cartSlice.actions;


export default cartSlice.reducer;
