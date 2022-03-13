import React from 'react';
import{ getProviders, signIn as SignIntroProvider } from "next-auth/react";
import  Headers  from "../../components/Header"
function signIn({providers}) {
  return (
    <>
    <Headers />

    <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-6 px-14 text-center'>
    <img className='w-80' src="https://links.papareact.com/ocw" alt="" />
    <p className='font-xs italic'>
        This is not REAL app, is just a personal project!!!
    </p>
    

        <div className='mt-40'>
        {Object.values(providers).map((provider) => (
        <div key={provider.name}>
            <button className='p-3 bg-blue-500 rounded-lg text-white' onClick={() => SignIntroProvider(provider.id, { callbackUrl: "/"} )}>

            Sign in with {provider.name}
            </button>
        </div>
        ))}
        </div>
    </div>
    </>
  );
}

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signIn;