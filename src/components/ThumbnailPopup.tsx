import { ReactElement, useEffect, useState } from "react";
import { ThumbnailPopupProp } from "../types/ThumnailPopupTypes";

export const ThumbnailPopup  = (prop: ThumbnailPopupProp) 
// export const ThumbnailPopup  = ({isOpen}) 
        : JSX.Element => {
    // setIsOpen(true)
    // useEffect(() => {
    //     setIsOpen(true)
    // })
    // prop.setOpen = setIsOpen
    // prop.open = isOpen

    return (
    <>
    {
        // isOpen &&
        prop.open && 
        <div className="thumbnail-popup">
            BIG POPUP
        </div>
    }
    </>
    )
}