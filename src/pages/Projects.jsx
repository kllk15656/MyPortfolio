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

      // ⭐ REQUIRED FOR YOUR STATS CARDS
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

  // CRUD modal states
  const [showAdd, setShowAdd] = useState(false);
  const [showView, setShowView] = useState(null);
  const [showEdit, setShowEdit] = useState(null);
  const [showDelete, setShowDelete] = useState(null);

  // Form state
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

    // ⭐ REQUIRED FOR STATS CARDS
    status: "Draft",
    views: 0,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Add
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

  // Edit
  const updateItem = () => {
    setItems(
      items.map((i) =>
        i.id === showEdit.id ? { ...showEdit, ...form } : i
      )
    );
    setShowEdit(null);
  };

  // Delete
  const deleteItem = () => {
    setItems(items.filter((i) => i.id !== showDelete.id));
    setShowDelete(null);
  };

  return (
    <div className="pt-10 px-4 max-w-5xl mx-auto">

      {/* Top Left Title + New Projects Button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-[#2E2A3B]">Projects</h1>

        <button
          onClick={() => setShowAdd(true)}
          className="bg-[#6C63FF] text-white px-5 py-2 rounded-lg shadow"
        >
          New Projects
        </button>
      </div>

      {/* ⭐ Stats Cards (now fully working) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Projects"
          value={items.length}
          desc="All your projects"
        />

        <StatCard
          title="Published"
          value={items.filter(i => i.status === "Published").length}
          desc="Visible to visitors"
        />

        <StatCard
          title="Drafts"
          value={items.filter(i => i.status === "Draft").length}
          desc="Number of drafts"
        />

        <StatCard
          title="Total Views"
          value={items.reduce((a, b) => a + b.views, 0)}
          desc="Across all projects"
        />
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <input
          type="text"
          placeholder="Search Projects"
          className="border rounded-lg p-2 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#F3F3F3] text-[#2E2A3B] font-semibold">
              <th className="py-3 pl-6">ID</th>
              <th className="py-3 pl-6">Project Name</th>
              <th className="py-3 pl-6">Created At</th>
              <th className="py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="bg-white rounded-lg shadow-sm my-2">
                <td className="py-3 pl-6">{item.id}</td>
                <td className="py-3 pl-6">{item.name}</td>
                <td className="py-3 pl-6">{item.date}</td>

                <td className="py-3 text-center flex gap-3 justify-center">

                  <button
                    onClick={() => setShowView(item)}
                    className="text-[#6C63FF] font-semibold"
                  >
                    View
                  </button>

                  <button
                    onClick={() => {
                      setShowEdit(item);
                      setForm(item);
                    }}
                    className="text-[#00A8A8] font-semibold"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => setShowDelete(item)}
                    className="text-red-500 font-semibold"
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
        <Modal title="Add Project" onClose={() => setShowAdd(false)}>
          <Form form={form} handleChange={handleChange} />
          <button
            onClick={addItem}
            className="bg-[#6C63FF] text-white px-6 py-2 rounded-lg mt-4 block mx-auto shadow"
          >
            Save
          </button>
        </Modal>
      )}

      {/* VIEW MODAL */}
      {showView && (
        <Modal title="View Projects" onClose={() => setShowView(null)}>

          <Detail label="Project Name" value={showView.name} />
          <Detail label="Type of Project" value={showView.type} />
          <Detail label="Description" value={showView.description} />

          {/* Photos */}
          <div className="mb-4">
            <p className="font-semibold text-[#2E2A3B] mb-2">Photos:</p>

            <button className="bg-[#6C63FF] text-white px-4 py-2 rounded-lg mb-2">
              Upload Image
            </button>

            <p className="text-sm text-gray-600 mb-2">Add more than one image</p>

            <div className="grid grid-cols-3 gap-3">
              <div className="w-full h-20 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">X</div>
              <div className="w-full h-20 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">X</div>
              <div className="w-full h-20 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">X</div>
            </div>
          </div>

          {/* Documentation */}
          <div className="mb-4">
            <p className="font-semibold text-[#2E2A3B] mb-2">Documentation:</p>
            <button className="bg-[#6C63FF] text-white px-4 py-2 rounded-lg">
              Upload Document
            </button>
          </div>

          {/* GitHub */}
          <div className="mb-4">
            <p className="font-semibold text-[#2E2A3B] mb-2">GitHub:</p>
            <button className="bg-[#6C63FF] text-white px-4 py-2 rounded-lg">
              Upload Link
            </button>
          </div>

          {/* Demo */}
          <div className="mb-4">
            <p className="font-semibold text-[#2E2A3B] mb-2">Demo:</p>
            <button className="bg-[#6C63FF] text-white px-4 py-2 rounded-lg">
              Upload Demo
            </button>
          </div>

          {/* Tags */}
          <div className="mb-4">
            <p className="font-semibold text-[#2E2A3B] mb-2">Tags:</p>
            <input
              type="text"
              className="p-2 rounded-lg bg-white border w-full"
              value={showView.tags}
              readOnly
            />
          </div>

          <button
            className="bg-[#6C63FF] text-white px-6 py-2 rounded-lg mt-4 block mx-auto shadow"
          >
            Save
          </button>

        </Modal>
      )}

      {/* EDIT MODAL */}
      {showEdit && (
        <Modal title="Edit Project" onClose={() => setShowEdit(null)}>
          <Form form={form} handleChange={handleChange} />
          <button
            onClick={updateItem}
            className="bg-[#00A8A8] text-white px-6 py-2 rounded-lg mt-4 block mx-auto shadow"
          >
            Update
          </button>
        </Modal>
      )}

      {/* DELETE MODAL */}
      {showDelete && (
        <Modal title="Delete Project" onClose={() => setShowDelete(null)}>
          <p className="text-center text-[#2E2A3B] mb-4">
            Are you sure you want to delete{" "}
            <strong>{showDelete.name}</strong>?
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

/* Modal Component */
function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-[90%] max-w-md shadow-lg">
        <h2 className="text-xl font-semibold text-[#2E2A3B] mb-4 text-center">
          {title}
        </h2>
        {children}
        <button
          onClick={onClose}
          className="mt-4 text-[#2E2A3B] underline block mx-auto"
        >
          Close
        </button>
      </div>
    </div>
  );
}

/* Form Component */
function Form({ form, handleChange }) {
  return (
    <div className="flex flex-col gap-3">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Project Name" className="p-2 rounded-lg bg-white border" />
      <input name="type" value={form.type} onChange={handleChange} placeholder="Type of Project" className="p-2 rounded-lg bg-white border" />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="p-2 rounded-lg bg-white border" />
      <input name="tags" value={form.tags} onChange={handleChange} placeholder="Tags" className="p-2 rounded-lg bg-white border" />
      <input name="date" value={form.date} onChange={handleChange} placeholder="Date" className="p-2 rounded-lg bg-white border" />

      {/* ⭐ Added for stats */}
      <select name="status" value={form.status} onChange={handleChange} className="p-2 rounded-lg bg-white border">
        <option>Draft</option>
        <option>Published</option>
      </select>

      <input
        name="views"
        value={form.views}
        onChange={handleChange}
        placeholder="Views"
        className="p-2 rounded-lg bg-white border"
        type="number"
      />
    </div>
  );
}

/* Detail Component */
function Detail({ label, value }) {
  return (
    <p className="text-[#2E2A3B] mb-2">
      <strong>{label}:</strong> {value}
    </p>
  );
}

/* StatCard Component */
function StatCard({ title, value, desc }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="text-[#2E2A3B] font-semibold">{title}</h3>
      <p className="text-3xl font-bold text-[#6C63FF]">{value}</p>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
