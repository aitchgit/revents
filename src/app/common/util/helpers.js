import moment from 'moment'

export const objectToArray = (object) => {
  if (object) {
    return Object.entries(object).map(event => Object.assign(event[1], {id: event[0]}))
  }
}

export const createNewEvent = (user, photoURL, event) => {
  event.date = moment(event.date).toDate();
  return {
    ...event,
    hostUid: user.uid,
    hostedBy: user.displayName,
    hostPhotoURL: photoURL || '/assets/user.png',
    created: Date.now(),
    attendees: {
      [user.uid]: {
        going: true,
        joinDate: Date.now(),
        photoURL: photoURL || '/assets/user.png',
        displayName: user.displayName,
        host: true
      }
    }
  }
}