import StatisticLine from "./statisticline"; 


const Statistics = (props) => {
  return (
    <table style={{ borderSpacing: '0' }}>
      <tbody>
        <tr>
          <td><StatisticLine text="good" value={props.good} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="neutral" value={props.neutral} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="bad" value={props.bad} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="all" value={props.total} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="average" value={props.average} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="positive" value={props.positive} /></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Statistics;