import { useEffect } from "react";

export default function DashboardRedirect() {
  useEffect(() => {
    // MoneBotダッシュボードにリダイレクト
    window.location.href = "https://monebot.com/dashboard";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#121212] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B7355] mx-auto mb-4"></div>
        <p className="text-[#5C5347] dark:text-[#B0B0B0]">
          Redirecting to MoneBot Dashboard...
        </p>
      </div>
    </div>
  );
}