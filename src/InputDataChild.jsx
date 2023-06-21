import PropTypes from 'prop-types';
import styles from './InputDataStyle.module.css';
import CloseButton from 'react-bootstrap/CloseButton';
import { useState, useEffect } from 'react';

export default function Tampilkan({ TampilkanData , onTutup}) {

  const [Tampung, setTampung] = useState(TampilkanData);

  useEffect(() => {
    setTampung(TampilkanData);
  }, [TampilkanData]);


  const Tutup = (index) => {
    const arrayBaru = Tampung.filter((item, i) => i !== index);
    setTampung(arrayBaru);

    if (onTutup) {
      onTutup(arrayBaru);
    }
  };

  return (
    <div>

      <ol style={{ backgroundColor: 'white' }}>
        {Tampung.map((item, index) => (
          <li className={styles.child} key={index}>
            {item} <CloseButton className={styles.tutup} aria-label="Hide" onClick={() => Tutup(index)} />
          </li>
        ))}
      </ol>
    </div>
  );
}

Tampilkan.propTypes = {
  TampilkanData: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTutup: PropTypes.func.isRequired, 
};


