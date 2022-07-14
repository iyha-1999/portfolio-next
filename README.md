## 環境構築手順

・typescript

```
npx create-next-app@latest example --ts
```

・sass

```
yarn add sass --save-dev
```

・api

```
yarn add swr
```

## src ディレクトリ以下の構成

- `components/`
  - コンポーネントを配置
- `components/presentation`
  - 「見た目」を定義する UI コンポーネント (`.tsx`) を配置。
  - ロジックを持たず、渡された `props` を純粋に描画するコンポーネント。
  - 何らかのロジック（フックによるデータフェッチや状態管理）を持つコンポーネントは、ここではなく `containers` ディレクトリに配置。
- `components/containers/`
  - 「振る舞い」を定義するコンポーネント (`.tsx`) を配置。
  - フック関数などによるデータフェッチ、状態の保存・変更などのロジックを含み、最終的に表示すべきデータを別のコンポーネントの `props` オブジェクトとして渡す。
- `hooks/`
  - React のカスタムフックを配置
  - アプリケーションのロジックはコンポーネント内には記述せず、できるだけフック関数として実装。
  - 基本的に、フック関数は `comtainers` ディレクトリ以下のコンポーネントや、別のフック関数から呼び出し。
- `pages/`
  - Next.js のページコンポーネント (`.tsx`)、および、`_app.tsx` と `_document.tsx` を配置。
  - Web サイトアクセス時の URL パスに応じたファイル (`xxx.tsx`) が読み込まれる。
  - Atomic Design における Templates (Pages) に相当。
- `types/`
  - 複数ファイルで共有する TypeScript 型定義を配置。
  - `index.ts` から `export` した型は、`import { UserInfo } from '../types'` のようにインポートする。
- `utils/`
  - 上記いずれにも当てはまらないユーティリティ（コンフィグ、データフェッチ関数など）を配置。
