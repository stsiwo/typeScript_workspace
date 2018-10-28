import WeaponIF from "./WeaponIF";

class Sword implements WeaponIF {
  
  public attackWithWeapon() {
    console.log("attack with Sword");
  }
}
export default Sword;
