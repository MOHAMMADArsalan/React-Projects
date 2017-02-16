export class InviteActions {
    static GetInviteRequested = 'GetInviteRequested';
    static GetInviteRejected = 'GetInviteRejected';
    static GetInviteFulfilled = 'GetInviteFulfilled';

    static AddToInviteRequested = 'AddToInviteRequested';
    static AddToInviteRejected = 'AddToInviteRejected';
    static AddToInviteFulfilled = 'AddToInviteFulfilled';
    static GuestAdded = 'GuestAdded';
    constructor() {
    }

    static getInviteRequestedAction() {
        return {
            type: InviteActions.GetInviteRequested
        }
    }
    static getInviteRejectedAction() {
        return {
            type: InviteActions.GetInviteRejected
        }
    }
    static getInviteFulfilledAction(invite) {
        return {
            type: InviteActions.GetInviteFulfilled,
            invite
        }
    }

    static addInviteRequestedAction() {
        return {
            type: InviteActions.AddToInviteRequested
        }
    }

    static addInviteRejectedAction() {
        return {
            type: InviteActions.AddToInviteRejected
        }
    }

    static addInviteFulfilledAction(guest) {
        return {
            type: InviteActions.AddToInviteFulfilled,
            guest
        }
    }
static getGuestAddedAction(guest) {
    return {
        type: InviteActions.GuestAdded,
        guest
    };
}
}
