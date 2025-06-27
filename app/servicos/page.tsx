'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { DraftingCompass as Drafting, Box, Camera, ArrowRight, Check } from 'lucide-react';

export default function Servicos() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white to-[#F8F8F8] pt-24">
        <div className="container-custom text-center">
          <h1 className="text-hero font-bold text-[#1E1E1E] mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em arquitetura, desde plantas técnicas detalhadas 
            até visualizações fotorrealistas do seu projeto.
          </p>
        </div>
      </section>

      {/* Plantas Executivas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#7B61FF]/10 rounded-xl flex items-center justify-center">
                  <Drafting className="h-8 w-8 text-[#7B61FF]" />
                </div>
                <h2 className="text-section-title font-bold text-[#1E1E1E]">
                  Plantas Executivas
                </h2>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Desenvolvimento de plantas técnicas precisas e detalhadas, prontas para execução. 
                Cada projeto é elaborado seguindo as normas técnicas e considerando todos os aspectos construtivos.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#1E1E1E]">O que incluímos:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Planta baixa com dimensões',
                    'Plantas de layout',
                    'Plantas de piso e forro',
                    'Plantas de iluminação',
                    'Plantas hidráulicas',
                    'Plantas elétricas',
                    'Cortes e elevações',
                    'Detalhamentos técnicos'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-[#7B61FF]" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link href="/contato" className="btn-primary inline-flex items-center">
                Solicitar orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/8292810/pexels-photo-8292810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Plantas executivas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modelos 3D */}
      <section className="section-padding bg-[#F8F8F8]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="https://images.pexels.com/photos/7578968/pexels-photo-7578968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Modelos 3D"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#7B61FF]/10 rounded-xl flex items-center justify-center">
                  <Box className="h-8 w-8 text-[#7B61FF]" />
                </div>
                <h2 className="text-section-title font-bold text-[#1E1E1E]">
                  Maquetes 3D
                </h2>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Criação de maquetes digitais tridimensionais que permitem visualizar cada detalhe 
                do seu projeto antes da execução. Ideal para apresentações e aprovações.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#1E1E1E]">Benefícios dos modelos 3D:</h3>
                <div className="space-y-3">
                  {[
                    'Visualização completa do projeto',
                    'Análise de volumes e proporções',
                    'Detecção de possíveis problemas',
                    'Facilita comunicação com clientes',
                    'Auxilia na tomada de decisões',
                    'Apresentações profissionais'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-[#7B61FF]" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link href="/contato" className="btn-primary inline-flex items-center">
                Solicitar orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Renders Realistas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#7B61FF]/10 rounded-xl flex items-center justify-center">
                  <Camera className="h-8 w-8 text-[#7B61FF]" />
                </div>
                <h2 className="text-section-title font-bold text-[#1E1E1E]">
                  Renders Realistas
                </h2>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Imagens fotorrealistas que mostram exatamente como ficará seu projeto finalizado. 
                Com iluminação natural, texturas autênticas e acabamentos detalhados.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#1E1E1E]">Características dos nossos renders:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Qualidade fotorrealística',
                    'Iluminação natural',
                    'Texturas autênticas',
                    'Cores fiéis aos materiais',
                    'Diferentes ângulos',
                    'Ambientação completa',
                    'Alta resolução',
                    'Entrega rápida'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-[#7B61FF]" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link href="/contato" className="btn-primary inline-flex items-center">
                Solicitar orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/6782351/pexels-photo-6782351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Renders realistas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[#7B61FF] to-[#9B7EFF] text-white">
        <div className="container-custom text-center">
          <h2 className="text-section-title font-bold mb-6">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato conosco e receba um orçamento personalizado para seu projeto. 
            Estamos prontos para transformar suas ideias em realidade.
          </p>
          <Link href="/contato" className="inline-flex items-center bg-white text-[#7B61FF] px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
            Solicitar orçamento
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}