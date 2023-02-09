import { FieldValue } from "firebase/firestore"

export type FundTimer ={
  date:Date,
  accumulatedAmount:number|FieldValue
}
