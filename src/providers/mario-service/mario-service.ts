import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

export interface MkItem {
  name: string,
  image: string,
  itemType: string
}

@Injectable()
export class MarioServiceProvider {

  constructor() {
    console.log('Hello MarioServiceProvider Provider');
  }

  // Static data below
  allCharacters(): MkItem[] {
    return [
      { itemType: 's', name: 'Toad', image: '32px-MK8_Toad_Icon.png' },
      { itemType: 's', name: 'Koopa', image: '32px-MK8_Koopa_Icon.png' },
      { itemType: 's', name: 'ShyGuy', image: '32px-MK8_ShyGuy_Icon.png' },
      { itemType: 's', name: 'Lakitu', image: '32px-MK8_Lakitu_Icon.png' },
      { itemType: 's', name: 'Toadette', image: '32px-MK8_Toadette_Icon.png' },
      { itemType: 's', name: 'Baby Mario', image: '32px-MK8_BabyMario_Icon.png' },
      { itemType: 's', name: 'Baby Luigi', image: '32px-MK8_BabyLuigi_Icon.png' },
      { itemType: 's', name: 'Baby Peach', image: '32px-MK8_BabyPeach_Icon.png' },
      { itemType: 's', name: 'Baby Daisy', image: '32px-MK8_BabyDaisy_Icon.png' },
      { itemType: 's', name: 'Baby Rosalina', image: '32px-MK8_BabyRosalina_Icon.png' },
      { itemType: 's', name: 'Lemmy', image: '32px-MK8_Lemmy_Icon.png' },
      { itemType: 's', name: 'Larry', image: '32px-MK8_Larry_Icon.png' },
      { itemType: 's', name: 'Wendy', image: '32px-MK8_Wendy_Icon.png' },
      { itemType: 's', name: 'Isabelle', image: '32px-MK8_Isabelle_Icon.png' },
      { itemType: 'm', name: 'Mario', image: '32px-MK8_Mario_Icon.png' },
      { itemType: 'm', name: 'Luigi', image: '32px-MK8_Luigi_Icon.png' },
      { itemType: 'm', name: 'Peach', image: '32px-MK8_Peach_Icon.png' },
      { itemType: 'm', name: 'Daisy', image: '32px-MK8_Daisy_Icon.png' },
      { itemType: 'm', name: 'Metal Mario', image: '32px-MK8_MMario_Icon.png' },
      { itemType: 'm', name: 'Yoshi', image: '32px-MK8_Yoshi_Icon.png' },
      { itemType: 'm', name: 'Pink Gold Peach', image: '32px-MK8_PGPeach_Icon.png' },
      { itemType: 'm', name: 'Iggy', image: '32px-MK8_Iggy_Icon.png' },
      { itemType: 'm', name: 'Ludwig', image: '32px-MK8_Ludwig_Icon.png' },
      { itemType: 'm', name: 'Tanooki Mario', image: '32px-MK8_Tanooki_Mario_Icon.png' },
      { itemType: 'm', name: 'Cat Peach', image: '32px-MK8_Cat_Peach_Icon.png' },
      { itemType: 'm', name: 'Villager', image: '50px-MK8_Villager_Icon.png' },
      { itemType: 'l', name: 'Rosalina', image: '32px-MK8_Rosalina_Icon.png' },
      { itemType: 'l', name: 'Bowser', image: '32px-MK8_Bowser_Icon.png' },
      { itemType: 'l', name: 'Donkey Kong', image: '32px-MK8_DKong_Icon.png' },
      { itemType: 'l', name: 'Wario', image: '32px-MK8_Wario_Icon.png' },
      { itemType: 'l', name: 'Waluigi', image: '32px-MK8_Waluigi_Icon.png' },
      { itemType: 'l', name: 'Roy', image: '32px-MK8_Roy_Icon.png' },
      { itemType: 'l', name: 'Morton', image: '32px-MK8_Morton_Icon.png' },
      { itemType: 'l', name: 'Link', image: '32px-MK8_Link_Icon.png' },
      { itemType: 'l', name: 'Dry Bowser', image: '32px-MK8_Dry_Bowser_Icon.png' },
      { itemType: '', name: 'Mii', image: '32px-Mii_MK8.png' }
    ];
  }

  allVehicles(): MkItem[] {
    return [
      { itemType: 'k', name: 'Standard Kart', image: '100px-StandardKartBodyMK8.png' },
      { itemType: 'k', name: 'Pipe Frame', image: '100px-PipeFrameBodyMK8.png' },
      { itemType: 'k', name: 'Mach 8', image: '100px-Mach8BodyMK8.png' },
      { itemType: 'k', name: 'Steel Driver', image: '100px-Steel_Driver.png' },
      { itemType: 'k', name: 'Cat Cruiser', image: '100px-CatCruiserBodyMK8.png' },
      { itemType: 'k', name: 'Circuit Special', image: '100px-CircuitSpecialBodyMK8.png' },
      { itemType: 'k', name: 'Tri-Speeder', image: '100px-TrispeederBodyMK8.png' },
      { itemType: 'k', name: 'Badwagon', image: '100px-BadwagonBodyMK8.png' },
      { itemType: 'k', name: 'Prancer', image: '100px-PrancerBodyMK8.png' },
      { itemType: 'k', name: 'Biddybuggy', image: '100px-BiddybuggyBodyMK8.png' },
      { itemType: 'k', name: 'Landship', image: '100px-LandshipBodyMK8.png' },
      { itemType: 'k', name: 'Sneeker', image: '100px-SneakerBodyMK8.png' },
      { itemType: 'k', name: 'Sports Coupe', image: '100px-SportsCoupeMK8.png' },
      { itemType: 'k', name: 'Gold Standard', image: '100px-Gold_Standard.png' },
      { itemType: 'k', name: 'GLA ', image: '100px-GLA-MK8.png' },
      { itemType: 'k', name: 'Silver Arrow ', image: '100px-W25SilverArrow-MK8.png' },
      { itemType: 'k', name: '300 SL Roadster', image: '100px-300SLRoadster-MK8.png' },
      { itemType: 'k', name: 'Blue Falcon', image: '100px-MK8BlueFalcon.png' },
      { itemType: 'k', name: 'Tanooki Kart', image: '100px-Tanooki-Buggy.png' },
      { itemType: 'k', name: 'B Dasher', image: '100px-ZeldaMK8Bdasher.png' },
      { itemType: 'k', name: 'Streetle', image: '100px-MK8Streetle.png' },
      { itemType: 'k', name: 'P-Wing', image: '100px-MK8PWing.png' },
      { itemType: 'b', name: 'Standard Bike', image: '100px-StandardBikeBodyMK8.png' },
      { itemType: 'b', name: 'Comet', image: '100px-CometBodyMK8.png' },
      { itemType: 'b', name: 'Sport Bike', image: '100px-SportBikeBodyMK8.png' },
      { itemType: 'b', name: 'The Duke', image: '100px-TheDukeBodyMK8.png' },
      { itemType: 'b', name: 'Flame Rider', image: '100px-FlameRiderBodyMK8.png' },
      { itemType: 'b', name: 'Varmint', image: '100px-VarmintBodyMK8.png' },
      { itemType: 'b', name: 'Mr. Scooty', image: '100px-MrScootyBodyMK8.png' },
      { itemType: 'b', name: 'Jet Bike', image: '100px-JetBikeBodyMK8.png' },
      { itemType: 'b', name: 'Yoshi Bike', image: '100px-YoshiBikeBodyMK8.png' },
      { itemType: 'b', name: 'Master Cycle', image: '100px-MK8MasterCycle.png' },
      { itemType: 'b', name: 'City Tripper', image: '100px-MK8CityTripper.png' },
      { itemType: 'a', name: 'Standard ATV', image: '100px-StandardATVBodyMK8.png' },
      { itemType: 'a', name: 'Wild Wiggler', image: '100px-WildWigglerBodyMK8.png' },
      { itemType: 'a', name: 'Teddy Buggy', image: '100px-TeddyBuggyBodyMK8.png' },
      { itemType: 'a', name: 'Bone Rattler', image: '100px-MK8BoneRattler.png' }
    ];
  }

  allTires(): MkItem[] {
    return [
      { itemType: '', name: 'Standard', image: '100px-StandardTiresMK8.png' },
      { itemType: '', name: 'Monster', image: '100px-MonsterTiresMK8.png' },
      { itemType: '', name: 'Roller', image: '100px-RollerTiresMK8.png' },
      { itemType: '', name: 'Slim', image: '100px-SlimTiresMK8.png' },
      { itemType: '', name: 'Slick', image: '100px-SlickTiresMK8.png' },
      { itemType: '', name: 'Metal', image: '100px-MetalTiresMK8.png' },
      { itemType: '', name: 'Button', image: '100px-ButtonTiresMK8.png' },
      { itemType: '', name: 'Off-Road', image: '100px-Off-Road.png' },
      { itemType: '', name: 'Sponge', image: '100px-SpongeTiresMK8.png' },
      { itemType: '', name: 'Wooden', image: '100px-WoodTiresMK8.png' },
      { itemType: '', name: 'Cushion', image: '100px-CushionTiresMK8.png' },
      { itemType: '', name: 'Blue Standard', image: '100px-Blue_Standard.png' },
      { itemType: '', name: 'Hot Monster', image: '100px-HotMonsterTiresMK8.png' },
      { itemType: '', name: 'Azure Roller', image: '100px-AzureRollerTiresMK8.png' },
      { itemType: '', name: 'Crimson Slim', image: '100px-CrimsonSlimTiresMK8.png' },
      { itemType: '', name: 'Cyber Slick', image: '100px-CyberSlickTiresMK8.png' },
      { itemType: '', name: 'Retro Off-Road', image: '100px-Retro_Off-Road.png' },
      { itemType: '', name: 'Gold Standard', image: '100px-Gold_Tires_MK8.png' },
      { itemType: '', name: 'GLA Tires', image: '100px-GLATires-MK8.png' },
      { itemType: '', name: 'Triforce Tires', image: 'MK8-TriforceTires.png' },
      { itemType: '', name: 'Leaf Tires', image: '100px-Leaf_Tires_MK8.png' }
    ];
  }

  allWings(): MkItem[] {
    return [
      {
        image: 'SuperGliderMK8.png',
        itemType: '', 
        name: 'Super Glider'
      },
      {
        image: 'Cloud_Glider.png',
        itemType: '', 
        name: 'Cloud Glider'
      },
      {
        image: 'WarioWingMK8.png',
        itemType: '', 
        name: 'Wario Wing'
      },
      {
        image: 'WaddleWingMK8.png',
        itemType: '', 
        name: 'Waddle Wing'
      },
      {
        image: 'PeachParasolGliderMK8.png',
        itemType: '', 
        name: 'Peach Parasol'
      },
      {
        image: 'ParachuteGliderMK8.png',
        itemType: '', 
        name: 'Parachute'
      },
      {
        image: 'ParafoilGliderMK8.png',
        itemType: '', 
        name: 'Parafoil'
      },
      {
        image: 'FlowerGliderMK8.png',
        itemType: '', 
        name: 'Flower Glider'
      },
      {
        image: 'BowserKiteMK8.png',
        itemType: '', 
        name: 'Bowser Kite'
      },
      {
        image: 'PlaneGliderMK8.png',
        itemType: '', 
        name: 'Plane Glider'
      },
      {
        image: 'MKTVParafoilGliderMK8.png',
        itemType: '', 
        name: 'MKTV Parafoil'
      },
      {
        image: 'GoldGliderMK8.png',
        itemType: '', 
        name: 'Gold Glider'
      },
      {
        image: 'MK8-HylianKite.png',
        itemType: '', 
        name: 'Hylian Kite'
      },
      {
        image: 'PaperGliderIconMK8.png',
        itemType: '', 
        name: 'Paper Glider'
      }
    ];
  }
}
