import React, { useState } from "react";

import Dexter from "./img-programacao/dexter.png";
import VacaFrango from "./img-programacao/vaca.png";
import Du from "./img-programacao/dus.png";
import Coragem from "./img-programacao/coragem.png";
import Jorel from "./img-programacao/jorel.png";
import Turma from "./img-programacao/monica.png";
import Steven from "./img-programacao/steven.png";
import Billy from "./img-programacao/mandy.png";

import * as S from "./StyleProgramacao.jsx";

export default function Programacao() {

    const [desenhos, setDesenhos] = useState([
        { hora: "7:00h", nome: "O LABORATÓRIO DE DEXTER", imagem: Dexter, desenhoManha: true },
        { hora: "8:00h", nome: "A VACA E O FRANGO", imagem: VacaFrango, desenhoManha: true },
        { hora: "9:00h", nome: "DU, DUDU E EDU", imagem: Du, desenhoManha: true },
        { hora: "10:00h", nome: "CORAGEM, O CÃO COVARDE", imagem: Coragem, desenhoManha: true },
        { hora: "11:00h", nome: "IRMÃO DO JOREL", imagem: Jorel, desenhoManha: true },
        { hora: "12:00h", nome: "TURMA DA MÔNICA JOVEM", imagem: Turma, desenhoManha: false },
        { hora: "13:00h", nome: "STEVEN UNIVERSO", imagem: Steven, desenhoManha: false },
        { hora: "14:00h", nome: "BILLY E MANDY", imagem: Billy, desenhoManha: false },
    ])

    const desenhoAntesMeioDia = desenhos.filter((item) => item.desenhoManha === true)

    return (
        <>
            <S.Section>
                {desenhos.map((item) => (
                    <S.Card>
                        <h2>{item.hora}</h2>
                        <h2> {item.nome} </h2>
                        <img src={item.imagem} alt="" />
                    </S.Card>
                ))}
            </S.Section>



        </>
    )
}