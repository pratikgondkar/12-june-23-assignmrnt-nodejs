const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {
console.log(` thank you for subscrabing to ${channelName} `);
};

eventEmitter.addListener("subscribe" , subscribeMessage);
eventEmitter.emit("subscribe" , "College Wallah" );