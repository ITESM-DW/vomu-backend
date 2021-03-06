const ObjectId = require('bson').ObjectId;
const bcrypt = require('bcrypt');

module.exports = {
	async up(db) {
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash('password', salt);
		const password = hash;
		await db.collection('users').insertMany([
			{
				_id: new ObjectId('5ed9ba30524b7a5ebefe9f3e'),
				email: 'user@gmail.com',
				name: 'Iris',
				last: 'Craft',
				password,
				type: 'student',
				title: 'PhD.',
				description: 'urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus',
				image: 'https://source.unsplash.com/collection/190727/400x400',
				followup: [{ course_id: new ObjectId('5ed9ba30524b7a5ebefe9f49'), subject_id: new ObjectId('5ed9be83aafaf27442b80d12') }, { course_id: new ObjectId('5ed9ba30524b7a5ebefe9f4a'), subject_id: new ObjectId('5ed9be83aafaf27442b80d14') }]
			},
			{
				_id: new ObjectId('5ed9ba30524b7a5ebefe9f3f'),
				email: 'risus@urnaVivamusmolestie.org',
				name: 'Gareth',
				last: 'Monroe',
				password,
				type: 'professor',
				description: 'vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras',
				image: 'https://source.unsplash.com/collection/190727/400x400',
				courses: [new ObjectId('5ed9ba30524b7a5ebefe9f49')],
				title: 'PhD'
			},
			{
				_id: new ObjectId('5ed9ba30524b7a5ebefe9f40'),
				email: 'egestas.nunc@bibendum.org',
				name: 'Violet',
				last: 'Reese',
				password,
				type: 'professor',
				description: 'felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit',
				image: 'https://source.unsplash.com/collection/190727/400x400',
				courses: [new ObjectId('5ed9ba30524b7a5ebefe9f4a')],
				title: 'PsyD'
			},
			{
				_id: new ObjectId('5ed9ba30524b7a5ebefe9f41'),
				email: 'sapien.Nunc.pulvinar@estac.co.uk',
				name: 'Cade',
				last: 'Watkins',
				password,
				type: 'professor',
				description: 'luctus sit amet, faucibus ut, nulla. Cras eu tellus eu',
				image: 'https://source.unsplash.com/collection/190727/400x400',
				courses: [new ObjectId('5ed9ba30524b7a5ebefe9f4b')],
				title: 'EdD'
			},
			{
				_id: new ObjectId('5ed9ba30524b7a5ebefe9f42'),
				email: 'facilisis@laoreetlibero.edu',
				name: 'Ferris',
				last: 'Jarvis',
				password,
				type: 'student',
				title: 'PhD.',
				description: 'sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus',
				image: 'https://source.unsplash.com/collection/190727/400x400',
				followup: [
					{ course_id: new ObjectId('5ed9ba30524b7a5ebefe9f49'), subject_id: new ObjectId('5ed9be83aafaf27442b80d12') },
					{ course_id: new ObjectId('5ed9ba30524b7a5ebefe9f4a'), subject_id: new ObjectId('5ed9be83aafaf27442b80d14') }
				]
			},
			{
				_id: new ObjectId('5ed9ba30524b7a5ebefe9f43'),
				email: 'malesuada@Praesenteunulla.edu',
				name: 'Karly',
				last: 'Wilder',
				password,
				type: 'professor',
				description: 'Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet',
				image: 'https://source.unsplash.com/collection/190727/400x400',
				courses: [new ObjectId('5ed9ba30524b7a5ebefe9f4c')],
				title: 'PhD'
			},
			{
				_id: new ObjectId('5ed9ba30524b7a5ebefe9f44'),
				email: 'tincidunt@tellusPhasellus.net',
				name: 'Hermione',
				last: 'Roman',
				password,
				type: 'professor',
				description: 'leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis,',
				image: 'https://source.unsplash.com/collection/190727/400x400',
				courses: [new ObjectId('5ed9ba30524b7a5ebefe9f4d')],
				title: 'EdD'
			},
			{
				_id: new ObjectId('5ed9ba30524b7a5ebefe9f45'),
				email: 'Cras.vehicula@velitAliquamnisl.edu',
				name: 'Mary',
				last: 'Hampton',
				password,
				type: 'student',
				title: 'PhD.',
				description: 'ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et,',
				image: 'https://source.unsplash.com/collection/190727/400x400',
				followup: [
					{ course_id: new ObjectId('5ed9ba30524b7a5ebefe9f4b'), subject_id: new ObjectId('5ed9be83aafaf27442b80d15') },
					{ course_id: new ObjectId('5ed9ba30524b7a5ebefe9f4c'), subject_id: new ObjectId('5ed9be83aafaf27442b80d17') }
				]
			},
			{
				_id: new ObjectId('5ed9ba30524b7a5ebefe9f46'),
				email: 'faucibus.leo@musAeneaneget.co.uk',
				name: 'Omar',
				last: 'Benton',
				password,
				type: 'student',
				title: 'PhD.',
				description: 'Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc',
				image: 'https://source.unsplash.com/collection/190727/400x400',
				followup: [{ course_id: new ObjectId('5ed9ba30524b7a5ebefe9f4b'), subject_id: new ObjectId('5ed9ba30524b7a5ebefe9f4b') }]
			},
			{
				_id: new ObjectId('5ed9ba30524b7a5ebefe9f47'),
				email: 'Vivamus@blanditatnisi.co.uk',
				name: 'Yolanda',
				last: 'Cabrera',
				password,
				type: 'student',
				title: 'PhD.',
				description: 'quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus',
				image: 'https://source.unsplash.com/collection/190727/400x400',
				followup: [{ course_id: new ObjectId('5ed9ba30524b7a5ebefe9f4c'), subject_id: new ObjectId('5ed9be83aafaf27442b80d18') }]
			}
		]);
	},

	async down(db) {
		var ids = [
			new ObjectId('5ed9ba30524b7a5ebefe9f3e'),
			new ObjectId('5ed9ba30524b7a5ebefe9f3f'),
			new ObjectId('5ed9ba30524b7a5ebefe9f40'),
			new ObjectId('5ed9ba30524b7a5ebefe9f41'),
			new ObjectId('5ed9ba30524b7a5ebefe9f42'),
			new ObjectId('5ed9ba30524b7a5ebefe9f43'),
			new ObjectId('5ed9ba30524b7a5ebefe9f44'),
			new ObjectId('5ed9ba30524b7a5ebefe9f45'),
			new ObjectId('5ed9ba30524b7a5ebefe9f46'),
			new ObjectId('5ed9ba30524b7a5ebefe9f47'),
		];
		await db.collection('users').deleteMany({ _id: { $in: ids } }, (err, obj) => {
			if (err)
				throw err;
		});
	}
};
