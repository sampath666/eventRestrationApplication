import './index.css'

const EventItem = props => {
  const {data, onClickRender} = props
  const {registrationStatus, id} = data

  const onClickButton = () => onClickRender(registrationStatus, id)

  return (
    <li className="c6">
      <button type="button" className="c5" onClick={onClickButton}>
        <img className="img1" alt="event" src={data.imageUrl} />
        <p className="h2">{data.name}</p>
        <p className="p1">{data.location}</p>
      </button>
    </li>
  )
}

export default EventItem
