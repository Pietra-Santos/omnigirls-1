import Sequelize, { Model } from 'sequelize';

class Store extends Model {

    static init(sequelize) {
        super.init({
            company_name: Sequelize.STRING,
            adress: Sequelize.STRING,
        },
            {
                sequelize,
            });
        return this;
    }
}

export default Store;