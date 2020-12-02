const Sequelize = require('sequelize');
module.exports.initModel = async sequelize => {

  // 定义模型
  const Product = sequelize.define('Product', {
    title: {type: Sequelize.STRING(20), allowNull: false},
    UserId: {type: Sequelize.STRING(20), allowNull: false}, // 这句不需要，只是因为不知道哪里去删除sqlite3数据库，之前建立一个字段UserId不知如何删除
  })

  const User = sequelize.define('User', {
    name: {type: Sequelize.STRING(20), allowNull: false},
  })

  await Product.sync()
  await User.sync()
  User.hasMany(Product);
  Product.belongsTo(User); // 用户-产品  1:N关系建立


  // ##BEGIN## 代码已加密
// gywgywg9Lgdegd9gdmgywgcRgywgdegd9gdHgd=gd9gdPgdngR9gd9gqDgdcgd9gddgdngdvgd9gqRgqdgd=gdegd9gdmgqdgqlgywgRd
// gywgywgywgywgdngdcgccgywgRd
// gywgywgywgywgywgywgdwgRcgdYgd9gccgywg9kgd9gdHgd=gd9gdPgdngR9gd9gqDgceg9qg9ngcUgcHgcUg9Rgql
// gywgywgywgywgywgywgdggd=gdwgdUgcegdvgdqgdmgd9gdDgd9gdvgdwgccgywgdwgdmgd=gd9gql
// gywgywgywgywgywgywgdggdPgdPgdUgRyg9qgd=gdPgdPgccgywgddgdggdPgdegd9gql
// gywgywgywgywgywgywgdYgdmgdngdDgdggdmgRcgc=gd9gRcgccgywgdwgdmgd=gd9
// gywgywgywgywgRkgql
// gywgywgywgywgdvgdggdDgd9gccgywg9kgd9gdHgd=gd9gdPgdngR9gd9gqDg9kg9ng9Rgceg9qgcH
// gywgywgRkgqkgc9

// gywgywg99gdmgdUgdcgd=gdqgdwgywgcRgywgdegd9gdHgd=gd9gdPgdngR9gd9gqDgdcgd9gddgdngdvgd9gqRgqdgdYgdmgdUgdcgd=gdqgdwgqdgqlgywgRd
// gywgywgywgywgdngdcgccgywgRd
// gywgywgywgywgywgywgdwgRcgdYgd9gccgywg9kgd9gdHgd=gd9gdPgdngR9gd9gqDgceg9qg9ngcUgcHgcUg9Rgql
// gywgywgywgywgywgywgdggd=gdwgdUgcegdvgdqgdmgd9gdDgd9gdvgdwgccgywgdwgdmgd=gd9gql
// gywgywgywgywgywgywgdggdPgdPgdUgRyg9qgd=gdPgdPgccgywgddgdggdPgdegd9gql
// gywgywgywgywgywgywgdYgdmgdngdDgdggdmgRcgc=gd9gRcgccgywgdwgdmgd=gd9
// gywgywgywgywgRkgql
// gywgywgywgywgdwgdngdwgdPgd9gccgywgRd
// gywgywgywgywgywgywgdwgRcgdYgd9gccgywg9kgd9gdHgd=gd9gdPgdngR9gd9gqDg9kg9ng9Rgceg9qgcHgql
// gywgywgywgywgywgywgdggdPgdPgdUgRyg9qgd=gdPgdPgccgywgddgdggdPgdegd9
// gywgywgywgywgRkgql
// gywgywgRkgqkgc9
// gywgywg99gdmgdUgdcgd=gdqgdwgqDgdygd9gdPgdUgdvgdRgdeg9ngdUgqRg9Lgdegd9gdmgqlgywgRd
// gywgywgywgywgdqgdUgdvgdegdwgdmgdggdngdvgdwgdegccgywgdwgdmgd=gd9gql
// gywgywgywgywgdUgdvgcvgd9gdPgd9gdwgd9gccgywgqdgcDgclg9kgcDgclgcvgcUgqd
// gywgywgRkgqkgc9
// gywgywg9Lgdegd9gdmgqDgdkgdggdeg9ygdggdvgRcgqRg99gdmgdUgdcgd=gdqgdwgqkgc9
// gywgywgdggRygdggdngdwgywgdegd9gdHgd=gd9gdPgdngR9gd9gqDgdegRcgdvgdqgqRgdwgdmgd=gd9gqk
  // ##END##
  return { User, Product }
} 
