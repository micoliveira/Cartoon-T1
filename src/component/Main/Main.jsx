import React, { useState } from "react"

import Scooby from "./img-main/scobby.png";
import Ben10 from "./img-main/ben10.png";
import Looney from "./img-main/looney.png";

import Gumball from "./img-main/gumball.png"
import Meninas from "./img-main/meninas.png"
import TomJerry from "./img-main/ton.png";

import Programacao from "../Programacao/Programacao.jsx"

import * as S from "./StyleMain.jsx"

function Main() {

    const [galeria, setGaleria] = useState([
        Gumball,
        Meninas,
        TomJerry
    ])


    return (
        <main>
            <S.PrimeiraSection>
                <img src={Scooby} alt="" />
                <img src={Ben10} alt="" />
                <img src={Looney} alt="" />
            </S.PrimeiraSection>

            <S.SegundaSection>
                {galeria.map((item) => (
                    <img src={item} alt="" />
                ))}

            </S.SegundaSection>

            <Programacao />

        </main>
    )
}

export default Main