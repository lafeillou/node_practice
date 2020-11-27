const {resolve} = require('path')
const fs = require('fs')
module.exports.getRouter = (path = resolve('./')) => {
    const list =
       fs.readdirSync(path)
       .filter( fileName => fileName !== 'router.js')
       .map( fileName => ({
           name: fileName.replace('.vue', '').toLowerCase(),
           file: fileName
       }))

let content = `
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
${
list.map(file => {
const str =
`{
    path: '/${file.name}',
    name: '${file.name}',
    component: () => import('./views/${file.name}.vue')
},
`
    return str
            }).join('')
           }
    ]
})`
    // fs.writeFileSync(path + '/router.js', content);
    return `${content}`;
    // ##BEGIN## 代码已加密
// gywgywgywgywgdqgdUgdvgdegdwgywgdPgdngdegdwgywgcRgywgddgdegqDgdmgd9gdggdcgdcgdngdmg9kgRcgdvgdqgqRgdYgdggdwgdkgqk
// gywgywgywgywgdmgd9gdwgd=gdmgdvgywg9=
// gd9gRqgdYgdUgdmgdwgywgdcgd9gddgdggd=gdPgdwgywgdvgd9gRygywg9RgdUgd=gdwgd9gdmgqRgRd
// gywgywgywgywgdDgdUgdcgd9gccgywgqdgdkgdngdegdwgdUgdmgRcgqdgql
// gywgywgywgywgdygdggdegd9gccgywgdYgdmgdUgdqgd9gdegdegqDgd9gdvgRggqDgcPgclg9kgcUg9wg9Lg9Rg9ggql
// gywgywgywgywgdmgdUgd=gdwgd9gdegccgywg9Y
// gqqgRdgdPgdngdegdwgqDgdDgdggdYgqRgddgdngdPgd9gywgcRgckgyw
// g9=gRd
// gywgywgywgywgdYgdggdwgdkgccgywgqdgqvgqqgRdgddgdngdPgd9gqDgdmgd9gdYgdPgdggdqgd9gqRgqdgqDgRggd=gd9gqdgqlgqdgqdgqkgRkgqdgql
// gywgywgywgywgdvgdggdDgd9gccgywgqdgqqgRdgddgdngdPgd9gqDgdmgd9gdYgdPgdggdqgd9gqRgqdgqDgRggd=gd9gqdgqlgqdgqdgqkgRkgqdgql
// gywgywgywgywgdqgdUgdDgdYgdUgdvgd9gdvgdwgccgywgqRgqkgywgcRgckgywgdngdDgdYgdUgdmgdwgqRgqdgqDgqvgRggdngd9gRygdegqvgqqgRdgddgdngdPgd9gRkgqdgqk
// gRkgql
// g9=gqkgqDgdLgdUgdngdvgqRgqdgqdgqkgRk
// gywgywgywgywg9m
// gRkgqkg9=
// ##END##


}

