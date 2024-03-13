import React from "react";

import Jogo from "./img-header/jogo.png";
import Logo from "./img-header/logo.png";
import Programacao from "./img-header/programacao.png";

import * as S from "./StyleHeader.jsx";

export default function Header() {
    return(
       <S.HeaderEstilo>
        <img src={Logo} alt="Logo da Cartoon Network" />

        <S.Section>
            <S.Div>
                <img src={Jogo} alt="Controle de jogo" />
                <h2>JOGO</h2>
            </S.Div>
            <S.Div>
                <img src={Programacao} alt="" />
                <h2>PROGRAMAÇÃO</h2>
            </S.Div>
        </S.Section>
       </S.HeaderEstilo>
    )
}

