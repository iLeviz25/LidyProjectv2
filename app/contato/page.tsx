'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Send, CheckCircle } from 'lucide-react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoServico: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        tipoServico: '',
        mensagem: ''
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white to-[#F8F8F8] pt-24">
        <div className="container-custom text-center">
          <h1 className="text-hero font-bold text-[#1E1E1E] mb-6">
            Vamos conversar?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato conosco e vamos transformar suas ideias em um projeto arquitetônico incrível. 
            Estamos prontos para ajudar você a realizar seus sonhos.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-section-title font-bold text-[#1E1E1E] mb-4">
                  Solicite seu orçamento
                </h2>
                <p className="text-lg text-gray-600">
                  Preencha o formulário abaixo com as informações do seu projeto e entraremos em contato 
                  em até 24 horas com uma proposta personalizada.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-green-50 p-8 rounded-2xl text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Mensagem enviada com sucesso!
                  </h3>
                  <p className="text-green-700">
                    Recebemos sua solicitação e entraremos em contato em até 24 horas. 
                    Obrigada pelo interesse em nossos serviços!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-[#1E1E1E] mb-2">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B61FF] focus:border-transparent transition-all duration-300"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-[#1E1E1E] mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B61FF] focus:border-transparent transition-all duration-300"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1E1E1E] mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B61FF] focus:border-transparent transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="tipoServico" className="block text-sm font-medium text-[#1E1E1E] mb-2">
                      Tipo de serviço
                    </label>
                    <select
                      id="tipoServico"
                      name="tipoServico"
                      value={formData.tipoServico}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B61FF] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="plantas">Plantas Executivas</option>
                      <option value="3d">Maquetes 3D</option>
                      <option value="renders">Renders Realistas</option>
                      <option value="completo">Projeto Completo</option>
                      <option value="consultoria">Consultoria</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-[#1E1E1E] mb-2">
                      Conte-nos sobre seu projeto *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B61FF] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Descreva seu projeto, suas necessidades, prazos e qualquer informação que considere importante..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensagem
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-section-title font-bold text-[#1E1E1E] mb-4">
                  Outras formas de contato
                </h2>
                <p className="text-lg text-gray-600">
                  Prefere falar conosco diretamente? Use qualquer um dos canais abaixo. 
                  Estamos sempre disponíveis para esclarecer dúvidas e ajudar você.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-[#F8F8F8] rounded-2xl">
                  <div className="w-12 h-12 bg-[#7B61FF]/10 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-[#7B61FF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1E1E1E] mb-2">E-mail</h3>
                    <p className="text-gray-600 mb-2">
                      Para orçamentos e informações gerais
                    </p>
                    <a 
                      href="mailto:contato@lcarq.com.br" 
                      className="text-[#7B61FF] font-medium hover:text-[#6B4EDF] transition-colors duration-300"
                    >
                      contato@lcarq.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-[#F8F8F8] rounded-2xl">
                  <div className="w-12 h-12 bg-[#7B61FF]/10 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-[#7B61FF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1E1E1E] mb-2">Telefone</h3>
                    <p className="text-gray-600 mb-2">
                      WhatsApp e ligações - Seg à Sex, 9h às 18h
                    </p>
                    <a 
                      href="tel:11999999999" 
                      className="text-[#7B61FF] font-medium hover:text-[#6B4EDF] transition-colors duration-300"
                    >
                      (11) 99999-9999
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-[#F8F8F8] rounded-2xl">
                  <div className="w-12 h-12 bg-[#7B61FF]/10 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-[#7B61FF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1E1E1E] mb-2">Localização</h3>
                    <p className="text-gray-600 mb-2">
                      Atendemos em toda a Grande São Paulo
                    </p>
                    <span className="text-[#7B61FF] font-medium">
                      São Paulo, SP
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-[#1E1E1E] mb-4">
                  Siga-nos nas redes sociais
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#7B61FF] rounded-xl flex items-center justify-center text-white hover:bg-[#6B4EDF] transition-all duration-300 hover:scale-105"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#7B61FF] rounded-xl flex items-center justify-center text-white hover:bg-[#6B4EDF] transition-all duration-300 hover:scale-105"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#7B61FF] rounded-xl flex items-center justify-center text-white hover:bg-[#6B4EDF] transition-all duration-300 hover:scale-105"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-[#F8F8F8]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title font-bold text-[#1E1E1E] mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Esclarecemos as principais dúvidas sobre nossos serviços e processo de trabalho.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'Quanto tempo leva para desenvolver um projeto?',
                answer: 'O prazo varia conforme a complexidade do projeto. Plantas executivas ficam prontas em 7-15 dias, maquetes 3D em 5-10 dias e renders em 3-7 dias. Sempre cumprimos os prazos acordados.'
              },
              {
                question: 'Vocês atendem em outras cidades além de São Paulo?',
                answer: 'Sim! Trabalhamos remotamente e atendemos clientes de todo o Brasil. Todo o processo pode ser feito online, com reuniões por videoconferência.'
              },
              {
                question: 'Como funciona o processo de pagamento?',
                answer: 'Trabalhamos com 50% na contratação e 50% na entrega final. Aceitamos PIX, transferência bancária e cartão de crédito.'
              },
              {
                question: 'Fazem alterações após a entrega?',
                answer: 'Sim, oferecemos até 2 rodadas de alterações sem custo adicional. Revisões extras são cobradas conforme a complexidade.'
              },
              {
                question: 'Quais arquivos são entregues no projeto?',
                answer: 'Entregamos arquivos em DWG (AutoCAD), PDF de alta qualidade, e para renders, imagens em alta resolução (JPG/PNG).'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-[#1E1E1E] mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}