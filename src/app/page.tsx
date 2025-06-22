import { Shield, Zap, Globe, Users, TrendingUp, CheckCircle, Wallet, TestTube, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function KwanzaCoinSite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50 border-red-500">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-400 via-red-500 to-red-600 rounded-full flex items-center justify-center border-2 border-red-500">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="text-2xl font-bold text-red-400">KwanzaCoin</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-gray-300 hover:text-red-400 transition-colors">
              Sobre
            </a>
            <a href="#caracteristicas" className="text-gray-300 hover:text-red-400 transition-colors">
              Características
            </a>
            <Link href="/comprar" className="text-gray-300 hover:text-red-400 transition-colors">
              Comprar
            </Link>
            <Link href="/testadores" className="text-gray-300 hover:text-red-400 transition-colors">
              Beta Test
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white">
                Entrar
              </Button>
            </Link>
            <Link href="/registro">
              <Button className="bg-red-600 hover:bg-red-700 border border-red-500 text-gray-100">Registrar</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 via-gray-800 to-slate-900">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-red-500 text-white hover:bg-red-400 font-bold">
            🚀 Plataforma Beta Disponível - 2024
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              KwanzaCoin
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            A primeira moeda virtual 100% angolana. Compre, teste e faça parte da revolução financeira digital de
            Angola.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/comprar">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 border-2 border-red-500"
              >
                <CreditCard className="mr-2 h-5 w-5" />
                Comprar KwanzaCoin
              </Button>
            </Link>
            <Link href="/testadores">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-bold"
              >
                <TestTube className="mr-2 h-5 w-5" />
                Ser Testador Beta
              </Button>
            </Link>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <Card className="bg-slate-800/60 border-2 border-red-400 hover:bg-slate-700/80 transition-colors">
              <CardHeader className="text-center">
                <Wallet className="h-8 w-8 text-red-400 mx-auto mb-2" />
                <CardTitle className="text-red-400">Criar Carteira</CardTitle>
                <CardDescription className="text-gray-300">
                  Crie sua carteira digital gratuita em segundos
                </CardDescription>
                <Link href="/registro">
                  <Button className="mt-4 bg-red-600 hover:bg-red-700 text-gray-100">Começar Agora</Button>
                </Link>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/60 border-2 border-red-400 hover:bg-slate-700/80 transition-colors">
              <CardHeader className="text-center">
                <CreditCard className="h-8 w-8 text-red-400 mx-auto mb-2" />
                <CardTitle className="text-red-400">Comprar Tokens</CardTitle>
                <CardDescription className="text-gray-300">Adquira KwanzaCoin com Kwanza ou cartão</CardDescription>
                <Link href="/comprar">
                  <Button className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold">Comprar Agora</Button>
                </Link>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/60 border-2 border-red-400 hover:bg-slate-700/80 transition-colors">
              <CardHeader className="text-center">
                <TestTube className="h-8 w-8 text-red-400 mx-auto mb-2" />
                <CardTitle className="text-red-400">Programa Beta</CardTitle>
                <CardDescription className="text-gray-300">
                  Teste recursos exclusivos e ganhe recompensas
                </CardDescription>
                <Link href="/testadores">
                  <Button className="mt-4 bg-red-600 hover:bg-red-700 text-gray-100">Participar</Button>
                </Link>
              </CardHeader>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
            <div className="text-center bg-slate-800/60 p-6 rounded-lg border border-red-400">
              <div className="text-3xl font-bold text-red-400">1M+</div>
              <div className="text-gray-300">Tokens Disponíveis</div>
            </div>
            <div className="text-center bg-slate-800/60 p-6 rounded-lg border border-red-400">
              <div className="text-3xl font-bold text-red-400">2.5K+</div>
              <div className="text-gray-300">Usuários Registrados</div>
            </div>
            <div className="text-center bg-slate-800/60 p-6 rounded-lg border border-red-400">
              <div className="text-3xl font-bold text-red-400">500+</div>
              <div className="text-gray-300">Testadores Beta</div>
            </div>
            <div className="text-center bg-slate-800/60 p-6 rounded-lg border border-red-400">
              <div className="text-3xl font-bold text-red-400">99.9%</div>
              <div className="text-gray-300">Uptime da Rede</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-4 bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-400 mb-4">O que é a KwanzaCoin?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A KwanzaCoin é uma criptomoeda desenvolvida especificamente para o mercado angolano, oferecendo uma
              solução digital segura, rápida e acessível para transações financeiras.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-6">Como Funciona</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-400">Registre-se na Plataforma</h4>
                    <p className="text-gray-300">Crie sua conta gratuita e configure sua carteira digital</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-400">Compre KwanzaCoin</h4>
                    <p className="text-gray-300">Adquira tokens usando Kwanza angolano ou cartão de crédito</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-400">Use e Teste</h4>
                    <p className="text-gray-300">Realize transações e participe do programa de testadores</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-red-600 text-gray-50 border border-red-500">
                  Blockchain Segura
                </Badge>
                <Badge variant="secondary" className="bg-red-500 text-white font-bold">
                  100% Angolana
                </Badge>
                <Badge variant="secondary" className="bg-slate-900 text-red-400 border border-red-600">
                  Beta Testing
                </Badge>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600 via-slate-800 to-slate-900 p-8 rounded-2xl border-2 border-red-500">
              <div className="w-full h-64 bg-gradient-to-br from-red-400 via-red-500 to-slate-900 rounded-xl flex items-center justify-center border-2 border-red-500">
                <div className="text-center">
                  <div className="w-20 h-20 bg-slate-900/40 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-red-500">
                    <span className="text-3xl font-bold text-red-400">K</span>
                  </div>
                  <div className="text-2xl font-bold text-red-400">KwanzaCoin</div>
                  <div className="text-sm text-gray-300">Moeda Virtual Angolana</div>
                  <div className="text-xs text-gray-400 mt-2">Versão Beta Disponível</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section id="caracteristicas" className="py-20 px-4 bg-gradient-to-b from-slate-900 via-gray-800 to-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-400 mb-4">Por que escolher a KwanzaCoin?</h2>
            <p className="text-xl text-gray-300">Tecnologia avançada com foco na realidade angolana</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-red-500 shadow-lg hover:shadow-xl transition-shadow bg-slate-800/60">
              <CardHeader>
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4 border border-red-500">
                  <Shield className="h-6 w-6 text-red-400" />
                </div>
                <CardTitle className="text-red-400">Segurança Máxima</CardTitle>
                <CardDescription className="text-gray-300">
                  Tecnologia blockchain com criptografia avançada para proteger suas transações
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-red-500 shadow-lg hover:shadow-xl transition-shadow bg-slate-800/60">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-red-400">Transações Rápidas</CardTitle>
                <CardDescription className="text-gray-300">
                  Processamento em segundos, muito mais rápido que transferências bancárias tradicionais
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-red-500 shadow-lg hover:shadow-xl transition-shadow bg-slate-800/60">
              <CardHeader>
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4 border border-red-500">
                  <Globe className="h-6 w-6 text-red-400" />
                </div>
                <CardTitle className="text-red-400">Acesso Global</CardTitle>
                <CardDescription className="text-gray-300">
                  Envie e receba dinheiro para qualquer lugar do mundo, 24 horas por dia
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-red-500 shadow-lg hover:shadow-xl transition-shadow bg-slate-800/60">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-red-400">Comunidade Ativa</CardTitle>
                <CardDescription className="text-gray-300">
                  Participe da comunidade de testadores e ajude a moldar o futuro da KwanzaCoin
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-red-500 shadow-lg hover:shadow-xl transition-shadow bg-slate-800/60">
              <CardHeader>
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4 border border-red-500">
                  <TrendingUp className="h-6 w-6 text-red-400" />
                </div>
                <CardTitle className="text-red-400">Baixas Taxas</CardTitle>
                <CardDescription className="text-gray-300">
                  Taxas de transação muito menores comparadas aos bancos tradicionais
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-red-500 shadow-lg hover:shadow-xl transition-shadow bg-slate-800/60">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                  <TestTube className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-red-400">Programa Beta</CardTitle>
                <CardDescription className="text-gray-300">
                  Teste recursos exclusivos e ganhe recompensas por feedback valioso
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Beta Testing Program */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-400 mb-4">Programa de Testadores Beta</h2>
            <p className="text-xl text-gray-300">Seja um dos primeiros a testar a KwanzaCoin e ganhe recompensas</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-6">Benefícios do Programa</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-300">Acesso antecipado a novos recursos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-300">Tokens gratuitos por feedback</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-300">Suporte prioritário</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-300">Certificado de testador beta</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-300">Influência no desenvolvimento</span>
                </div>
              </div>

              <Link href="/testadores">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold">
                  <TestTube className="mr-2 h-5 w-5" />
                  Candidatar-se Agora
                </Button>
              </Link>
            </div>

            <Card className="bg-slate-800/60 border-2 border-red-500">
              <CardHeader>
                <CardTitle className="text-red-400 text-center">Requisitos para Testadores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-400">Residência em Angola</h4>
                    <p className="text-gray-300 text-sm">Ser residente angolano ou ter interesse no mercado local</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-400">Conhecimento Básico</h4>
                    <p className="text-gray-300 text-sm">Familiaridade com tecnologia e aplicativos móveis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-400">Compromisso</h4>
                    <p className="text-gray-300 text-sm">Disponibilidade para testes regulares e feedback</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 via-red-500 to-red-600 border-t-4 border-red-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Comece sua jornada com a KwanzaCoin hoje</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-semibold">
            Registre-se, compre seus primeiros tokens e participe da revolução financeira angolana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registro">
              <Button
                size="lg"
                className="bg-slate-900 text-red-400 hover:bg-gray-900 text-lg px-8 py-4 border-2 border-red-600 font-bold"
              >
                <Wallet className="mr-2 h-5 w-5" />
                Criar Conta Grátis
              </Button>
            </Link>
            <Link href="/comprar">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-900 text-white hover:bg-slate-700 hover:text-red-400 text-lg px-8 py-4 font-bold"
              >
                <CreditCard className="mr-2 h-5 w-5" />
                Comprar Tokens
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-red-400 py-16 px-4 border-t-4 border-red-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-red-600 via-red-500 to-red-600 rounded-full flex items-center justify-center border border-red-500">
                  <span className="text-white font-bold">K</span>
                </div>
                <span className="text-xl font-bold text-red-400">KwanzaCoin</span>
              </div>
              <p className="text-gray-300">
                A primeira moeda virtual 100% angolana, revolucionando o sistema financeiro digital.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-red-600">Plataforma</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/registro" className="hover:text-red-400 transition-colors">
                    Criar Conta
                  </Link>
                </li>
                <li>
                  <Link href="/comprar" className="hover:text-red-400 transition-colors">
                    Comprar Tokens
                  </Link>
                </li>
                <li>
                  <Link href="/testadores" className="hover:text-red-400 transition-colors">
                    Programa Beta
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-red-400 transition-colors">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-red-600">Suporte</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Documentação
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Status da Rede
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-red-600">Comunidade</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-red-600 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2024 KwanzaCoin. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
