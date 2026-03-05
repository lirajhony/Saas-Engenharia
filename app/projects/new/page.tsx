export default function ProjectWizard() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm px-4">
      <div className="w-full max-w-[640px] bg-white dark:bg-slate-900 overflow-hidden border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl">
        <div className="px-8 pt-8 pb-6 border-b border-slate-50 dark:border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Novo Empreendimento
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                Passo 1: Dados Gerais do Projeto
              </p>
            </div>
            <div className="flex items-center justify-center size-10 rounded-full bg-brand-yellow/20 text-brand-yellow">
              <span className="material-symbols-outlined">description</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <span className="text-primary">Dados do Projeto</span>
              <span>Disciplinas</span>
              <span>Equipe</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 bg-brand-yellow"
                style={{ width: "33.33%" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Nome do Projeto
            </label>
            <input
              className="w-full h-12 px-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none rounded-xl"
              placeholder="Ex: Edifício Horizonte Residencial"
              type="text"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Cliente
              </label>
              <select className="w-full h-12 px-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none cursor-pointer rounded-xl">
                <option value="">Selecione o cliente</option>
                <option value="1">Incorporadora Norte Sul</option>
                <option value="2">Construtora Alvorada</option>
                <option value="3">Investimentos Real Estate</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Município
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                  location_on
                </span>
                <input
                  className="w-full h-12 pl-10 pr-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none rounded-xl"
                  placeholder="Cidade / UF"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Responsável Interno
              </label>
              <select className="w-full h-12 px-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none cursor-pointer rounded-xl">
                <option value="">Selecione o engenheiro</option>
                <option value="1">Eng. Ricardo Santos</option>
                <option value="2">Eng. Maria Clara</option>
                <option value="3">Arq. Fernanda Lima</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Data de Início Estimada
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                  calendar_today
                </span>
                <input
                  className="w-full h-12 pl-10 pr-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none rounded-xl"
                  type="date"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 py-6 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between">
          <button className="px-6 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors rounded-full">
            Cancelar
          </button>
          <div className="flex gap-3">
            <button className="bg-primary text-white px-8 py-2.5 text-sm font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all flex items-center gap-2 rounded-full">
              Próximo: Definir Disciplinas
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
