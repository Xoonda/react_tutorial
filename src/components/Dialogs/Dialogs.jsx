import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom'

const DialogsUser = (props) => {
    let path = "/Dialogs/" + props.id;
    return (
        <div className={s.dialogs__user}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Messages = (props) => {
    return (
        
            <div>{props.text__message}</div>
       
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__users}>
                <DialogsUser name="Henry" id="1" />
                <DialogsUser name="Walter" id="2" />
                <DialogsUser name="Jessy" id="3" />
                <DialogsUser name="Kate" id="4" />
                <DialogsUser name="Antony" id="5" />
                <DialogsUser name="Alex" id="6" />
            </div>
            <div className={s.dialogs__messages}>
                <Messages text__message="Hello!" />
                <Messages text__message="How are u?" />
                <Messages text__message="Iam fine!" />
            </div>
        </div>
    )
}

export default Dialogs;