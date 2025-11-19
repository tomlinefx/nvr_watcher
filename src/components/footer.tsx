export function Footer() {
  return (
    <footer className="border-t bg-background py-6">
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap justify-center gap-6">
          <a className="text-sm hover:underline" href="/mypage">
            マイページ
          </a>
          <a className="text-sm hover:underline" href="/credit">
            クレジット
          </a>
          <a className="text-sm hover:underline" href="/pets">
            ペット画面
          </a>
        </nav>
        <div className="mt-4 text-center text-muted-foreground text-xs">
          <p>&copy; 2025 NVR Watcher. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
