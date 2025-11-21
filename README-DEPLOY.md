# Deploy (detalhado)

1. Crie repositório privado e faça push de todo o conteúdo
2. No GitHub Actions, configure secrets:
   - GITHUB_TOKEN (já disponível)
   - CF_API_TOKEN (se for usar Cloudflare API)
3. Configure Cloudflare Access Application apontando para o domínio
4. Se preferir, use Cloudflare Pages e configure o build
5. Verifique políticas de acesso e mTLS se necessário
