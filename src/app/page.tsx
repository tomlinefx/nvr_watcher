export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            人と人、人と社会をつなぐ
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            電気通信工事から防犯カメラ、LED照明まで<br />
            地域社会の安全と快適を支える総合サービス
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              サービス一覧
            </a>
            <a href="#contact" className="border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      {/* サービスセクション */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">サービス</h2>
          <p className="text-center text-gray-600 mb-12">各種メーカー取扱い、見積もり出張費無料</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <span className="text-6xl">{service.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">会社概要</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">企業理念</h3>
              <p className="text-gray-700 leading-relaxed">
                「人と人、人と社会をつなぐこと」を掲げ、
                電気通信工事を中心に、地域社会の発展に貢献します。
                お客様の安全と快適な生活を第一に考え、
                高品質なサービスを提供し続けます。
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">会社情報</h3>
              <dl className="space-y-3">
                <div className="flex">
                  <dt className="font-bold w-32">設立</dt>
                  <dd>2010年</dd>
                </div>
                <div className="flex">
                  <dt className="font-bold w-32">従業員数</dt>
                  <dd>16名</dd>
                </div>
                <div className="flex">
                  <dt className="font-bold w-32">電話</dt>
                  <dd className="text-blue-600 font-bold">0120-191-505</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">行動方針</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-3xl">{principle.icon}</span>
                  <div>
                    <h4 className="font-bold mb-1">{principle.title}</h4>
                    <p className="text-sm text-blue-100">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">お問い合わせ</h2>
          <p className="text-xl mb-8">
            見積もり無料、出張費無料<br />
            お気軽にご相談ください
          </p>

          <div className="bg-white text-gray-800 rounded-lg p-8 mb-8">
            <div className="text-5xl font-bold text-blue-600 mb-2">
              0120-191-505
            </div>
            <p className="text-gray-600">平日 9:00〜18:00</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">メールでのお問い合わせ</h3>
              <p className="mb-4">フォームからお問い合わせいただけます</p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors w-full">
                お問い合わせフォームへ
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">対応エリア</h3>
              <p className="mb-4">熊本県内を中心に対応しております</p>
              <p className="text-sm text-blue-100">
                その他のエリアについてもお気軽にご相談ください
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2024 NVR Watcher. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// サービスデータ
const services = [
  {
    icon: "📡",
    title: "アンテナ事業",
    description: "地デジ・BS・CS放送のアンテナ設置、調整、修理を行います。"
  },
  {
    icon: "📹",
    title: "防犯カメラ事業",
    description: "最新の防犯カメラシステムの提案・設置・保守を提供します。"
  },
  {
    icon: "📺",
    title: "ケーブルテレビ事業",
    description: "ケーブルテレビの配線工事、調整、トラブル対応を行います。"
  },
  {
    icon: "📱",
    title: "移動通信事業",
    description: "携帯電話基地局の設置・保守業務を行います。"
  },
  {
    icon: "🔒",
    title: "防犯セキュリティ事業",
    description: "セキュリティシステムの提案から設置まで一貫対応します。"
  },
  {
    icon: "🏠",
    title: "集合住宅インターホン事業",
    description: "マンション・アパートのインターホン設置・交換を行います。"
  },
  {
    icon: "💡",
    title: "LED照明交換事業",
    description: "省エネLED照明への交換工事を行います。"
  },
  {
    icon: "⚡",
    title: "エネルギー見える化事業",
    description: "電力使用状況の可視化システムを提供します。"
  }
];

// 行動方針データ
const principles = [
  {
    icon: "🎯",
    title: "品質第一",
    description: "高品質なサービスの提供"
  },
  {
    icon: "🤝",
    title: "お客様満足",
    description: "お客様の声に真摯に対応"
  },
  {
    icon: "🌱",
    title: "社会貢献",
    description: "地域社会への貢献"
  },
  {
    icon: "💪",
    title: "技術力向上",
    description: "常に最新技術を追求"
  },
  {
    icon: "🔧",
    title: "迅速対応",
    description: "スピーディーなサービス"
  },
  {
    icon: "🌟",
    title: "信頼構築",
    description: "長期的な信頼関係の構築"
  }
];
