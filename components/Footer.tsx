import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#7B61FF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">LC</span>
              </div>
              <span className="text-2xl font-bold">LCArq</span>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              Projetos com propósito e precisão. Transformamos suas ideias em realidade através de plantas executivas, maquetes 3D e renders realistas.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#7B61FF]/20 rounded-lg flex items-center justify-center hover:bg-[#7B61FF] transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#7B61FF]/20 rounded-lg flex items-center justify-center hover:bg-[#7B61FF] transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#7B61FF]/20 rounded-lg flex items-center justify-center hover:bg-[#7B61FF] transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <div className="space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-[#7B61FF] transition-colors duration-300">
                Home
              </Link>
              <Link href="/servicos" className="block text-gray-300 hover:text-[#7B61FF] transition-colors duration-300">
                Serviços
              </Link>
              <Link href="/sobre" className="block text-gray-300 hover:text-[#7B61FF] transition-colors duration-300">
                Sobre
              </Link>
              <Link href="/contato" className="block text-gray-300 hover:text-[#7B61FF] transition-colors duration-300">
                Contato
              </Link>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-[#7B61FF]" />
                <span className="text-gray-300">contato@lcarq.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-[#7B61FF]" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#7B61FF] mt-1" />
                <span className="text-gray-300">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 LCArq. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-center md:text-right">
              Desenvolvido com ❤️ para transformar sonhos em projetos reais.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;