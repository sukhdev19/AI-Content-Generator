import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden p-6">
      {/* Background Black Hole Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20"></div>

      {/* Twinkling Stars Effect */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-50 animate-twinkle"></div>
      
      {/* Cosmic Swirl Elements */}
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-gradient-to-r from-purple-700 via-indigo-800 to-black opacity-40 filter blur-2xl animate-spin-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-pink-700 via-purple-600 to-indigo-800 opacity-50 filter blur-3xl animate-spin-slow delay-200"></div>

      {/* Login Card */}
      <div className="relative z-10 bg-opacity-90 bg-gradient-to-r from-black via-gray-900 to-black rounded-3xl shadow-2xl p-10 max-w-lg w-full transform transition-all hover:scale-105 duration-300 ease-out">
        <h2 className="text-5xl font-extrabold text-white text-center mb-4">
          Welcome Back
        </h2>
        <p className="text-center text-indigo-300 font-semibold mb-8 text-lg">
          Log in to continue exploring the AI-CONTENT-GENERATOR
        </p>

        {/* Clerk SignIn Component with Tailored Appearance */}
        <SignIn
          appearance={{
            elements: {
              card: "shadow-none",
              formButtonPrimary:
                "bg-indigo-600 hover:bg-white-700 text-white font-bold py-3 px-4 rounded-full transition-all duration-200",
              formFieldLabel: "font-semibold text-black-600 text-xl",
              formFieldInput:
                "border-gray-700 bg-white-900 text-white placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-lg p-3 text-lg",
              socialButton:
                "bg-indigo-700 hover:bg-indigo-600 rounded-full shadow-lg py-2 px-4 flex items-center justify-center transition-all duration-200 text-white font-bold",
            },
          }}
        />
      </div>
    </div>
  );
}
