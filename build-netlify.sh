#!/bin/bash

# Build script otimizado para Netlify
echo "🚀 Iniciando build otimizado para Netlify..."

# Limpar builds anteriores
echo "🧹 Limpando builds anteriores..."
rm -rf dist/public

# Defina variáveis de ambiente
export NODE_ENV=production
export VITE_NODE_ENV=production

# Execute o build (a partir da raiz do projeto)
echo "⚡ Executando build do Vite..."
npx vite build --config vite.config.turbo.ts --mode production

# Verificar se o build foi bem-sucedido
if [ $? -eq 0 ]; then
    echo "✅ Build concluído com sucesso!"
    echo "📂 Arquivos criados em dist/public:"
    ls -la dist/public/
    
    # Verificar se o index.html foi criado
    if [ -f "dist/public/index.html" ]; then
        echo "✅ index.html criado com sucesso"
    else
        echo "❌ Erro: index.html não encontrado"
        exit 1
    fi
    
    # Verificar tamanho dos arquivos
    echo "📊 Tamanho dos arquivos principais:"
    find dist/public -name "*.js" -o -name "*.css" | head -5 | xargs ls -lh
    
else
    echo "❌ Build falhou"
    exit 1
fi

echo "🎉 Build Netlify concluído com sucesso!"