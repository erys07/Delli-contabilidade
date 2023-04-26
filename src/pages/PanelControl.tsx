import "../assets/styles/style.css"
import { useState } from "react"
import  Client from "../assets/components/Client"

export function PanelControl(){

    const [list, setList] = useState(false)
    function clickEvent(){
        setList(!list)
        
    }
    return(
        <div>
            <div className="first-top-itens">
                <div className="tittle-page">Delli Contabilidade</div>
                <div className="top-right">
                    <div className="painel-control">Painel de Controle</div>
                    <div className="top-right-photo"></div>
                </div>
            </div>
            <div className="container">
                <div className="header">
                    <div className="header-left">
                        <h1>Relátorio de Funcionário</h1>
                        <div className="filter-circle">
                            <div>
                                <div className="w-10 h-10 bg-white rounded-full"></div>
                                <div className="filter-names">Presentes</div>
                            </div>
                            <div>
                                <div className="circles-full"></div>
                                <div className="filter-names">Ausentes</div>
                            </div>
                            <div>
                                <div className="circles-full"></div>
                                <div className="filter-names">Colaboradores</div>
                            </div>
                            <div>
                                <div className="circles-full selected"></div>
                                <div className="filter-names">Todos</div>
                            </div>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="header-itens-right">
                            <div className="item-left">Novo Usuário</div>
                            <div className="item-right">Relatório Geral</div>
                        </div>
                        <div style={{cursor:"pointer"}} onClick={clickEvent} className="select-box">
                            Caixa de Seleção 
                            <img onClick={clickEvent} style={{width:"25px",marginLeft:"40px", cursor:"pointer"}} src="https://cdn-icons-png.flaticon.com/512/6423/6423873.png" alt="#" />
                        </div>
                        <div style={{display:list? "flex":"none"}} className="selec-box-itens">
                            <ul>
                                <li>Primeira Opção</li>
                                <li>Segunda Opção</li>
                                <li>Terceira Opção</li>
                                <li>Quarta Opção</li>
                                <li>Quinta Opção</li>
                                <li>Sexta Opção</li>
                            </ul>
                        </div>
                    </div>
                </div> 
                <div>
                    <Client/>
                    <Client/>
                    <Client/>
                    <Client/>
                </div>
            </div>
        </div>
    )
}