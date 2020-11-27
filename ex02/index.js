module.exports.compose = middlewares => {
    return function () {
        return dispatch(0)
        function dispatch(i) {
            let fn = middlewares[i];

            if(!fn) {
                return Promise.resolve();
            }

            return Promise.resolve(
                fn(function next() {
                    return dispatch(i + 1);
                })
            );
            // ##BEGIN## 代码已加密
// gywgywgywgywgywgywgywgywgywgywgywgywgdPgd9gdwgywgddgdvgywgcRgywgdDgdngdcgdcgdPgd9gRygdggdmgd9gdeg9Ygdng9m
// gywgywgywgywgywgywgywgywgywgywgywgywgdngddgywgqRgy=gddgdvgqkgywgRd
// gywgywgywgywgywgywgywgywgywgywgywgywgywgywgywgywgdmgd9gdwgd=gdmgdvgywg99gdmgdUgdDgdngdegd9gqDgdmgd9gdegdUgdPgRggd9gqRgqk
// gywgywgywgywgywgywgywgywgywgywgywgywgRk
// gywgywgywgywgywgywgywgywgywgywgywgywgdmgd9gdwgd=gdmgdvgywg99gdmgdUgdDgdngdegd9gqDgdmgd9gdegdUgdPgRggd9gqR
// gywgywgywgywgywgywgywgywgywgywgywgywgywgywgywgywgddgdvgqRgddgd=gdvgdqgdwgdngdUgdvgywgdvgd9gRqgdwgqRgqkgywgRd
// gywgywgywgywgywgywgywgywgywgywgywgywgywgywgywgywgywgywgywgywgdmgd9gdwgd=gdmgdvgywgdcgdngdegdYgdggdwgdqgdkgqRgdngywgqLgywgqYgqk
// gywgywgywgywgywgywgywgywgywgywgywgywgywgywgywgywgRkgqk
// gywgywgywgywgywgywgywgywgywgywgywgywgqk
            // ##END##
        }
    }
}
