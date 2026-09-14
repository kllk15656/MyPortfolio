import { useState } from "react";

export default function Projects() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Portfolio Website",
      type: "Project Based",
      description:
        "This is my portfolio page - this displays all my information and projects",
      tags: "React, Javascript",
      status: "Published",
      views: 1204,
      photos: [],
      documentation: "",
      github: "",
      demo: "",
      date: "27/12/2025",
    },
  ]);

  const [search, setSearch] = useState("");

  const [showAdd, setShowAdd] = useState(false);
  const [showView, setShowView] = useState(null);
  const [showEdit, setShowEdit] = useState(null);
  const [showDelete, setShowDelete] = useState(null);

  const [form, setForm] = useState({
    name: "",
    type: "",
    description: "",
    tags: "",
    photos: [],
    documentation: "",
    github: "",
    demo: "",
    date: "",
    status: "Draft",
    views: 0,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const addItem = () => {
    setItems([...items, { id: Date.now(), ...form }]);
    setForm({
      name: "",
      type: "",
      description: "",
      tags: "",
      photos: [],
      documentation: "",
      github: "",
      demo: "",
      date: "",
      status: "Draft",
      views: 0,
    });
    setShowAdd(false);
  };

  const updateItem = () => {
    setItems(
      items.map((i) =>
        i.id === showEdit.id ? { ...showEdit, ...form } : i
      )
    );
    setShowEdit(null);
  };

  const deleteItem = () => {
    setItems(items.filter((i) => i.id !== showDelete.id));
    setShowDelete(null);
  };

  return (
    <div className="space-y-10 px-4">

      {/* Top Title + Button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="project-title">Projects</h1>

        <button
          onClick={() => setShowAdd(true)}
          className="add-button flex items-center gap-2"
        >
          New Projects
          <img src="/icons/Add.png" className="w-4 h-4" />
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
        <StatCard
          title="Total Projects"
          value={items.length}
          desc="All your projects"
          icon="/icons/project.png"
        />
        <StatCard
          title="Published"
          value={items.filter(i => i.status === "Published").length}
          desc="Visible to visitors"
          icon="/icons/project.png"
        />
        <StatCard
          title="Drafts"
          value={items.filter(i => i.status === "Draft").length}
          desc="Number of drafts"
          icon="/icons/project.png"
        />
        <StatCard
          title="Total Views"
          value={items.reduce((a, b) => a + b.views, 0)}
          desc="Across all projects"
          icon="/icons/project.png"
        />
      </div>

      {/* Table */}
      <div className="project_table p-6 rounded-xl shadow-sm">
        <div className="p-2 mb-6 flex items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Search Projects"
            className="search p-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select className="option rounded-lg p-2 md:w-auto">
            <option>Latest</option>
            <option>Oldest</option>
          </select>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#F3F3F3] text-[#2E2A3B] font-semibold">
              <th className="py-3 px-6">ID</th>
              <th className="py-3 px-6">Project Name</th>
              <th className="py-3 px-6">Created At</th>
              <th className="py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {items
              .filter((i) =>
                i.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((i) => (
                <tr key={i.id} className="border-b">
                  <td className="py-3 px-6">{i.id}</td>
                  <td className="py-3 px-6">{i.name}</td>
                  <td className="py-3 px-6">{i.date}</td>
                  <td className="py-3 text-center flex justify-center gap-3">

                    <button
                      onClick={() => setShowView(i)}
                      className="bg-[#00A8A8] text-white px-4 py-2 rounded-lg shadow"
                    >
                      View
                    </button>

                    <button
                      onClick={() => {
                        setShowEdit(i);
                        setForm(i);
                      }}
                      className="bg-[#6C63FF] text-white px-4 py-2 rounded-lg shadow"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => setShowDelete(i)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg shadow"
                    >
                      Delete
                    </button>

                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* ADD MODAL */}
      {showAdd && (
        <Modal title="Add New Project" onClose={() => setShowAdd(false)}>
          <Form form={form} handleChange={handleChange} />
          <button
            onClick={addItem}
            className="bg-[#6C63FF] text-white px-6 py-2 rounded-lg mt-6 block mx-auto shadow"
          >
            Save Project
          </button>
        </Modal>
      )}

      {/* VIEW MODAL */}
      {showView && (
        <Modal title="Project Details" onClose={() => setShowView(null)}>
          <div className="grid grid-cols-1 gap-4">
            <Detail label="Name" value={showView.name} />
            <Detail label="Type" value={showView.type} />
            <Detail label="Description" value={showView.description} />
            <Detail label="Tags" value={showView.tags} />
            <Detail label="Status" value={showView.status} />
            <Detail label="Views" value={showView.views} />
            <Detail label="Date" value={showView.date} />

            <div>
              <p className="font-semibold text-[#2E2A3B] mb-1">Documentation:</p>
              <button className="bg-[#6C63FF] text-white px-4 py-2 rounded-lg shadow">
                View Document
              </button>
            </div>

            <div>
              <p className="font-semibold text-[#2E2A3B] mb-1">GitHub:</p>
              <button className="bg-[#6C63FF] text-white px-4 py-2 rounded-lg shadow">
                Open GitHub
              </button>
            </div>

            <div>
              <p className="font-semibold text-[#2E2A3B] mb-1">Demo:</p>
              <button className="bg-[#6C63FF] text-white px-4 py-2 rounded-lg shadow">
                View Demo
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* EDIT MODAL */}
      {showEdit && (
        <Modal title="Edit Project" onClose={() => setShowEdit(null)}>
          <Form form={form} handleChange={handleChange} />
          <button
            onClick={updateItem}
            className="bg-[#00A8A8] text-white px-6 py-2 rounded-lg mt-6 block mx-auto shadow"
          >
            Update Project
          </button>
        </Modal>
      )}

      {/* DELETE MODAL */}
      {showDelete && (
        <Modal title="Delete Project" onClose={() => setShowDelete(null)}>
          <p className="text-center text-[#2E2A3B] mb-4">
            Are you sure you want to delete <strong>{showDelete.name}</strong>?
          </p>
          <button
            onClick={deleteItem}
            className="bg-red-500 text-white px-6 py-2 rounded-lg block mx-auto shadow"
          >
            Delete
          </button>
        </Modal>
      )}

    </div>
  );
}

/* MODAL */
function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-[95%] max-w-lg p-6 relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#2E2A3B]"
        >
          <img src="/icons/X.png" className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-semibold text-[#2E2A3B] mb-4 text-center">
          {title}
        </h2>

        {children}
      </div>
    </div>
  );
}

/* FORM */
function Form({ form, handleChange }) {
  return (
    <div className="flex flex-col gap-4">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Project Name" className="p-3 rounded-lg bg-white border" />
      <input name="type" value={form.type} onChange={handleChange} placeholder="Type of Project" className="p-3 rounded-lg bg-white border" />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="p-3 rounded-lg bg-white border h-24" />
      <input name="tags" value={form.tags} onChange={handleChange} placeholder="Tags" className="p-3 rounded-lg bg-white border" />
      <input name="date" value={form.date} onChange={handleChange} placeholder="Date" className="p-3 rounded-lg bg-white border" />
      <select name="status" value={form.status} onChange={handleChange} className="p-3 rounded-lg bg-white border">
        <option>Draft</option>
        <option>Published</option>
      </select>
      <input name="views" value={form.views} onChange={handleChange} placeholder="Views" type="number" className="p-3 rounded-lg bg-white border" />
    </div>
  );
}

/* DETAIL */
function Detail({ label, value }) {
  return (
    <p className="text-[#2E2A3B] mb-2">
      <span className="font-semibold">{label}:</span> {value}
    </p>
  );
}

/* STAT CARD */
function StatCard({ title, value, desc, icon }) {
  return (
    <div className="stats rounded-xl shadow p-6 text-center">
      {icon && (
        <img src={icon} alt="icon" className="w-6 h-6 mx-auto mb-3" />
      )}
      <h3 className="text-[#2E2A3B] font-semibold mb-1">{title}</h3>
      <p className="text-3xl font-bold text-[#2E2A3B] mb-1">{value}</p>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
