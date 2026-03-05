# Workflows e Rotinas (MVP → Beta)

## Fluxo padrão de feature
1. Criar Issue (feature/task) com critérios de aceite
2. Prototipar (quando UI) e validar fluxo
3. Implementar feature branch
4. PR com checklist + prints
5. Review + ajustes
6. Merge + deploy em staging
7. Validação + deploy prod

## Rotina semanal (gestão)
- Refinamento do backlog (prioridade x impacto x esforço)
- Revisão de métricas (bugs, tempo de ciclo, uso)
- Revisão de custos (tokens, automações, infra)
- Registro de decisões (ADR) quando mudar arquitetura

## Padrão de integrações (n8n)
- Todo fluxo deve ter:
  - entrada: webhook/trigger
  - validação: schema
  - processamento: idempotência
  - logs: status + payload mínimo
  - saída: notificação + persistência

## Padrão de IA
- Sempre registrar:
  - objetivo do prompt
  - inputs esperados
  - exemplos (bons/ruins)
  - fallback quando falhar
  - limites (o que não fazer)
