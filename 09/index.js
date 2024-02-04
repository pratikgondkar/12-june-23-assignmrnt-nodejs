const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {
console.log(` thank you for subscrabing to ${channelName} `);
};

eventEmitter.addListener("subscribe" , subscribeMessage);
console.log('Calling event listner before removing the event.');

eventEmitter.emit("subscribe" , "College Wallah" );
console.log('calling event listner afther removing the event.');

eventEmitter.removeListener('subscribe' , subscribeMessage);
eventEmitter.emit("subscribe" , "College Wallah");