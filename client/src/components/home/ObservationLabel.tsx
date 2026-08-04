export default function ObservationLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="observation-label">
      <i aria-hidden="true" />
      {children}
    </span>
  );
}
