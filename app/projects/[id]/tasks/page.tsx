interface Task {
  id: number;
  title: string;
  priority: string;
  date: string;
  discipline: string;
  status?: string;
  progress?: number;
  checklist?: string;
  attachments?: number;
  avatar?: string;
  avatars?: string[];
  initials?: string;
}

interface Column {
  title: string;
  count: number;
  tasks: Task[];
}

export default function ProjectTasks() {
  const columns: Column[] = [
    {
      title: "A Fazer",
      count: 4,
      tasks: [
        {
          id: 1,
          title: "Levantamento Topográfico Lote 01",
          priority: "Alta",
          date: "15 Nov",
          attachments: 2,
          checklist: "0/5",
          discipline: "Topografia",
          avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSgCrlzFS2uacv4q51ZsLpl20kKQcAe77jfn3vg09Buvle0_QDfzKbMZYmnpfiwmwoQOFFcvwGBTuwjFlwAcgrTrqvKB-WJZQg3Gh45b9cO5VfPzVjuEkteJAY5QheUSvJaOb1XdztyArk5wP6xU_dDS3Jlsi73guyfQAXPh731fW2yr0MlZHy4OGykfnkoGyHqZIKidHF9tL2z-3bl1gFuSESnsj8kjf_KQPlEsTWzk_VqiZO0ktcekST_EEfDb55HbCSec8iSvy1",
        },
        {
          id: 2,
          title: "Sinalização de Segurança Temporária",
          priority: "Média",
          date: "20 Nov",
          attachments: 0,
          checklist: "",
          discipline: "Canteiro",
          avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxBh7Y-BREWeH11x_Kf9dK49cnCvb8z8Pw8yPsZiywoBboX2u6_HXLSweemW_GgDXY-txUc7T3A7SzWW7Gph9GVnmvQCUvp-FHuW8j9vfUAsoKNtyMPwbNPb2qk_GezTB1BT5nbiTNe-o0THnSuXVDWDCyDurKDueP_N03LyBME2P6B7i4Bz3ebrh_1KJ7kCoZ-84ZkCnLsI86RX1ty8vpHgAU9xA6L50jXn-W9K8pyqeDhZGxYaiUPHUh-61ynGxQKya1rv46IvNO",
        },
      ],
    },
    {
      title: "Em Andamento",
      count: 2,
      tasks: [
        {
          id: 3,
          title: "Drenagem Pluvial - Trecho 02",
          priority: "Alta",
          date: "Hoje",
          checklist: "4/10",
          progress: 40,
          discipline: "Drenagem",
          avatars: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDydu92ebhjx6qEzPiRmvc3Ze563UngihNcf_tkRI8_uVjyKFSJfcJ5fFunHH9SNlrfe4TzyaqmeLazSfbyJKJ6dTvJS7UJAq24JZMkrQsb3H2zWuefqQGI2WD-B14Xb7CuxLoiJf-N_uR8L_Ft4-IfSV9rRQXg5lIPunsSHwxkykH2u1LjAGoh6q2OMFrv5lyngm7ZNU7TtMcgIOkkuwXG-MK3PPIlCTNVRxDffMnckgqkqfYwxZpXRU0b3ErjyTylS3w-EXXw2Hu_",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBSVz4i16QZJPvYZAx_jq15VgcrBX2_CK2pFiX6KsN0Yzs47umOdyH3XCauDspKyKXnpe2e1JQoRLOx5ZNy0vq1nrXVWyPYaMZ6dGju3P_dERRGWzshq2ysKZEU0_IQwGofyKU-mTuGUdm0eCWJvwK92HHtrn1Ofozfzrv9cXG_GdQXuTt_B6J_Kvntf01lDfFbsZe2bJK-NEBJgkJAyjHSenj2AkhLE8mh_CwILGPH7M2uXEd-ckruZt4OwrYhXDppvTElb0BgCsnO",
          ],
        },
      ],
    },
    {
      title: "Concluído",
      count: 12,
      tasks: [
        {
          id: 4,
          title: "Licenciamento Ambiental Preliminar",
          priority: "Baixa",
          date: "10 Out",
          status: "completed",
          discipline: "Documentação",
          initials: "RF",
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-100 dark:border-slate-800 rounded-2xl">
        <div className="flex flex-wrap items-center gap-3">
          {["Disciplina: Todas", "Responsável: Qualquer", "Prioridade: Todas"].map(
            (filter) => (
              <div
                key={filter}
                className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl cursor-pointer hover:bg-white dark:hover:bg-slate-700 transition-all"
              >
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  {filter}
                </span>
                <span className="material-symbols-outlined text-sm">
                  expand_more
                </span>
              </div>
            )
          )}
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
          <button className="p-2 text-primary bg-primary/10 rounded-lg">
            <span className="material-symbols-outlined">view_kanban</span>
          </button>
          <button className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
            <span className="material-symbols-outlined">list</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {columns.map((column) => (
          <div key={column.title} className="flex flex-col gap-4 min-w-[300px]">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <h3 className="font-bold dark:text-white uppercase tracking-wider text-xs text-brand-blue">
                  {column.title}
                </h3>
                <span className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {column.count}
                </span>
              </div>
              <button className="text-slate-400 hover:text-primary">
                <span className="material-symbols-outlined text-xl">add</span>
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {column.tasks.map((task) => (
                <div
                  key={task.id}
                  className={`bg-white dark:bg-slate-900 p-4 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow cursor-pointer group rounded-2xl ${
                    task.status === "completed" ? "opacity-60" : ""
                  } ${task.progress ? "border-l-4 border-l-brand-yellow" : ""}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tight ${
                        task.status === "completed"
                          ? "bg-slate-100 text-slate-500"
                          : "bg-brand-yellow/20 text-brand-blue dark:bg-brand-yellow/10 dark:text-brand-yellow"
                      }`}
                    >
                      {task.priority}
                    </span>
                    {task.status === "completed" ? (
                      <span className="material-symbols-outlined text-green-500 text-lg">
                        check_circle
                      </span>
                    ) : (
                      <button className="text-slate-300 group-hover:text-slate-500">
                        <span className="material-symbols-outlined text-lg">
                          more_horiz
                        </span>
                      </button>
                    )}
                  </div>
                  <h4
                    className={`dark:text-white font-semibold text-sm mb-3 ${
                      task.status === "completed" ? "line-through text-slate-400" : ""
                    }`}
                  >
                    {task.title}
                  </h4>
                  <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-xs mb-4">
                    <div
                      className={`flex items-center gap-1 ${
                        task.date === "Hoje" ? "text-brand-yellow font-bold" : ""
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">
                        {task.status === "completed"
                          ? "event_available"
                          : "calendar_today"}
                      </span>
                      {task.date}
                    </div>
                    {task.checklist && (
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">
                          checklist
                        </span>
                        {task.checklist}
                      </div>
                    )}
                  </div>
                  {task.progress && (
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mb-4">
                      <div
                        className="h-1.5 rounded-full bg-brand-yellow"
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>
                  )}
                  <div className="flex items-center justify-between border-t border-slate-50 dark:border-slate-800 pt-3">
                    <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                      {task.discipline}
                    </span>
                    <div className="flex -space-x-2">
                      {task.avatar && (
                        <div
                          className="size-6 rounded-full border-2 border-white dark:border-slate-900 bg-cover bg-center"
                          style={{ backgroundImage: `url(${task.avatar})` }}
                        ></div>
                      )}
                      {task.avatars?.map((av, i) => (
                        <div
                          key={i}
                          className="size-6 rounded-full border-2 border-white dark:border-slate-900 bg-cover bg-center"
                          style={{ backgroundImage: `url(${av})` }}
                        ></div>
                      ))}
                      {task.initials && (
                        <div className="size-6 rounded-full border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[8px] font-bold text-slate-500">
                          {task.initials}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
