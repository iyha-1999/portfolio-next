import type { NextApiRequest, NextApiResponse } from "next";

type IdAndName = {
  id: string;
  name: string;
};

type Profile = IdAndName & {
  thumbnail: string;
  description: string;
};

type WorkLink = {
  icon: string;
  title: string;
  url: string;
};
type WorkCard = {
  thumbnail: string;
  thumbnails: string[];
  title: string;
  description: string;
  links: WorkLink[];
  developmentEnvironment: string;
};
type Works = IdAndName & { cards: WorkCard[] };

type contents = [Profile, Works];

type Data = {
  contents: contents;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    contents: [
      { id: "profile", name: "profile", thumbnail: "", description: "" },
      {
        id: "works",
        name: "works",
        cards: [
          {
            title: "広告クリエイティブ",
            thumbnail: "/public/images/works/topThumbnails/0.png",
            thumbnails: [
              "/public/images/works/modalThumbnails/creativeList/0.png",
              "/public/images/works/modalThumbnails/creativeList/1.png",
              "/public/images/works/modalThumbnails/creativeList/2.png",
              "/public/images/works/modalThumbnails/creativeList/3.png",
              "/public/images/works/modalThumbnails/creativeList/4.png",
            ],
            description:
              "Banner Revolutionプロジェクトにて広告の動的クリエイティブバナーを作成しました。広告を表示する制約上、Jquery以外のライブラリを入れることが出来なかったため、ほぼピュアなjavascriptで実装しました。複雑な構成はejsを使用し、コンポーネント分けをしてコーディングしました。CSSTransition,javascriptに対する理解が深まりました。3年間で約200本のクリエイティブを作成しました。",
            links: [
              {
                title: "Banner Revolution",
                icon: "link",
                url: "https://advancedcreativecenter.com/",
              },
              {
                title: "Creative List(自分が作ったものの一部まとめ)",
                icon: "link",
                url: "https://junnitta-pf.sakura.ne.jp/contents/creativeList/",
              },
              {
                title: "gitHub",
                icon: "gitHub",
                url: "https://github.com/iyha-1999/creative-list",
              },
            ],
            developmentEnvironment: "HTML,CSS,Javascript,ejs(ビルド前)",
          },
          {
            title: "webinar-room",
            thumbnail: "/public/images/works/topThumbnails/1.png",
            thumbnails: [
              "/public/images/works/modalThumbnails/webinar/0.png",
              "/public/images/works/modalThumbnails/webinar/1.png",
              "/public/images/works/modalThumbnails/webinar/2.png",
            ],
            description:
              "ウェビナーの動画サービス、webinar-roomの動画コンポーネント、ランキンページ、LPをメインに実装を行いました。動画部分はhls.jsでストリーミングに対応しました。",
            links: [
              {
                title: "webinar-room",
                icon: "link",
                url: "https://webinar-room.net/",
              },
              {
                title: "webinar-room/lp",
                icon: "link",
                url: "https://webinar-room.net/lp",
              },
              {
                title: "webinar-room/ranking",
                icon: "link",
                url: "https://webinar-room.net/ranking",
              },
            ],
            developmentEnvironment:
              "HTML(Pug),CSS(SASS),Javascript,Vue.js,Nuxt.js,hls.js,Docker",
          },
          {
            title: "僕らの放課後戦争",
            thumbnail: "/public/images/works/topThumbnails/2.png",
            thumbnails: [
              "/public/images/works/modalThumbnails/sgame/0.png",
              "/public/images/works/modalThumbnails/sgame/1.png",
              "/public/images/works/modalThumbnails/sgame/2.png",
            ],
            description:
              "LP,UIのコーディング、Flashアニメーションの繋ぎ込み、バナー制作、イベントページのUIデザインを行いました。",
            links: [
              {
                title: "僕らの放課後戦争",
                icon: "link",
                url: "https://games.dmm.com/detail/houkago/",
              },
            ],
            developmentEnvironment:
              "HTML,CSS,Javascript,Create.js,Adobe Animate,Flash,Photoshop,Adobe XD,clip studio",
          },
          {
            title: "対魔忍アサギ〜決戦アリーナ〜",
            thumbnail: "/public/images/works/topThumbnails/3.png",
            thumbnails: [
              "/public/images/works/modalThumbnails/asagi/0.png",
              "/public/images/works/modalThumbnails/asagi/1.png",
              "/public/images/works/modalThumbnails/asagi/2.png",
              "/public/images/works/modalThumbnails/asagi/3.png",
            ],
            description:
              "リリース後の運営からチームに参加し、UIデザイン、アイコン制作、コーディング、アニメーション制作、バナー作成を行いました。追加機能ではボスバトルガチャページのコーディング、ガチャ演出のFlash、更新画像のルーチンを作成しました。更新画像の効率化のため、PhotoShop Scriptにて、立ち絵、カード画像、フェイスアイコンの自動書き出しスクリプトを作成しました。他社引き継ぎ作業も行い、イベント更新フローの資料を作成しました。",
            links: [
              {
                title: "",
                icon: "",
                url: "",
              },
            ],
            developmentEnvironment:
              "HTML,CSS,Javascript,Create.js,Adobe Animate,Flash,Photoshop,clip studio,CakePHP",
          },
          {
            title: "ぜったい遵守☆ぱこぱこカーニバル",
            thumbnail: "/public/images/works/topThumbnails/4.png",
            thumbnails: [
              "/public/images/works/modalThumbnails/kozu/0.png",
              "/public/images/works/modalThumbnails/kozu/1.png",
              "/public/images/works/modalThumbnails/kozu/2.png",
              "/public/images/works/modalThumbnails/kozu/3.png",
              "/public/images/works/modalThumbnails/kozu/4.png",
              "/public/images/works/modalThumbnails/kozu/5.png",
              "/public/images/works/modalThumbnails/kozu/6.png",
              "/public/images/works/modalThumbnails/kozu/7.png",
            ],
            description:
              "企画〜リリース〜運営まで携わり、全ページのデザイン、view部分のコーディングを1人で行いました。 UIデザイン、アイコン作成、コーディング、アニメーション制作、バナー作成、イベント更新画像の作成を行いました。また、各セクションに共有するUI資料、工数の調整を行いました。",
            links: [
              {
                title: "",
                icon: "",
                url: "",
              },
            ],
            developmentEnvironment:
              "HTML,CSS,Javascript,Create.js,Adobe Animate,Flash,Photoshop,clip studio,FuelPHP",
          },
          {
            title: "スクールさーばんつ",
            thumbnail: "/public/images/works/topThumbnails/5.png",
            thumbnails: [
              "/public/images/works/modalThumbnails/school/0.png",
              "/public/images/works/modalThumbnails/school/1.png",
              "/public/images/works/modalThumbnails/school/2.png",
              "/public/images/works/modalThumbnails/school/3.png",
              "/public/images/works/modalThumbnails/school/4.png",
            ],
            description:
              "リリース直前〜運営まで携わり、在宅スタッフとして4人のチームでデザイン業務を行いました。UIデザイン、アイコン作成、コーディング、イベント更新画像の作成を行いました。在宅スタッフのリーダーとしてディレクション業務も行い、Redmineでのタスク作成と管理などを行いました。",
            links: [
              {
                title: "",
                icon: "",
                url: "",
              },
            ],
            developmentEnvironment: "HTML,CSS,Javascript,ejs(ビルド前)",
          },
          {
            title: "WEBGL研究開発",
            thumbnail: "/public/images/works/topThumbnails/6.png",
            thumbnails: [
              "/public/images/works/modalThumbnails/three/0.png",
              "/public/images/works/modalThumbnails/three/1.png",
            ],
            description:
              "BXDプラットフォームへの提案用にthree.js,WEBGLを使用し、3Dゲームの研究開発を行いました。コーディング、3Dの加工、素材収集などを一人で担当しました。マウスをドラッグすると追従してモデルが動きます。",
            links: [
              {
                title: "WebGLAnimation(PC用)",
                icon: "link",
                url: "http://junnitta-pf.sakura.ne.jp/contents/three/",
              },
            ],
            developmentEnvironment:
              "HTML,CSS,Javascript,three.js,Blender,Photoshop",
          },
          {
            title: "開発中2Dサンドボックスゲーム",
            thumbnail: "/public/images/works/topThumbnails/7.png",
            thumbnails: [
              "/public/images/works/modalThumbnails/sandbox/0.png",
              "/public/images/works/modalThumbnails/sandbox/1.png",
              "/public/images/works/modalThumbnails/sandbox/2.png",
              "/public/images/works/modalThumbnails/sandbox/3.png",
            ],
            description:
              "マインクラフトの2D風のゲームを開発しています。イラスト、背景、プログラム、音楽を全て一人で作っています。詳しい仕様はgithubに記載しています。",
            links: [
              {
                title: "開発中2Dサンドボックスゲーム(PC用)",
                icon: "link",
                url: "https://junnitta-pf.sakura.ne.jp/contents/unity2DSandboxGame/",
              },
            ],
            developmentEnvironment:
              "Unity,C#,UniRx,inputSystem,photoshop,clips tudio",
          },
          {
            title: "技術研究_ランダムマップ",
            thumbnail: "/public/images/works/topThumbnails/8.png",
            thumbnails: [
              "/public/images/works/modalThumbnails/randomSheedMap/0.png",
              "/public/images/works/modalThumbnails/randomSheedMap/1.png",
            ],
            description:
              "React,Redux,Pixi.jsを組み合わせて、ゲームの開発環境を作るために始めたプロジェクトです。リロードするとマップがランダムに変更されます。詳細はgiuhubに記載しています。",
            links: [
              {
                title: "randomSeedMap(PC用)",
                icon: "link",
                url: "https://junnitta-pf.sakura.ne.jp/contents/randomSeedMap/",
              },
            ],
            developmentEnvironment:
              "HTML,CSS,Javascript,React.js,Redux,Pixi.js",
          },
          {
            title: "ポートフォリオサイト",
            thumbnail: "/public/images/works/topThumbnails/9.png",
            thumbnails: [
              "/public/images/works/modalThumbnails/pf/0.png",
              "/public/images/works/modalThumbnails/pf/1.png",
            ],
            description:
              "今まで作った作品をまとめるために作成しました。React.jsを使用しました。",
            links: [
              {
                title: "ポートフォリオ",
                icon: "link",
                url: "https://junnitta-pf.sakura.ne.jp/contents/randomSeedMap/",
              },
              {
                title: "gitHub",
                icon: "gitHub",
                url: "https://github.com/iyha-1999/portfolio",
              },
            ],
            developmentEnvironment: "HTML,CSS,Javascript,React.js",
          },
        ],
      },
    ],
  });
}
