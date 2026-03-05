# Contribuindo com o SaaS (Guia de Dev)

## Padrão de Branch
- `main`: produção
- `develop`: integração (quando aplicável)
- `feature/<slug>`: novas funcionalidades
- `fix/<slug>`: correções
- `chore/<slug>`: manutenção (deps, configs, refactors)
- `hotfix/<slug>`: correção urgente em produção

## Commits (convenção)
Use Conventional Commits:
- `feat: ...`
- `fix: ...`
- `docs: ...`
- `refactor: ...`
- `test: ...`
- `chore: ...`

## Pull Requests
Checklist mínimo:
- Descreveu o contexto e a solução
- Incluiu prints/gifs quando for UI
- Incluiu testes (quando aplicável)
- Atualizou documentação (quando necessário)
- Passou no CI

## Definition of Done (DoD)
- Código revisado
- Sem erros de lint
- Funcionalidade testada (manual ou automatizado)
- Sem credenciais no repo
- Logs e erros tratáveis

## Padrões de Qualidade
- Evitar lógica de negócio no UI
- Validar entradas (client e server)
- Logs estruturados (com correlação por request)
- Não quebrar contratos de API sem versão/compat

## Como criar uma Issue boa
Inclua:
- Contexto
- Resultado esperado vs atual
- Passos para reproduzir
- Critérios de aceite
- Observações/prints

## Segurança
Vulnerabilidades: veja `SECURITY.md`
