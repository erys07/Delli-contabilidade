import "./styles/style.css"
import { useState } from "react"
export function PanelControl(){
    const [list, setList] = useState(false)
    function clickEvent(){
        setList(!list)
        
    }

    return(
        <div className="all-itens">
            <div className="first-top-itens">
                <div className="tittle-page">Delli Contabilidade
                <div className="reta-1"></div>
                <div className="reta-2"></div>
                </div>
                <div className="top-right">
                    <div style={{cursor:"pointer" }} className="painel-control">Painel de Controle</div>
                    <div className="top-right-photo">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI59AoLNRCejUcON0m_Ur-HMvNBQn_9rdG6A&usqp=CAU" alt="#" />
                    </div>
                </div>
            </div>
            
            <div className="container">
                <div className="header">
                    <div className="header-left">
                        <h1>Relátorio de Funcionário</h1>
                        <div className="filter-circle">
                            <div>
                                <div className="circles-full"></div>
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
                            <div className="item-left">
                                <img style={{width:"25px", height:"auto", cursor:"pointer"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pGtXk4EfjPxV-3vNPgqRBHvZd3kQUTEoEg&usqp=CAU" alt="" />
                                Novo Usuário
                                </div>
                            <div  style={{cursor:"pointer" }}className="item-right">Relatório Geral
                            <img style={{width:"21px", height:"auto", marginLeft:"1px"}} src="#" alt="#" />
                            </div>
                        </div>
                        <div style={{cursor:"pointer", marginLeft:"15px"}} onClick={clickEvent} className="select-box">
                            Caixa de Seleção 
                            <img onClick={clickEvent} style={{width:"25px",marginLeft:"40px", cursor:"pointer"}} src="https://cdn-icons-png.flaticon.com/512/6423/6423873.png" alt="#" />
                        </div>



                        <div style={{display:list? "flex":"none", marginLeft:"15px"}} className="selec-box-itens">
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




                <div className="window-info" >
                    <div className="usuario">
                        <div className="usuario-title">Usuário</div>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeoktTc3yCNfoP9xUxNbytvxSM9tkCsd9WDQ&usqp=CAU" alt="#" />
                            <div className="usuario-txt">Mario Miru Oushi <br />
                            Delli Contabilidade & Cia - Assisnte de Marketing <br />
                            Colaborador</div>
                            <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Qca2Wvs4QcQjIQbNySqJ2ZRl_yA2MjJ1GA&usqp=CAU" alt="" /></a>
                        </div>
                    </div>

                    <div className="status">
                        <div className="usuario-title">Status</div>
                        <div className="ali">
                            Alto Atraso <br />
                            Presente
                        </div>
                    </div>


                    <div className="esperado">
                    <div className="usuario-title">Esperado</div>
                        <div className="ali">
                        <p>7:30-12:00</p>
                        <p>13:00 - 18:00</p>
                        </div>
                    </div>


                    <div className="registrado">
                    <div className="usuario-title">Registrado</div>
                        <div className="ali">
                            <p>8:34 - 11:40</p>
                            <p>13:10 - 17:52</p>
                        </div>
                    </div>


                    <div className="esperado">
                    <div className="usuario-title">Esperado</div>
                        <div className="ali">
                            <p>8 Horas</p>
                        </div>
                    </div>


                    <div className="registrado">
                    <div className="usuario-title">Registrado</div>
                        <div className="ali">
                            <p>7:45:35</p>
                        </div>
                    </div>


                    <div className="salario">
                    <div className="usuario-title">Salário</div>
                        <div className="ali">
                            <h2 style={{color:"green", fontWeight:600}}>R$ 3.870,00</h2>
                        </div>
                        
                    </div>


                    <div className="matricula">
                    <div className="usuario-title">Matrícula</div>
                        <div className="ali">
                            <h2>12345</h2>
                        </div>
                    </div>      
                </div>
            </div>
        </div>
    )
}