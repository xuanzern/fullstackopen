import Part from "./Part"
const Content = (props) => {
    const parts = props.parts;
    return(
      <div>
        <Part name={parts[0].name} exercises={parts[0].exercises}/>
        <Part name={parts[1].name} exercises={parts[1].exercises}/>
        <Part name={parts[2].name} exercises={parts[2].exercises}/>
      </div>
    )
  }

export default Content