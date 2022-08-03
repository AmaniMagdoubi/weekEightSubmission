const yargs = require("yargs"); 
const { sequelize } = require("./db/connection");
const { createMovie } = require("./movie/functions"); 

const app = async (yargsObj) => {
    await sequelize.sync({ alter: true }); 
    if (yargsObj.create) {
        //add movie to db
        await createMovie({ title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director });

    } else if (yargsObj.read) {
        //list movies from db
        await Movie.findAll(); 

    } else if (yargsObj.update) {
        //update a movie from db
        await updateMovie({ actor: yargsObj.actor }, {
            where: {
                actor: yargsObj.newActor,
            }
        }); 

    } else if (yargsObj.destroy) {
        //delete a movie from db
        await deleteMovie({
            where: {
                director: null,
            }
        }); 

    } else {
        console.log("Incorrect command"); 
    }
}; 

app(yargs.argv);