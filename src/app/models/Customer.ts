import { FieldValue } from "firebase/firestore"
import { Card } from "./Card"

export type Customer ={
  id:string,
  email:string,
  deck:Card[]
  balance:number | FieldValue,
  imgPath:string
}
