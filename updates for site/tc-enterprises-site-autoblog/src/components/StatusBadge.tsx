export default function StatusBadge({ status }: { status: 'Live' | 'MVP' | 'In Dev' | string }) {
  const map: Record<string, string> = {
    'Live': 'badge badge-primary',
    'MVP': 'badge badge-secondary',
    'In Dev': 'badge badge-accent'
  }
  const cls = map[status] || 'badge badge-primary'
  return <span className={cls}>{status}</span>
}