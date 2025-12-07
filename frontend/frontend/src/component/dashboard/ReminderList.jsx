// src/components/dashboard/ReminderList.jsx
function ReminderList({ reminders }) {
  return (
    <ul className="reminder-list">
      {(reminders || []).map((r) => (
        <li key={r._id ?? r.id}>{r.text ?? r.title}</li>
      ))}
    </ul>
  );
}

export default ReminderList;
