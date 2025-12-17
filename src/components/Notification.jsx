'use client';

import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Notification = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md border border-white/20 min-w-[320px] ${
            type === 'success' ? 'bg-[#6D3078] text-white' : 'bg-[#F47E4D] text-white'
          }`}
        >
          {type === 'success' ? <CheckCircle size={24} /> : <AlertCircle size={24} />}
          <div className="flex-1">
            <h4 className="font-bold text-lg">{type === 'success' ? 'Success' : 'Attention'}</h4>
            <p className="text-sm opacity-90">{message}</p>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-full transition-colors">
            <X size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
