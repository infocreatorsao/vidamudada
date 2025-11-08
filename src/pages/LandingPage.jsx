import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/identificacao');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <motion.header
        className="text-center py-8 px-6"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-3xl font-black text-black">cupom</h1>
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center ml-1">
            <span className="text-black font-bold text-sm">$</span>
          </div>
          <span className="text-sm font-medium text-gray-600 block leading-tight ml-2">DA VEZ</span>
        </div>
      </motion.header>

      {/* Hero & Intro */}
      <motion.section
        className="px-6 flex-1 flex flex-col justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="max-w-md mx-auto w-full text-center space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-gray-900">Bem-vindo!</h2>
            <h3 className="text-2xl font-semibold text-gray-900">
              Que tal fazermos uma renda extra juntos?
            </h3>
          </div>

          <motion.p
            className="text-md font-semibold text-gray-800"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            😄 Mais de <span className="font-bold">3.600 angolanos</span> já lucraram com o{' '}
            <span className="font-bold">Cupom da Vez!</span>
          </motion.p>

          <motion.div
            className="block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <img
              src="https://i.ibb.co/B5rqssH3/Captura-de-ecra-2025-11-08-a-s-07-35-41.png"
              alt="Captura-de-ecra-2025-11-08-a-s-07-35-41"
              border="0"
              className="rounded-2xl w-full shadow-md mx-auto"
            />
          </motion.div>

          <p className="text-gray-600 leading-relaxed">
            Descubra o segredo que está ajudando milhares de pessoas a ganhar dinheiro apenas
            digitando cupons de desconto de produtos famosos.
          </p>

          <div className="space-y-1 text-gray-700">
            <p>📜 É simples. 💬 É rápido.</p>
            <p>📱 E qualquer pessoa pode fazer — direto do telemóvel!</p>
          </div>

          <motion.div
            className="pt-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <p className="font-semibold text-gray-900 mb-3">
              👉 Quer participar e começar a ganhar também?
            </p>
            <Button
              onClick={handleStart}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-6 rounded-2xl text-lg shadow-lg transition"
            >
              Começar Agora
            </Button>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-2xl p-4 mt-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-600 font-bold text-sm">2</span>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-700">Realize seu saque</h4>
                  <p className="text-sm text-gray-500">
                    Aumente seu saldo para realizar seu primeiro saque.
                  </p>
                </div>
              </div>
              <span className="text-gray-400 text-lg">→</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Security Section */}
      <motion.section
        className="px-6 pb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="flex justify-center mb-4 space-x-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <Shield className="w-6 h-6 text-green-600" />
          </div>
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-red-600" />
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-bold text-gray-900 mb-2">Suas informações estão 100% protegidas!</h3>
          <p className="text-sm text-gray-600 mb-1">Este site é seguro e possui Certificado SSL.</p>
          <p className="text-sm text-gray-600">
            Sua privacidade é totalmente garantida por nossa política de segurança.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default LandingPage;