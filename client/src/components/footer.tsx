import { Shield, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black-deep py-12 border-t border-gold">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="text-gold text-2xl" />
              <span className="text-xl font-orbitron font-bold text-gold">Kenylson-Tech</span>
            </div>
            <p className="text-gray-300 text-sm">
              Soluções tecnológicas avançadas para sua segurança e proteção digital.
            </p>
          </div>
          
          <div>
            <h3 className="text-gold font-orbitron font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#services" className="hover:text-gold">Segurança Eletrônica</a></li>
              <li><a href="#services" className="hover:text-gold">Informática</a></li>
              <li><a href="#services" className="hover:text-gold">Cyber Segurança</a></li>
              <li><a href="#services" className="hover:text-gold">Projetos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gold font-orbitron font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>(11) 9999-9999</li>
              <li>contato@kenylson-tech.com</li>
              <li>Rua da Tecnologia, 123</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gold font-orbitron font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gold hover:text-gold-light text-xl">
                <Facebook />
              </a>
              <a href="#" className="text-gold hover:text-gold-light text-xl">
                <Instagram />
              </a>
              <a href="#" className="text-gold hover:text-gold-light text-xl">
                <Linkedin />
              </a>
              <a href="#" className="text-gold hover:text-gold-light text-xl">
                <MessageCircle />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gold mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Kenylson-Tech. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
