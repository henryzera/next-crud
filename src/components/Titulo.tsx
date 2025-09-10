interface PropsTitulo {
    children: any
}

export default function Titulo(props: PropsTitulo){
    return(
        <div className="flex flex-col justify-center">
            <h1 className="px-5 py-2">
                {props.children}
            </h1>
            <hr className="border-2 border-purple-500"/>
        </div>
    )
}
