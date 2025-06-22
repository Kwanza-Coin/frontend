"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, CreditCard, Banknote, Calculator, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function ComprarPage() {
  const [quantidade, setQuantidade] = useState("")
  const [metodoPagamento, setMetodoPagamento] = useState("")
  const [valorKwanza, setValorKwanza] = useState(0)

  const taxaConversao = 850 // 1 KwanzaCoin = 850 Kwanza

  const calcularValor = (qtd: string) => {
    const valor = Number.parseFloat(qtd) || 0
    setValorKwanza(valor * taxaConversao)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Compra:", { quantidade, metodoPagamento, valorKwanza })
    // Processar compra
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="border-red-400 text-red-400 hover:bg-red-500 hover:text-black"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center space-x-2 ml-4">
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 via-red-500 to-red-400 rounded-full flex items-center justify-center border border-red-500">
              <span className="text-white font-bold">K</span>
            </div>
            <span className="text-xl font-bold text-yellow-500">KwanzaCoin</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulário de Compra */}
          <Card className="bg-slate-800/90 border-2 border-red-500">
            <CardHeader>
              <CardTitle className="text-2xl text-red-400 flex items-center">
                <CreditCard className="mr-2 h-6 w-6" />
                Comprar KwanzaCoin
              </CardTitle>
              <CardDescription className="text-gray-300">Adquira tokens KwanzaCoin de forma segura</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="quantidade" className="text-red-400">
                    Quantidade de KwanzaCoin
                  </Label>
                  <div className="relative">
                    <Calculator className="absolute left-3 top-3 h-4 w-4 text-yellow-500" />
                    <Input
                      id="quantidade"
                      type="number"
                      placeholder="0.00"
                      min="0.01"
                      step="0.01"
                      className="pl-10 bg-slate-700 border-red-400 text-gray-100 placeholder:text-yellow-300"
                      value={quantidade}
                      onChange={(e) => {
                        setQuantidade(e.target.value)
                        calcularValor(e.target.value)
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="bg-red-600/20 border border-red-500 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Valor em Kwanza:</span>
                    <span className="text-red-400 font-bold text-lg">{valorKwanza.toLocaleString("pt-AO")} Kz</span>
                  </div>
                  <div className="text-gray-400 text-sm mt-1">Taxa: 1 KwanzaCoin = {taxaConversao} Kz</div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pagamento" className="text-red-400">
                    Método de Pagamento
                  </Label>
                  <Select onValueChange={setMetodoPagamento}>
                    <SelectTrigger className="bg-slate-700 border-red-400 text-gray-100">
                      <Banknote className="h-4 w-4 text-yellow-500 mr-2" />
                      <SelectValue placeholder="Selecione o método de pagamento" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-yellow-500">
                      <SelectItem value="multicaixa">Multicaixa Express</SelectItem>
                      <SelectItem value="bai">BAI Direto</SelectItem>
                      <SelectItem value="bic">BIC Mobile</SelectItem>
                      <SelectItem value="cartao">Cartão de Crédito/Débito</SelectItem>
                      <SelectItem value="transferencia">Transferência Bancária</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <h4 className="text-red-400 font-bold">Pacotes Populares</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      className="border-red-400 text-red-400 hover:bg-red-500 hover:text-black"
                      onClick={() => {
                        setQuantidade("10")
                        calcularValor("10")
                      }}
                    >
                      10 KC
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="border-red-400 text-red-400 hover:bg-red-500 hover:text-black"
                      onClick={() => {
                        setQuantidade("50")
                        calcularValor("50")
                      }}
                    >
                      50 KC
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="border-red-400 text-red-400 hover:bg-red-500 hover:text-black"
                      onClick={() => {
                        setQuantidade("100")
                        calcularValor("100")
                      }}
                    >
                      100 KC
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="border-red-400 text-red-400 hover:bg-red-500 hover:text-black"
                      onClick={() => {
                        setQuantidade("500")
                        calcularValor("500")
                      }}
                    >
                      500 KC
                    </Button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-yellow-600 text-black font-bold"
                  disabled={!quantidade || !metodoPagamento}
                >
                  Prosseguir com a Compra
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações e Benefícios */}
          <div className="space-y-6">
            <Card className="bg-slate-800/90 border-2 border-red-500">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Compra Segura
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-400">Criptografia SSL</h4>
                    <p className="text-gray-300 text-sm">
                      Todas as transações são protegidas com criptografia de nível bancário
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-400">Processamento Instantâneo</h4>
                    <p className="text-gray-300 text-sm">Seus tokens são creditados imediatamente após a confirmação</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-400">Suporte 24/7</h4>
                    <p className="text-gray-300 text-sm">Nossa equipe está sempre disponível para ajudar</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/90 border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="text-orange-500 flex items-center">
                  <Zap className="mr-2 h-5 w-5" />
                  Oferta Especial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500 mb-2">Bônus de 10%</div>
                  <p className="text-yellow-200 mb-4">
                    Comprando mais de 100 KwanzaCoin, você ganha 10% de bônus extra!
                  </p>
                  <div className="bg-yellow-500/20 border border-yellow-500 rounded-lg p-3">
                    <p className="text-yellow-500 text-sm font-bold">
                      Válido apenas para novos usuários até 31/12/2024
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/90 border-2 border-red-500">
              <CardHeader>
                <CardTitle className="text-red-400">Métodos de Pagamento Aceitos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-gray-300 text-sm">
                  <div>• Multicaixa Express</div>
                  <div>• BAI Direto</div>
                  <div>• BIC Mobile</div>
                  <div>• Cartão Visa/Mastercard</div>
                  <div>• Transferência Bancária</div>
                  <div>• Mobile Money</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
