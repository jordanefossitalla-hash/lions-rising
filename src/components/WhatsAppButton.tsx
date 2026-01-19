export function WhatsAppButton() {
  const phoneNumber = '237621721892';
  const message = encodeURIComponent('Bonjour, je souhaite avoir plus d\'informations sur BM Academy Sport Yaoundé.');
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Contactez-nous sur WhatsApp"
      title="Discuter sur WhatsApp"
    >
      {/* Official WhatsApp Logo SVG */}
      <svg 
        viewBox="0 0 32 32" 
        className="w-7 h-7 sm:w-8 sm:h-8"
        fill="white"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958C9.726 30.862 12.764 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.484 22.604c-.396 1.116-1.956 2.042-3.216 2.312-.862.184-1.986.33-5.772-1.24-4.846-2.008-7.962-6.934-8.204-7.254-.232-.32-1.946-2.59-1.946-4.942 0-2.35 1.232-3.506 1.67-3.984.396-.432 1.042-.628 1.66-.628.202 0 .384.01.548.018.476.02.716.05 1.03.798.396.936 1.358 3.306 1.476 3.548.12.242.232.56.066.878-.156.328-.272.532-.544.814-.27.282-.528.498-.798.802-.242.27-.514.558-.214 1.034.3.466 1.334 2.2 2.862 3.564 1.972 1.758 3.582 2.326 4.138 2.57.396.174.868.136 1.178-.194.388-.416.868-1.106 1.356-1.786.348-.484.786-.544 1.222-.368.444.166 2.804 1.322 3.284 1.564.48.242.798.358.916.562.116.204.116 1.186-.28 2.302z"/>
      </svg>
      
      {/* Tooltip on hover - hidden on mobile */}
      <span className="hidden sm:block absolute right-full mr-3 px-3 py-2 bg-primary text-secondary text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        Discuter avec nous
        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-primary rotate-45" />
      </span>
      
      {/* Pulse ring animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  );
}
