export default function Dashboard() {
  const metrics = [
    {
      label: "Projetos Ativos",
      value: "3",
      icon: "account_tree",
      trend: "0%",
      trendIcon: "trending_up",
      color: "text-primary",
      bg: "bg-primary/10",
      trendColor: "text-emerald-500",
      trendBg: "bg-emerald-50",
    },
    {
      label: "Atrasados",
      value: "1",
      icon: "warning",
      trend: "-10%",
      trendIcon: "trending_down",
      color: "text-red-500",
      bg: "bg-red-50",
      trendColor: "text-red-500",
      trendBg: "bg-red-50",
    },
    {
      label: "Próximos Marcos",
      value: "5",
      icon: "flag",
      trend: "+20%",
      trendIcon: "trending_up",
      color: "text-primary",
      bg: "bg-primary/10",
      trendColor: "text-emerald-500",
      trendBg: "bg-emerald-50",
    },
    {
      label: "Tarefas Pendentes",
      value: "12",
      icon: "checklist",
      trend: "+5%",
      trendIcon: "trending_up",
      color: "text-primary",
      bg: "bg-primary/10",
      trendColor: "text-emerald-500",
      trendBg: "bg-emerald-50",
    },
  ];

  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Dashboard Executivo
          </h1>
          <p className="text-slate-500 mt-1">
            Bem-vindo de volta. Aqui está o resumo das suas operações hoje.
          </p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md flex items-center gap-2 transition-all active:scale-95 shadow-primary/20">
          <span className="material-symbols-outlined text-lg">add_circle</span>
          Criar novo projeto
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm group hover:border-primary/50 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <span
                className={`material-symbols-outlined ${metric.color} ${metric.bg} p-2 rounded-lg`}
              >
                {metric.icon}
              </span>
              <span
                className={`text-xs font-bold ${metric.trendColor} ${metric.trendBg} px-2 py-1 rounded-md flex items-center gap-1`}
              >
                <span className="material-symbols-outlined text-[14px]">
                  {metric.trendIcon}
                </span>{" "}
                {metric.trend}
              </span>
            </div>
            <p className="text-slate-500 text-sm font-medium">{metric.label}</p>
            <p className="text-4xl font-black mt-2">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold">Progresso por Disciplina</h3>
            <button className="text-slate-400 hover:text-slate-600">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
          <div className="space-y-6">
            {[
              { label: "Topografia", progress: 85 },
              { label: "Drenagem", progress: 42 },
              { label: "Geometria", progress: 68 },
            ].map((d) => (
              <div key={d.label} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold">{d.label}</span>
                  <span className="text-slate-500">{d.progress}%</span>
                </div>
                <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-blue rounded-full"
                    style={{ width: `${d.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                Média Global
              </p>
              <p className="text-xl font-bold">65.0%</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                Total Horas
              </p>
              <p className="text-xl font-bold">1,240h</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                Eficiência
              </p>
              <p className="text-xl font-bold text-emerald-500">92%</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold">Projetos em Atenção</h3>
            <a className="text-xs font-bold text-primary hover:underline" href="#">
              Ver todos
            </a>
          </div>
          <div className="space-y-4 flex-1">
            {[
              {
                title: "Viaduto Central - Fase II",
                status: "Atrasado",
                detail: "Venceu há 3 dias",
                icon: "event",
              },
              {
                title: "Loteamento Jardim das Águas",
                status: "Bloqueado",
                detail: "Aguardando Aprovação Legal",
                icon: "lock",
              },
              {
                title: "Ponte Rio das Almas",
                status: "Atrasado",
                detail: "Resp: Eng. Marcela",
                icon: "person",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 group hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer shadow-sm"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-sm">{p.title}</h4>
                  <span
                    className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                      p.status === "Atrasado"
                        ? "bg-red-100 text-red-600"
                        : "bg-amber-100 text-amber-600"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="material-symbols-outlined text-[14px]">
                    {p.icon}
                  </span>
                  <span>{p.detail}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <div className="bg-primary/5 rounded-xl p-4 flex items-center gap-4">
              <div className="size-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">lightbulb</span>
              </div>
              <div>
                <p className="text-xs font-bold text-primary">Dica de Gestão</p>
                <p className="text-[10px] text-slate-600 dark:text-slate-400">
                  Revise os bloqueios para otimizar o fluxo de caixa semanal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
