import React, {useContext} from 'react'
import Button from '../Button/Button'
import NoteList from '../NoteList/NoteList'
import { NavContext } from '../Main/Main'

function Sidebar() {
    console.log("Sidebar logged!")

    const {isOpen} = useContext(NavContext);

    const navStyle = isOpen ? "" : "navMarginLeft"

    return (
        <div className={`flex flex-col transition-m ease-in duration-150 navWidth ${navStyle}`}>
            <Button/>
            <NoteList/>
        </div>
    )
}

export default Sidebar