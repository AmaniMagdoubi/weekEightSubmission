const yargs = require("yargs"); 
const { sequelize } = require("./db/connection");
const { createMovie } = require("./movie/functions"); 

const app = async (yargsObj) => {
    await sequelize.sync({ alter: true }); 
    if (yargsObj.create) {
        //add movie to db
        await createMovie({ title: yargsObj, actor: yargsObj.actor, director: yargsObj.director });

    } else if (yargsObj.read) {
        //list movies from db
        await Movie.findAll(); 

    } else if (yargsObj.update) {
        //update a movie from db
        await updateMovie({  }, {
            where: {

            }
        }); 

    } else if (yargsObj.delete) {
        //delete a movie from db
        await deleteMovie({
            where: {

            }
        }); 

    } else {
        console.log("Incorrect command"); 
    }
}; 

app(yargs.argv);