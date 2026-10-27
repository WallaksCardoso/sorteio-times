# Regras do sorteio

Implementadas em `src/domain/DrawEngine.ts` e testadas em `tests/sorteio.test.ts`.

## Entrada

- Lista de jogadores, cada um com nome e a marcação de goleiro.
- Quantidade de jogadores de linha por time (`nPerTeam`).
- Nomes são comparados sem diferenciar maiúscula, acento ou espaços extras, o que impede cadastrar a
  mesma pessoa duas vezes (`nameKey` em `src/domain/playerUtils.ts`).

## Montagem dos times

1. Goleiros e jogadores de linha são separados.
2. Os jogadores de linha são embaralhados (Fisher-Yates, em `src/domain/random.ts`).
3. Os primeiros `nPerTeam × 2` viram titulares e são distribuídos alternadamente: o 1º para o time
   **Azul**, o 2º para o **Vermelho**, e assim por diante.
4. Quem passa disso vira **reserva / 3º time**, na ordem do sorteio.
5. Os goleiros são embaralhados à parte: o primeiro vai para o Azul e o segundo para o Vermelho.
   Goleiros marcados sempre começam jogando.

## Avisos

| Situação | Aviso |
| --- | --- |
| Um goleiro só | O outro time combina o gol entre quem ficou de fora |
| Mais de dois goleiros | Só dois entram (um por time); informa quantos ficaram de fora |
| Menos jogadores de linha que `nPerTeam × 2` | Mostra quantos titulares há e quantos seriam necessários |

## Texto para o WhatsApp

Gerado por `src/domain/WhatsAppExporter.ts`:

```
*Sorteio de Times*

*Time Azul*
Goleiro: Fulano
1. Jogador
...

*Time Vermelho*
Goleiro: a combinar
1. Jogador
...

*Reservas / 3º time*
1. Jogador
```

A linha de goleiro só aparece quando há pelo menos um goleiro marcado; o time sem goleiro mostra
"a combinar". A seção de reservas só aparece quando há reservas.
