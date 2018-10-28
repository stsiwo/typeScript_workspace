import WeaponIF from "./WeaponIF";

class Dagger implements WeaponIF {
  
  public attackWithWeapon() {
    console.log("attack with Dagger");
  }
}
export default Dagger;


