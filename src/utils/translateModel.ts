import { UserDocument } from '../models/User';
import { CourseDocument } from '../models/Course';

const enum SUPPORTED_LANGUAGES {
    ENGLISH = 'en',
    SPANISH = 'es',
}

const genericMessages = {
	'es': {
		'Deleted User': 'Usuario Borrado',
		'Updated Course': 'Curso Actualizado',
		'Deleted Course': 'Curso Borrado',
	},
};


export function translateUser (user : UserDocument, lang : string | SUPPORTED_LANGUAGES = SUPPORTED_LANGUAGES.ENGLISH) {
	if (lang == SUPPORTED_LANGUAGES.SPANISH) {
		return {
			_id: user._id,
			correo: user.email,
			nombre: user.name,
			apellido: user.last,
			titulo: user.title,
			contrasena: user.password,
			tipo: user.type,
			descripcion: user.description,
			imagen: user.image,
		};
	}
	return user;
}

export function translateUsers(users : UserDocument[], lang : string | SUPPORTED_LANGUAGES = SUPPORTED_LANGUAGES.ENGLISH) {
	if (lang == SUPPORTED_LANGUAGES.SPANISH) {
		return users.map( user => translateUser(user) );
	}
	return users;
}

export function translateCourse(course : CourseDocument, lang : string | SUPPORTED_LANGUAGES = SUPPORTED_LANGUAGES.ENGLISH) {
	if (lang == SUPPORTED_LANGUAGES.SPANISH) {
		return {
			_id: course._id,
			titulo: course.title,
			descripcion: course.description,
			imgURL: course.imgURL,
			temas: course.subjects.map( subject => {
				return {
					titulo: subject.title,
					descripcion: subject.description,
					videoURL: subject.videoURL,
				};
			}),
			estudiantes: course.students,
		};
	}
	return course;
}

export function translateCourses(courses : CourseDocument[], lang : string | SUPPORTED_LANGUAGES = SUPPORTED_LANGUAGES.ENGLISH) {
	if (lang == SUPPORTED_LANGUAGES.SPANISH) {
		return courses.map( course => translateCourse(course) );
	}
	return courses;
}

export function translateGeneric(res : { status: number, message: string, dbResponse?: any}, lang : string | SUPPORTED_LANGUAGES = SUPPORTED_LANGUAGES.ENGLISH) {
	if (lang == SUPPORTED_LANGUAGES.SPANISH) {
		return {
			estado: res.status,
			mensaje: genericMessages[SUPPORTED_LANGUAGES.SPANISH][res.message],
			dbRespuesta: res.dbResponse,
		};
	}
	return res;

}
