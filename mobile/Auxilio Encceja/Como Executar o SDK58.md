# Auxílio Encceja — correção Expo SDK 58

Este projeto foi ajustado para o Expo SDK 58 e para o `expo-video`.

## Instalação

Use Node.js 22.13+.

```bash
npm install
npx expo install --fix
npx expo start -c
```

Se o Android continuar usando uma versão antiga do Expo Go, atualize o Expo Go pela Play Store.

## Login

O arquivo enviado foi colocado em:

`src/app/login.tsx`

## Vídeos

A tela `src/app/conteudos.tsx` usa:

```ts
import { VideoView, useVideoPlayer } from "expo-video";
```

Os vídeos locais continuam sendo carregados com `require(...)`, que é suportado pelo `expo-video`.
