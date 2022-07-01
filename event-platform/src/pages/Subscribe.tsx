import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import ProjectImg from "../assets/code-mockup.png"

export function Subscriber() {
  const navigate = useNavigate();  

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, {loading}] = useCreateSubscriberMutation();

  async function hadleSubscribe(e: FormEvent) {
    e.preventDefault();

    await createSubscriber({
      variables:{
        name,
        email
      }
    });

    navigate('/event');
  }

  return(
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col align-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-10 mx-auto md:flex-col">
        
        <div className="max-w-[640px] md:p-2 md:mb-3 xl:ml-5">
          <div className="md:flex md:justify-center" >
            <Logo />          
          </div>          
          <h1 className="mt-8 text-[2.5rem] leading-tight md:text-[1.5rem]">
            Construa uma <strong className="text-blue-500"> aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
            </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded ml-6 md:mb-3 xl:mr-5">
          <strong className="text-2xl mb-6 block md:text-xl">
            Escreva-se gratuitamente
          </strong>

          <form onSubmit={hadleSubscribe} className="flex flex-col gap-2 w-full">
            <input 
              type="text"
              placeholder="Seu nome completo" 
              className="bg-gray-900 rounded px-5 h-14"
              onChange={event => setName(event.target.value)}
            />            
            <input 
              type="email" 
              placeholder="Digite seu email" 
              className="bg-gray-900 rounded px-5 h-14"
              onChange={event => setEmail(event.target.value)}
            />

            <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50">
              Garantir minha vaga
            </button>
          </form>
        </div>

      </div>     
      <img src={ProjectImg} className="mt-5"  alt=""/>     
    </div>

  )
}