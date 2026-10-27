# Estrutura do código

```
src/
  main.ts                 entrada: carrega o CSS, monta a tela e registra o service worker
  domain/                 regras puras, sem DOM nem armazenamento
    DrawEngine.ts         sorteio dos times
    WhatsAppExporter.ts   texto para o WhatsApp
    playerUtils.ts        normalização e comparação de nomes
    random.ts             embaralhamento
    types.ts              Player, DrawConfig, DrawResult
  ui/
    TeamsApp.ts           tela: cadastro, sorteio, resultado e abas
  storage/
    TeamsStorage.ts       jogadores e jogadores por time salvos no localStorage
  utils/
    clipboard.ts          copiar para a área de transferência
  styles/app.css
public/                   ícone, manifest e service worker da PWA
tests/sorteio.test.ts     testes do domínio (Vitest)
netlify.toml              build e cabeçalhos de segurança no Netlify
```

## Onde mexer

| Quero mudar | Arquivo |
| --- | --- |
| Como os times são montados ou os avisos | `src/domain/DrawEngine.ts` e os testes |
| O texto copiado para o WhatsApp | `src/domain/WhatsAppExporter.ts` |
| Comparação de nomes repetidos | `src/domain/playerUtils.ts` |
| Tela, botões e abas | `src/ui/TeamsApp.ts` e `index.html` |
| O que fica salvo no aparelho | `src/storage/TeamsStorage.ts` |

## Comandos

```bash
npm run dev      # desenvolvimento
npm test         # testes
npm run build    # checagem de tipos e build em dist/
```
