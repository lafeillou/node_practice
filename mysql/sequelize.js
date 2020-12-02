(async () => {
    const Sequelize = require('sequelize')

    // 建立链接
    const sequelize = new Sequelize('KKB', 'root', 'mc000306', {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false
    })

    // 定义模型
    const Fruit = sequelize.define('Fruit', {
        name: {type: Sequelize.STRING(20), allowNull: false},
        price: {type: Sequelize.FLOAT, allowNull: false},
        stock: {type: Sequelize.INTEGER, defaultValue: 0}
    })

    let ret = await Fruit.sync()

    ret = await Fruit.create({
        name: '香蕉',
        price: 3.5
    })

    console.log('create', ret)

    const Op = Sequelize.Op;
    ret = await Fruit.findAll({
        where: {
            price: {[Op.lt]: 4, [Op.gt]:2}
        }
    });

    console.log('findAll', ret)
})()