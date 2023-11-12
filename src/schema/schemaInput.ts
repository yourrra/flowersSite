import * as yup from 'yup'

export const schemaInput = yup.object({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
    .min(2, 'First name should be at least 2 characters')
    .max(20, 'First name should be at most 20 characters')
    .required('First name is a required field'),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
    .min(2, 'Last name should be at least 2 characters')
    .max(20, 'Last name should be at most 20 characters')
    .required('Last name is a required field'),
  companyName: yup
    .string()
    .matches(
      /^[а-яА-Яa-zA-Z0-9\s\-,.']+$/,
      'Company name should only contain letters, numbers, spaces, and basic punctuation',
    )
    .required('Company Name is a required field'),
  country: yup
    .string()
    .required('Country is a required field')
    .matches(
      /^[а-яА-Яa-zA-Z0\s\-,.'/]+$/,
      'Country should only contain letters, spaces, and basic punctuation',
    ),
  streetAddress: yup
    .string()
    .required('Street Address is a required field')
    .matches(
      /^[а-яА-Яa-zA-Z0-9\s\-,.'/]+$/,
      'Street address should only contain letters, numbers, spaces, and basic punctuation',
    ),
  phoneNumber: yup
    .string()
    .max(20, 'Last name should be at most 20 characters')
    .matches(/^[0-9+()-\s]{17}$/, 'Phone number should be 10 digits')
    .required('Email is a required field'),
  email: yup
    .string()
    .email('Email should have correct format')
    .matches(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, 'Email should have a valid domain')
    .required('Email is a required field'),
  orderNotes: yup
    .string()
    .max(200, 'Order Notes should be at most 200 characters'),
})
