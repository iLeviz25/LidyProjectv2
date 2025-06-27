'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, MessageCircle, Award, Target, Heart, Users, ArrowRight } from 'lucide-react';

export default function Sobre() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white to-[#F8F8F8] pt-24">
        <div className="container-custom text-center">
          <h1 className="text-hero font-bold text-[#1E1E1E] mb-6">
            Sobre a LCArq
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça a história, valores e diferenciais que fazem da LCArq uma referência 
            em projetos arquitetônicos personalizados.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-section-title font-bold text-[#1E1E1E]">
                Uma paixão que virou profissão
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Sou Letícia Costa, arquiteta formada com especialização em projetos residenciais 
                e comerciais. Minha jornada começou com o fascínio pela capacidade da arquitetura 
                de transformar espaços e, consequentemente, vidas.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Com mais de 5 anos de experiência, desenvolvi uma metodologia própria que combina 
                técnica apurada, comunicação clara e foco total na satisfação do cliente. Cada projeto 
                é uma oportunidade de criar algo único e funcional.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Acredito que um bom projeto arquitetônico vai além da estética: deve ser funcional, 
                sustentável e refletir a personalidade de quem vai habitá-lo. Por isso, dedico tempo 
                para conhecer cada cliente e entender suas necessidades reais.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contato" className="btn-primary inline-flex items-center">
                  Vamos conversar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/servicos" className="btn-secondary inline-flex items-center">
                  Ver serviços
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Arquiteta Letícia Costa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#7B61FF] rounded-2xl"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#7B61FF]/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-[#F8F8F8]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title font-bold text-[#1E1E1E] mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Princípios que norteiam cada projeto e garantem a excelência em todos os nossos serviços.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center card-hover">
              <div className="w-16 h-16 bg-[#7B61FF]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-[#7B61FF]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E1E1E] mb-4">
                Pontualidade
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cumprimos rigorosamente os prazos estabelecidos. Seu tempo é valioso, 
                e respeitamos cada compromisso assumido.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center card-hover">
              <div className="w-16 h-16 bg-[#7B61FF]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-[#7B61FF]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E1E1E] mb-4">
                Comunicação Clara
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Mantemos você informado em cada etapa do projeto, com linguagem acessível 
                e feedback constante sobre o desenvolvimento.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center card-hover">
              <div className="w-16 h-16 bg-[#7B61FF]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-[#7B61FF]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E1E1E] mb-4">
                Excelência
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Buscamos a perfeição em cada detalhe, desde o primeiro traço até a entrega final. 
                Qualidade premium é nosso padrão.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center card-hover">
              <div className="w-16 h-16 bg-[#7B61FF]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-[#7B61FF]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E1E1E] mb-4">
                Foco no Cliente
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cada projeto é único porque cada cliente é único. Suas necessidades e sonhos 
                são o centro de todo nosso processo criativo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center card-hover">
              <div className="w-16 h-16 bg-[#7B61FF]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-[#7B61FF]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E1E1E] mb-4">
                Paixão
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Amamos o que fazemos e isso se reflete em cada projeto. Nossa paixão pela 
                arquitetura impulsiona a busca constante por inovação.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center card-hover">
              <div className="w-16 h-16 bg-[#7B61FF]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-[#7B61FF]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E1E1E] mb-4">
                Parceria
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Mais que prestadores de serviço, somos seus parceiros na realização do sonho. 
                Estamos juntos desde a ideia até a execução.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title font-bold text-[#1E1E1E] mb-4">
              Como trabalhamos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Um processo estruturado e transparente que garante resultados excepcionais 
              em cada projeto desenvolvido.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Briefing',
                description: 'Conversamos sobre suas necessidades, gostos e orçamento disponível.'
              },
              {
                step: '02',
                title: 'Desenvolvimento',
                description: 'Criamos o projeto seguindo suas especificações e nossa expertise técnica.'
              },
              {
                step: '03',
                title: 'Apresentação',
                description: 'Apresentamos o projeto completo com todas as visualizações e detalhes.'
              },
              {
                step: '04',
                title: 'Entrega',
                description: 'Finalizamos com todos os arquivos organizados e suporte pós-entrega.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#7B61FF] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#1E1E1E] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[#7B61FF] to-[#9B7EFF] text-white">
        <div className="container-custom text-center">
          <h2 className="text-section-title font-bold mb-6">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Estou ansiosa para conhecer seu projeto e ajudar você a transformar suas ideias 
            em um projeto arquitetônico incrível.
          </p>
          <Link href="/contato" className="inline-flex items-center bg-white text-[#7B61FF] px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
            Iniciar meu projeto
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}