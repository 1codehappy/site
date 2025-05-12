'use client'

import { useEffect } from 'react'

// Componente cliente para detecção e configuração de idioma
export default function LanguageDetector() {
  useEffect(() => {
    // Executa apenas no cliente após a hidratação estar completa
    const userLang = navigator.language || '';
    const isBrazil = userLang.includes('pt-BR') || userLang.includes('pt');
    
    // Define o idioma padrão com base na localização
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', isBrazil ? 'pt-BR' : 'en');
    }
    
    // Obtém a preferência armazenada
    const storedLang = localStorage.getItem('language') || 'en';
    
    // Define o atributo lang do html com base na preferência armazenada
    document.documentElement.lang = storedLang;
    
    console.log('Detector de idioma carregado. Idioma definido:', storedLang);
  }, []);
  
  // Componente não renderiza nada visualmente
  return null;
}
