"use client"
import React from 'react'
import { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation' // ✅ App Router

const Login = () => {
  const{data:session}=useSession()
  if(session){
      const router=useRouter()
      router.push('/dashboard')
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img
      alt="Your Company"
      src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
      className="mx-auto h-10 w-auto"
    />
    <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
      Sign in to your account
    </h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-4">
    <button
      onClick={() => signIn("google")}
      className="flex items-center justify-center w-full rounded-md bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        className="w-5 h-5 mr-2"
      />
      Continue with Google
    </button>

    <button
     onClick={() => signIn("github")}
     
     className="flex items-center justify-center w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800"
    >
      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="white">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.083-.729.083-.729 1.205.084 1.838 1.24 1.838 1.24 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.236-3.22-.124-.304-.536-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.654 1.649.242 2.872.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.624-5.48 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
      Continue with GitHub
    </button>

  </div>
</div>

  )
}

export default Login