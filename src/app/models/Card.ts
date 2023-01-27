import { CardImage } from "./CardInfo/CardImage"
import { CardPrice } from "./CardInfo/CardPrice"
import { PastOwner } from "./CardInfo/PastOwner"

export type Card =
{
  id:string
  inInventory:number,
  type:string,
  frameType:string,
  desc:string
  atk:number,
  def:number,
  level:number,
  race:string,
  attribute:string,
  card_images:CardImage[],
  card_prices:CardPrice[],
  currentOwner:string | null,
  lastOwners:PastOwner[]
}
