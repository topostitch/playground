export function ObjectViewerSkeleton() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading interactive object"
      style={{
        display: "grid",
        width: "100%",
        height: "100%",
        minHeight: 500,
        placeItems: "center",
        overflow: "hidden",
        borderRadius: 18,
        color: "#f5f5f5",
        background: "linear-gradient(110deg, #111 25%, #1d1d1d 38%, #111 52%)",
        backgroundSize: "200% 100%",
        animation: "topo-skeleton-shimmer 1.4s linear infinite",
      }}
    >
      <div
        style={{
          display: "grid",
          gap: 12,
          justifyItems: "center",
          padding: 24,
          textAlign: "center",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            width: 44,
            height: 44,
            border: "3px solid rgba(255, 255, 255, 0.2)",
            borderTopColor: "#ffffff",
            borderRadius: "50%",
            animation: "topo-loading-spin 900ms linear infinite",
          }}
        />

        <strong>Preparing interactive object</strong>

        <span
          style={{
            maxWidth: 320,
            fontSize: 14,
            lineHeight: 1.5,
            opacity: 0.68,
          }}
        >
          Loading the model, materials, and object context…
        </span>
      </div>

      <style>
        {`
          @keyframes topo-skeleton-shimmer {
            from {
              background-position: 200% 0;
            }

            to {
              background-position: -200% 0;
            }
          }

          @keyframes topo-loading-spin {
            to {
              transform: rotate(360deg);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            [role="status"],
            [role="status"] * {
              animation: none !important;
            }
          }
        `}
      </style>
    </div>
  );
}
