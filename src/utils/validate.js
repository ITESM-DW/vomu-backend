import * as yup from 'yup';
import { SchemaValidationError } from '../utils/errors';

// When given an objet full of yup rules, it is applied to values.
export default async (rules, values) => {
  const schema = yup.object().shape(rules);
  return await schema.validate(values, { abortEarly: false });
};