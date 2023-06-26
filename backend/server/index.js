const express = require("express");
const { Sequelize, Model, DataTypes } = require('sequelize');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());

const sequelize = new Sequelize('jukebox', 'root', 'mysql', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

class Music extends Model { }

Music.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING
    },
    Artist: {
        type: DataTypes.STRING
    },
    Genre: {
        type: DataTypes.STRING
    }
}, {
    timestamps:false,
    sequelize,
    modelName: 'music' 
});


class Library extends Model { }

Library.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING
    },
    Artist: {
        type: DataTypes.STRING
    },
    Genre: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName : true,
    timestamps:false,
    sequelize,
    modelName: 'library'
});


(async () => {
    console.log('Model synced with the database.');
})();


app.get("/api/music", (req, res) => {
    Music.findAll({
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    })
        .then((music) => {
            res.json(music);
        })
        .catch((error) => {
            console.error('Error retrieving data:', error);
            res.status(500).json({ error: 'Error retrieving data' });
        });
});

app.get("/api/library/content", (req, res) => {
    Library.findAll({
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    })
        .then((library) => {
            res.json(library);
        })
        .catch((error) => {
            console.error('Error retrieving data:', error);
            res.status(500).json({ error: 'Error retrieving data' });
     });
});


app.post("/api/library", (req, res) => {
   const { Name, Artist, Genre } = req.body;
 
   Library.create({ Name, Artist, Genre })
     .then((library) => {
          res.status(201).json(library);
      })
       .catch((error) => {
        console.error('Error creating library entry:', error);
           res.status(500).json({ error: 'Error creating library entry' });
        });
});

app.delete("/api/library/delete/:id", (req, res) => {
    console.log(req.params)
    const { id } = req.params;

   Library.destroy({
       where: { id }
   }).then((numDeleted) => {
        if (numDeleted === 0) {
              // No matching library entry found
            res.status(404).json({ error: "Library entry not found" });
        } else {
               res.status(200).json({ success: true });
        }
        }).catch((error) => {
            console.error('Error deleting library entry:', error);
            res.status(500).json({ error: 'Error deleting library entry' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});




