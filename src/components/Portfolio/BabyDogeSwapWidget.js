import React, { useEffect } from 'react';

const BabyDogeSwapWidget = () => {
  useEffect(() => {
    // Criação do elemento script
    const script = document.createElement('script');
    script.src = 'https://widget.babydogeswap.com/js/embed.js';
    script.crossOrigin = 'anonymous';
    script.id = 'babydoge-swap-widget';
    script.setAttribute('data-darktheme', 'true');
    script.setAttribute('data-highLight', '158DE8');
    script.setAttribute('data-backgroundColor', '06334B');
    script.setAttribute('data-inputColor', '000E17');
    script.setAttribute('data-textColor', 'FFFFFF');
    script.setAttribute('data-input', '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c');
    script.setAttribute('data-output', '0xc748673057861a797275CD8A068AbB95A902e8de');

    // Adiciona o script à página
    document.head.appendChild(script);

    // Limpeza do script quando o componente for desmontado (opcional)
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="babydogeswap-widget">
      <iframe
        title="BabyDogeSwap Widget"
        crossOrigin="anonymous"
        src="https://widget.babydogeswap.com/api/widget?darktheme=true&inputCurrency=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c&outputCurrency=0xc748673057861a797275CD8A068AbB95A902e8de&highLight=158DE8&backgroundColor=06334B&inputColor=000E17&textColor=FFFFFF"
      ></iframe>
    </div>
  );
  
};

export default BabyDogeSwapWidget;
