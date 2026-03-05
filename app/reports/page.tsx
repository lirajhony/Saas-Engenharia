export default function Reports() {
  const metrics = [
    { label: "Progresso Geral", value: "85%", icon: "trending_up", color: "text-primary", bg: "bg-primary/10", trend: "+3.2%" },
    { label: "Tarefas Concluídas", value: "124", icon: "playlist_add_check", color: "text-highlight", bg: "bg-highlight/10", meta: "Meta 150" },
    { label: "Marcos Atingidos", value: "8/10", icon: "emoji_events", color: "text-orange-500", bg: "bg-orange-500/10", trend: "80% Atingido" },
    { label: "Produtividade Média", value: "+12%", icon: "bolt", color: "text-highlight", bg: "bg-highlight/10", trend: "+12% vs Ant." },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-slate-50 tracking-tight">
            Relatórios
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Análise de desempenho e progresso dos projetos.
          </p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary-soft">
          <span className="material-symbols-outlined text-xl">picture_as_pdf</span>
          Exportar PDF
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3 bg-white dark:bg-slate-900 p-3 border border-slate-200 dark:border-slate-800 shadow-sm rounded-2xl">
        {["Últimos 30 dias", "Projeto: Via Verde", "Disciplina: Todas"].map((f) => (
          <div
            key={f}
            className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-800 rounded-lg text-sm text-slate-600 dark:text-slate-300 cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">
              {f.includes("dias") ? "event" : f.includes("Projeto") ? "apartment" : "engineering"}
            </span>
            <span className="font-medium">{f}</span>
            <span className="material-symbols-outlined text-lg">
              keyboard_arrow_down
            </span>
          </div>
        ))}
        <div className="ml-auto flex items-center gap-2 text-slate-400 text-xs font-medium uppercase tracking-widest">
          <span className="material-symbols-outlined text-lg">sync</span>
          Atualizado há 5 min
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 shadow-sm group hover:border-primary/50 transition-colors rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`size-10 rounded-lg flex items-center justify-center ${m.bg} ${m.color}`}>
                <span className="material-symbols-outlined">{m.icon}</span>
              </div>
              <span className="text-[10px] font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full uppercase">
                {m.trend || m.meta}
              </span>
            </div>
            <h4 className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              {m.label}
            </h4>
            <p className="text-3xl font-black text-slate-900 dark:text-slate-50 mt-1">
              {m.value}
            </p>
            {m.label === "Progresso Geral" && (
              <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mt-4 overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "85%" }}></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 shadow-sm rounded-2xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h4 className="text-lg font-bold">Progresso Físico vs. Planejado</h4>
              <p className="text-slate-500 text-xs mt-1">Comparativo de evolução semanal</p>
            </div>
          </div>
          <div className="h-64 flex items-end gap-1 relative border-b border-l border-slate-100 dark:border-slate-800">
             {/* Simple Visualization Placeholder */}
             <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                <span className="material-symbols-outlined text-9xl">show_chart</span>
             </div>
             <div className="absolute bottom-0 left-0 w-full flex justify-between pt-4 text-[10px] text-slate-400 font-bold px-2">
                {["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT"].map(m => <span key={m}>{m}</span>)}
             </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col rounded-2xl">
          <h4 className="text-lg font-bold mb-1">Distribuição por Disciplina</h4>
          <p className="text-slate-500 text-xs mb-8">Volume de tarefas por área</p>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <div className="size-40 rounded-full border-[16px] border-slate-100 dark:border-slate-800 relative flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-black">256</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Tarefas</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full mt-8">
              {[
                { label: "Drenagem", color: "bg-primary-dark" },
                { label: "Geometria", color: "bg-brand-yellow" },
                { label: "Topografia", color: "bg-brand-yellow/30" },
                { label: "Outros", color: "bg-slate-200" },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className={`size-2 rounded-full ${item.color}`}></span>
                  <span className="text-xs font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
