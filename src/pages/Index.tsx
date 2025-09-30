// src/pages/Index.tsx
import { Link } from 'react-router-dom';

export default function IndexPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to CampusLMS</h1>
      <p>Your modern learning management system.</p>
      <Link to="/dashboard">
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
}
