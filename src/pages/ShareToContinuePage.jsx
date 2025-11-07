import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ShareToContinuePage = () => {
  const navigate = useNavigate();
  const [shareCount, setShareCount] = useState(0);
  const REQUIRED_CLICKS = 1;

  const progressPercent = useMemo(() => {
    if (shareCount >= REQUIRED_CLICKS) return 100;
    return Math.min(Math.round((shareCount / REQUIRED_CLICKS) * 100), 100);
  }, [shareCount]);

  const progressMessage = useMemo(() => {
    if (shareCount === 0) {
      return 'Compartilhe com 5 amigos ou 1 grupo para desbloquear a próxima etapa.';
    }

    if (shareCount < REQUIRED_CLICKS) {
      return 'Perfeito! Só mais uma partilha para concluir.';
    }

    return 'Ótimo! Obrigado por compartilhar — seu progresso chegou a 100%.';
  }, [shareCount]);

  const shareMessage = useMemo(
    () =>
      'É real! Acabei de clicar e ganhei um bônus em dinheiro! É super fácil e recomendo muito que você experimente! Não perca! https://milionariorapido.onrender.com',
    []
  );

  const handleShare = useCallback(
    (platform) => {
      const encoded = encodeURIComponent(shareMessage);

      if (platform === 'whatsapp') {
        window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank', 'noopener');
      }

      if (platform === 'messenger') {
        const baseLink = 'https://milionariorapido.onrender.com';
        const messengerUrl = `fb-messenger://share/?link=${encodeURIComponent(
          baseLink
        )}&app_id=123456789&text=${encoded}`;
        const shareDialogUrl = `https://www.facebook.com/dialog/share?app_id=123456789&display=popup&href=${encodeURIComponent(
          baseLink
        )}&quote=${encoded}&redirect_uri=${encodeURIComponent(baseLink)}`;

        const newWindow = window.open(messengerUrl, '_blank', 'noopener');
        if (!newWindow) window.open(shareDialogUrl, '_blank', 'noopener');
      }

      setShareCount(() => REQUIRED_CLICKS);
    },
    [shareMessage]
  );

  const handleContinue = useCallback(() => {
    if (shareCount >= REQUIRED_CLICKS) {
      navigate('/checkout');
    }
  }, [navigate, shareCount]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <motion.div
        className="text-center py-8 px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Partilhe para Continuar</h2>
        <p className="text-gray-600">Compartilhe com seus amigos e grupos para concluir o processo.</p>
      </motion.div>

      <motion.div
        className="flex-1 px-6 flex flex-col justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="max-w-md mx-auto border border-gray-100 rounded-3xl p-8 shadow-xl bg-white/95 backdrop-blur-sm flex flex-col gap-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-3">
            <Button
              onClick={() => handleShare('whatsapp')}
              className="w-full bg-[#25D366] hover:bg-[#1da955] text-white font-bold py-3 px-4 rounded-2xl text-base shadow-md"
            >
              Partilhar via WhatsApp
            </Button>
            <Button
              onClick={() => handleShare('messenger')}
              className="w-full text-white font-bold py-3 px-4 rounded-2xl text-base shadow-md"
              style={{ background: 'linear-gradient(45deg, #0084ff, #c21aff)' }}
            >
              Partilhar via Messenger
            </Button>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 text-center shadow-sm">
            <p className="text-sm font-semibold text-yellow-800 leading-relaxed">{progressMessage}</p>
          </div>

          <div className="space-y-3">
            <div className="w-full h-3.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-400 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-sm text-gray-500 text-center">
              {progressPercent}% concluído • {shareCount}/{REQUIRED_CLICKS} partilhas
            </p>
          </div>

          <Button
            onClick={handleContinue}
            disabled={shareCount < REQUIRED_CLICKS}
            className={`w-full font-bold py-3 px-4 rounded-2xl text-base shadow-lg transition-all duration-300 ${
              shareCount >= REQUIRED_CLICKS
                ? 'bg-yellow-400 hover:bg-yellow-500 text-black'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continuar
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ShareToContinuePage;

