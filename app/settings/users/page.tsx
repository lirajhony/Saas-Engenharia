export default function UserManagement() {
  const users = [
    {
      name: "Alexandre Silva",
      email: "alexandre@engepro.com.br",
      role: "Admin",
      status: "Ativo",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAykEfCBmx7zsXcENZAs2n5jniwdkvxKTIkX7QYKSFp_BbOwI_6hFtZ1YOhzHbUzn-Lg17_TfBpg1jxxdzqpLR0O-_l3owqkTJ_EGLcQgAHuhMIyunKwJRaiww6z9Sy6wFEibYFBXu__6pvBBMkl18iQNuKrURuq36zrwTpBH7230F7-9O2DOyQXSRfVI-ir1UdR1w9MQKClNreLKl6NjhNqFZPAhddg6Mi9e7zbQWO30YcWr8mQqcF05E0Lg5f0iClRPG77SG7UfhP",
    },
    {
      name: "Beatriz Souza",
      email: "beatriz@engepro.com.br",
      role: "Técnico",
      status: "Ativo",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0iob1IBNSJ7C2Bx_dlV2eGmcm_kXxBW1AEu0r_qbkfD2KVi7HSNEJ6j6Aoud5HQ3lJ5CYDUZBovMoipxiZ6_CLaiW0bBXIMpfeLMvlGkd6wDsk4Ju6KnZeZyofIx0Bm_ST2oZOEx4fRPr9f6WriXR5VbqeyPJg_TMBX_pnq88WeZVUl1s5JqNjtYiA4UrQ32oVb3w_UvJqNwL9w4TpvfmeB1KgnehrZVBTqdSP6pH1n7251gHyPil8UrWlBntLftGxy-N_wU6M3cR",
    },
    {
      name: "Carlos Oliveira",
      email: "carlos@engepro.com.br",
      role: "Prestador",
      status: "Pendente",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXwPaIUr8cqSwT2EpOzVBKx63jG2jZjI6PgknHEWJqaGct_UMFMPb05qDnJGpC8wvyzL2DKLKbwPVu6qxaKlFd-QIkxH7BoTYDWd5hihmx4MjDuQqFa-ldMjeWruWo5D1JU8OO2j51TZ_TyM8yIK9VwODmmO1VfKQWdX4Q7XG5tT2yWop3g9NjyA6WAF6iEssfHQpd2jtP-5j1JzhIwOhn7fracKYQ_mpA2c_Zabj6ybzggWm4iV83aDKA5DREEM7yBrGq_kqo3wm6",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Configurações</h2>
        <button className="flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm">
          <span className="material-symbols-outlined text-[18px]">person_add</span>
          <span>Convidar Usuário</span>
        </button>
      </div>

      <div className="border-b border-slate-200 dark:border-slate-800">
        <nav className="flex gap-8">
          <a className="pb-4 border-b-2 border-brand-blue text-brand-blue text-sm font-bold" href="#">Usuários</a>
          <a className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-700 text-sm font-medium" href="/settings/permissions">Permissões</a>
          <a className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-700 text-sm font-medium" href="#">Plano e Assinatura</a>
        </nav>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold">Plano Enterprise</h3>
              <p className="text-sm text-slate-500">Sua assinatura atual vence em 15 de Dezembro, 2024</p>
            </div>
            <button className="text-brand-blue text-sm font-bold hover:underline">Gerenciar Assinatura</button>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-600">Usuários</span>
                <span className="text-slate-900 dark:text-white font-bold">15/50</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-brand-blue" style={{ width: "30%" }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-600">Armazenamento</span>
                <span className="text-slate-900 dark:text-white font-bold">80GB/500GB</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-brand-blue" style={{ width: "16%" }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-brand-yellow/10 border border-brand-yellow/20 rounded-xl p-6 flex flex-col justify-center items-center text-center">
          <span className="material-symbols-outlined text-brand-blue text-4xl mb-2">rocket_launch</span>
          <h4 className="font-bold text-slate-900 dark:text-white">Precisa de mais recursos?</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Atualize para o plano sob medida para sua escala.</p>
          <button className="bg-white dark:bg-slate-800 text-brand-blue border border-brand-blue px-4 py-2 rounded-lg text-xs font-bold hover:bg-brand-blue hover:text-white transition-colors">Explorar Upgrades</button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
          <h3 className="font-bold text-slate-800 dark:text-slate-200">Gerenciamento de Usuários</h3>
          <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">15 usuários totais</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Nome</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">E-mail</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Cargo</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {users.map((u, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img className="size-9 rounded-full bg-slate-200" src={u.avatar} alt={u.name} />
                      <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{u.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{u.email}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/20 dark:text-brand-yellow rounded-full text-xs font-bold">{u.role}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`size-2 rounded-full ${u.status === 'Ativo' ? 'bg-green-500' : 'bg-amber-400'}`}></div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">{u.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 hover:text-slate-600 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      <button className="p-1 hover:bg-red-50 dark:hover:bg-red-900/20 rounded text-slate-400 hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
