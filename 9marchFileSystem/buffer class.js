//Buffer class 
var utf8String = 'my string'
var buf = Buffer.from(utf8String);
var buf = Buffer.alloc(80);
var base64String = buf.toString('base64');
console.log(base64String);
console.log(buf);
