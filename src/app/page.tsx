"use client"

import Image from "next/image";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import { useState } from "react";

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazrio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4')
  ]

const clienteSelecionado = (cliente: Cliente) =>{
  setCliente(cliente)
  setVisivel('form')
}

const clienteExcluido = (cliente: Cliente) =>{
  console.log(`Excluir... ${cliente.nome}`)
}

function salvarCliente(cliente: Cliente){
  console.log(cliente)
  setTimeout(()=>{setVisivel('tabela')}, 200)
}

function novoCliente(){
  setCliente(Cliente.vazrio())
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
