function TaskShow({taskOne}) {
   const title = taskOne.title;
   const task = taskOne.task;
   const breakText = (text) =>{
    const maxLength = 25;
    if (text.length <= maxLength){
        return text;
    }else{
        return (
            <div className="break-text">
            {text.match(new RegExp(`.{1,${maxLength}}`, 'g')).map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        )
    }
   };
    return ( <div className="taskShow">
        <h3>Your mission :</h3>
        {breakText(title)}
        <h3>Things to do :</h3>
        {breakText(task)}
        <div>
        <button className="buttonDelete">Delete</button>
        <button className="buttonUpdate">Update</button>
        </div>
    </div> );
}

export default TaskShow;