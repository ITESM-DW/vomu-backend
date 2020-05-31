module.exports = {
  async up(db) {
    await db.collection('courses').insertMany([
  		{
  			id: 1,
  			title: 'aliquet magna a neque. Nullam ut',
  			description: 'nonummy. Fusce fermentum fermentum arcu. Vestibulum',
  			imgURL: 'https://source.unsplash.com/1600x900/?work',
  			subjects: [
  				{
  					id: 1,
  					title: 'arcu et pede. Nunc sed',
  					description: 'sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras',
  					videoURL: 'Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien'
  				},
  				{
  					id: 2,
  					title: 'taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris',
  					description: 'In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac',
  					videoURL: 'https://youtu.be/fe3Vr8Pz-DM'
  				}
  			],
  			students: [0, 4],
  			professor: 1,
  		},
  		{
  			id: 2,
  			title: 'tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget',
  			description: 'Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In',
  			imgURL: 'https://source.unsplash.com/1600x900/?nature,water',
  			subjects: [
  			{
  				id: 1,
  				title: 'eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas',
  				description: 'enim mi tempor lorem, eget mollis lectus pede et risus.',
  				videoURL: 'https://youtu.be/ZusYJm5xHkg'
  			},
  			{
  				id: 2,
  				title: 'In condimentum. Donec at arcu.',
  				description: 'vitae, aliquet nec, imperdiet nec, leo. Morbi neque',
  				videoURL: 'https://youtu.be/r2vk4B5-8Bs'
  			}
  			],
  			students: [4],
  			professor: 2,
  		},
  		{
  			id: 3,
  			title: 'amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede,',
  			description: 'arcu. Aliquam ultrices iaculis odio.',
  			imgURL: 'https://source.unsplash.com/1600x900/?computer',
  			subjects: [
  				{
  					id: 1,
  					title: 'feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam',
  					description: 'faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis',
  					videoURL: 'https://youtu.be/IFe6ag34eMg'
  				},
  				{
  					id: 2,
  					title: 'sagittis semper. Nam tempor diam dictum sapien.',
  					description: 'ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula.',
  					videoURL: 'https://youtu.be/vrpof_QQUe0'
  				}
  			],
  			students: [7, 8],
  			professor: 3,
  		},
  		{
  			id: 4,
  			title: 'tempor arcu. Vestibulum ut eros',
  			description: 'Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra',
  			imgURL: 'https://source.unsplash.com/1600x900/?bike',
  			subjects: [
  			{
  				id: 1,
  				title: 'sagittis semper. Nam tempor diam dictum sapien.',
  				description: 'ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula.',
  				videoURL: 'https://youtu.be/vrpof_QQUe0'
  			},
  			{
  				id: 2,
  				title: 'eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas',
  				description: 'enim mi tempor lorem, eget mollis lectus pede et risus.',
  				videoURL: 'https://youtu.be/ZusYJm5xHkg'
  			}
  			],
  			students: [9, 7],
  			professor: 5,
  		},
  		{
  			id: 5,
  			title: 'non quam. Pellentesque habitant morbi',
  			description: 'elit. Curabitur sed tortor. Integer aliquam adipiscing',
  			imgURL: 'https://source.unsplash.com/1600x900/?face',
  			subjects: [
  			{
  				id: 1,
  				title: 'sagittis semper. Nam tempor diam dictum sapien.',
  				description: 'ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula.',
  				videoURL: 'https://youtu.be/vrpof_QQUe0'
  			},
  			{
  				id: 2,
  				title: 'eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas',
  				description: 'enim mi tempor lorem, eget mollis lectus pede et risus.',
  				videoURL: 'https://youtu.be/ZusYJm5xHkg'
  			},
  			{
  				id: 3,
  				title: 'In condimentum. Donec at arcu.',
  				description: 'vitae, aliquet nec, imperdiet nec, leo. Morbi neque',
  				videoURL: 'https://youtu.be/r2vk4B5-8Bs'
  			}
  			],
  			students: [0, 4, 7],
  			professor: 6,
  		}]);
  },

  async down(db) {
    var ids = [0, 1, 2, 3, 4, 5];
    await db.collection('courses').deleteMany({ id: { $in: ids }}, (err, obj) => {
      if(err)
        throw err;
    });
  }
};
