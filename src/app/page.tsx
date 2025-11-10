import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative flex h-[600px] items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-6 font-bold text-5xl md:text-6xl">シリウス電工</h1>
          <h3 className="mb-6 font-bold text-5xl md:text-6xl">
            人と人、人と社会をつなぐ
          </h3>
          <p className="mb-8 text-xl leading-relaxed md:text-2xl">
            電気通信工事から防犯カメラ、LED照明まで
            <br />
            地域社会の安全と快適を支える総合サービス
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild className="text-lg" size="lg" variant="secondary">
              <a href="#services">サービス一覧</a>
            </Button>
            <Button
              asChild
              className="border-2 border-white text-lg text-white hover:bg-white/10"
              size="lg"
              variant="outline"
            >
              <a href="#contact">お問い合わせ</a>
            </Button>
          </div>
        </div>
      </section>

      {/* サービスセクション */}
      <section className="bg-gray-50 px-4 py-20" id="services">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center font-bold text-4xl">サービス</h2>
          <p className="mb-12 text-center text-gray-600">
            各種メーカー取扱い、見積もり出張費無料
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card
                className="overflow-hidden transition-shadow hover:shadow-xl"
                key={index}
              >
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600">
                  <span className="text-6xl">{service.icon}</span>
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 会社概要セクション */}
      {/* <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center font-bold text-4xl">会社概要</h2>

          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800">
                  企業理念
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  「人と人、人と社会をつなぐこと」を掲げ、
                  電気通信工事を中心に、地域社会の発展に貢献します。
                  お客様の安全と快適な生活を第一に考え、
                  高品質なサービスを提供し続けます。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle className="text-2xl">会社情報</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-3">
                  <div className="flex">
                    <dt className="w-32 font-bold">設立</dt>
                    <dd>2010年</dd>
                  </div>
                  <Separator />
                  <div className="flex">
                    <dt className="w-32 font-bold">従業員数</dt>
                    <dd>16名</dd>
                  </div>
                  <Separator />
                  <div className="flex">
                    <dt className="w-32 font-bold">電話</dt>
                    <dd className="font-bold text-blue-600">0120-191-505</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-white">
                行動方針
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {principles.map((principle, index) => (
                  <div className="flex items-start gap-3" key={index}>
                    <span className="text-3xl">{principle.icon}</span>
                    <div>
                      <h4 className="mb-1 font-bold">{principle.title}</h4>
                      <p className="text-blue-100 text-sm">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* CTAセクション */}
      {/* <section
        className="bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-20 text-white"
        id="contact"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-bold text-4xl">お問い合わせ</h2>
          <p className="mb-8 text-xl">
            見積もり無料、出張費無料
            <br />
            お気軽にご相談ください
          </p>

          <Card className="mb-8">
            <CardContent className="pt-8">
              <div className="mb-2 font-bold text-5xl text-blue-600">
                0120-191-505
              </div>
              <p className="text-gray-600">平日 9:00〜18:00</p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2">
            <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">
                  メールでのお問い合わせ
                </CardTitle>
                <CardDescription className="text-blue-100">
                  フォームからお問い合わせいただけます
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg" variant="secondary">
                  お問い合わせフォームへ
                </Button>
              </CardContent>
            </Card>

            <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">対応エリア</CardTitle>
                <CardDescription className="text-blue-100">
                  熊本県内を中心に対応しております
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 text-sm">
                  その他のエリアについてもお気軽にご相談ください
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* フッター */}
      <footer className="bg-gray-900 px-4 py-8 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-gray-400">
            © 2024 NVR Watcher. All rights reserved.
          </p>
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
    description: "地デジ・BS・CS放送のアンテナ設置、調整、修理を行います。",
  },
  {
    icon: "📹",
    title: "防犯カメラ事業",
    description: "最新の防犯カメラシステムの提案・設置・保守を提供します。",
  },
  {
    icon: "📺",
    title: "ケーブルテレビ事業",
    description: "ケーブルテレビの配線工事、調整、トラブル対応を行います。",
  },
  {
    icon: "📱",
    title: "移動通信事業",
    description: "携帯電話基地局の設置・保守業務を行います。",
  },
  {
    icon: "🔒",
    title: "防犯セキュリティ事業",
    description: "セキュリティシステムの提案から設置まで一貫対応します。",
  },
  {
    icon: "🏠",
    title: "集合住宅インターホン事業",
    description: "マンション・アパートのインターホン設置・交換を行います。",
  },
  {
    icon: "💡",
    title: "LED照明交換事業",
    description: "省エネLED照明への交換工事を行います。",
  },
  {
    icon: "⚡",
    title: "エネルギー見える化事業",
    description: "電力使用状況の可視化システムを提供します。",
  },
];

// 行動方針データ
const principles = [
  {
    icon: "🎯",
    title: "品質第一",
    description: "高品質なサービスの提供",
  },
  {
    icon: "🤝",
    title: "お客様満足",
    description: "お客様の声に真摯に対応",
  },
  {
    icon: "🌱",
    title: "社会貢献",
    description: "地域社会への貢献",
  },
  {
    icon: "💪",
    title: "技術力向上",
    description: "常に最新技術を追求",
  },
  {
    icon: "🔧",
    title: "迅速対応",
    description: "スピーディーなサービス",
  },
  {
    icon: "🌟",
    title: "信頼構築",
    description: "長期的な信頼関係の構築",
  },
];
