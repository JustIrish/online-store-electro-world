export const validationRules = {
  name: {
    required: 'Name is required',
    minLength: {
      value: 3,
      message: 'Name must have at least 3 characters',
    },
    maxLength: {
      value: 20,
      message: 'Name must contain no more than 20 characters',
    },
    pattern: {
      value: /^(?=[a-z0-9])[a-z0-9\s]{2,20}[a-z0-9]$/i,
      message: 'Invalid input',
    },
  },

  email: {
    required: 'Description is required',
    minLength: {
      value: 10,
      message: 'Email must have at least 10 characters',
    },
    maxLength: {
      value: 200,
    },
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: 'Invalid input',
    },
  },

  phone: {
    required: 'Phone is required',
    minLength: {
      value: 6,
      message: 'Phone  must have at least 6 characters',
    },
    maxLength: {
      value: 15,
      message: 'Phone must contain no more than 15 characters',
    },
    pattern: {
      value:
        /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}?$/,
      message: 'Invalid input',
    },
  },
};
