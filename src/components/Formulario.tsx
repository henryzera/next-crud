import Entrada from "./Entrada"
import Cliente from "@/core/Cliente"
import { useState } from "react"
import Botao from "./Botao"

interface FormularioProps{
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props:FormularioProps){
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setidade] = useState(props.cliente?.idade ?? 0)
     return(
        <div>
            {id ? (
                <Entrada 
                valor={id}
                texto="Código"
                somenteLeitura
                className="mb-5"
                />
            ) : false}
            <Entrada
            texto="Nome"
            valor={nome}
            valorMudou={setNome}
            className="mb-5"
            />

            <Entrada
            tipo="number"
            texto="Idade"
            valor={idade}
            valorMudou={setidade}/>

            <div className="flex justify-end mt-7">
                <Botao cor="blue" className="mr-2"
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>Cancelar</Botao>
            </div>
        </div>
    )
}