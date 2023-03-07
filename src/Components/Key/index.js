import './Key.css';

const Key = (props) => {

    return (
        <div className='key' data-key={`key${props.keyCode}`}>{props.keyCode}</div>
    );

}

export default Key;