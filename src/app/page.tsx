"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, useToast } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import {LoadingContext} from "@/Contexts/Loading/LoadingContext";


export default function Login() {

  const { loading, setLoading } = useContext(LoadingContext)!;
  
  const toast = useToast();
  const router = useRouter();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

 function validateLogin(){
  
    if(user == "" || pwd == ""){
      toast({
        title: "Preencha os campos.",
        status: "error",
        duration: 2500,
        isClosable: true,
        position: "top"
      });
      return;
    }

    if(user != "msantong" || pwd != "123"){
      setLoading(true);
     setTimeout(() => {
        toast({
          title: "Erro ao efetuar login.",
          description: "Usuário ou senha incorretos.",
          status: "error",
          duration: 2500,
          isClosable: true,
          position: "top"
        });
        setLoading(false);
      }, 1300);

      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/magic-search");
    }, 1300);

  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 ">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <Link href={"/"}>
                <Image
                  src="/logo.svg"
                  width={248}
                  height={54}
                  alt=""
                  priority={true}
                ></Image>
              </Link>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Usuário"
                  value={user}
                  onChange={(e) => setUser(e.target.value)} />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Usuário</label>
                </div>
                <div className="relative">
                  <input id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Senha"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)} /> 
                  <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Senha</label>
                </div>

                <div className="relative flex justify-center">
                  <Link href={"/register"}>
                    <p className="text-green-500 hover:text-green-700 text-sm">Não tem uma conta? Cadastre-se</p>
                    </Link>
                </div>


                <div className="relative flex justify-end">
                  <Button className="bg-green-500 text-white rounded-md px-4 py-1"
                  onClick={validateLogin}>Entrar</Button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

