    import Image from '../assets/images/image.svg'

    function Main(){
        return<div className="grid grid-cols-2">
            <div className="flex flex-col items-center justify-center h-screen bg-[#110782]" style={{ backgroundImage: "radial-gradient(circle at center, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%)", padding: "20px" }}>
                <div className="flex items-center justify-center mb-10">
                    <a className="text-5xl text-white">Olá! Seja bem vindo</a>
                </div>
                <div>
                    <img className="w-[36rem]" src={Image} alt="Imagem" />
                </div>
            </div>
            <div className='flex flex-col mt-24'>
                    <div className='flex flex-col items-center'>
                        <a className="inline-block text-5xl">Delli Contabilidade</a>
                    </div>     
                    <div>
                        <div className='ml-44 w-80 h-1 border-t-2 border-[#0D125C] my-2'></div>
                        <div className="ml-44 w-60 h-1 border-t-2 border-[#636CE1] my-2"></div>            
                    </div>
                <div className='flex flex-col items-center justify-center mt-20 border-2 border-black w-[410px] mx-auto rounded-md'>
                    <a className='text-xl font-semibold py-7'>Login</a>
                    <div className='flex flex-col'>
                        <input className='w-80 h-10 border border-black'></input>
                        <a>Matrícula</a>
                    </div>
                    <div className='flex flex-col py-7'>
                        <input className='w-80 h-10 border border-black'></input>
                        <a>Senha</a>
                    </div>
                    <div className='flex flex-row mb-7'>
                        <button className='w-32 h-10 bg-[#1CCB00] rounded-md text-white text-xl mr-10'>Entrar</button>
                        <button className='text-[#636CE1] text-xs'>Precisa de ajuda? Clique Aqui</button>
                    </div>
                </div>
                <div className='flex flex-row justify-between px-5 mt-[140px]'>
                    <a className='text-xs'>Delli Contabilidade & Cia | Todos os Direitos Reservados 2023</a>
                    <a className='text-xs
                    '>ADS Solutions</a>
                </div>
            </div>
        </div>
    }

    export default Main;