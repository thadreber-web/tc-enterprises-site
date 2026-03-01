export default function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    'Live': 'badge badge-primary',
    'In Dev': 'badge badge-accent',
  }
  const cls = map[status] || 'badge badge-primary'
  return <span className={cls}>{status}</span>
}
