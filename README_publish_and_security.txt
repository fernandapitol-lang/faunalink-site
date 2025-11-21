
FaunaLink — Pacote oficial com gate (demo) and publishing instructions
=====================================================================

Conteúdo desta pasta (ready-to-publish):
- index.html -> redireciona para login.html
- login.html -> página de entrada (senha demo: 'faunalink2025') (client-side)
- simulator.html -> simulador integrado que usa as imagens em /assets/
- assets/ -> imagens (onca, noturna, praia, FL_img_01..FL_img_30 and variants)

IMPORTANTE SOBRE A SEGURANÇA
----------------------------
A página 'login.html' utiliza UMA senha verificada em JavaScript no navegador.
Isso é útil para apresentações e demonstrações locais, mas **NÃO é seguro** para proteger dados sensíveis.
Para proteção profissional e privada recomendamos usar **Cloudflare Access** (gratuito até 50 usuários) — instruções abaixo recomendadas.

PUBLICAR NO GITHUB PAGES
------------------------
1) Crie um repositório no GitHub chamado: faunalink-site
2) Faça upload de todos os arquivos desta pasta (mantenha a estrutura)
3) Em Settings -> Pages: selecione Branch = main, Folder = root. Salve.
4) A URL ficará: https://FerreiraFernandaPitol.github.io/faunalink-site/

CONFIGURAR PROTEÇÃO PROFISSIONAL (CLOUDFLARE ACCESS)
---------------------------------------------------
1) Crie conta em: https://dash.teams.cloudflare.com/
2) No painel Zero Trust -> Access -> Applications: Add an application -> Self-hosted
3) Application domain: https://FerreiraFernandaPitol.github.io/faunalink-site/*
4) Configure Identity Provider: Email OTP OR Google/Microsoft
5) Create policy: Allow only specific emails (ex: fernanda@..., rebeca@..., beatriz@...)
6) Salve. Agora o site exige login via Cloudflare.

EXIBIÇÃO E TESTES
-----------------
- Abra a URL do GitHub Pages ou localmente (abra site/index.html)
- Você verá a tela de login (use senha demo se não configurou Cloudflare)
- Após login, o simulador mostra marcadores e eventos. Clique nos pop-ups para ver imagens.

PERSONALIZAÇÃO
--------------
- Para atualizar a senha demo, edite login.html (valor 'faunalink2025').
- Para substituir o simulador pelo HTML mais completo, renomeie seu arquivo final para simulator.html (substitua o placeholder).

SUPORTE
-------
Se quiser, eu posso:
- Automatizar o deploy no seu repositório GitHub (se você me der o username e me autorizar, eu mostro comandos)
- Gerar a configuração exata do Cloudflare Access (passo-a-passo com screenshots)
- Gerar variantes dos cartazes para impressão com QR códigos já apontando para a URL final.
