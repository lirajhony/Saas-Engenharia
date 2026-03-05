export default function ProviderManagement() {
  const stats = [
    { label: "Total de Prestadores", value: "24", change: "+12%", trend: "up", icon: "groups" },
    { label: "Atividades Atribuídas", value: "142", change: "+5", trend: "up", icon: "assignment" },
    { label: "Entregas Pendentes", value: "12", change: "-2", trend: "down", icon: "pending_actions" },
  ];

  const providers = [
    {
      name: "Carlos Roberto",
      role: "Topógrafo Terceirizado",
      discipline: "Topografia",
      email: "carlos@geoserve.com.br",
      phone: "(11) 98765-4321",
      status: "Ativo",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwNjx6g36Tia3v8rBr0vUiYKKHTLuqfvmG-EcOJU2rqW2ARGoGggyQEeHQgcvpwUFroiL5mGLqn0mX0bzNLfd3k3WcADwod_L3tt1FtqcXKW6xV46DMM0wC5CPI-gaPvWuvGtGaRkBtS5k2EdJsJX4fxhMYA3f_KeLy_F_4PbVwLu_kErhRHaArKaAJ9F4-HprilBFtnEEpgoENQ2HPv4WirLltLEC787YdYYK5zYdWmHM08l8eb1ldgyrhrF9Rns2RUfMX8U30l8m",
      disciplineColor: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      name: "Luciana Oliveira",
      role: "Projetista de Drenagem",
      discipline: "Drenagem",
      email: "luciana.projetos@infra.com",
      phone: "(11) 97711-2233",
      status: "Ativo",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2MitQLsupmAQMl0GnORZ3-aLRDsRWp1rNhGRqw0At0a5pHWrwHo7uAdXurOjc8HSlarFHc2_ypkv0neHj0sYesG_NnJ4F-cF6BD9dTannhCQo5EXLx6bNnwRwmfB4SYt66YXGva_0aid72-lpui9l0NTLktSIQ9GL6e6L9q8d0KefY79OSzxokwPQKtQDICEB5vwDOy4erc53jaDORdffg0a0HFUPeiWcb-OEIvGoYJ_YxCDgTJf35ySnF2vtFxl-uKd1JUwqtaNR",
      disciplineColor: "bg-cyan-50 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400",
    },
    {
      name: "Ricardo Mendes",
      role: "Projetista de Sinalização",
      discipline: "Sinalização",
      email: "ricardo@viasafe.net",
      phone: "(11) 91122-3344",
      status: "Em Pausa",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPncfLHge_5qE8u_IIpAbDSr2L6BNpS1_zEoyATO0UWeixj22JS1YDCMNJ8xqnkuJmq7Egj3JdlCqoMPb3aVWC3M_BPvq2HLPPhFeiHaRp4DlbE0iZz43e64tubQi05mzdWWlByl4HMzPwxUFdJokk4hLS4nsBbMjlBzEfe_GkHHqOw_9un_kZxPRM0dlczr5-Jd4mpTvyXLP2DKbuT-3QOAYmC4GYCbJ6W0kdtfFuhBh_zOrMKl4JmPz1kbS4ElGn0oiwF68vnMTS",
      disciplineColor: "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    },
    {
      name: "Juliana Dias",
      role: "Engenheira Civil Estrutural",
      discipline: "Estrutural",
      email: "juliana.eng@calc.com",
      phone: "(11) 94455-6677",
      status: "Ativo",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCx9T0nIls9XhovbQtxcPoYw9WkfSI93lPEAwvPdv1UXC5Jb3rzoY-knCVr0J6ghope6LP8dgpnUHclGucU4UgwgAHEN_yTRmEuxvngGg3h8xiuTeNITuMxQ-1tJ5NRPg2UsqpBTp9M6jZS5cH-2ESy4gyBM_JQg_BGgpVEKvyLjwTLLDTQO8hbzeYBN7ohU0VNaydnr2jPamfuKVqDtjreDANRwaOlKpoeFYYFrnb7wc5zEWe7s1cGQ6u77JkCPVnzlyK2E06P76A2",
      disciplineColor: "bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Gestão de Prestadores
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Gerencie todos os parceiros e prestadores de serviço da sua obra.
          </p>
        </div>
        <button className="bg-primary hover:brightness-110 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 shadow-lg shadow-primary/20 transition-all">
          <span className="material-symbols-outlined">person_add</span>
          <span>Novo Prestador</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined">{s.icon}</span>
              </div>
              <span
                className={`text-xs font-bold px-2 py-1 rounded-full ${
                  s.trend === "up"
                    ? s.label.includes("Pendentes") ? "text-rose-600 bg-rose-50" : "text-emerald-600 bg-emerald-50"
                    : s.label.includes("Pendentes") ? "text-emerald-600 bg-emerald-50" : "text-rose-600 bg-rose-50"
                }`}
              >
                {s.change}
              </span>
            </div>
            <p className="text-slate-500 text-sm font-medium">{s.label}</p>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              {s.value}
            </h3>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
        <button className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap">
          Todos
        </button>
        {["Topografia", "Drenagem", "Sinalização", "Estrutural"].map((cat) => (
          <button
            key={cat}
            className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-xl text-sm font-medium hover:border-primary transition-all whitespace-nowrap"
          >
            {cat}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-2">
          <button className="p-2 text-slate-500 hover:bg-white dark:hover:bg-slate-800 rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Prestador
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Disciplina
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Contato
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {providers.map((p, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold overflow-hidden border-2 border-primary/5">
                        <img
                          alt="Avatar"
                          className="w-full h-full object-cover"
                          src={p.avatar}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                          {p.name}
                        </p>
                        <p className="text-xs text-slate-500">{p.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 text-[11px] font-bold rounded-full uppercase tracking-tight ${p.disciplineColor}`}
                    >
                      {p.discipline}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-xs">
                      <p className="text-slate-900 dark:text-slate-300 font-medium">
                        {p.email}
                      </p>
                      <p className="text-slate-500 mt-0.5">{p.phone}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        p.status === "Ativo"
                          ? "bg-brand-yellow/20 text-slate-800 dark:text-brand-yellow"
                          : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          p.status === "Ativo" ? "bg-brand-yellow" : "bg-slate-400"
                        }`}
                      ></span>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-slate-400 hover:text-primary transition-colors p-1">
                      <span className="material-symbols-outlined text-[20px]">
                        more_vert
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">
            Mostrando 4 de 24 prestadores
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors disabled:opacity-50">
              Anterior
            </button>
            <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors">
              Próximo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
