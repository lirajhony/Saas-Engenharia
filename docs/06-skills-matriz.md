# Matriz de Skills (Competências) do Projeto

Este documento define as competências necessárias para construir e operar o SaaS com qualidade e escala.
Use como guia de contratação, terceirização e divisão de tarefas.

## Níveis
- N1 (Básico): executa com supervisão, segue playbooks
- N2 (Pleno): executa ponta a ponta com autonomia
- N3 (Sênior): define padrões, revisa, melhora arquitetura e performance

---

## 1) Produto & Domínio (Engenharia/Arquitetura)
- Entendimento de EAP, disciplinas, marcos, entregáveis (N1→N3)
- Orçamento: SINAPI / CEF / ENGEGOV / composições / BDI (N1→N3)
- Cronograma físico-financeiro e dependências (N1→N3)
- Documentos técnicos: memoriais, quantitativos, relatórios (N1→N2)
- Governança pública (prefeituras/associações) e rastreabilidade (N2→N3)

## 2) UX/UI
- Design system, componentes, acessibilidade (N1→N3)
- Dashboards e visão executiva (N2→N3)
- Experiência mobile-first e performance percebida (N2)

## 3) Frontend
- React/Next (estado, forms, validação, rotas) (N1→N3)
- Tabelas complexas (filtros, paginação, inline edit) (N2→N3)
- Gráficos/Gantt (bibliotecas e performance) (N2→N3)

## 4) Backend & API
- Modelagem de domínio (projetos, etapas, entregáveis) (N2→N3)
- APIs REST/GraphQL, versionamento, contratos (N2→N3)
- Jobs/filas e processamento assíncrono (N2→N3)
- Upload de arquivos + permissões + auditoria (N2→N3)

## 5) Banco de Dados & Dados
- Modelagem relacional (N1→N3)
- RLS/segurança por tenant (multi-empresa) (N2→N3)
- Migrações e seeds (N2)
- Observabilidade de consultas (N2)

## 6) DevOps & Deploy
- Ambientes dev/staging/prod (N1→N2)
- Deploy Vercel + secrets + preview (N1→N2)
- Monitoramento, logs, métricas, alertas (N2→N3)
- Backups e rotinas de recuperação (N2→N3)

## 7) Segurança & LGPD
- Autenticação/autorização (RBAC/ABAC) (N2→N3)
- Gestão de dados pessoais e consentimento (N2)
- Boas práticas OWASP (N2→N3)

## 8) Automação (n8n) & Integrações
- Webhooks, ETL leve, notificações (N1→N3)
- Integrações: WhatsApp/Email/Drive/Sheets (N1→N2)
- Resiliência (retries, idempotência) (N2→N3)

## 9) IA / Agentes
- Prompt engineering orientado a produto (N1→N3)
- Avaliação de custo x qualidade (tokens, latência) (N2→N3)
- Guardrails, auditoria de saídas, rastreabilidade (N2→N3)

---

## RACI simplificado (quem faz o quê)
- Produto (Jhony): visão, priorização, critérios de aceite
- Tech Lead: arquitetura, padrões, revisões críticas
- Dev Fullstack: features, integrações, testes
- Designer: UI kit, fluxo, protótipos
- QA: cenários, regressão, qualidade
- Ops/DevOps: deploy, observabilidade, incidentes
