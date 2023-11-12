import { makeAutoObservable } from 'mobx'
import { FormData } from '@/type/form'

class FormStore {
  data: FormData = {
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    streetAddress: '',
    phoneNumber: '',
    email: '',
    createAccount: false,
    orderNotes: '',
    payment: 'r2',
  }

  constructor() {
    makeAutoObservable(this)
  }

  updateField(fieldName: string, value: string | boolean) {
    this.data = {
      ...this.data,
      [fieldName]: value,
    } as FormData
  }

  clearForm() {
    this.data = {
      firstName: '',
      lastName: '',
      companyName: '',
      country: '',
      streetAddress: '',
      phoneNumber: '',
      email: '',
      createAccount: false,
      orderNotes: '',
    } as FormData
  }
}

const formStore = new FormStore()

export default formStore
