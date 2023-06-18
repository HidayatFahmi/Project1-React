import PropTypes from 'prop-types';


export default function Tampilkan({TampilkanData}){

    return(
        <div>
            <ol>
            {TampilkanData.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
            </ol>
        </div>
    )
}

  Tampilkan.propTypes = {
    TampilkanData: PropTypes.arrayOf(PropTypes.string).isRequired
  };
  