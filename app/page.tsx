'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, DraftingCompass as Drafting, Box, Camera, Check, Star, Users } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-[#F8F8F8] pt-20">
        <div className="container-custom text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-hero font-bold text-[#1E1E1E] mb-6 leading-tight">
              Seu projeto começa com{' '}
              <span className="text-gradient">um traço</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transformamos suas ideias em realidade através de plantas executivas precisas, 
              maquetes 3D detalhadas e renders que capturam cada detalhe do seu sonho.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/servicos" className="btn-primary text-lg px-8 py-4">
                Conheça nossos serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/contato" className="btn-secondary text-lg px-8 py-4">
                Solicite um orçamento
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title font-bold text-[#1E1E1E] mb-4">
              O que fazemos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em arquitetura, desde o conceito inicial até a visualização final do seu projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plantas Executivas */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-[#7B61FF]/10 rounded-xl flex items-center justify-center mb-6">
                <Drafting className="h-8 w-8 text-[#7B61FF]" />
              </div>
              <h3 className="text-card-title font-bold text-[#1E1E1E] mb-4">
                Plantas Executivas
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Plantas técnicas detalhadas e precisas, prontas para execução. 
                Cada medida, cada detalhe pensado para facilitar a construção do seu projeto.
              </p>
              <Link 
                href="/servicos" 
                className="inline-flex items-center text-[#7B61FF] font-medium hover:text-[#6B4EDF] transition-colors duration-300"
              >
                Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Modelos 3D */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-[#7B61FF]/10 rounded-xl flex items-center justify-center mb-6">
                <Box className="h-8 w-8 text-[#7B61FF]" />
              </div>
              <h3 className="text-card-title font-bold text-[#1E1E1E] mb-4">
                Modelos 3D
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Maquetes digitais tridimensionais que permitem visualizar seu projeto 
                de todos os ângulos antes mesmo da construção começar.
              </p>
              <Link 
                href="/servicos" 
                className="inline-flex items-center text-[#7B61FF] font-medium hover:text-[#6B4EDF] transition-colors duration-300"
              >
                Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Renders Realistas */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-[#7B61FF]/10 rounded-xl flex items-center justify-center mb-6">
                <Camera className="h-8 w-8 text-[#7B61FF]" />
              </div>
              <h3 className="text-card-title font-bold text-[#1E1E1E] mb-4">
                Renders Realistas
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Imagens fotorrealistas dos seus ambientes, com iluminação natural, 
                texturas autênticas e acabamentos que parecem fotografias reais.
              </p>
              <Link 
                href="/servicos" 
                className="inline-flex items-center text-[#7B61FF] font-medium hover:text-[#6B4EDF] transition-colors duration-300"
              >
                Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-[#F8F8F8]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-section-title font-bold text-[#1E1E1E]">
                Criatividade com responsabilidade
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Sou uma arquiteta apaixonada por transformar sonhos em projetos tangíveis. 
                Com foco na pontualidade, qualidade e atenção aos detalhes, desenvolvo soluções 
                arquitetônicas que unem funcionalidade e beleza.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cada projeto é único e merece um tratamento personalizado. Por isso, trabalho 
                próxima aos meus clientes, entendendo suas necessidades e superando expectativas 
                com entregas pontuais e comunicação clara.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#7B61FF] rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium text-[#1E1E1E]">Entrega pontual</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#7B61FF] rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium text-[#1E1E1E]">Qualidade premium</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#7B61FF] rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium text-[#1E1E1E]">Atendimento personalizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#7B61FF] rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium text-[#1E1E1E]">Projetos funcionais</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Arquiteta sorrindo com capacete e plantas"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#7B61FF] rounded-2xl"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#7B61FF]/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[#7B61FF] to-[#9B7EFF] text-white">
        <div className="container-custom text-center">
          <h2 className="text-section-title font-bold mb-6">
            Transforme sua ideia em um projeto real
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Vamos conversar sobre o seu projeto? Solicite um orçamento sem compromisso 
            e descubra como podemos tornar sua visão realidade.
          </p>
          <Link href="/contato" className="inline-flex items-center bg-white text-[#7B61FF] px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
            Fale conosco
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}