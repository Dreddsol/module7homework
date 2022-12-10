function ElectricalAppliance(name) {
	this.device = 'household electrical appliance',
	this.name = name
}
ElectricalAppliance.prototype.getPowerConsumption = function (power, t, on) {
	let turnOn = on;
	if(on === 1){
		turnOn = 'Вкл';
	}else{
		turnOn = 'Выкл';
	};
	console.log(`Расход эл. энергии ${this.name} за ${t} час. = ${power * t}Вт. ${this.name}: ${turnOn}`);
};
function Characteristic(name, color) {
	this.name = name,
	this.color = color
}
Characteristic.prototype = new ElectricalAppliance();

const toaster = new Characteristic ('toaster', 'black');
const teapot = new Characteristic ('teapot', 'white');
const mixer = new Characteristic ('mixer', 'silver');

console.log(toaster, teapot, mixer);
toaster.getPowerConsumption(900, 4, 1);
teapot.getPowerConsumption(1100, 6, 2);
mixer.getPowerConsumption(500, 5, 1);