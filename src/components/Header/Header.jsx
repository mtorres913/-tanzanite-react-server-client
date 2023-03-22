// props are passed into our function component as an argument
// const {textColor,headerText,someOtherThing} = props;
// Destructuring
// const { textColor, headerText, someOtherThing } = props;

function Header(props) {
 return (
<header>
<h1 style={{color:props.textColor}}>
{props.headerTextProp}</h1>
<h2>
{props.someOtherThing}</h2>
</header>
)
 }





export default Header;