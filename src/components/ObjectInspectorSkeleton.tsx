function SkeletonLine({
  width = "100%",
  height = 14,
}: {
  width?: string;
  height?: number;
}) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "block",
        width,
        height,
        borderRadius: 6,
        background:
          "linear-gradient(110deg, #e5e5e5 25%, #f5f5f5 38%, #e5e5e5 52%)",
        backgroundSize: "200% 100%",
        animation: "topo-copy-skeleton-shimmer 1.4s linear infinite",
      }}
    />
  );
}

export function ObjectInspectorSkeleton() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading object information"
      style={{
        display: "grid",
        gap: 32,
      }}
    >
      <header
        style={{
          display: "grid",
          gap: 12,
        }}
      >
        <SkeletonLine width="42%" height={11} />
        <SkeletonLine width="92%" height={32} />
        <SkeletonLine width="72%" height={32} />

        <div
          style={{
            display: "grid",
            gap: 9,
            marginTop: 8,
          }}
        >
          <SkeletonLine />
          <SkeletonLine width="96%" />
          <SkeletonLine width="84%" />
          <SkeletonLine width="55%" />
        </div>
      </header>

      <section
        aria-hidden="true"
        style={{
          display: "grid",
          gap: 16,
        }}
      >
        <SkeletonLine width="38%" height={20} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "34% minmax(0, 1fr)",
            gap: "14px 18px",
          }}
        >
          <SkeletonLine width="80%" />
          <SkeletonLine />

          <SkeletonLine width="64%" />
          <SkeletonLine width="88%" />

          <SkeletonLine width="76%" />
          <SkeletonLine width="72%" />

          <SkeletonLine width="58%" />
          <SkeletonLine width="94%" />
        </div>
      </section>

      <section
        aria-hidden="true"
        style={{
          display: "grid",
          gap: 16,
        }}
      >
        <SkeletonLine width="34%" height={20} />

        {[0, 1, 2].map((item) => (
          <div
            key={item}
            style={{
              display: "grid",
              gap: 8,
            }}
          >
            <SkeletonLine width="24%" height={11} />
            <SkeletonLine width="62%" height={16} />
            <SkeletonLine width="92%" />
            <SkeletonLine width="66%" />
          </div>
        ))}
      </section>

      <span
        style={{
          fontSize: 13,
          opacity: 0.65,
          textAlign: "center",
        }}
      >
        Loading object context…
      </span>

      <style>
        {`
          @keyframes topo-copy-skeleton-shimmer {
            from {
              background-position: 200% 0;
            }

            to {
              background-position: -200% 0;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            [aria-label="Loading object information"] * {
              animation: none !important;
            }
          }
        `}
      </style>
    </div>
  );
}
