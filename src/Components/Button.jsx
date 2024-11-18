const Button = ({onClick, text,  type = "button" }) => {

    return (<button type={type} onClick={onClick} > {text}</button>);
};

export default Button;

// customised component with specific props
// events needs to be given on the furthest child
// * where there is a state, there is a function
