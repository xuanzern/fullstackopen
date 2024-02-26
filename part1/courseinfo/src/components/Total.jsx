const Total = (props) => {
    const parts = props.parts

    const sum = arr =>{
        let total = 0;
        arr.forEach(element => {
        total += element.exercises
        });
        return total;
    }

    
    return(
      <div>
        <p>Number of exercises {sum(parts)}</p>
      </div>
    )
  }

export default Total