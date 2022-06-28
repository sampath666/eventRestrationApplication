import {Component} from 'react'

import EventItem from '../EventItem'

import './index.css'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]

const status = {
  intial: 'INTIAL',
  close: 'REGISTRATIONS_CLOSED',
  registerCompleted: 'REGISTERED',
  registerNotCompleted: 'YET_TO_REGISTER',
}
// Write your code here
class Events extends Component {
  state = {currentStatus: status.intial, list: eventsList, currId: ''}

  renderIntial = () => (
    <div className="card1">
      <p className="h3">Click on an event, to view its registration details</p>
    </div>
  )

  renderYetToComplete = () => (
    <div className="c3">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="img3"
      />
      <p className="p3">
        A Live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art form.
      </p>
      <button type="button" className="b1" onClick={this.onChangeStatus}>
        Register Here
      </button>
    </div>
  )

  renderClose = () => (
    <div className="c3">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="img3"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p className="p3">Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  renderComplete = () => (
    <div className="c3">
      <img
        className="img4"
        alt="registered"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      />
      <h1 className="c-h1">You have already registered for this event</h1>
    </div>
  )

  renderStatus = () => {
    const {currentStatus} = this.state
    switch (currentStatus) {
      case status.intial:
        return this.renderIntial()
      case status.registerNotCompleted:
        return this.renderYetToComplete()
      case status.registerCompleted:
        return this.renderComplete()
      case status.close:
        return this.renderClose()
      default:
        return ''
    }
  }

  onClickRender = (value, id) =>
    this.setState({currentStatus: value, currId: id})

  onChangeStatus = () => {
    const {list, currId} = this.state
    const formattedList = list.map(each => {
      if (each.id === currId) {
        return {...each, registrationStatus: status.registerCompleted}
      }
      return each
    })
    console.log(formattedList)
    this.setState({
      list: formattedList,
      currentStatus: status.registerCompleted,
    })
  }

  render() {
    const {list} = this.state

    return (
      <div className="c1">
        <div className="c2">
          <h1 className="h1">Events</h1>
          <ul className="c4">
            {list.map(each => (
              <EventItem
                data={each}
                key={each.id}
                onClickRender={this.onClickRender}
              />
            ))}
          </ul>
        </div>
        {this.renderStatus()}
      </div>
    )
  }
}

export default Events
