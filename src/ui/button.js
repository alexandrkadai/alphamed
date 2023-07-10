import classes from './button.module.css';

const Button = (props) => {
    return (
        <button className={classes.standart}>{props.text}</button>
    )
};


export default Button;