const {EventEmitter} = require('events')
module.exports = class Connection {

    constructor() {
        this.emmiter = new EventEmitter();
    }

    connection(info) {
        this.emmiter.emit("connect", info)
    }

    onConn(cb) {
        this.emmiter.on("connect", cb)  
    }
    // ##BEGIN## 代码已加密
// gywgywgywgywgdqgdUgdvgdegdwgdmgd=gdqgdwgdUgdmgywgqRgqkgRd
// gywgywgywgywgywgywgywgywgdwgdkgdngdegqDgd9gRggd9gdvgdwgywgcRgywgdvgd9gRygywgcUgRggd9gdvgdwgcUgdDgdngdwgdwgd9gdmgqRgqkgc9gyw
// gywgywgywgywgRk

// gywgywgywgywgdqgdUgdvgdvgd9gdqgdwgdngdUgdvgqRgdDgdegdRgqkgywgRd
// gywgywgywgywgywgywgywgywgdwgdkgdngdegqDgd9gRggd9gdvgdwgqDgd9gdDgdngdwgqRgqdgdqgdUgdvgdvgqdgqlgdDgdegdRgqk
// gywgywgywgywgRk

// gywgywgywgywgdUgdvgcDgdUgdvgdvgqRgdqgdygqkgywgRd
// gywgywgywgywgywgywgywgywgdwgdkgdngdegqDgd9gRggd9gdvgdwgqDgdUgdvgqRgqdgdqgdUgdvgdvgqdgqlgdqgdygqk
// gywgywgywgywgRk
    // ##END##
}
