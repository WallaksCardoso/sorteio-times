# Decisões

## Sem framework e sem servidor

TypeScript com Vite e manipulação direta do DOM. A tela é uma só e o app precisa abrir rápido no
celular; um framework traria peso sem ganho. Sem servidor, não há login, custo nem dado de terceiros
fora do aparelho.

## Domínio separado da tela

As regras do sorteio ficam em `src/domain/`, sem acesso a DOM ou `localStorage`. Isso permite
testá-las isoladamente e mudar a tela sem risco de alterar o sorteio.

## Cadastro manual no lugar da importação

Uma versão anterior interpretava o texto colado da lista de um grupo específico, com titulares,
goleiros e suplentes. Quando o app passou a ser um sorteio de times genérico, que serve para qualquer
grupo e esporte, a importação foi removida e o cadastro um a um ficou como único caminho.

## Sem equilíbrio por nível

O sorteio é puramente aleatório. Um sistema de notas por jogador foi descartado para manter o uso
simples e evitar discussões sobre a nota de cada um.

## Publicação no Netlify

Build estático publicado no Netlify. O service worker busca o HTML primeiro na rede e não é guardado
em cache, para que a nova versão chegue logo aos celulares; os cabeçalhos impedem que o app seja
embutido em outras páginas.
