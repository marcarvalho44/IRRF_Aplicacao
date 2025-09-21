import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Shuffle, RotateCcw, Download, BookOpen, Scale, FileText } from 'lucide-react'
import { flashcardsData, categories } from './data/flashcards.js'
import './App.css'

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [filteredCards, setFilteredCards] = useState(flashcardsData)
  const [percentageFilter, setPercentageFilter] = useState("Todos")
  const [shuffledCards, setShuffledCards] = useState(flashcardsData)

  // Filtrar cards por categoria e percentual
  useEffect(() => {
    let filtered = flashcardsData

    if (selectedCategory !== "Todos") {
      filtered = filtered.filter(card => card.category === selectedCategory)
    }

    if (percentageFilter !== "Todos") {
      const percentage = parseInt(percentageFilter)
      filtered = filtered.filter(card => card.percentage >= percentage)
    }

    setFilteredCards(filtered)
    setShuffledCards(filtered)
    setCurrentCardIndex(0)
    setIsFlipped(false)
  }, [selectedCategory, percentageFilter])

  // Embaralhar cards
  const shuffleCards = () => {
    const shuffled = [...filteredCards].sort(() => Math.random() - 0.5)
    setShuffledCards(shuffled)
    setCurrentCardIndex(0)
    setIsFlipped(false)
  }

  // Resetar para ordem original
  const resetOrder = () => {
    setShuffledCards(filteredCards)
    setCurrentCardIndex(0)
    setIsFlipped(false)
  }

  // Navegar entre cards
  const nextCard = () => {
    if (currentCardIndex < shuffledCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
      setIsFlipped(false)
    }
  }

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1)
      setIsFlipped(false)
    }
  }

  // Virar card
  const flipCard = () => {
    setIsFlipped(!isFlipped)
  }

  // Exportar para CSV (Anki)
  const exportToCSV = () => {
    const csvContent = [
      ['Frente', 'Verso', 'Categoria', 'Legislação'],
      ...shuffledCards.map(card => [
        `"${card.front.replace(/"/g, '""')}"`,
        `"${card.back.replace(/"/g, '""')}"`,
        `"${card.category}"`,
        `"${card.legislation.replace(/"/g, '""')}"`
      ])
    ].map(row => row.join(',')).join('\\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', 'flashcards-irrf-anki.csv')
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const currentCard = shuffledCards[currentCardIndex]

  if (!currentCard) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Nenhum flashcard encontrado</h1>
          <p className="text-gray-600">Ajuste os filtros para ver os flashcards.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Scale className="h-8 w-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">Flashcards IRRF</h1>
          </div>
          <p className="text-gray-600">Imposto de Renda Retido na Fonte - Pessoa Jurídica</p>
          <p className="text-sm text-gray-500 mt-2">
            Baseado no Manual Técnico do Estado de Santa Catarina
          </p>
        </div>

        {/* Controles */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            {/* Filtro por Categoria */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoria
              </label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Filtro por Percentual */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Percentual Mínimo
              </label>
              <Select value={percentageFilter} onValueChange={setPercentageFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Todos">Todos</SelectItem>
                  <SelectItem value="90">90%+</SelectItem>
                  <SelectItem value="80">80%+</SelectItem>
                  <SelectItem value="70">70%+</SelectItem>
                  <SelectItem value="60">60%+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Botões de Ação */}
            <div className="flex gap-2">
              <Button onClick={shuffleCards} variant="outline" size="sm">
                <Shuffle className="h-4 w-4 mr-1" />
                Embaralhar
              </Button>
              <Button onClick={resetOrder} variant="outline" size="sm">
                <RotateCcw className="h-4 w-4 mr-1" />
                Resetar
              </Button>
            </div>

            {/* Exportar */}
            <div>
              <Button onClick={exportToCSV} className="w-full" variant="secondary">
                <Download className="h-4 w-4 mr-2" />
                Exportar CSV (Anki)
              </Button>
            </div>
          </div>

          {/* Contador */}
          <div className="text-center text-sm text-gray-600">
            Card {currentCardIndex + 1} de {shuffledCards.length}
            {selectedCategory !== "Todos" && (
              <span className="ml-2">• Categoria: {selectedCategory}</span>
            )}
          </div>
        </div>

        {/* Flashcard */}
        <div className="mb-6">
          <Card 
            className="h-96 cursor-pointer transition-all duration-300 hover:shadow-lg bg-white border-2 border-gray-200"
            onClick={flipCard}
          >
            <CardContent className="h-full flex flex-col justify-center p-8">
              <div className="text-center">
                {/* Badge da Categoria */}
                <Badge variant="secondary" className="mb-4">
                  {currentCard.category}
                </Badge>

                {/* Conteúdo do Card */}
                <div className="min-h-[200px] flex items-center justify-center">
                  {!isFlipped ? (
                    <div>
                      <div className="flex items-center justify-center mb-4">
                        <BookOpen className="h-6 w-6 text-indigo-600 mr-2" />
                        <span className="text-sm font-medium text-indigo-600">PERGUNTA</span>
                      </div>
                      <p className="text-lg font-medium text-gray-800 leading-relaxed">
                        {currentCard.front}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-green-600 mr-2" />
                        <span className="text-sm font-medium text-green-600">RESPOSTA</span>
                      </div>
                      <p className="text-base text-gray-800 leading-relaxed mb-4">
                        {currentCard.back}
                      </p>
                      <div className="border-t pt-4">
                        <p className="text-sm text-gray-600 italic">
                          <strong>Legislação:</strong> {currentCard.legislation}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Instrução */}
                <p className="text-xs text-gray-500 mt-4">
                  Clique no card para {isFlipped ? 'ver a pergunta' : 'ver a resposta'}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navegação */}
        <div className="flex justify-center gap-4">
          <Button 
            onClick={prevCard} 
            disabled={currentCardIndex === 0}
            variant="outline"
          >
            ← Anterior
          </Button>
          
          <Button onClick={flipCard} className="px-8">
            {isFlipped ? 'Ver Pergunta' : 'Ver Resposta'}
          </Button>
          
          <Button 
            onClick={nextCard} 
            disabled={currentCardIndex === shuffledCards.length - 1}
            variant="outline"
          >
            Próximo →
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>
            Flashcards baseados no Manual Técnico do Imposto de Renda Retido na Fonte – Pessoa Jurídica
          </p>
          <p className="mt-1">
            Estado de Santa Catarina • Secretaria de Estado da Fazenda
          </p>
        </div>
      </div>
    </div>
  )
}

export default App

