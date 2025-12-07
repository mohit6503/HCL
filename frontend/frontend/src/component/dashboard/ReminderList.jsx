// src/components/dashboard/ReminderList.jsx
function ReminderList({ reminders }) {
  return (
    <ul className="reminder-list">
      {reminders.map((r) => (
        <li key={r.id}>{r.text}</li>
      ))}
    </ul>
  );
}

export default ReminderList;