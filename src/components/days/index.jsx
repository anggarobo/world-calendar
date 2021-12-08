function DayList(props) {
  const {day, id} = props
  return <li key={id} className="border-2 bg-gray-300 p-4 mx-2 rounded-md">{day.substring(0, 3).toUpperCase()}</li>
}

export default function Days() {
  const weeks = [ "Sunday", "Monday", "Thursday", "Wednesday", "Tuesday", "Friday", "Saturday" ]
  const lisItems = weeks.map((day, i) => <DayList id={i} day={day} />)
  return (
    <div>
      <ul className="grid grid-cols-7 text-center p-4">
        { lisItems }
      </ul>
    </div>
  )
}