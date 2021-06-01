let events = require('events');

let myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(msg){
    console.log(msg);
})

myEmitter.emit('someEvent', "The event was emitted");
