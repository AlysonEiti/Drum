import './Audio.css';

const Audio = (props) => {
    return (
        <audio id={`sound_key${props.keyCode}`} src={`sounds/key${props.keyCode}.wav`}></audio>
    )
}

export default Audio;