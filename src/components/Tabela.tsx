import Cliente from "@/core/Cliente"
import { EditIcon, DeleteIcon } from "./Icones"

interface TabelaProps{
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps){

    const actions = props.clienteExcluido || props.clienteSelecionado

    function headRender(){
        return(
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                { actions ? <th className="text-center">Ações</th> : false}
            </tr>
        )
    }

    function clientsRender(clients: Cliente[]){
        return clients?.map((client:Cliente, i:number)=>{
            return(
                <tr className={i % 2 == 0 ? 'bg-gray-200' : 'bg-gray-100'} key={client.id}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.nome}</td>
                    <td className="text-left p-4">{client.idade}</td>
                    {actionsRender(client)}
                </tr>
            )
        })
    }

    function actionsRender(client: Cliente){
        return(
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(client)} className="
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    ">
                        {EditIcon}
                    </button>
                ) : false}

                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(client)} className="
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-purple-50
                    ">
                        {DeleteIcon}
                    </button>
                ) : false}
                
            </td>
        )
    }

    return(
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="
                text-gray-100
                bg-gradient-to-r from-[#0847dc] to-[#0e2a62]
            ">
                {headRender()}
            </thead>
            <tbody className="">
                {clientsRender(props.clientes)}
            </tbody>
        </table>
    )
}