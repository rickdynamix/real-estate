import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="page-shell notfound-shell">
      <div className="notfound-card">
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist yet.</p>
        <Link href="/" className="button primary">Return home</Link>
      </div>
    </main>
  );
}
