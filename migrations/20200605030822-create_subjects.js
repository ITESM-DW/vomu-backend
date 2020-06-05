const ObjectId = require('bson').ObjectId;

module.exports = {
  async up(db) {
    await db.collection('subjects').insertMany([
  		{
  			_id: new ObjectId("5ed9be83aafaf27442b80d11"),
  			title: 'aliquet magna a neque. Nullam ut',
        description: 'nonummy. Fusce fermentum fermentum arcu. Vestibulum',
        videoURL: "Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien",
  		},
  		{
  			_id: new ObjectId("5ed9be83aafaf27442b80d12"),
        title: 'taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris',
  			description: 'In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac',
  			videoURL: 'https://youtu.be/fe3Vr8Pz-DM',
      },
  		{
  			 _id: new ObjectId("5ed9be83aafaf27442b80d13"),
  			 title: 'eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas',
  			 description: 'enim mi tempor lorem, eget mollis lectus pede et risus.',
  			 videoURL: 'https://youtu.be/ZusYJm5xHkg',
  		},
  		{
  			 _id: new ObjectId("5ed9be83aafaf27442b80d14"),
  			 title: 'In condimentum. Donec at arcu.',
  			 description: 'vitae, aliquet nec, imperdiet nec, leo. Morbi neque',
  			 videoURL: 'https://youtu.be/r2vk4B5-8Bs'
  		},
  		{
  			 _id: new ObjectId("5ed9be83aafaf27442b80d15"),
  			 title: 'feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam',
  			 description: 'faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis',
  			 videoURL: 'https://youtu.be/IFe6ag34eMg'
  		},
  		{
  			 _id: new ObjectId("5ed9be83aafaf27442b80d16"),
  			 title: 'sagittis semper. Nam tempor diam dictum sapien.',
  			 description: 'ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula.',
  			 videoURL: 'https://youtu.be/vrpof_QQUe0'
  		},
  		{
  			 _id: new ObjectId("5ed9be83aafaf27442b80d17"),
  			 title: 'sagittis semper. Nam tempor diam dictum sapien.',
  			 description: 'ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula.',
  			 videoURL: 'https://youtu.be/vrpof_QQUe0'
  		},
  		{
  			 _id: new ObjectId("5ed9be83aafaf27442b80d18"),
  			 title: 'eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas',
  			 description: 'enim mi tempor lorem, eget mollis lectus pede et risus.',
  			 videoURL: 'https://youtu.be/ZusYJm5xHkg'
  		},
  		{
  			 _id: new ObjectId("5ed9be83aafaf27442b80d19"),
  			 title: 'sagittis semper. Nam tempor diam dictum sapien.',
  			 description: 'ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula.',
  			 videoURL: 'https://youtu.be/vrpof_QQUe0'
  		},
  		{
  			 _id: new ObjectId("5ed9be83aafaf27442b80d20"),
  			 title: 'eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas',
  			 description: 'enim mi tempor lorem, eget mollis lectus pede et risus.',
  			 videoURL: 'https://youtu.be/ZusYJm5xHkg'
  		},
  		{
  			 _id: new ObjectId("5ed9be83aafaf27442b80d21"),
  			 title: 'In condimentum. Donec at arcu.',
  			 description: 'vitae, aliquet nec, imperdiet nec, leo. Morbi neque',
  			 videoURL: 'https://youtu.be/r2vk4B5-8Bs'
  		},
  		]);
  },

  async down(db) {
    var ids = [
      new ObjectId("5ed9be83aafaf27442b80d11"),
      new ObjectId("5ed9be83aafaf27442b80d12"),
      new ObjectId("5ed9be83aafaf27442b80d13"),
      new ObjectId("5ed9be83aafaf27442b80d14"),
      new ObjectId("5ed9be83aafaf27442b80d15"),
      new ObjectId("5ed9be83aafaf27442b80d16"),
      new ObjectId("5ed9be83aafaf27442b80d17"),
      new ObjectId("5ed9be83aafaf27442b80d18"),
      new ObjectId("5ed9be83aafaf27442b80d19"),
      new ObjectId("5ed9be83aafaf27442b80d20"),
      new ObjectId("5ed9be83aafaf27442b80d21"),
    ];
    await db.collection('subjects').deleteMany({ _id: { $in: ids }}, (err, obj) => {
      if(err)
        throw err;
    });
  }
};
