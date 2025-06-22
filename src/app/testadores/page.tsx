"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, TestTube, User, Mail, Phone, Code, Award, Star } from "lucide-react"
import Link from "next/link"

export default function TestadoresPage() {
  const [formData, setFormData]:any = useState({
    nome: "",
    email: "",
    telefone: "",
    experiencia: "",
    motivacao: "",
    disponibilidade: "",
    dispositivos: [],
    aceitarTermos: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Candidatura Beta:", formData)
    // Processar candidatura
  }

  const handleDispositivoChange = (dispositivo: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        dispositivos: [...formData.dispositivos, dispositivo],
      })
    } else {
      setFormData({
        ...formData,
        dispositivos: formData.dispositivos.filter((d:any) => d !== dispositivo),
      })
    }
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
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center space-x-2 ml-4">
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 via-black to-yellow-500 rounded-full flex items-center justify-center border border-yellow-500">
              <span className="text-yellow-500 font-bold">K</span>
            </div>
            <span className="text-xl font-bold text-yellow-500">KwanzaCoin</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-red-500 text-white font-bold">
            <TestTube className="mr-1 h-4 w-4" />
            Programa Beta Testadores
          </Badge>
          <h1 className="text-4xl font-bold text-red-400 mb-4">Seja um Testador Beta da KwanzaCoin</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ajude-nos a construir o futuro das finanças digitais em Angola e ganhe recompensas exclusivas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulário de Candidatura */}
          <Card className="bg-slate-800/90 border-2 border-red-500">
            <CardHeader>
              <CardTitle className="text-2xl text-red-400 flex items-center">
                <User className="mr-2 h-6 w-6" />
                Candidatar-se ao Programa
              </CardTitle>
              <CardDescription className="text-gray-300">
                Preencha o formulário para se tornar um testador beta
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-red-400">
                    Nome Completo
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-red-400" />
                    <Input
                      id="nome"
                      type="text"
                      placeholder="Seu nome completo"
                      className="pl-10 bg-slate-700 border-red-400 text-gray-100 placeholder:text-gray-300"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-red-400">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-red-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="pl-10 bg-slate-700 border-red-400 text-gray-100 placeholder:text-gray-300"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-red-400">
                    Telefone
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-red-400" />
                    <Input
                      id="telefone"
                      type="tel"
                      placeholder="+244 XXX XXX XXX"
                      className="pl-10 bg-slate-700 border-red-400 text-gray-100 placeholder:text-gray-300"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experiencia" className="text-red-400">
                    Experiência com Criptomoedas
                  </Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, experiencia: value })}>
                    <SelectTrigger className="bg-slate-700 border-red-400 text-gray-100">
                      <Code className="h-4 w-4 text-red-400 mr-2" />
                      <SelectValue placeholder="Selecione seu nível de experiência" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-yellow-500">
                      <SelectItem value="iniciante">Iniciante - Primeira vez</SelectItem>
                      <SelectItem value="basico">Básico - Já usei algumas vezes</SelectItem>
                      <SelectItem value="intermediario">Intermediário - Uso regularmente</SelectItem>
                      <SelectItem value="avancado">Avançado - Muito experiente</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="disponibilidade" className="text-red-400">
                    Disponibilidade para Testes
                  </Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, disponibilidade: value })}>
                    <SelectTrigger className="bg-slate-700 border-red-400 text-gray-100">
                      <SelectValue placeholder="Quanto tempo pode dedicar?" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-yellow-500">
                      <SelectItem value="1-2h">1-2 horas por semana</SelectItem>
                      <SelectItem value="3-5h">3-5 horas por semana</SelectItem>
                      <SelectItem value="5-10h">5-10 horas por semana</SelectItem>
                      <SelectItem value="10h+">Mais de 10 horas por semana</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-red-400">Dispositivos Disponíveis</Label>
                  <div className="space-y-2">
                    {["Android", "iOS", "Windows", "Mac", "Linux"].map((dispositivo) => (
                      <div key={dispositivo} className="flex items-center space-x-2">
                        <Checkbox
                          id={dispositivo}
                          checked={formData.dispositivos.includes(dispositivo)}
                          onCheckedChange={(checked) => handleDispositivoChange(dispositivo, checked as boolean)}
                          className="border-yellow-500"
                        />
                        <Label htmlFor={dispositivo} className="text-gray-300">
                          {dispositivo}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivacao" className="text-red-400">
                    Por que quer ser testador?
                  </Label>
                  <Textarea
                    id="motivacao"
                    placeholder="Conte-nos sua motivação para participar do programa beta..."
                    className="bg-slate-700 border-red-400 text-gray-100 placeholder:text-gray-300"
                    value={formData.motivacao}
                    onChange={(e) => setFormData({ ...formData, motivacao: e.target.value })}
                    rows={4}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="termos"
                    checked={formData.aceitarTermos}
                    onCheckedChange={(checked) => setFormData({ ...formData, aceitarTermos: checked as boolean })}
                    className="border-yellow-500"
                  />
                  <Label htmlFor="termos" className="text-gray-300 text-sm">
                    Aceito os termos do programa beta e concordo em fornecer feedback construtivo
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-yellow-600 text-black font-bold"
                  disabled={!formData.aceitarTermos}
                >
                  <TestTube className="mr-2 h-4 w-4" />
                  Enviar Candidatura
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações do Programa */}
          <div className="space-y-6">
            <Card className="bg-slate-800/90 border-2 border-red-500">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <Award className="mr-2 h-5 w-5" />
                  Recompensas do Programa
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-sm">50</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-400">50 KwanzaCoin Grátis</h4>
                    <p className="text-gray-300 text-sm">Tokens gratuitos ao se juntar ao programa</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 border border-yellow-500">
                    <Star className="h-4 w-4 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-red-400">Tokens por Feedback</h4>
                    <p className="text-gray-300 text-sm">Ganhe 5-20 KC por cada relatório de bug ou sugestão</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-sm">🏆</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-400">Certificado Digital</h4>
                    <p className="text-gray-300 text-sm">Certificado oficial de testador beta da KwanzaCoin</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 border border-yellow-500">
                    <span className="text-yellow-500 font-bold text-sm">VIP</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-400">Acesso Antecipado</h4>
                    <p className="text-gray-300 text-sm">Seja o primeiro a testar novos recursos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/90 border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="text-red-600">Responsabilidades</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-300 text-sm">
                <div>• Testar recursos regularmente</div>
                <div>• Reportar bugs e problemas encontrados</div>
                <div>• Fornecer feedback construtivo</div>
                <div>• Participar de pesquisas e entrevistas</div>
                <div>• Manter confidencialidade sobre recursos em desenvolvimento</div>
                <div>• Ser ativo na comunidade de testadores</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/90 border-2 border-red-500">
              <CardHeader>
                <CardTitle className="text-red-400">Processo de Seleção</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-400">Candidatura</h4>
                    <p className="text-gray-300 text-sm">Preencha e envie o formulário de candidatura</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-400">Análise</h4>
                    <p className="text-gray-300 text-sm">Nossa equipe analisa sua candidatura (2-3 dias)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-400">Aprovação</h4>
                    <p className="text-gray-300 text-sm">Receba email de aprovação e acesso à plataforma beta</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-red-600/20 to-red-500/20 border border-red-400 rounded-lg p-6 text-center">
              <h3 className="text-red-400 font-bold text-lg mb-2">Vagas Limitadas!</h3>
              <p className="text-gray-300 mb-4">Estamos selecionando apenas 100 testadores para esta fase beta.</p>
              <div className="text-2xl font-bold text-red-400">23 vagas restantes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
