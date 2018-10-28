import WeaponIF from "./WeaponIF";

class Rod implements WeaponIF {
  
  public attackWithWeapon() {
    console.log("attack with Rod");
  }
}
export default Rod;

