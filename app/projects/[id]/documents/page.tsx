export default function ProjectDocuments() {
  const documents = [
    {
      name: "Levantamento Topográfico - Lote 01.pdf",
      discipline: "Topografia",
      lead: "Eng. Carlos Lima",
      version: "v2",
      status: "Aprovado",
      statusColor: "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20",
      time: "12 Out, 2023 • 14:30",
      icon: "picture_as_pdf",
      iconColor: "text-red-600 bg-red-100",
    },
    {
      name: "Memorial Descritivo Drenagem.docx",
      discipline: "Drenagem",
      lead: "Marcia Mendes",
      version: "v1",
      status: "Em Revisão",
      statusColor: "text-accent-yellow bg-accent-yellow/10",
      time: "15 Out, 2023 • 09:15",
      icon: "description",
      iconColor: "text-blue-600 bg-blue-100",
    },
    {
      name: "Cronograma Geral_V3.pdf",
      discipline: "Geral",
      lead: "Ricardo Silva",
      version: "v3",
      status: "Aprovado",
      statusColor: "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20",
      time: "20 Out, 2023 • 18:00",
      icon: "picture_as_pdf",
      iconColor: "text-red-600 bg-red-100",
    },
    {
      name: "Planilha Orçamentária - Civil.xlsx",
      discipline: "Orçamento",
      lead: "Ana Paula",
      version: "v1",
      status: "Pendente",
      statusColor: "text-slate-500 bg-slate-100 dark:bg-slate-800",
      time: "Ontem às 11:20",
      icon: "table_chart",
      iconColor: "text-emerald-600 bg-emerald-100",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-3xl font-black tracking-tight dark:text-slate-100 text-brand-blue">
            Via Verde – Guaramirim
          </h2>
          <p className="text-slate-500 font-medium mt-1">
            Gestão de Documentação Técnica e Engenharia Civil
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full text-sm font-semibold hover:bg-slate-50 transition-colors shadow-soft">
            <span className="material-symbols-outlined text-lg">share</span>
            Compartilhar
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-full text-sm font-bold hover:opacity-90 transition-all">
            <span className="material-symbols-outlined text-lg">add_circle</span>
            Novo Documento
          </button>
        </div>
      </div>

      <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-[2rem] bg-slate-50/50 dark:bg-slate-800/20 p-10 flex flex-col items-center justify-center text-center group hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-3xl text-primary">
            upload_file
          </span>
        </div>
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          Upload de Documentos
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          Arraste seus arquivos aqui ou{" "}
          <span className="text-primary font-bold">clique para selecionar</span>
        </p>
        <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-widest font-bold">
          PDF, DWG, DOCX, XLSX (Max 50MB)
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-6 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Disciplina
          </label>
          <select className="w-full bg-slate-50 dark:bg-slate-800 border-none text-sm focus:ring-primary focus:ring-opacity-50 rounded-full">
            <option>Todas as Disciplinas</option>
            <option>Topografia</option>
            <option>Drenagem</option>
            <option>Geral</option>
            <option>Pavimentação</option>
          </select>
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Tipo de Arquivo
          </label>
          <select className="w-full bg-slate-50 dark:bg-slate-800 border-none text-sm focus:ring-primary focus:ring-opacity-50 rounded-full">
            <option>Todos os Tipos</option>
            <option>Plantas</option>
            <option>Memorial</option>
            <option>Orçamento</option>
          </select>
        </div>
        <div className="flex items-end self-end h-10">
          <button className="h-full px-4 bg-accent-yellow/20 text-brand-blue font-bold text-sm hover:bg-accent-yellow/30 transition-colors flex items-center gap-2 rounded-full">
            <span className="material-symbols-outlined text-lg">filter_alt</span>
            Filtrar
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden rounded-[2rem]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Documento
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Disciplina
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Responsável
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">
                  Versão
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Última Modificação
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {documents.map((doc, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded flex items-center justify-center ${doc.iconColor}`}
                      >
                        <span className="material-symbols-outlined text-xl">
                          {doc.icon}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {doc.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-[10px] font-bold uppercase tracking-wider">
                      {doc.discipline}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                    {doc.lead}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                      {doc.version}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div
                      className={`flex items-center gap-1.5 px-2 py-1 rounded-full w-fit ${doc.statusColor}`}
                    >
                      <span className="material-symbols-outlined text-sm">
                        {doc.status === "Aprovado"
                          ? "check_circle"
                          : doc.status === "Em Revisão"
                          ? "history_edu"
                          : "hourglass_empty"}
                      </span>
                      <span className="text-[10px] font-bold uppercase">
                        {doc.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {doc.time}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary transition-colors rounded-full">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <p className="text-xs text-slate-500">Mostrando 4 de 24 documentos</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 transition-colors">
              Anterior
            </button>
            <button className="px-3 py-1 text-xs font-bold text-white bg-primary rounded-full hover:opacity-90 transition-all">
              1
            </button>
            <button className="px-3 py-1 text-xs font-bold text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-colors">
              2
            </button>
            <button className="px-3 py-1 text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 transition-colors">
              Próximo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
