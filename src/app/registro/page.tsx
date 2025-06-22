"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, User, Mail, Phone, MapPin, Wallet } from "lucide-react"
import Link from "next/link"

export default function RegistroPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    provincia: "",
    senha: "",
    confirmarSenha: "",
    aceitarTermos: false,
    receberNoticias: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Processar registro
      console.log("Registro completo:", formData)
      // Redirecionar para dashboard
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="border-red-500 text-red-400 hover:bg-red-500 hover:text-black"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center space-x-2 ml-4">
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 via-red-500 to-red-400 rounded-full flex items-center justify-center border border-red-500">
              <span className="text-white font-bold">K</span>
            </div>
            <span className="text-xl font-bold text-red-400">KwanzaCoin</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-red-400 font-medium">Passo {step} de 3</span>
            <span className="text-gray-300 text-sm">
              {step === 1 && "Informações Pessoais"}
              {step === 2 && "Segurança"}
              {step === 3 && "Confirmação"}
            </span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2 border border-red-400">
            <div
              className="bg-gradient-to-r from-red-600 to-red-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card className="bg-slate-800/90 border-2 border-red-500">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-red-400">
              {step === 1 && "Criar Conta KwanzaCoin"}
              {step === 2 && "Configurar Segurança"}
              {step === 3 && "Confirmar Registro"}
            </CardTitle>
            <CardDescription className="text-gray-300">
              {step === 1 && "Preencha seus dados pessoais para começar"}
              {step === 2 && "Defina uma senha segura para sua conta"}
              {step === 3 && "Revise suas informações e finalize o registro"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <>
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
                        className="pl-10 bg-slate-700 border-red-400 text-gray-100 placeholder:text-gray-400"
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
                        className="pl-10 bg-slate-700 border-red-400 text-gray-100 placeholder:text-gray-400"
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
                        className="pl-10 bg-slate-700 border-red-400 text-gray-100 placeholder:text-gray-400"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="provincia" className="text-red-400">
                      Província
                    </Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, provincia: value })}>
                      <SelectTrigger className="bg-slate-700 border-red-400 text-gray-100">
                        <MapPin className="h-4 w-4 text-red-400 mr-2" />
                        <SelectValue placeholder="Selecione sua província" />
                      </SelectTrigger>
                      <SelectContent className="bg-black border-red-500">
                        <SelectItem value="luanda">Luanda</SelectItem>
                        <SelectItem value="benguela">Benguela</SelectItem>
                        <SelectItem value="huambo">Huambo</SelectItem>
                        <SelectItem value="lobito">Lobito</SelectItem>
                        <SelectItem value="cabinda">Cabinda</SelectItem>
                        <SelectItem value="huila">Huíla</SelectItem>
                        <SelectItem value="malanje">Malanje</SelectItem>
                        <SelectItem value="namibe">Namibe</SelectItem>
                        <SelectItem value="uige">Uíge</SelectItem>
                        <SelectItem value="zaire">Zaire</SelectItem>
                        <SelectItem value="lunda-norte">Lunda Norte</SelectItem>
                        <SelectItem value="lunda-sul">Lunda Sul</SelectItem>
                        <SelectItem value="moxico">Moxico</SelectItem>
                        <SelectItem value="cuando-cubango">Cuando Cubango</SelectItem>
                        <SelectItem value="cunene">Cunene</SelectItem>
                        <SelectItem value="bie">Bié</SelectItem>
                        <SelectItem value="cuanza-norte">Cuanza Norte</SelectItem>
                        <SelectItem value="cuanza-sul">Cuanza Sul</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="senha" className="text-red-400">
                      Senha
                    </Label>
                    <Input
                      id="senha"
                      type="password"
                      placeholder="Mínimo 8 caracteres"
                      className="bg-slate-700 border-red-400 text-gray-100 placeholder:text-gray-400"
                      value={formData.senha}
                      onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmarSenha" className="text-red-400">
                      Confirmar Senha
                    </Label>
                    <Input
                      id="confirmarSenha"
                      type="password"
                      placeholder="Digite a senha novamente"
                      className="bg-slate-700 border-red-400 text-gray-100 placeholder:text-gray-400"
                      value={formData.confirmarSenha}
                      onChange={(e) => setFormData({ ...formData, confirmarSenha: e.target.value })}
                      required
                    />
                  </div>

                  <div className="bg-red-600/20 border border-red-600 rounded-lg p-4">
                    <h4 className="text-red-400 font-bold mb-2">Requisitos da Senha:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Mínimo 8 caracteres</li>
                      <li>• Pelo menos uma letra maiúscula</li>
                      <li>• Pelo menos um número</li>
                      <li>• Pelo menos um caractere especial</li>
                    </ul>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="bg-black/40 border border-red-500 rounded-lg p-6 space-y-4">
                    <h4 className="text-red-400 font-bold text-lg flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      Resumo da Conta
                    </h4>
                    <div className="space-y-2 text-gray-300">
                      <p>
                        <strong>Nome:</strong> {formData.nome}
                      </p>
                      <p>
                        <strong>Email:</strong> {formData.email}
                      </p>
                      <p>
                        <strong>Telefone:</strong> {formData.telefone}
                      </p>
                      <p>
                        <strong>Província:</strong> {formData.provincia}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="termos"
                        checked={formData.aceitarTermos}
                        onCheckedChange={(checked) => setFormData({ ...formData, aceitarTermos: checked as boolean })}
                        className="border-red-500"
                      />
                      <Label htmlFor="termos" className="text-gray-300 text-sm">
                        Aceito os{" "}
                        <a href="#" className="text-red-400 underline">
                          Termos de Uso
                        </a>{" "}
                        e a{" "}
                        <a href="#" className="text-red-400 underline">
                          Política de Privacidade
                        </a>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="noticias"
                        checked={formData.receberNoticias}
                        onCheckedChange={(checked) => setFormData({ ...formData, receberNoticias: checked as boolean })}
                        className="border-red-500"
                      />
                      <Label htmlFor="noticias" className="text-gray-300 text-sm">
                        Desejo receber notícias e atualizações sobre a KwanzaCoin
                      </Label>
                    </div>
                  </div>
                </>
              )}

              <div className="flex gap-4">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    className="flex-1 border-red-500 text-red-400 hover:bg-red-500 hover:text-black"
                  >
                    Voltar
                  </Button>
                )}
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-black font-bold"
                  disabled={step === 3 && !formData.aceitarTermos}
                >
                  {step === 3 ? (
                    <>
                      <Wallet className="mr-2 h-4 w-4" />
                      Criar Conta
                    </>
                  ) : (
                    "Continuar"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
