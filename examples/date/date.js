let then = new Date(2010, 0, 1); // The 1° day of 1° month of 2010
let later = new Date(2010, 0, 1, 17, 10, 30); // The same day, 5:10:30 afternoon, local hour.

let now = new Date(); // Date and hour actual
let elapsed = now - then; // Subctration of Date

later.getFullYear(); // 2010
later.getMonth(); // 0
later.getDate(); // 1
later.getDay(); // 5
later.getHours(); // 17
later.getUTCHours(); // Hour em UTC
later.toString(); // "Fri, 01 Jan 2010 19:10:30 GMT"
later.toUTCString(); // "Fri, 01 Jan 2010 19:10:30 GMT"
later.toLocaleDateString(); // "01/01/2010"
later.toLocaleTimeString(); // "05:10:30 PM"
later.toISOString(); // "2010-01-02T01:10:000Z"
