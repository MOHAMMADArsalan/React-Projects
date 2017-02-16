import { InviteActions } from "./../actions/invite.js";
import database from "./../../config/database.js";


export class InviteEpics {
    static getInvite() {

        return dispatch => {
            dispatch(InviteActions.getInviteRequestedAction());
            return database.ref('/').once('value', snap => {
                const invite = snap.val();
                dispatch(InviteActions.getInviteFulfilledAction(invite))
            })
                .catch((error) => {
                    console.log(error);
                    dispatch(InviteActions.getInviteRejectedAction());
                });
        }
    }
    static addToInvite(name) {
        return dispatch => {
            dispatch(InviteActions.addInviteRequestedAction());
            const guestRef = database.ref('/guests');
            guestRef.push({
                name
            })
                .then(() => {
                    dispatch(InviteActions.addInviteFulfilledAction({ name }))
                })
                .catch((error) => {
                    dispatch(InviteActions.addInviteRejectedAction())
                })
        }
    }

    static watchGuestAddedEvent(dispatch) {
        database.ref('/guests').on('child_added', (snap) => {
            dispatch(InviteActions.getGuestAddedAction(snap.val()));
        });
    }
}