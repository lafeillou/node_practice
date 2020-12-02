// nodejs第三次作业: 二分查找
const fs = require('fs')
module.exports.parser = path => {
    const readStream = fs.createReadStream(path)
    let reqData = [];
    let size = 0;
    return new Promise((resolve,reject) => {
        // 设置编码为 utf8。
        readStream.setEncoding('UTF8');
        readStream.on('data', function(chunk) {
            if(typeof chunk != 'Buffer') {
                chunk = Buffer.from(chunk);
            }
            reqData.push(chunk);
            size += chunk.length;
            const data = Buffer.concat(reqData, size)
            resolve(JSON.parse(data))
        })

        readStream.on('end', function() {
            let data = Buffer.concat(reqData, size)
            resolve(JSON.parse(data))
        });

        readStream.on('error',function(err) {
            reject(err.stack)
        });
         // ##BEGIN## 代码已加密
// gywgywgywgywgywgywgywgywgdmgd9gdggdcg9kgdwgdmgd9gdggdDgqDgdUgdvgqRgqdgdcgdggdwgdggqdgqlgywgdcgdggdwgdggywgcRgckgywgRd
// gywgywgywgywgywgywgywgywgywgywgywgywgdmgd9gdHgcvgdggdwgdggqDgdYgd=gdegdkgqRgdcgdggdwgdggqkgc9
// gywgywgywgywgywgywgywgywgywgywgywgywgdegdngR9gd9gywgqLgcRgywgdcgdggdwgdggqDgdPgd9gdvgdRgdwgdkgc9
// gywgywgywgywgywgywgywgywgRkgqkgc9
// gywgywgywgywgywgywgywgywgdmgd9gdggdcg9kgdwgdmgd9gdggdDgqDgdUgdvgqRgqdgd9gdvgdcgqdgqlgywgddgd=gdvgdqgdwgdngdUgdvgywgqRgqkgywgRd
// gywgywgywgywgywgywgywgywgywgywgywgywgdqgdUgdvgdegdwgywgdcgdggdwgdggywgcRgywgcPgd=gddgddgd9gdmgqDgdqgdUgdvgdqgdggdwgqRgdmgd9gdHgcvgdggdwgdggqlgywgdegdngR9gd9gqkgc9
// gywgywgywgywgywgywgywgywgywgywgywgywgdmgd9gdegdUgdPgRggd9gqRgcwg9kg9cg9qgqDgdYgdggdmgdegd9gqRgdcgdggdwgdggqDgdwgdUg9kgdwgdmgdngdvgdRgqRgqkgqkgqk
// gywgywgywgywgywgywgywgywgRkgqkgc9
         // ##END##
    })
}
