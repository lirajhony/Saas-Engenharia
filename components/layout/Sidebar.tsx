"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: "dashboard", label: "Dashboard", href: "/" },
  { icon: "work", label: "Projetos", href: "/projects" },
  { icon: "group", label: "Prestadores", href: "/providers" },
  { icon: "bar_chart", label: "Relatórios", href: "/reports" },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isSettingsActive = pathname.startsWith("/settings");

  return (
    <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="size-10 bg-brand-blue rounded-lg flex items-center justify-center text-white">
          <span className="material-symbols-outlined">architecture</span>
        </div>
        <h1 className="text-lg font-bold tracking-tight">ENGEPRO SaaS</h1>
      </div>
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-brand-blue text-white"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
        <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
          <Link
            href="/settings/users"
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              isSettingsActive
                ? "bg-brand-yellow text-brand-blue"
                : "bg-brand-yellow/10 text-brand-blue hover:bg-brand-yellow/20"
            }`}
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-semibold">Configurações</span>
          </Link>
        </div>
      </nav>
      <div className="p-4 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded-xl">
          <img
            alt="User Profile"
            className="size-8 rounded-full"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBifCvqsQG8ix4RZT8BWw0EZL6f6aINtZjeuTL9MHzDaMrldFfiUA0-2P7HeJR2voYUjB4wkd6Gr8qFIFq9j4-gF3YNazs5djd_LAoLbkS2KiCmxQj81f9QNydRtgk2s_3DPbkUBYJ1CsgO7eost-SyCCMwbq-lATxW7-NoMUaLv79jsr9U0nOcWoVaRNV6yMCRx9pwA179zzVmAl_dTMoHENRbutdmci0sEYxy9aDV4WH9hkLfOJYkUu1zHO3_d21Ndc_31JCUTNL"
          />
          <div className="flex-1 overflow-hidden">
            <p className="text-xs font-bold truncate">Ricardo Silva</p>
            <p className="text-[10px] text-slate-500 truncate">Admin Gestor</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
