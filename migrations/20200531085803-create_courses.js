const ObjectId = require('bson').ObjectId;

module.exports = {
  async up(db) {
    await db.collection('courses').insertMany([
  		{
  			 _id: new ObjectId("5ed9ba30524b7a5ebefe9f49"),
  			title: 'aliquet magna a neque. Nullam ut',
  			description: 'nonummy. Fusce fermentum fermentum arcu. Vestibulum',
  			imgURL: 'https://source.unsplash.com/1600x900/?work',
  			subjects: [ new ObjectId("5ed9be83aafaf27442b80d11"), new ObjectId("5ed9be83aafaf27442b80d12")],
  			// students: [0, 4],
  			students: ["5ed9ba30524b7a5ebefe9f3e", "5ed9ba30524b7a5ebefe9f42"],
  			professor: "5ed372ddb411f35b150deda2",
  		},
  		{
  			 _id: new ObjectId("5ed9ba30524b7a5ebefe9f4a"),
  			title: 'tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget',
  			description: 'Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In',
  			imgURL: 'https://source.unsplash.com/1600x900/?nature,water',
  			subjects: [ new ObjectId("5ed9be83aafaf27442b80d13"), new ObjectId( "5ed9be83aafaf27442b80d14")],
  			// students: [4],
  			students: ["5ed9ba30524b7a5ebefe9f42"],
  			professor: "5ed372ddb411f35b150deda2",
  		},
  		{
  			 _id: new ObjectId("5ed9ba30524b7a5ebefe9f4b"),
  			title: 'amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede,',
  			description: 'arcu. Aliquam ultrices iaculis odio.',
  			imgURL: 'https://source.unsplash.com/1600x900/?computer',
  			subjects: [ new ObjectId("5ed9be83aafaf27442b80d15"), new ObjectId("5ed9be83aafaf27442b80d16")],
  			// students: [7, 8],
  			students: ["5ed9ba30524b7a5ebefe9f45", "5ed9ba30524b7a5ebefe9f46"],
  			professor: "5ed372ddb411f35b150deda2",
  		},
  		{
  			 _id: new ObjectId("5ed9ba30524b7a5ebefe9f4c"),
  			title: 'tempor arcu. Vestibulum ut eros',
  			description: 'Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra',
  			imgURL: 'https://source.unsplash.com/1600x900/?bike',
  			subjects: [ new ObjectId("5ed9be83aafaf27442b80d17"), new ObjectId("5ed9be83aafaf27442b80d18")],
			// students: [9, 7],
			students: ["5ed9ba30524b7a5ebefe9f47", "5ed9ba30524b7a5ebefe9f45"],  
  			professor: "5ed372ddb411f35b150deda2",
  		},
  		{
  			 _id: new ObjectId("5ed9ba30524b7a5ebefe9f4d"),
  			title: 'non quam. Pellentesque habitant morbi',
  			description: 'elit. Curabitur sed tortor. Integer aliquam adipiscing',
  			imgURL: 'https://source.unsplash.com/1600x900/?face',
  			subjects: [],
  			// students: [0, 4, 7],
  			students: ["5ed9ba30524b7a5ebefe9f3e", "5ed9ba30524b7a5ebefe9f42", "5ed9ba30524b7a5ebefe9f45"],
  			professor: "5ed372ddb411f35b150deda2",
  		}]);
  },

  async down(db) {
    var ids = [
		new ObjectId("5ed9ba30524b7a5ebefe9f49"),
		new ObjectId("5ed9ba30524b7a5ebefe9f4a"),
		new ObjectId("5ed9ba30524b7a5ebefe9f4b"),
		new ObjectId("5ed9ba30524b7a5ebefe9f4c"),
		new ObjectId("5ed9ba30524b7a5ebefe9f4d"),
	];
    await db.collection('courses').deleteMany({ _id: { $in: ids }}, (err, obj) => {
      if(err)
        throw err;
    });
  }
};
