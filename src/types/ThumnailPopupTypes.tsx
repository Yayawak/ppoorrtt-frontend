import { Skill } from "../App"

export interface ThumbnailPopupProp 
{
    open : boolean
    setOpen :React.Dispatch<React.SetStateAction<boolean>>
    currentShowingSkill : Skill | null
}