# Flashcards IRRF - Pessoa Jurídica

Aplicação web interativa de flashcards baseada no Manual Técnico do Imposto de Renda Retido na Fonte para Pessoa Jurídica do Estado de Santa Catarina.

## 📋 Sobre o Projeto

Esta aplicação foi desenvolvida para auxiliar no estudo e compreensão das regras de retenção de Imposto de Renda na fonte para pessoas jurídicas, conforme estabelecido pela Secretaria de Estado da Fazenda de Santa Catarina.

### 🎯 Características

- **40 flashcards** cobrindo todos os aspectos do manual
- **Interface dinâmica** com animações suaves
- **Filtros por categoria** (Conceitos Gerais, Alíquotas, Obrigações, etc.)
- **Filtros por percentual** de domínio do conteúdo
- **Função embaralhar** para estudo aleatório
- **Exportação para Anki** (formato CSV)
- **Design responsivo** para desktop e mobile
- **Cores claras com fontes pretas** conforme solicitado

## 🚀 Funcionalidades

### Navegação
- Clique no card para virar e ver a resposta
- Botões de navegação (Anterior/Próximo)
- Contador de progresso

### Filtros
- **Por Categoria**: Conceitos Gerais, Alíquotas, Obrigações, Não Retenção, Situações Específicas, SIGEF, Exemplos Práticos, Declarações
- **Por Percentual**: Filtre cards por nível de domínio (60%+, 70%+, 80%+, 90%+)

### Funcionalidades Dinâmicas
- **Embaralhar**: Randomiza a ordem dos cards
- **Resetar**: Volta à ordem original
- **Exportar CSV**: Gera arquivo compatível com Anki

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes de interface
- **Lucide React** - Ícones
- **Framer Motion** - Animações (preparado para uso)

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou pnpm

### Passos

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd flashcards-irrf
```

2. Instale as dependências:
```bash
npm install
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
pnpm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

## 📚 Conteúdo dos Flashcards

Os flashcards cobrem os seguintes tópicos do Manual IRRF:

### Conceitos Gerais (10 cards)
- Definições básicas do IR
- Base de cálculo e contribuintes
- Mudanças jurisprudenciais (STF Tema 1130)
- Art. 64 da Lei nº 9.430/1996

### Alíquotas (4 cards)
- 0,24% - Combustíveis derivados de petróleo
- 1,20% - Alimentação, energia, serviços com materiais, etc.
- 2,40% - Transportes, serviços bancários, seguros
- 4,80% - Vigilância, limpeza, locação de mão de obra, etc.

### Obrigações (5 cards)
- Obrigações da PJ fornecedora
- Recolhimento ao Tesouro Estadual
- Comprovantes de rendimentos

### Não Retenção (7 cards)
- PJs não sujeitas à retenção
- Dispensas por objeto
- Comprovação de imunidade/isenção

### Situações Específicas (8 cards)
- Agências de viagem
- Seguros e corretoras
- Propaganda e publicidade
- Consórcios
- Cooperativas
- Imóveis
- PJs no exterior

### SIGEF (2 cards)
- Funcionalidades do sistema
- Aplicação de alíquotas

### Exemplos Práticos (1 card)
- Cálculo prático de retenção

### Declarações (2 cards)
- Códigos de receita
- EFD-Reinf

## 📄 Exportação para Anki

A aplicação permite exportar todos os flashcards para um arquivo CSV compatível com o Anki. O arquivo contém:

- **Frente**: Pergunta do flashcard
- **Verso**: Resposta completa
- **Categoria**: Classificação do conteúdo
- **Legislação**: Referências legais

### Como usar no Anki:
1. Clique em "Exportar CSV (Anki)" na aplicação
2. Baixe o arquivo `flashcards-irrf-anki.csv`
3. No Anki, vá em Arquivo > Importar
4. Selecione o arquivo CSV
5. Configure os campos conforme necessário
6. Importe os cards

## 🎨 Design

- **Paleta de cores**: Tons claros (azul claro, branco, cinza claro)
- **Tipografia**: Fontes pretas para máximo contraste
- **Layout**: Cards centralizados com boa hierarquia visual
- **Responsividade**: Funciona bem em desktop e mobile
- **Acessibilidade**: Alto contraste e navegação por teclado

## 📖 Base Legal

O conteúdo dos flashcards é baseado no:

**Manual Técnico do Imposto de Renda Retido na Fonte – Pessoa Jurídica**
- Estado de Santa Catarina
- Secretaria de Estado da Fazenda
- Portaria Nº 163/GABS/SEF, de 24/05/2023

### Principais Referências Legais:
- Constituição Federal, art. 157, I
- Lei nº 9.430/1996, art. 64
- Lei nº 9.249/1995, art. 15
- IN RFB nº 1234/2012
- Decreto Estadual nº 129/2023
- STF - Tema 1130 (RE nº 1.293.453)

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto é desenvolvido para fins educacionais e de estudo da legislação tributária brasileira.

## 📞 Suporte

Para dúvidas sobre o conteúdo tributário, consulte:
- Manual oficial da Secretaria de Estado da Fazenda de SC
- Legislação vigente
- Profissionais especializados em direito tributário

---

**Desenvolvido com ❤️ para facilitar o estudo do IRRF para Pessoa Jurídica**

