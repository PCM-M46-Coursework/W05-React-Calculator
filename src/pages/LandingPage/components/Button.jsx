import './Button.css';
export const Button = ({type, label, onClick}) =>
{
    return <button onClick={() => onClick(type, label)}>
        {label}
    </button>;
}