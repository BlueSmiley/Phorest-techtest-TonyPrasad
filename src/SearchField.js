import './SearchField.css';
import './Main.css';

function SearchField(props) {
    return (
        <label className='searchFieldLabel'>
            {props.header}
            <input
                className='searchFieldInput spaciousWidget'
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
        </label>
    );
}

export default SearchField