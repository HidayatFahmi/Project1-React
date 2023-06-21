import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import Tampilkan from "./InputDataChild.jsx";
import styles from './InputDataStyle.module.css'


export default function Input(){
    const [Kata, setKata] = useState('');
    const [Tampung, setTampung] = useState([]);
    

    const Ketik=(f)=>{
    setKata(f.target.value);
    }

    const Simpan =()=>{ 
    const ArrayBaru = [...Tampung,Kata]
    setTampung(ArrayBaru);
    setKata('');
    }

    const HandleTutup = (data) => {
        // Lakukan apa pun dengan data yang diperbarui
        setTampung(data);
      };
    

    return(
        <Container fluid className={styles.container}>
            <Col>
            <div className={styles.gambar}>
            </div>
            </Col>

            <Row>
                <Col>
                    <div className={styles.div}>
                    <input type="text" onChange={Ketik} placeholder="ketikan"/>
                    <button onClick={Simpan}>Simpan</button>
                    </div>
                </Col>

                <Col>
                    <div className={styles.div}>
                    <h5 className={styles.JudulPemain}>List Pemain</h5>
                    <Tampilkan TampilkanData={Tampung} onTutup={HandleTutup} /> 
                    </div>
                </Col>
            </Row> {/*row*/}
        </Container>
    )
}