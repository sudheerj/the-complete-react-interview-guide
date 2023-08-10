import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore"

import { User } from "firebase/auth"

import { UserInfo } from "@/app/store/user/user.types.ts"
import { Product } from "@/app/store/product/product.types"

export const db = getFirestore()

export type UserInfo = {
  displayName: string
  createdAt: Date
  email: string
}

export const insertProductsData = async <T extends Product>(
  collectionKey: string,
  productItems: T[],
) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  productItems.forEach((product) => {
    const docRef = doc(collectionRef)
    batch.set(docRef, product)
  })

  await batch.commit()
}

export const fetchProductsData = async () => {
  const collectionRef = collection(db, "products")
  const queryRef = query(collectionRef)

  const querySnapshot = await getDocs(queryRef)
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data())
}

export const insertUserDataFromAuth = async (
  userAuth: User | null,
): Promise<void | QueryDocumentSnapshot<UserInfo>> => {
  if (!userAuth) return

  const userDocRef = doc(db, "users", userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (error) {
      console.log("error creating the user", error)
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserInfo>
}
