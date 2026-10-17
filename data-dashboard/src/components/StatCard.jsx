import Icon from "./Icon";

function StatCard({ label, value, icon }) {
  return (
    <div className="stat-card">
      <span className="stat-icon"><Icon name={icon} size={28} /></span>
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default StatCard;