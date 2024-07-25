// arrow function ES6
// best used for 1 line function
// 1 line function return implicit
// arrrow function -object creation(new can't be use)
//pure function
export const Button = (props)=>{
    return (<button onClick={props.fn} className={props.color}>{props.val}</button>);
}