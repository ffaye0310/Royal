import { Rules } from "./rules.model"

export class User  {
  id !:number
  username !: string
  email !: string
  first_name !: string
  last_name !: string
  provider ?: string
  created_at ?: string
  phone !: number
  // profil_img !: string
  role !: Rules
  password !: string
  // confirm_password ?: string
}
