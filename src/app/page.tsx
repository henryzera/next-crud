"use client"

import Image from "next/image";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import { useEffect, useState } from "react";
import ClienteRepositorio from "@/core/ClientRepositorio";
import ColecaoCliente from "@/backend/db/ColecaoCliente";

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  useEffect( obterTodos, [])

  function obterTodos(){
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })
  }

  const clienteSelecionado = (cliente: Cliente) =>{
    setCliente(cliente)
    setVisivel('form')
  }

  const clienteExcluido = async (cliente: Cliente) =>{
    await repo.excluir(cliente)
    obterTodos()
    console.log(`Excluir... ${cliente.nome}`)
  }

  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  return (
    <div className='
      flex justify-center items-center h-screen
      bg-gradient-to-r from-[#4b6cb7] to-[#182848]
      text-white
    '>
      <Layout titulo="Cadastro Simples">
        { visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao 
                onClick={novoCliente}
                className="mb-4" 
                cor="blue">
                  Novo Cliente
              </Botao>
            </div>
            <Tabela clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} clientes={clientes} ></Tabela>
          </>
        ) :
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        }
      </Layout>
    </div>
  );
}
