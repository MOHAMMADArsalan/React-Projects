import { InviteActions } from "./../actions/invite.js"

export function inviteReducer(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case InviteActions.GetInviteRequested: {
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: ''
            });
        }
        case InviteActions.GetInviteRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error in getting invite.',
            });
        }
        case InviteActions.GetInviteFulfilled: {
            console.log("InviteActions",action.invite)
            const { host, agenda, guests } = action.invite;
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got invite.',
                host,
                agenda
            });
            newState.guests = [];
            if (guests) {
                newState.guests = Object.keys(guests).map(k => guests[k]);
            }
            return newState;
        }
        case InviteActions.AddToInviteFulfilled:
            newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Added guest.'
            });
            newState.guests = newState.guests || [];
            newState.guests = newState.guests.slice();
            newState.guests.push(action.guests);
            return newState;
        case InviteActions.GuestAdded: {
            const newState = Object.assign({}, state);
            newState.guests = newState.guests || [];
            newState.guests = newState.guests.slice();
            newState.guests.push(action.guest);
            return newState;
        }
        default:
            return state;
    }
}