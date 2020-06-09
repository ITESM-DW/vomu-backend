import * as yup from 'yup';

// When given an objet full of yup rules, it is applied to values.
export default async (rules: any, values: any) => {
	const schema = yup.object().shape(rules);
	return await schema.validate(values, { abortEarly: true });
};
