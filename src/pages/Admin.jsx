import { useEffect, useMemo, useState } from "react";

const EMPTY = {
  profile: { name: "", title: "", bio: "" },
  projects: []
};

export default function Admin() {
  const [secret, setSecret] = useState("");
  const [cms, setCms] = useState(EMPTY);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ تحميل البيانات
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/get.php", { cache: "no-store" });
        if (!res.ok) throw new Error(`GET failed: ${res.status}`);
        const data = await res.json();
        setCms({
          profile: data?.profile || EMPTY.profile,
          projects: Array.isArray(data?.projects) ? data.projects : []
        });
      } catch (e) {
        setStatus(e?.message || "Failed to load CMS data");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const addProject = () => {
    const id = "p" + Date.now();
    setCms((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        { id, title: "", url: "", role: "", description: "", tags: [] }
      ]
    }));
  };

  const updateProject = (id, key, value) => {
    setCms((prev) => ({
      ...prev,
      projects: prev.projects.map((p) =>
        p.id === id ? { ...p, [key]: value } : p
      )
    }));
  };

  const removeProject = (id) => {
    setCms((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id)
    }));
  };

  const save = async () => {
    setStatus("Saving...");
    try {
      const res = await fetch("/api/save.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret, // لازم يطابق اللي في save.php
          data: cms
        })
      });

      if (!res.ok) throw new Error(`SAVE failed: ${res.status}`);
      setStatus("Saved ✅");
    } catch (e) {
      setStatus(e?.message || "Save failed");
    }
  };

  if (loading) {
    return <div style={{ padding: 40 }}>Loading...</div>;
  }

  return (
    <div style={{ padding: 24, maxWidth: 980, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, fontWeight: 800 }}>CMS Admin</h1>
      <p style={{ marginTop: 8, opacity: 0.8 }}>
        Manage your portfolio projects. Changes will reflect on the website after Save.
      </p>

      <div style={{ marginTop: 14 }}>
        <input
          placeholder="Admin Secret (same as save.php)"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            border: "1px solid #ddd",
            borderRadius: 10
          }}
        />
      </div>

      <hr style={{ margin: "18px 0" }} />

      {/* Profile (اختياري) */}
      <h2 style={{ fontSize: 18, fontWeight: 800 }}>Profile (optional)</h2>
      <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
        <input
          placeholder="Name"
          value={cms.profile?.name || ""}
          onChange={(e) => setCms((p) => ({ ...p, profile: { ...p.profile, name: e.target.value } }))}
          style={{ width: "100%", padding: 12, border: "1px solid #ddd", borderRadius: 10 }}
        />
        <input
          placeholder="Title"
          value={cms.profile?.title || ""}
          onChange={(e) => setCms((p) => ({ ...p, profile: { ...p.profile, title: e.target.value } }))}
          style={{ width: "100%", padding: 12, border: "1px solid #ddd", borderRadius: 10 }}
        />
        <textarea
          placeholder="Bio"
          value={cms.profile?.bio || ""}
          onChange={(e) => setCms((p) => ({ ...p, profile: { ...p.profile, bio: e.target.value } }))}
          style={{ width: "100%", padding: 12, border: "1px solid #ddd", borderRadius: 10, minHeight: 90 }}
        />
      </div>

      <hr style={{ margin: "18px 0" }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ fontSize: 18, fontWeight: 800 }}>Projects</h2>
        <button
          onClick={addProject}
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid #ddd",
            background: "#fff",
            cursor: "pointer"
          }}
        >
          + Add Project
        </button>
      </div>

      <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
        {cms.projects.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #e5e5e5",
              borderRadius: 14,
              padding: 14,
              background: "#fff"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
              <div style={{ fontWeight: 800 }}>{p.title || "Untitled"}</div>
              <button
                onClick={() => removeProject(p.id)}
                style={{
                  padding: "6px 10px",
                  borderRadius: 10,
                  border: "1px solid #ddd",
                  background: "#fff",
                  cursor: "pointer"
                }}
              >
                Delete
              </button>
            </div>

            <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
              <input
                placeholder="Title"
                value={p.title || ""}
                onChange={(e) => updateProject(p.id, "title", e.target.value)}
                style={{ width: "100%", padding: 12, border: "1px solid #ddd", borderRadius: 10 }}
              />
              <input
                placeholder="Role"
                value={p.role || ""}
                onChange={(e) => updateProject(p.id, "role", e.target.value)}
                style={{ width: "100%", padding: 12, border: "1px solid #ddd", borderRadius: 10 }}
              />
              <input
                placeholder="URL (https://...)"
                value={p.url || ""}
                onChange={(e) => updateProject(p.id, "url", e.target.value)}
                style={{ width: "100%", padding: 12, border: "1px solid #ddd", borderRadius: 10 }}
              />
              <textarea
                placeholder="Description"
                value={p.description || ""}
                onChange={(e) => updateProject(p.id, "description", e.target.value)}
                style={{ width: "100%", padding: 12, border: "1px solid #ddd", borderRadius: 10, minHeight: 90 }}
              />
              <input
                placeholder="Tags (comma separated)"
                value={(p.tags || []).join(", ")}
                onChange={(e) =>
                  updateProject(
                    p.id,
                    "tags",
                    e.target.value.split(",").map((t) => t.trim()).filter(Boolean)
                  )
                }
                style={{ width: "100%", padding: 12, border: "1px solid #ddd", borderRadius: 10 }}
              />
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, display: "flex", gap: 10, alignItems: "center" }}>
        <button
          onClick={save}
          style={{
            padding: "12px 16px",
            borderRadius: 12,
            border: "1px solid #111",
            background: "#111",
            color: "#fff",
            cursor: "pointer",
            fontWeight: 800
          }}
        >
          Save
        </button>
        <span style={{ opacity: 0.85 }}>{status}</span>
      </div>
    </div>
  );
}