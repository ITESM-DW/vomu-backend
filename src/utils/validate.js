import * as yup from 'yup';

export default async (rules, values) => {
    const schema = yup.object().shape(rules);
    try {
      return await schema.validate(values, { abortEarly: false });
    } catch (error) {
      throw error;
    }
};