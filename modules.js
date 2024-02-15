const os = require('os')

// info about the current user
const user = os.userInfo()
console.log(user)

// method returesn system uptime in sec
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMen:os.freemem
}
console.log(currentOS)