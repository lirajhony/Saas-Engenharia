import Link from "next/link";

export default function ProjectOverview() {
  const activityFeed = [
    {
      user: "Eng. João Silva",
      action: "atualizou Topografia da Quadra B",
      time: "Hoje às 14:32",
      icon: "edit",
      color: "bg-primary",
    },
    {
      user: "Sistema",
      action: "Novo documento Planta_V3.pdf foi anexado por",
      time: "Ontem às 18:10",
      icon: "upload_file",
      color: "bg-blue-500",
    },
    {
      user: "Eng. Ricardo Costa",
      action: "aprovou a etapa de Drenagem Pluvial",
      time: "15 de Outubro às 11:20",
      icon: "done_all",
      color: "bg-green-500",
    },
    {
      user: "Ana Paula",
      action: "foi adicionada ao projeto como Fiscal de Obras",
      time: "14 de Outubro às 09:45",
      icon: "person_add",
      color: "bg-slate-400",
    },
  ];

  return (
    <div className="space-y-8">
      <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-6">
        <Link className="hover:text-primary transition-colors" href="/projects">
          Projetos
        </Link>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <span className="text-slate-900 dark:text-slate-100">
          Via Verde – Guaramirim
        </span>
      </nav>

      <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-extrabold dark:text-white tracking-tight text-brand-blue">
              Via Verde – Guaramirim
            </h2>
            <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold rounded-full uppercase tracking-wider">
              Em Andamento
            </span>
          </div>
          <p className="text-slate-500 font-medium">
            ID: #0042 • Obra de Infraestrutura Urbana
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-all">
            <span className="material-symbols-outlined text-lg">share</span>
            Exportar
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full text-sm font-bold shadow-md shadow-primary/20 hover:shadow-lg hover:bg-primary/90 transition-all">
            <span className="material-symbols-outlined text-lg">tune</span>
            Gerenciar Projeto
          </button>
        </div>
      </div>

      <div className="border-b border-slate-200 dark:border-slate-800 mb-8 overflow-x-auto">
        <div className="flex gap-8">
          <Link
            className="pb-4 border-b-2 text-slate-900 dark:text-white font-bold text-sm border-brand-yellow"
            href={`/projects/1`}
          >
            Visão Geral
          </Link>
          <a
            className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-semibold text-sm transition-colors"
            href="#"
          >
            EAP/WBS
          </a>
          <Link
            className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-semibold text-sm transition-colors"
            href={`/projects/1/schedule`}
          >
            Cronograma
          </Link>
          <Link
            className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-semibold text-sm transition-colors"
            href={`/projects/1/tasks`}
          >
            Tarefas
          </Link>
          <Link
            className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-semibold text-sm transition-colors"
            href={`/projects/1/documents`}
          >
            Documentos
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center text-center rounded-xl">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 w-full text-left">
            Progresso Geral
          </h3>
          <div className="relative size-40 mb-6">
            <svg
              className="size-full"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="stroke-slate-100 dark:stroke-slate-800"
                cx="18"
                cy="18"
                fill="none"
                r="16"
                strokeWidth="3"
              ></circle>
              <circle
                className="stroke-brand-yellow"
                cx="18"
                cy="18"
                fill="none"
                r="16"
                strokeDasharray="100"
                strokeDashoffset="15"
                strokeLinecap="round"
                strokeWidth="3"
              ></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-black text-slate-900 dark:text-white">
                85%
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                Concluído
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-slate-100 dark:border-slate-800">
            <div>
              <p className="text-xs font-medium text-slate-500">Duração Total</p>
              <p className="text-base font-bold text-slate-900 dark:text-white">
                180 Dias
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Restante</p>
              <p className="text-base font-bold text-brand-yellow">24 Dias</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 shadow-sm rounded-xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">
              Próximos Marcos
            </h3>
            <span className="material-symbols-outlined text-slate-400">flag</span>
          </div>
          <div className="space-y-5">
            {[
              {
                label: "Entrega Topografia",
                time: "Amanhã • 09:00",
                icon: "event",
                color: "text-amber-600 bg-amber-100 dark:bg-amber-900/30",
              },
              {
                label: "Revisão Drenagem",
                time: "20 de Outubro",
                icon: "rebase_edit",
                color: "text-blue-600 bg-blue-100 dark:bg-blue-900/30",
              },
              {
                label: "Assinatura de Termo",
                time: "25 de Outubro",
                icon: "history_edu",
                color: "text-slate-400 bg-slate-100 dark:bg-slate-800 opacity-60",
              },
            ].map((m) => (
              <div key={m.label} className="flex items-start gap-4">
                <div
                  className={`mt-1 size-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${m.color}`}
                >
                  <span className="material-symbols-outlined text-lg">
                    {m.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {m.label}
                  </p>
                  <p className="text-xs font-medium text-slate-500 tracking-tight">
                    {m.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold shadow-sm hover:shadow-md transition-all">
            Ver todos os marcos
          </button>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 shadow-sm rounded-xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">
              Alertas Críticos
            </h3>
            <span className="px-2 py-0.5 bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400 text-[10px] font-black rounded-full uppercase">
              Urgente
            </span>
          </div>
          <div className="space-y-4">
            <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-xl flex items-center gap-3">
              <span className="material-symbols-outlined text-red-500">warning</span>
              <p className="text-xs font-bold text-red-700 dark:text-red-400">
                1 Atividade Atrasada (Terraplanagem)
              </p>
            </div>
            <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-900/30 rounded-xl flex items-center gap-3">
              <span className="material-symbols-outlined text-amber-600">
                pending_actions
              </span>
              <p className="text-xs font-bold text-amber-700 dark:text-amber-400">
                Aguardando Aprovação de Documento
              </p>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl flex items-center gap-3">
              <span className="material-symbols-outlined text-slate-400">
                verified
              </span>
              <p className="text-xs font-bold text-slate-600 dark:text-slate-400">
                Licença Ambiental renovada
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-800 shadow-sm h-full rounded-xl">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
              Informações do Projeto
            </h3>
            <div className="space-y-6">
              {[
                { label: "Cliente", value: "Prefeitura Municipal", icon: "account_balance" },
                { label: "Gestor Responsável", value: "Eng. Ricardo Costa", icon: "person" },
                { label: "Data de Início", value: "12 de Janeiro, 2024", icon: "today" },
                { label: "Localização", value: "Guaramirim, SC", icon: "map" },
              ].map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="size-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                    <span className="material-symbols-outlined">
                      {info.icon}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-base font-bold text-slate-900 dark:text-white">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-800 shadow-sm h-full rounded-xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Atividade Recente
              </h3>
              <button className="px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-all">
                Ver Histórico Completo
              </button>
            </div>
            <div className="relative space-y-8 before:content-[''] before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-slate-100 dark:before:bg-slate-800">
              {activityFeed.map((activity, idx) => (
                <div key={idx} className="relative flex gap-4">
                  <div
                    className={`z-10 size-10 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center text-white shadow-sm ${activity.color}`}
                  >
                    <span className="material-symbols-outlined text-lg">
                      {activity.icon}
                    </span>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <span className="font-bold text-slate-900 dark:text-white">
                        {activity.user}
                      </span>{" "}
                      {activity.action}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
