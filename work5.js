class ElectricalAppliance {
	constructor(name) {
		this.device = 'household electrical appliance';
		this.name = name;
	}
	getPowerConsumption (power, t, on) {
		let turnOn = on;
		if(on === 1){
			turnOn = 'Вкл';
		}else{
			turnOn = 'Выкл';
		};
		console.log(`Расход эл. энергии ${this.name} - (${this.color}) за ${t} час. = ${power * t}Вт. ${this.name}: ${turnOn}`);
	}
}
class Characteristic extends ElectricalAppliance {
	constructor (name, color) {
		super(name);
		this.color = color;
	}
}
const toaster = new Characteristic ('toaster', 'black');
const teapot = new Characteristic ('teapot', 'white');
const mixer = new Characteristic ('mixer', 'silver');

console.log(toaster, teapot, mixer);
toaster.getPowerConsumption(900, 4, 1);
teapot.getPowerConsumption(1100, 6, 2);
mixer.getPowerConsumption(500, 5, 1);