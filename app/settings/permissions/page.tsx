export default function PermissionsManagement() {
  const roles = [
    { label: "Admin/Gestor", icon: "admin_panel_settings", active: true },
    { label: "Técnico Interno", icon: "engineering", active: false },
    { label: "Prestador", icon: "construction", active: false },
    { label: "Em breve Cliente", icon: "person_add", active: false, disabled: true },
  ];

  const modules = [
    { name: "Dashboard Principal", icon: "grid_view", view: true, edit: true, delete: false, approve: null },
    { name: "Projetos", icon: "architecture", view: true, edit: true, delete: true, approve: true },
    { name: "Cronograma", icon: "event_available", view: true, edit: true, delete: false, approve: true },
    { name: "Tarefas", icon: "assignment", view: true, edit: true, delete: true, approve: null },
    { name: "Documentos", icon: "folder_open", view: true, edit: true, delete: true, approve: null },
    { name: "Financeiro/Prestadores", icon: "payments", view: true, edit: true, delete: false, approve: true },
  ];

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
          <span className="material-symbols-outlined text-base">settings</span>
          <span>Configurações</span>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <span className="text-slate-900 dark:text-slate-200 font-medium">Permissões</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Gerenciamento de Acessos</h2>
      </div>

      <div className="flex flex-col xl:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="mb-4">
              <h3 className="text-lg font-bold">Perfil de Usuário</h3>
              <p className="text-sm text-slate-500">Selecione o perfil para editar as permissões globais.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {roles.map((role) => (
                <label
                  key={role.label}
                  className={`relative flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all ${
                    role.disabled ? 'opacity-60 cursor-not-allowed border-slate-50 dark:border-slate-900' : 'cursor-pointer'
                  } ${
                    role.active ? 'border-brand-blue bg-brand-blue/5' : 'border-slate-100 dark:border-slate-800 hover:border-slate-200'
                  }`}
                >
                  <input type="radio" className="sr-only" checked={role.active} disabled={role.disabled} readOnly />
                  <span className={`material-symbols-outlined mb-1 ${role.active ? 'text-brand-blue' : 'text-slate-400'}`}>
                    {role.icon}
                  </span>
                  <span className={`text-xs font-bold text-center ${role.active ? 'text-brand-blue' : 'text-slate-600 dark:text-slate-400'}`}>
                    {role.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-brand-blue text-white">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Módulo</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-center">Visualizar</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-center">Criar/Editar</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-center">Excluir</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-center">Aprovar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {modules.map((m) => (
                  <tr key={m.name} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                          <span className="material-symbols-outlined text-lg text-slate-500">{m.icon}</span>
                        </div>
                        <span className="text-sm font-semibold">{m.name}</span>
                      </div>
                    </td>
                    {[m.view, m.edit, m.delete, m.approve].map((val, i) => (
                      <td key={i} className="px-4 py-4 text-center">
                        {val === null ? (
                          <div className="bg-slate-100 dark:bg-slate-800 size-5 mx-auto rounded-sm"></div>
                        ) : (
                          <input
                            type="checkbox"
                            checked={val}
                            readOnly
                            className="rounded border-slate-300 text-brand-blue focus:ring-brand-blue size-5"
                          />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside className="w-full xl:w-80 shrink-0">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sticky top-24">
            <h3 className="font-bold text-slate-900 dark:text-white mb-6">Resumo do Perfil</h3>
            <div className="space-y-6">
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-900/50 rounded-lg">
                <div className="flex items-center gap-2 text-yellow-700 dark:text-yellow-400 mb-1">
                  <span className="material-symbols-outlined text-lg">info</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Atenção</span>
                </div>
                <p className="text-xs text-yellow-800 dark:text-yellow-300/80 leading-relaxed">
                  Este perfil possui permissões de <strong>Administrador</strong>. Ele pode alterar configurações críticas do sistema.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Nível de Acesso", value: "Total", badge: true },
                  { label: "Usuários neste perfil", value: "12 usuários" },
                  { label: "Ultima alteração", value: "Há 2 dias" },
                ].map(item => (
                  <div key={item.label} className="flex justify-between items-center pb-3 border-b border-slate-50 dark:border-slate-800">
                    <span className="text-xs text-slate-500 font-medium">{item.label}</span>
                    <span className={`text-xs font-bold ${item.badge ? 'px-2 py-0.5 bg-brand-yellow text-brand-blue rounded-full' : 'text-slate-900 dark:text-slate-100'}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-4 space-y-3">
                <button className="w-full py-3 bg-brand-blue hover:bg-brand-blue/90 text-white text-sm font-bold rounded-xl shadow-lg shadow-brand-blue/20 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg">save</span>
                  Salvar Alterações
                </button>
                <button className="w-full py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg">restore</span>
                  Restaurar Padrão
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
