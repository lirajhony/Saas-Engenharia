export default function ProjectSchedule() {
  const activities = [
    {
      name: "Topografia Inicial",
      duration: "10 dias",
      progress: 100,
      cost: "R$ 12k",
      status: "Finalizado",
      color: "bg-primary",
      offset: "0%",
      width: "30%",
    },
    {
      name: "Cálculo de Geometria",
      duration: "07 dias",
      progress: 53,
      cost: "R$ 15k",
      status: "Em atraso",
      color: "bg-accent-yellow",
      offset: "32%",
      width: "20%",
    },
    {
      name: "Projeto de Drenagem",
      duration: "15 dias",
      progress: 0,
      cost: "R$ 45k",
      status: "Pendente",
      color: "bg-slate-100 dark:bg-slate-800",
      offset: "55%",
      width: "33%",
    },
  ];

  return (
    <div className="flex flex-col h-full overflow-hidden -m-8">
      <div className="px-8 py-6 bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Custo Total
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-xs font-bold text-slate-500">R$</span>
                <span className="text-xl font-extrabold text-primary-dark dark:text-white">
                  450.000
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Pago
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-xs font-bold text-slate-500">R$</span>
                <span className="text-xl font-extrabold text-emerald-600">
                  285.000
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                A Pagar
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-xs font-bold text-slate-500">R$</span>
                <span className="text-xl font-extrabold text-accent-yellow">
                  165.000
                </span>
              </div>
            </div>
          </div>
          <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-xl w-fit">
            <button className="px-4 py-1.5 text-xs font-bold rounded-lg bg-white dark:bg-slate-800 shadow-sm text-primary">
              Cronograma
            </button>
            <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-primary transition-colors">
              Financeiro
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="flex border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <div className="w-64 p-4 border-r border-slate-100 dark:border-slate-800 shrink-0 font-bold text-xs text-slate-400 uppercase tracking-wider">
            Atividade
          </div>
          <div className="flex-1 flex">
            {["01 Out", "08 Out", "15 Out", "22 Out", "29 Out"].map((date) => (
              <div
                key={date}
                className="flex-1 p-4 text-center border-r border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-500"
              >
                {date}
              </div>
            ))}
          </div>
        </div>

        {activities.map((activity, idx) => (
          <div
            key={idx}
            className="flex group hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors border-b border-slate-50 dark:border-slate-800/50"
          >
            <div className="w-64 p-5 border-r border-slate-100 dark:border-slate-800 shrink-0 flex flex-col justify-center">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                    {activity.name}
                  </span>
                  <span className="text-[10px] font-medium text-slate-400 block mt-0.5">
                    {activity.duration} • {activity.status}
                  </span>
                </div>
                <div className="text-right">
                  <span
                    className={`text-[10px] font-bold block ${
                      activity.progress === 100
                        ? "text-emerald-600"
                        : activity.status === "Em atraso"
                        ? "text-accent-yellow"
                        : "text-slate-400"
                    }`}
                  >
                    {activity.cost}
                  </span>
                  <span className="text-[8px] font-bold text-slate-300 uppercase">
                    {activity.progress === 100 ? "Realizado" : "Orçado"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 relative p-5 flex items-center bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px)] bg-[size:40px_100%] dark:bg-none">
              <div
                className={`h-8 rounded-lg flex items-center px-3 shadow-md relative overflow-hidden ${activity.color}`}
                style={{ width: activity.width, marginLeft: activity.offset }}
              >
                <span className="text-[10px] font-bold text-white/90 uppercase tracking-tight truncate">
                  {activity.progress}% Concluído
                </span>
                <div
                  className="absolute bottom-0 left-0 h-1 bg-brand-yellow/50 rounded-full transition-all"
                  style={{ width: `${activity.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="size-3 bg-primary rounded-sm"></span>
            <span className="text-xs font-semibold text-slate-500">Concluído</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-3 bg-accent-yellow rounded-sm"></span>
            <span className="text-xs font-semibold text-slate-500">Em Andamento</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-3 bg-slate-200 dark:bg-slate-700 rounded-sm"></span>
            <span className="text-xs font-semibold text-slate-500">Pendente</span>
          </div>
        </div>
      </div>
    </div>
  );
}
