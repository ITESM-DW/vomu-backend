const ObjectId = require('bson').ObjectId;

module.exports = {
	async up(db) {
		await db.collection('courses').insertMany([
			{
				_id: new ObjectId('5ed9ba30524b7a5ebefe9f49'),
				title: 'aliquet magna a neque. Nullam ut',
				description: 'nonummy. Fusce fermentum fermentum arcu. Vestibulum',
				imgURL: 'https://source.unsplash.com/1600x900/?work',
				subjects: [{
					_id: new ObjectId('5ed9be83aafaf27442b80d11'),
					title: 'aliquet magna a neque. Nullam ut',
					description: 'nonummy. Fusce fermentum fermentum arcu. Vestibulum',
					videoURL: 'Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien',
				},
				{
					_id: new ObjectId('5ed9be83aafaf27442b80d12'),
					title: 'taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris',
					description: 'In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac',
					videoURL: 'https://youtu.be/fe3Vr8Pz-DM',
				}],
				// students: [0, 4],
				students: [
					new ObjectId('5ed9ba30524b7a5ebefe9f3e'),
					new ObjectId('5ed9ba30524b7a5ebefe9f42')
				],
				professor: new ObjectId('5ed372ddb411f35b150deda2'),
			},
			{
				_id: new ObjectId('5ed9ba30524b7a5ebefe9f4a'),
				title: 'tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget',
				description: 'Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In',
				imgURL: 'https://source.unsplash.com/1600x900/?nature,water',
				subjects: [{
					_id: new ObjectId('5ed9be83aafaf27442b80d13'),
					title: 'eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas',
					description: 'enim mi tempor lorem, eget mollis lectus pede et risus.',
					videoURL: 'https://youtu.be/ZusYJm5xHkg',
				},
				{
					_id: new ObjectId('5ed9be83aafaf27442b80d14'),
					title: 'In condimentum. Donec at arcu.',
					description: 'vitae, aliquet nec, imperdiet nec, leo. Morbi neque',
					videoURL: 'https://youtu.be/r2vk4B5-8Bs'
				}],
				// students: [4],
				students: [new ObjectId('5ed9ba30524b7a5ebefe9f3e')],
				professor: new ObjectId('5ed9ba30524b7a5ebefe9f42'),
			},
			{
				_id: new ObjectId('5ed9ba30524b7a5ebefe9f4b'),
				title: 'amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede,',
				description: 'arcu. Aliquam ultrices iaculis odio.',
				imgURL: 'https://source.unsplash.com/1600x900/?computer',
				subjects: [{
					_id: new ObjectId('5ed9ba30524b7a5ebefe9f4b'),
					title: 'feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam',
					description: 'faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis',
					videoURL: 'https://youtu.be/IFe6ag34eMg'
				},
				{
					_id: new ObjectId('5ed9be83aafaf27442b80d16'),
					title: 'sagittis semper. Nam tempor diam dictum sapien.',
					description: 'ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula.',
					videoURL: 'https://youtu.be/vrpof_QQUe0'
				}],
				// students: [7, 8],
				students: [
					new ObjectId('5ed9ba30524b7a5ebefe9f45'),
					new ObjectId('5ed9ba30524b7a5ebefe9f46')
				],
				professor: new ObjectId('5ed372ddb411f35b150deda2'),
			},
			{
				_id: new ObjectId('5ed9ba30524b7a5ebefe9f4c'),
				title: 'tempor arcu. Vestibulum ut eros',
				description: 'Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra',
				imgURL: 'https://source.unsplash.com/1600x900/?bike',
				subjects: [{
					_id: new ObjectId('5ed9be83aafaf27442b80d17'),
					title: 'sagittis semper. Nam tempor diam dictum sapien.',
					description: 'ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula.',
					videoURL: 'https://youtu.be/vrpof_QQUe0'
				},
				{
					_id: new ObjectId('5ed9be83aafaf27442b80d18'),
					title: 'eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas',
					description: 'enim mi tempor lorem, eget mollis lectus pede et risus.',
					videoURL: 'https://youtu.be/ZusYJm5xHkg'
				}],
				// students: [9, 7],
				students: [
					new ObjectId('5ed9ba30524b7a5ebefe9f47'),
					new ObjectId('5ed9ba30524b7a5ebefe9f45')
				],
				professor: new ObjectId('5ed372ddb411f35b150deda2'),
			},
			{
				_id: new ObjectId('5ed9ba30524b7a5ebefe9f4d'),
				title: 'non quam. Pellentesque habitant morbi',
				description: 'elit. Curabitur sed tortor. Integer aliquam adipiscing',
				imgURL: 'https://source.unsplash.com/1600x900/?face',
				subjects: [],
				// students: [0, 4, 7],
				students: [],
				professor: new ObjectId('5ed372ddb411f35b150deda2'),
			}]);
	},

	async down(db) {
		var ids = [
			new ObjectId('5ed9ba30524b7a5ebefe9f49'),
			new ObjectId('5ed9ba30524b7a5ebefe9f4a'),
			new ObjectId('5ed9ba30524b7a5ebefe9f4b'),
			new ObjectId('5ed9ba30524b7a5ebefe9f4c'),
			new ObjectId('5ed9ba30524b7a5ebefe9f4d'),
		];
		await db.collection('courses').deleteMany({ _id: { $in: ids } }, (err, obj) => {
			if (err)
				throw err;
		});
	}
};
