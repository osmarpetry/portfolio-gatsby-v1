# AGENT.md

Notas de manutenção deixadas por agente para orientar trabalho futuro. Não é changelog do projeto.

## 2026-09-07 — Migração de majors do Dependabot

### Adiado (COMPLICADO)

- **PR #7** `react` 18.3.1 → 19.2.8
- **PR #4** `react-dom` 18.3.1 → 19.2.8

Ambos bloqueados pelo mesmo motivo: `decap-cms-app@3.5.0` (dependência atual, usado
por `gatsby-plugin-decap-cms`) tem peer dep `react@^18.2.0` / `react-dom@^18.2.0`.
`npm ci` falha com ERESOLVE tanto localmente quanto no CI (`build / build` do PR já
está FAILURE por isso).

Só existe suporte a React 19 a partir de `decap-cms-app@3.16.0` (peer `^19.1.0`).
Essa bump é escopo do **PR #3** (grupo npm minor: babel-plugin-styled-components,
lazysizes, decap-cms-app, ajv) — que é minor por semver (3.5.0→3.16.0), então cai
fora do escopo de "migrar majors". O PR #3 também está com CI quebrado no momento
(`build / build` FAILURE), então não vai automerge sozinho tão cedo.

Comentado `@dependabot ignore this major version` nos PRs #7 e #4.

### Próximos passos se for retomar

1. Investigar e consertar o CI do PR #3 primeiro (build está falhando — checar log
   antes de assumir que é só o decap-cms-app).
2. Deixar PR #3 mergear (automerge do job `dependabot` cuida disso com CI verde).
3. Depois disso, reabrir/recriar os PRs de `react`/`react-dom` para 19.x — o
   peer conflict deve desaparecer porque `decap-cms-app@3.16.0` já pede `^19.1.0`.
4. Sem o passo 2, qualquer tentativa de subir react/react-dom para 19 sozinho vai
   continuar falhando `npm ci` por ERESOLVE.

### Decisão técnica

Nenhuma mudança de código foi feita neste repo — apenas comentários nos PRs e
`@dependabot ignore` para o major atual. Teto de fato é o peer dep do
`decap-cms-app`, não algo imposto por nós.
