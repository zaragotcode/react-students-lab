

function Score(props) {
  return (
    <>
      <ul>
      {props.scores.map(score => (
        <li>
          <p>Date: {score.date}</p>
          <p>Final Score: {score.score}</p>
        </li>
      ))}
      </ul>
    </>
  )
}

export default Score