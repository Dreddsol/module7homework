const user = {
	фамилия: 'Russkih',
	имя: 'Alexei'
	
}; 
function myName(user) {
	for (let prop in user) {
		
		 if (user.hasOwnProperty(prop)) {

			console.log(`${prop}: ${user[prop]}`) 
		}   
	 
	}
	
}
myName(user);