# Visão do produto

## Problema

Um grupo grande organiza a pelada de Fut7 pelo WhatsApp. Duas vezes por semana alguém precisa
fechar a lista e sortear os times na mão, o que é lento e costuma gerar discussão sobre quem ficou
em qual time.

## Objetivo

Sortear os times em poucos toques no celular e devolver o resultado pronto para colar no grupo.

1. O organizador cadastra os jogadores da lista, marcando quem joga no gol.
2. Escolhe quantos jogadores de linha cada time tem.
3. Toca em sortear e copia o resultado formatado para o WhatsApp.

## Público

Uma pessoa que organiza a lista e precisa de velocidade no celular, muitas vezes em pé, na hora do
jogo.

## Requisitos do projeto

- Funcionar sem servidor e sem login: a lista fica salva no próprio aparelho.
- Ser instalável na tela inicial (PWA) e abrir rápido.
- Regras do sorteio isoladas da tela e cobertas por testes.

## Fora do escopo

- Integração oficial com a API do WhatsApp Business.
- Pagamentos ou controle de presença.
- Equilíbrio dos times por nível dos jogadores.
- Importar a lista colando o texto do grupo (existiu em uma versão anterior e foi removida; veja
  [Decisões](decisoes.md)).
