'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  courses.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        unique(value) {
          
          return courses.findOne({where:{title:value}})
            .then((title) => {
              if (title) {
                throw new Error('Error hay mas de un curso con ese nombre');
              }
            })
        },
        notNull:{
          args: true,
          msg: 'title debe estar presente',
        },
        notEmpty:{
          args: true,
          msg: 'title no debe ser vacio',
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false, 
      notNull:{
        args: true,
        msg: 'description debe estar presente',
      },
      notEmpty:{
        args: true,
        msg: 'description no debe ser vacio',
      }
    },
    //WEEKS
    weeks: {
      type: DataTypes.INTEGER,
      validate:{
        isInt:{
          args: true,
          msg: 'weeks no es valida'
        }
        

    }
  },
  //ENROLLCOST
  enroll_cost: {
    type: DataTypes.FLOAT,
    validate: {
    isNumeric: {
        args: true,
        msg: 'enroll_cost debe ser numerico'
      }
    }
  },
  //MINIMUM SKILLS
  minimum_skill: {
    type: DataTypes.STRING,
    validate: {
    isInt: {
      args: true,
      msg: 'minimum skill debe ser entero'
    }
  }
},
  //LLAVES FORANEAS
  bootcamp_id: {
    type: DataTypes.INTEGER
}

},{
    sequelize,
    timestamps:  false,
    modelName: 'courses',
  });
  return courses;
};