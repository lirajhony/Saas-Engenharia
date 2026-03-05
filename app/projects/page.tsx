export default function ProjectList() {
  const projects = [
    {
      id: "#0042",
      name: "Via Verde - Guaramirim",
      client: "Prefeitura Municipal",
      status: "Em andamento",
      statusColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      progress: 85,
      lead: "Eng. Ricardo Costa",
    },
    {
      id: "#0039",
      name: "Edifício Horizon",
      client: "Incorporadora Sul",
      status: "Planejamento",
      statusColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      progress: 15,
      lead: "Arq. Mariana Luz",
    },
    {
      id: "#0045",
      name: "Revitalização Centro",
      client: "Estado de SC",
      status: "Em andamento",
      statusColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      progress: 40,
      lead: "Eng. Carlos Brum",
    },
    {
      id: "#0041",
      name: "Terminal Portuário",
      client: "Logística Global SA",
      status: "Planejamento",
      statusColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      progress: 5,
      lead: "Eng. Amanda Silveira",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary dark:text-white">Projetos</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Acompanhamento e gestão de obras ativas.
          </p>
        </div>
        <div className="flex bg-slate-200/50 dark:bg-slate-800/50 p-1 rounded-full">
          <button className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-slate-700 shadow-sm text-sm font-bold transition-all">
            <span className="material-symbols-outlined text-xl">list_alt</span>
            Lista
          </button>
          <button className="flex items-center justify-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all text-slate-500">
            <span className="material-symbols-outlined text-xl">grid_view</span>
            Cards
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {["Status", "Cliente", "Município", "Responsável"].map((filter) => (
          <button
            key={filter}
            className="group flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium hover:border-brand-yellow transition-all rounded-full"
          >
            <span>{filter}</span>
            <span className="material-symbols-outlined text-slate-400 group-hover:text-brand-yellow">
              expand_more
            </span>
          </button>
        ))}
        <button className="ml-auto text-sm font-semibold hover:underline text-primary">
          Limpar filtros
        </button>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-200 dark:border-slate-700 shadow-lg shadow-slate-200/40 dark:shadow-none overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-700">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Projeto
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Cliente
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Progresso
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Responsável
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-700">
              {projects.map((p) => (
                <tr
                  key={p.id}
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors"
                >
                  <td className="px-6 py-5">
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 block">
                      {p.name}
                    </span>
                    <span className="text-xs text-slate-500">ID: {p.id}</span>
                  </td>
                  <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400">
                    {p.client}
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tight ${p.statusColor}`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 w-24 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-brand-yellow"
                          style={{ width: `${p.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        {p.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400">
                    {p.lead}
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
          <span className="text-xs text-slate-500 uppercase font-bold">
            Mostrando 4 de 12 projetos
          </span>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded text-slate-400 cursor-not-allowed">
              <span className="material-symbols-outlined text-lg">chevron_left</span>
            </button>
            <button className="px-3 py-1 bg-slate-200 dark:bg-slate-600 rounded text-slate-700 dark:text-slate-200 hover:bg-brand-yellow transition-colors">
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-10">
        {[
          { label: "Aguardando Aprovação", value: "08", icon: "pending_actions", color: "text-primary" },
          { label: "Concluídos este Ano", value: "142", icon: "task_alt", color: "text-emerald-500" },
          { label: "Crescimento Mensal", value: "24%", icon: "trending_up", color: "text-brand-yellow" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-yellow/50 transition-all shadow-lg shadow-slate-200/40 dark:shadow-none rounded-[2rem]"
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`material-symbols-outlined text-3xl ${stat.color}`}>
                {stat.icon}
              </span>
              <span className="text-2xl font-bold">{stat.value}</span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white">{stat.label}</h3>
            <p className="text-sm text-slate-500 mt-1">Estatísticas atualizadas em tempo real.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
