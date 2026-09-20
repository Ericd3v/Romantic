# Meu bem.exe ❤️ — site para a Luciana Fiaux

Site de página única (HTML + CSS + JavaScript puro), sem frameworks e sem etapa de build.

```text
luciana-site/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── images/
    │   ├── foto-01.jpg
    │   ├── foto-02.jpg
    │   └── foto-03.jpg
    └── music/
        └── musica.mp3
```

As fotos e a música são **opcionais**. Sem elas, o site aparece com placeholders e uma mensagem amigável.

---

## 1. Como executar

**Jeito mais simples:** dê dois cliques em `index.html`. Ele abre no navegador.

**Jeito recomendado (servidor local):** alguns recursos, como copiar para a área de transferência, funcionam melhor com `http://` do que com `file://`.

```bash
cd luciana-site
python3 -m http.server 8000
# abra http://localhost:8000
```

(ou `npx serve` se você usa Node.)

---

## 2. Como configurar o contador de 01/08/2026

No começo do `script.js`, procure `CONFIG.firstMeeting`:

```js
firstMeeting: {
  date: "2026-08-01",
  time: "12:00:00",
  timeIsKnown: false,
  showNote: false
}
```

- `date`: a data real do primeiro encontro, no formato `AAAA-MM-DD`.
- `time`: **horário provisório (12:00:00). Não é o horário real.** Foi deixado só para o contador funcionar caso você queira usar.
- `timeIsKnown`:
  - `false` (padrão): conta a partir da **meia-noite (00:00:00) do dia 01/08/2026**, ignorando o `time` provisório. Foi a escolha porque a hora real não foi informada.
  - `true`: usa o `time` acima. Antes de ativar, troque `time` pelo horário real (formato `HH:MM:SS`).
- `showNote`: `true` mostra um aviso pequeno sob o contador dizendo de onde a contagem parte.

O horário é interpretado no **fuso do navegador** de quem abre o site. Se a data for inválida, o contador mostra um aviso e o resto do site continua normal.

---

## 3. Como substituir as fotos

1. Coloque suas fotos em `assets/images/`.
2. No `script.js`, edite `CONFIG.photos`:

```js
photos: [
  { src: "assets/images/foto-01.jpg", alt: "Descrição para leitores de tela", caption: "Legenda que aparece no hover" },
  { src: "assets/images/foto-02.jpg", alt: "...", caption: "..." },
  { src: "assets/images/foto-03.jpg", alt: "...", caption: "..." }
]
```

- Aceita de 1 a 6 itens (pode adicionar `foto-04.jpg` etc.).
- Se o arquivo não existir, aparece o placeholder ("Aqui entraria uma foto sua...").
- Dica: fotos de até ~300 KB carregam rápido no celular. Formato vertical (4:5) fica melhor, mas qualquer proporção funciona (o corte é automático).
- Use apenas fotos suas ou fotos que você tenha autorização para usar.

---

## 4. Como alterar as declarações

- **A carta:** `CONFIG.letter` no `script.js`. Cada item de `paragraphs` é um parágrafo. Também dá para mudar `greeting`, `closing` e `signature`.
- **Os três cards (sorriso, olhar, animação) e os textos das seções:** estão direto no `index.html`, em `<p>` comuns.
- **Mensagens surpresa, carinho e saudade:** `CONFIG.surpriseMessages`, `CONFIG.carinhoMessages`, `CONFIG.saudadeMessages`.
- **Mensagens prontas do convite:** `CONFIG.invite`.

---

## 5. Como editar as perguntas do quiz

Em `CONFIG.quiz.questions`:

```js
{
  q: "Texto da pergunta",
  options: [
    { text: "Opção comum" },
    { text: "Todas as anteriores 😂", kind: "all" }
  ]
}
```

- Não há resposta certa ou errada. As opções com `kind: "all"` são as do tipo "todas as anteriores".
- O resultado é escolhido pela **quantidade de opções `all`** marcadas, em `CONFIG.quiz.results` (`minAll`). É só uma brincadeira, não mede sentimento nenhum.
- Pode ter mais ou menos de 5 perguntas; a barra de progresso se ajusta.

---

## 6. Como mudar as cores

No topo do `style.css`, bloco `:root`:

```css
--black: #06060b;   /* fundo */
--bordo: #7a1a33;   /* botões principais */
--rose:  #c9737f;   /* destaques */
--amber: #ffb066;   /* luz quente (chalé) */
--gold:  #c9a55f;   /* detalhes dourados */
```

Mudar essas variáveis já atualiza o site inteiro. Se trocar as cores dos botões, confira se o texto continua com bom contraste.

---

## 7. Como adicionar a música

1. Salve um arquivo `.mp3` em `assets/music/musica.mp3` (ou outro nome, e ajuste `CONFIG.music.src`).
2. Troque `CONFIG.music.title` pelo nome que aparece no botão.

A música **nunca toca sozinha**: só quando a Luciana clicar no botão ♪. Sem o arquivo, o botão mostra uma mensagem amigável.

> Use apenas músicas que você tenha direito de usar (própria, licenciada ou livre de direitos). Músicas comerciais têm direitos autorais.

---

## 8. Como publicar em hospedagem estática

Por ser um site estático, qualquer um destes serve (todos têm plano gratuito):

- **Netlify Drop:** arraste a pasta `luciana-site` para a página do Netlify Drop.
- **GitHub Pages:** suba a pasta para um repositório, ative Pages em *Settings → Pages*.
- **Cloudflare Pages** ou **Vercel:** conecte o repositório ou envie a pasta.

O site já inclui `noindex` para não aparecer em buscadores. Se quiser um endereço mais discreto, escolha um nome que só vocês entendam.

---

## 9. Como testar em celular

- **Mesma rede Wi-Fi:** rode `python3 -m http.server 8000` no computador e abra `http://IP-DO-COMPUTADOR:8000` no celular.
- **Depois de publicar:** abra o link no celular e teste o modo retrato e paisagem.
- **No computador:** no Chrome, `F12` → ícone de celular (modo dispositivo) para simular telas pequenas.

---

## 10. Erros comuns

| Problema | Causa provável | Solução |
|---|---|---|
| Fotos não aparecem (aparece o placeholder) | Nome ou pasta errados | Confira se o arquivo está em `assets/images/` e se o nome bate com `CONFIG.photos` (maiúsculas contam em hospedagens). |
| Mensagens `404` no console sobre fotos/música | Os arquivos ainda não foram adicionados | É esperado. O navegador registra o 404, mas o site funciona normalmente. Some quando os arquivos existirem. |
| Música não toca | Arquivo ausente ou formato não suportado | Use `.mp3` em `assets/music/`. Alguns celulares só tocam após um toque no botão (é o comportamento esperado). |
| Contador mostra zeros | A data ainda não chegou ou está inválida | Confira `CONFIG.firstMeeting.date` (formato `AAAA-MM-DD`). |
| Contador com horas "erradas" | Hora provisória/fuso | Mantenha `timeIsKnown: false` ou informe a hora real com `timeIsKnown: true`. |
| Botão "Copiar mensagem" falha | Página aberta via `file://` em alguns navegadores | Use um servidor local ou o site publicado (https). Também dá para copiar o texto manualmente. |
| Fontes diferentes do esperado | Sem internet para carregar o Google Fonts | Sem problema: o CSS usa fontes de reserva (Georgia e fontes do sistema). |
| Nada acontece ao clicar | Erro de sintaxe ao editar o `script.js` | Abra o console (`F12`) e veja a linha do erro. Verifique vírgulas e aspas nas listas do `CONFIG`. |

---

## Acessibilidade

- Navegação completa por teclado; foco visível.
- Carta e visualizador de fotos são diálogos: fecham com `Esc`, com o botão ✕ ou clicando fora, e devolvem o foco ao botão de origem.
- `prefers-reduced-motion`: animações são praticamente desligadas para quem prefere.
- Áreas de toque de pelo menos 44–48 px.
- Nada bloqueia a rolagem: dá para navegar pelo site inteiro sem clicar em nada.
