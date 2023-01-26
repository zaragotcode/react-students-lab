import Score from "./Score"

const Student = (props) => {
  return (
    <>
      <ul>
        {props.students.map(student => (
          <li>
            <p>{student.name}</p>
            <p>{student.bio}</p>
            <Score scores={student.scores}/>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Student