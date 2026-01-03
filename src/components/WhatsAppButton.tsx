import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '237699000000'; // Replace with actual number
  const message = encodeURIComponent('Bonjour, je souhaite avoir plus d\'informations sur BM Academy Sport Yaoundé.');
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
}
