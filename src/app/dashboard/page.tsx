"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Wallet,
  Send,
  Download,
  TrendingUp,
  History,
  Settings,
  Bell,
  Eye,
  EyeOff,
  Copy,
  QrCode,
  Plus,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [saldoVisivel, setSaldoVisivel] = useState(true)
  const [usuario] = useState({
    nome: "João Silva",
    email: "joao@email.com",
    saldo: 125.5,
    endereco: "KC1a2b3c4d5e6f7g8h9i0j",
    nivel: "Beta Tester",
  })

  const [transacoes] = useState([
    { id: 1, tipo: "recebido", valor: 50, data: "2024-01-15", de: "Maria Santos" },
    { id: 2, tipo: "enviado", valor: -25, data: "2024-01-14", para: "Pedro Costa" },
    { id: 3, tipo: "compra", valor: 100, data: "2024-01-13", metodo: "Multicaixa" },
  ])

  const copiarEndereco = () => {
    navigator.clipboard.writeText(usuario.endereco)
    // Mostrar toast de sucesso
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Header */}
      <header className="border-b bg-slate-900/95 backdrop-blur-sm border-red-500">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 via-red-500 to-red-400 rounded-full flex items-center justify-center border-2 border-red-500">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-red-400">Dashboard</h1>
              <p className="text-gray-300 text-sm">Bem-vindo, {usuario.nome}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-red-500 text-red-400">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="border-red-500 text-red-400">
              <Settings className="h-4 w-4" />
            </Button>
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="border-red-500 text-red-400 hover:bg-red-500 hover:text-black"
              >
                Sair
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-slate-800/90 border-2 border-red-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-red-400">Saldo Total</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSaldoVisivel(!saldoVisivel)}
                className="text-red-400 hover:text-red-300"
              >
                {saldoVisivel ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-400">{saldoVisivel ? `${usuario.saldo} KC` : "••••••"}</div>
              <p className="text-xs text-gray-300">
                ≈ {saldoVisivel ? `${(usuario.saldo * 850).toLocaleString("pt-AO")} Kz` : "••••••"}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/90 border-2 border-orange-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-500">Status</CardTitle>
              <Badge className="bg-yellow-500 text-black">{usuario.nivel}</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-400">Ativo</div>
              <p className="text-xs text-gray-300">Conta verificada</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/90 border-2 border-red-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-red-400">Transações</CardTitle>
              <TrendingUp className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-400">{transacoes.length}</div>
              <p className="text-xs text-gray-300">Este mês</p>
            </CardContent>
          </Card>
        </div>

        {/* Ações Rápidas */}
        <Card className="bg-slate-800/90 border-2 border-red-500 mb-8">
          <CardHeader>
            <CardTitle className="text-red-400">Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/comprar">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">
                  <Plus className="mr-2 h-4 w-4" />
                  Comprar KC
                </Button>
              </Link>
              <Button className="w-full bg-slate-700 hover:bg-slate-600 text-gray-100">
                <Send className="mr-2 h-4 w-4" />
                Enviar
              </Button>
              <Button className="w-full bg-black border border-red-400 text-red-400 hover:bg-red-500 hover:text-black">
                <Download className="mr-2 h-4 w-4" />
                Receber
              </Button>
              <Button className="w-full bg-black border border-red-600 text-red-600 hover:bg-red-600 hover:text-yellow-100">
                <QrCode className="mr-2 h-4 w-4" />
                QR Code
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Principal */}
        <Tabs defaultValue="carteira" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800/60 border border-red-400">
            <TabsTrigger value="carteira" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              <Wallet className="mr-2 h-4 w-4" />
              Carteira
            </TabsTrigger>
            <TabsTrigger value="historico" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              <History className="mr-2 h-4 w-4" />
              Histórico
            </TabsTrigger>
            <TabsTrigger value="beta" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              <Badge className="mr-2 bg-red-600 text-yellow-500 text-xs">BETA</Badge>
              Testes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="carteira" className="space-y-6">
            <Card className="bg-slate-800/90 border-2 border-red-500">
              <CardHeader>
                <CardTitle className="text-red-400">Minha Carteira</CardTitle>
                <CardDescription className="text-gray-300">Gerencie seus KwanzaCoin</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-r from-red-600 to-red-500 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-black mb-2">
                    {saldoVisivel ? `${usuario.saldo} KC` : "••••••"}
                  </div>
                  <div className="text-black/80">Saldo Disponível</div>
                </div>

                <div className="space-y-2">
                  <label className="text-red-400 text-sm font-medium">Endereço da Carteira</label>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-black/40 border border-red-500 rounded px-3 py-2 text-yellow-100 text-sm font-mono">
                      {usuario.endereco}
                    </div>
                    <Button size="sm" onClick={copiarEndereco} className="bg-red-600 hover:bg-red-700 text-white">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="historico" className="space-y-6">
            <Card className="bg-slate-800/90 border-2 border-red-500">
              <CardHeader>
                <CardTitle className="text-red-400">Histórico de Transações</CardTitle>
                <CardDescription className="text-gray-300">Suas últimas movimentações</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transacoes.map((transacao) => (
                    <div
                      key={transacao.id}
                      className="flex items-center justify-between p-4 bg-black/40 border border-red-500 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            transacao.tipo === "recebido"
                              ? "bg-green-600"
                              : transacao.tipo === "enviado"
                                ? "bg-red-600"
                                : "bg-yellow-500"
                          }`}
                        >
                          {transacao.tipo === "recebido" ? (
                            <Download className="h-5 w-5 text-white" />
                          ) : transacao.tipo === "enviado" ? (
                            <Send className="h-5 w-5 text-white" />
                          ) : (
                            <Plus className="h-5 w-5 text-black" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-red-400">
                            {transacao.tipo === "recebido"
                              ? `Recebido de ${transacao.de}`
                              : transacao.tipo === "enviado"
                                ? `Enviado para ${transacao.para}`
                                : `Compra via ${transacao.metodo}`}
                          </div>
                          <div className="text-sm text-gray-300">{transacao.data}</div>
                        </div>
                      </div>
                      <div className={`font-bold ${transacao.valor > 0 ? "text-green-500" : "text-red-500"}`}>
                        {transacao.valor > 0 ? "+" : ""}
                        {transacao.valor} KC
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="beta" className="space-y-6">
            <Card className="bg-slate-800/90 border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="text-orange-500 flex items-center">
                  <Badge className="mr-2 bg-yellow-500 text-black">BETA</Badge>
                  Programa de Testes
                </CardTitle>
                <CardDescription className="text-gray-300">Recursos exclusivos para testadores beta</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-yellow-500/20 border border-yellow-500 rounded-lg p-4">
                  <h4 className="font-bold text-yellow-500 mb-2">Status do Testador</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Nível:</span>
                    <Badge className="bg-red-600 text-yellow-500">Beta Tester Ativo</Badge>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-300">Feedback enviados:</span>
                    <span className="text-red-400 font-bold">12</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-300">Tokens ganhos:</span>
                    <span className="text-red-400 font-bold">85 KC</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button className="bg-red-600 hover:bg-red-700 text-white font-bold">Reportar Bug</Button>
                  <Button className="bg-slate-700 hover:bg-slate-600 text-gray-100">Enviar Feedback</Button>
                </div>

                <div className="bg-black/40 border border-red-600 rounded-lg p-4">
                  <h4 className="font-bold text-red-600 mb-2">Próximos Recursos</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Transferências internacionais</li>
                    <li>• Integração com bancos angolanos</li>
                    <li>• App mobile nativo</li>
                    <li>• Sistema de cashback</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
