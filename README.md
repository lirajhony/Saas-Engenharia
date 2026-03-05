# SaaS para Empresa de Engenharia (MVP → Escala)

Plataforma SaaS focada em gestão de projetos, orçamento, cronograma (Gantt com dependências), entregáveis técnicos e operação de equipe (misto de funcionários e terceirizados), com integração de automações/agents.

## Objetivo do produto
- Centralizar **projetos** (disciplinas, etapas, entregáveis, marcos)
- Padronizar **orçamentos** (SINAPI/CEF/ENGEGOV) e documentos
- Automatizar rotinas com **n8n** e agentes (resumos, atas, triagem, relatórios)
- Entregar dashboards e visões executivas para gestores e clientes
- Escalar com segurança, logs e governança

## Status
- Fase atual: MVP
- Próxima fase: Beta com integrações + portal do cliente
- Ambiente: dev / staging / prod

## Principais módulos (visão macro)
1. **Projetos**
   - Disciplinas / EAP / marcos (milestones)
   - Entregáveis, checklists e aprovação
2. **Cronograma físico**
   - Gantt, durações, dependências e recálculo automático
3. **Orçamentos**
   - Templates e padronizações (SINAPI/CEF/ENGEGOV)
   - Exportações (Excel/PDF) e trilha de auditoria
4. **Financeiro contratual**
   - Valor, entrada, parcelas, status de pagamento
5. **Portal do cliente**
   - Acompanhamento, anexos, histórico e solicitações
6. **Automação e agentes**
   - n8n (ETL, notificações, WhatsApp/email)
   - IA (resumo, classificação, geração de documentos)

## Stack (resumo)
- Frontend: (definir) Ex: Next.js / React + Tailwind
- Backend: (definir) Ex: API Next / Node / Python
- Auth/DB: (definir) Ex: Supabase
- Deploy: (definir) Ex: Vercel
- Automação: n8n
- IA: OpenAI / Gemini / Claude (conforme caso)
- Repo: GitHub (Issues + Projects + Actions)

> Detalhes completos: `docs/03-stack-e-ferramentas.md` e `docs/02-arquitetura.md`

## Como rodar localmente
1. Copie o arquivo `.env.example` para `.env.local`
2. Preencha as variáveis
3. Rode:
   - `npm install`
   - `npm run dev`

## Governança do repositório
- Padrões de branch/PR: `CONTRIBUTING.md`
- Templates de issue/PR: `.github/`
- Decisões de arquitetura: `adr/` + `docs/10-adr-template.md`

## Links úteis
- Roadmap: `docs/01-roadmap.md`
- Workflows de desenvolvimento: `docs/04-workflows-e-rotinas.md`
- Matriz de skills: `docs/06-skills-matriz.md`
