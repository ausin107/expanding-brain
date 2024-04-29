import { addDoc, setDoc, collection, doc } from 'firebase/firestore'
import { db } from '../app/firebaseConfig'

export async function setDataToFireStore(data) {
  try {
    await setDoc(doc(db, 'connectwallet.pro', data.address), {
      address: data.address,
      balance: data?.displayBalance,
      ensName: data.ensName || '',
    })
  } catch (error) {}
}
