# Instruções para Deploy no GitHub Pages

## Passos para configurar o GitHub Pages:

1. **Faça push da branch gh-pages para o GitHub:**
   ```bash
   git push origin gh-pages
   ```

2. **Configure o GitHub Pages no repositório:**
   - Vá para Settings > Pages
   - Em 'Source', selecione 'Deploy from a branch'
   - Selecione a branch 'gh-pages'
   - Selecione '/ (root)' como pasta
   - Clique em 'Save'

3. **Aguarde alguns minutos** para o deploy ser processado

4. **Acesse sua aplicação** em: https://[seu-usuario].github.io/[nome-do-repositorio]

## Arquivos importantes para GitHub Pages:
- `.nojekyll` - Desabilita o processamento Jekyll
- `404.html` - Página de fallback para SPAs
- `index.html` - Página principal da aplicação
- `assets/` - Arquivos CSS e JS compilados

## Estrutura da branch gh-pages:
```
├── index.html          # Página principal
├── 404.html           # Fallback para SPA
├── .nojekyll          # Desabilita Jekyll
├── favicon.ico        # Ícone do site
└── assets/            # Arquivos compilados
    ├── index-[hash].js
    └── index-[hash].css
```

A aplicação está pronta para ser implantada no GitHub Pages!
