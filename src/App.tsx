import { useEffect, useState } from "react";
import {
  TopoDescription,
  TopoMetadata,
  TopoObject,
  TopoObjectContainer,
  TopoProvider,
  TopoTimeline,
  TopoTitle,
  apollo11CommandModule,
  demoProvider,
} from "@topostitch/react";
import { ObjectInspectorSkeleton } from "./components/ObjectInspectorSkeleton";
import { ObjectViewerSkeleton } from "./components/ObjectViewerSkeleton";

export default function App() {
  const loadingDuration = 1500;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsLoading(false);
    }, loadingDuration);

    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 32,
        background: "#181818",
        color: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: "min(1200px, 100%)",
          margin: "0 auto",
        }}
      >
        <TopoProvider provider={demoProvider}>
          <TopoObjectContainer
            inspectorTitle={apollo11CommandModule.title}
            inspectorLabel={`${apollo11CommandModule.title} information`}
            sectionLabel={`${apollo11CommandModule.title} workspace`}
            defaultInspectorState="expanded"
            height="700px"
            viewer={
              <TopoObject
                id="nasm_A19700102000"
                view="model"
                renderer="r3f"
                minimumLoadingMs={loadingDuration}
                loadingFallback={<ObjectViewerSkeleton />}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                options={{
                  height: "100%",
                  environment: "studio",
                  controls: true,
                }}
              />
            }
          >
            {isLoading ? (
              <ObjectInspectorSkeleton />
            ) : (
              <>
                <header>
                  <p
                    style={{
                      margin: "0 0 8px",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      opacity: 0.6,
                    }}
                  >
                    Smithsonian Institution
                  </p>

                  <TopoTitle object={apollo11CommandModule} />

                  <TopoDescription
                    object={apollo11CommandModule}
                    style={{ marginTop: 16 }}
                  />
                </header>

                <TopoMetadata
                  object={apollo11CommandModule}
                  style={{ marginTop: 32 }}
                />

                <TopoTimeline
                  object={apollo11CommandModule}
                  style={{ marginTop: 32 }}
                />
              </>
            )}
          </TopoObjectContainer>
        </TopoProvider>
      </div>
    </main>
  );
}
