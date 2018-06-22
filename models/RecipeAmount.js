module.exports = function (sequelize, DataTypes) {
    const RecipeAmount = sequelize.define("RecipeAmount", {
        Amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Size: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 2],
                isIn: [['sm', 'md', 'lg']]
            }
        },
        //Smoothie, or Acai Bowl, etc.
        Type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50],
                isIn: [[ 'Classic Smoothies', 'Light Smoothies', 'Meal Replacements', 'teas and coffee', 'shots']]
            }
        }
    });
    RecipeAmount.associate = function (models) {
        RecipeAmount.belongsTo(models.Ingredient);
    };

    return RecipeAmount;
};

