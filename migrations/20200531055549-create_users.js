const ObjectId = require('bson').ObjectId;

module.exports = {
  async up(db) {
    await db.collection('users').insertMany([
  		{
  			 _id: new ObjectId("5ed9ba30524b7a5ebefe9f3e"),
  			email: 'user@gmail.com',
  			name: 'Iris',
  			last: 'Craft',
  			password: 'password',
  			type: 'student',
  			title: 'PhD.',
  			description: 'urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus',
  			image: 'https://source.unsplash.com/collection/190727/400x400',
  			followup: [{ course_id: 1, subject_id: 2 }, {course_id: 5, subject_id: 2}]
  		},
  		{
  			 _id: new ObjectId("5ed9ba30524b7a5ebefe9f3f"),
  			email: 'risus@urnaVivamusmolestie.org',
  			name: 'Gareth',
  			last: 'Monroe',
  			password: 'LTD44JET4MU',
  			type: 'professor',
  			description: 'vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras',
  			image: 'https://source.unsplash.com/collection/190727/400x400',
  			courses: ["5ed9ba30524b7a5ebefe9f49"],
  			title: 'PhD'
  		},
  		{
  			 _id: new ObjectId("5ed9ba30524b7a5ebefe9f40"),
  			email: 'egestas.nunc@bibendum.org',
  			name: 'Violet',
  			last: 'Reese',
  			password: 'RGE87MZH4IB',
  			type: 'professor',
  			description: 'felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit',
  			image: 'https://source.unsplash.com/collection/190727/400x400',
  			courses: ["5ed9ba30524b7a5ebefe9f4a"],
  			title: 'PsyD'
  		},
  		{
  			 _id: new ObjectId("5ed9ba30524b7a5ebefe9f41"),
  			email: 'sapien.Nunc.pulvinar@estac.co.uk',
  			name: 'Cade',
  			last: 'Watkins',
  			password: 'SVU62FSA2SB',
  			type: 'professor',
  			description: 'luctus sit amet, faucibus ut, nulla. Cras eu tellus eu',
  			image: 'https://source.unsplash.com/collection/190727/400x400',
  			courses: ["5ed9ba30524b7a5ebefe9f4b"],
  			title: 'EdD'
  		},
  		{
  			 _id: new ObjectId("5ed9ba30524b7a5ebefe9f42"),
  			email: 'facilisis@laoreetlibero.edu',
  			name: 'Ferris',
  			last: 'Jarvis',
  			password: 'EJR81NCL2TW',
  			type: 'student',
  			title: 'PhD.',
  			description: 'sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus',
  			image: 'https://source.unsplash.com/collection/190727/400x400',
  			followup: [{ course_id: 1, subject_id: 3 }, { course_id: 2, subject_id: 1 }, { course_id: 5, subject_id: 2 } ]
  		},
  		{
  			 _id: new ObjectId("5ed9ba30524b7a5ebefe9f43"),
  			email: 'malesuada@Praesenteunulla.edu',
  			name: 'Karly',
  			last: 'Wilder',
  			password: 'HXB40CRT9LQ',
  			type: 'professor',
  			description: 'Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet',
  			image: 'https://source.unsplash.com/collection/190727/400x400',
  			courses: ["5ed9ba30524b7a5ebefe9f4c"],
  			title: 'PhD'
  		},
  		{
  			 _id: new ObjectId("5ed9ba30524b7a5ebefe9f44"),
  			email: 'tincidunt@tellusPhasellus.net',
  			name: 'Hermione',
  			last: 'Roman',
  			password: 'DAJ12QRX7KN',
  			type: 'professor',
  			description: 'leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis,',
  			image: 'https://source.unsplash.com/collection/190727/400x400',
  			courses: ["5ed9ba30524b7a5ebefe9f4d"],
  			title: 'EdD'
  		},
  		{
  			 _id: new ObjectId("5ed9ba30524b7a5ebefe9f45"),
  			email: 'Cras.vehicula@velitAliquamnisl.edu',
  			name: 'Mary',
  			last: 'Hampton',
  			password: 'VQF14AQY5IG',
  			type: 'student',
  			title: 'PhD.',
  			description: 'ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et,',
  			image: 'https://source.unsplash.com/collection/190727/400x400',
  			followup: [{ course_id: 3, subject_id: 2 }, { course_id: 4, subject_id: 1 }, { course_id: 5, subject_id: 1 }]
  		},
  		{
  			 _id: new ObjectId("5ed9ba30524b7a5ebefe9f46"),
  			email: 'faucibus.leo@musAeneaneget.co.uk',
  			name: 'Omar',
  			last: 'Benton',
  			password: 'VGC24GOK7MF',
  			type: 'student',
  			title: 'PhD.',
  			description: 'Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc',
  			image: 'https://source.unsplash.com/collection/190727/400x400',
  			followup: [{ course_id: 3, subject_id: 1 }]
  		},
  		{
  			 _id: new ObjectId("5ed9ba30524b7a5ebefe9f47"),
  			email: 'Vivamus@blanditatnisi.co.uk',
  			name: 'Yolanda',
  			last: 'Cabrera',
  			password: 'LZJ14ERV6ZW',
  			type: 'student',
  			title: 'PhD.',
  			description: 'quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus',
  			image: 'https://source.unsplash.com/collection/190727/400x400',
  			followup: [{ course_id: 4, subject_id: 2 }]
  		}
    ]);
  },

  async down(db) {
    var ids = [
		new ObjectId("5ed9ba30524b7a5ebefe9f3e"),
		new ObjectId("5ed9ba30524b7a5ebefe9f3f"),
		new ObjectId("5ed9ba30524b7a5ebefe9f40"),
		new ObjectId("5ed9ba30524b7a5ebefe9f41"),
		new ObjectId("5ed9ba30524b7a5ebefe9f42"),
		new ObjectId("5ed9ba30524b7a5ebefe9f43"),
		new ObjectId("5ed9ba30524b7a5ebefe9f44"),
		new ObjectId("5ed9ba30524b7a5ebefe9f45"),
		new ObjectId("5ed9ba30524b7a5ebefe9f46"),
		new ObjectId("5ed9ba30524b7a5ebefe9f47"),
	];
    await db.collection('users').deleteMany({ _id: { $in: ids }}, (err, obj) => {
      if(err)
        throw err;
    });
  }
};