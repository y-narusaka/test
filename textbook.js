// textbook.js

// 教科書コンテンツのデータ構造 (章ごとに配列で管理)
// 実際のコンテンツは別途指示される内容で置き換えてください。
const textbookContent = {
  "第一章": [
    {
      title: "第一章: AI（人工知能）とは",
      paragraphs: [
        "人工知能（AI）は、人間の知能を模倣し、学習、推論、問題解決などの認知機能を持つように設計された技術です。",
        "AIは、データからパターンを認識し、それに基づいて予測を行ったり、意思決定をサポートしたりすることができます。AIは、単にプログラムされたタスクを実行するだけでなく、経験から学習し、時間の経過とともにパフォーマンスを向上させる能力を持っています。"
      ]
    },
    {
      title: "AIの歴史と発展",
      paragraphs: [
        "AIの概念は、1950年代にコンピューター科学者によって提唱されました。初期のAI研究は、論理推論や問題解決に焦点を当てていましたが、計算能力の限界により発展が停滞しました。",
        "2000年代以降、ディープラーニング（深層学習）などの機械学習技術の進歩と、大量のデータ、高性能な計算資源の利用が可能になったことで、AIは飛躍的な発展を遂げました。これにより、画像認識、音声認識、自然言語処理などの分野で目覚ましい成果を上げています。"
      ]
    }
    // 必要に応じてページを追加
  ],
  "第二章": [
    {
      title: "第二章: 生成AIの基礎",
      paragraphs: [
        "生成AI（Generative AI）は、既存のデータから学習し、新しいコンテンツ（テキスト、画像、音声など）を生成する能力を持つAIモデルです。",
        "従来のAIがデータを分析したり分類したりすることに重点を置いていたのに対し、生成AIは独自のクリエイティブな出力を生み出すことができます。"
      ]
    },
    {
        title: "生成AIの主要技術",
        paragraphs: [
            "生成AIの主要な技術には、GAN（敵対的生成ネットワーク）、VAE（変分オートエンコーダ）、そしてTransformerモデルがあります。",
            "特にTransformerモデルは、自然言語処理の分野で大きな成功を収め、ChatGPTのような大規模言語モデルの基盤となっています。"
        ]
    }
  ],
  "第三章": [
    {
        title: "第三章: 大規模言語モデル (LLM)",
        paragraphs: [
            "大規模言語モデル（LLM: Large Language Models）は、膨大なテキストデータで訓練されたAIモデルで、人間の言語を理解し、生成する能力を持ちます。",
            "これらのモデルは、文脈を把握し、質問に答えたり、要約を作成したり、記事を執筆したりするなど、多様なタスクを実行できます。"
        ]
    },
    {
        title: "LLMの応用例",
        paragraphs: [
            "LLMは、カスタマーサポートのチャットボット、コンテンツ生成、翻訳、コード生成、教育ツールなど、幅広い分野で活用されています。",
            "その汎用性と高い性能から、ビジネスや日常生活に大きな変革をもたらしています。"
        ]
    }
  ],
  "第四章": [
    {
        title: "第四章: 生成AIの倫理とリスク",
        paragraphs: [
            "生成AIの普及に伴い、倫理的な問題やリスクも顕在化しています。これには、フェイクニュースや誤情報の拡散、著作権侵害、プライバシー侵害、偏見（バイアス）の増幅などが挙げられます。",
            "AIが生成したコンテンツの信頼性や、社会への影響について慎重な検討が必要です。"
        ]
    },
    {
        title: "AI倫理のガイドライン",
        paragraphs: [
            "多くの国や国際機関が、AIの倫理的な開発と利用のためのガイドラインや原則を策定しています。",
            "透明性、公平性、説明可能性、プライバシー保護、安全性などが主要な原則とされており、これらの遵守がAIの健全な発展には不可欠です。"
        ]
    }
  ],
  "第五章": [
    {
        title: "第五章: テキスト生成AIのプロンプト制作",
        paragraphs: [
            "テキスト生成AIから望ましい出力を得るためには、適切なプロンプト（指示文）の制作が重要です。プロンプトエンジニアリングは、AIの性能を最大限に引き出すための技術であり、明確で具体的な指示を与えることが成功の鍵となります。",
            "期待する出力形式、トーン、長さなどを指定することで、AIの応答の質を高めることができます。"
        ]
    },
    {
        title: "効果的なプロンプトのヒント",
        paragraphs: [
            "効果的なプロンプトを作成するためのヒントには、役割の指定（例: 「あなたは専門家です」）、制約の付与（例: 「〜文字以内で」）、具体例の提示、段階的な指示、複数の質問を組み合わせるなどが挙げられます。",
            "また、AIの得意なこと、不得意なことを理解し、限界を考慮した上でプロンプトを設計することも重要です。"
        ]
    }
  ],
  "第六章": [
    {
        title: "第六章: 生成AIの未来と社会",
        paragraphs: [
            "生成AIは、今後も急速な進化を続けると予想されており、様々な産業や社会全体に大きな影響を与えるでしょう。",
            "新たなビジネスモデルの創出、クリエイティブ産業の変革、教育や医療分野での応用などが期待されています。"
        ]
    },
    {
        title: "AIと人間の協調",
        paragraphs: [
            "AIの発展は、人間の仕事を奪うものではなく、人間の能力を拡張し、生産性を向上させるツールとして捉えるべきです。",
            "AIと人間が協調することで、より複雑な問題解決や、新たな価値創造が可能になると考えられています。AIリテラシーの向上と、適応力のある社会の構築が求められます。"
        ]
    }
  ]
};

let currentChapterKey = null; // 現在表示中の章のキー (例: "第一章")
let currentPageIndex = 0;    // 現在表示中のページのインデックス

/**
 * 教科書画面を表示し、初期状態をセットアップする
 */
function showTextbook() {
  showScreen('textbook-container'); // utils.jsのshowScreenを使用
  populateTextbookChapterDropdown();

  // ドロップダウンが空でなければ、最初の章をデフォルトで表示
  const dropdown = document.getElementById('textbook-chapter-dropdown');
  if (dropdown.options.length > 0) {
    currentChapterKey = dropdown.value; // ドロップダウンの最初の値
    currentPageIndex = 0;
    renderTextbookPage();
  }
}

/**
 * 教科書章選択ドロップダウンを生成する
 */
function populateTextbookChapterDropdown() {
  const dropdown = document.getElementById('textbook-chapter-dropdown');
  dropdown.innerHTML = ''; // 既存のオプションをクリア

  // textbookContentのキーを章の選択肢として追加
  // キーの順序が重要ならソートが必要
  const sortedChapters = Object.keys(textbookContent).sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)[0]);
      const numB = parseInt(b.match(/\d+/)[0]);
      return numA - numB;
  });

  sortedChapters.forEach(chapterKey => {
    const option = document.createElement('option');
    option.value = chapterKey;
    option.textContent = chapterKey;
    dropdown.appendChild(option);
  });

  // ドロップダウンの選択が変更されたときのイベントリスナー
  dropdown.onchange = (event) => {
    currentChapterKey = event.target.value;
    currentPageIndex = 0; // 章が変わったら最初のページに戻る
    renderTextbookPage();
  };
}

/**
 * 現在の章とページに基づいて教科書コンテンツを表示する
 */
function renderTextbookPage() {
  const contentDiv = document.getElementById('textbook-content');
  const pageInfoSpan = document.getElementById('textbook-page-info');
  const prevButton = document.getElementById('textbook-prev-button');
  const nextButton = document.getElementById('textbook-next-button');

  const chapterPages = textbookContent[currentChapterKey];

  if (!chapterPages || chapterPages.length === 0) {
    contentDiv.innerHTML = '<p>コンテンツがありません。</p>';
    pageInfoSpan.textContent = '0/0';
    prevButton.disabled = true;
    nextButton.disabled = true;
    return;
  }

  // 現在のページが有効な範囲内にあるか確認
  if (currentPageIndex < 0) {
    currentPageIndex = 0;
  } else if (currentPageIndex >= chapterPages.length) {
    currentPageIndex = chapterPages.length - 1;
  }

  const currentPage = chapterPages[currentPageIndex];
  contentDiv.innerHTML = `<h3>${currentPage.title}</h3>` +
                         currentPage.paragraphs.map(p => `<p>${p}</p>`).join('');

  pageInfoSpan.textContent = `${currentPageIndex + 1}/${chapterPages.length}`;

  prevButton.disabled = currentPageIndex === 0;
  nextButton.disabled = currentPageIndex === chapterPages.length - 1;
}

/**
 * 教科書の前のページへ移動する
 */
function prevTextbookPage() {
  if (currentPageIndex > 0) {
    currentPageIndex--;
    renderTextbookPage();
  }
}

/**
 * 教科書の次のページへ移動する
 */
function nextTextbookPage() {
  const chapterPages = textbookContent[currentChapterKey];
  if (chapterPages && currentPageIndex < chapterPages.length - 1) {
    currentPageIndex++;
    renderTextbookPage();
  }
}