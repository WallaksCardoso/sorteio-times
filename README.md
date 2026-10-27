# Sorteio de Times

App web para sortear os times da pelada no celular, com goleiros separados do sorteio, e devolver o
resultado pronto para colar no grupo do WhatsApp.

[![CI](https://github.com/WallaksCardoso/sorteio-times/actions/workflows/ci.yml/badge.svg)](https://github.com/WallaksCardoso/sorteio-times/actions/workflows/ci.yml)
![TypeScript](https://img.shields.io/badge/TypeScript-6-informational)
![Vite](https://img.shields.io/badge/Vite-8-informational)
[![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-informational)](LICENSE)

**Demonstração:** <https://celadon-palmier-f76ac3.netlify.app/>

## Sobre

Um grupo grande organiza a pelada pelo WhatsApp e, duas vezes por semana, alguém precisa fechar a
lista e sortear os times na mão, o que é lento e gera discussão. Este app resolve isso em poucos
toques no celular: cadastra quem vai jogar, sorteia e copia o resultado formatado para o grupo.

É uma PWA estática, sem servidor: instala na tela inicial do celular e guarda a lista no próprio
aparelho.

## Funcionalidades

- Cadastro dos jogadores um a um, marcando quem joga no gol
- Nomes repetidos são reconhecidos mesmo com acento, maiúscula ou espaço diferente
- Escolha de quantos jogadores de linha cada time tem
- Sorteio dos times **Azul** e **Vermelho**:
  - os jogadores de linha são embaralhados e distribuídos alternadamente entre os dois times;
  - os goleiros são sorteados à parte, um para cada time;
  - quem passa do número de titulares fica como reserva (ou terceiro time).
- Avisos quando há só um goleiro, goleiros demais ou menos titulares que o necessário
- Resultado copiado em um toque, já formatado para o WhatsApp
- Instalável no celular (PWA) e lista salva no navegador

## Stack

- TypeScript e Vite, sem framework
- PWA (manifest e service worker)
- Vitest
- Netlify e GitHub Actions

## Como rodar

Pré-requisito: Node.js 20 ou mais novo.

```bash
npm install
npm run dev
```

Build de produção (gera a pasta `dist/`, publicada pelo Netlify):

```bash
npm run build
```

## Testes

```bash
npm test
```

Cobrem o sorteio (times do mesmo tamanho, reservas, goleiros separados, limite da lista e avisos), o
texto gerado para o WhatsApp e a comparação de nomes. A CI roda os testes, a checagem de tipos e o
build a cada push.

## Estrutura

```
src/
  domain/    regras do sorteio, texto para o WhatsApp e tipos
  ui/        tela do app
  storage/   lista salva no navegador
  utils/     área de transferência
public/      ícone, manifest e service worker da PWA
docs/        visão do produto, arquitetura e funcionalidades
tests/       testes do domínio
```

## Projetos relacionados

- [pelada-gestao](https://github.com/WallaksCardoso/pelada-gestao): versão anterior, com API e cadastro de usuários

## Licença

[MIT](LICENSE)
