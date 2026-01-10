import { Suspense, useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Center, Grid } from "@react-three/drei";
import { RotateCcw, Box, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const DemoBox = () => (
  <mesh>
    <boxGeometry args={[2, 2, 2]} />
    <meshStandardMaterial color="hsl(220, 70%, 20%)" metalness={0.3} roughness={0.4} />
  </mesh>
);

const DemoSphere = () => (
  <mesh>
    <sphereGeometry args={[1.2, 64, 64]} />
    <meshStandardMaterial color="hsl(190, 80%, 45%)" metalness={0.5} roughness={0.2} />
  </mesh>
);

const DemoCylinder = () => (
  <mesh rotation={[Math.PI / 6, 0, 0]}>
    <cylinderGeometry args={[0.8, 1.2, 2.5, 32]} />
    <meshStandardMaterial color="hsl(220, 70%, 20%)" metalness={0.4} roughness={0.3} />
  </mesh>
);

const DemoTorus = () => (
  <mesh rotation={[Math.PI / 4, 0, 0]}>
    <torusGeometry args={[1, 0.4, 32, 64]} />
    <meshStandardMaterial color="hsl(190, 80%, 45%)" metalness={0.6} roughness={0.2} />
  </mesh>
);

const models = [
  { id: 1, name: "Kubus", component: DemoBox },
  { id: 2, name: "Sfeer", component: DemoSphere },
  { id: 3, name: "Cilinder", component: DemoCylinder },
  { id: 4, name: "Torus", component: DemoTorus },
];

const ShowroomPage = () => {
  const [currentModel, setCurrentModel] = useState(0);

  const nextModel = () => setCurrentModel((prev) => (prev + 1) % models.length);
  const prevModel = () => setCurrentModel((prev) => (prev - 1 + models.length) % models.length);

  const CurrentModelComponent = models[currentModel].component;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="text-sm font-medium">Interactieve 3D Viewer</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl md:text-4xl font-bold mb-4"
            >
              3D Showroom
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              Bekijk onze producten in 360° — draai, zoom en ontdek elk detail
            </motion.p>
          </div>
        </div>
      </section>

      {/* 3D Viewer */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative aspect-[4/3] md:aspect-[16/9] max-w-5xl mx-auto rounded-xl bg-card shadow-elegant overflow-hidden"
          >
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 2, 6]} />
              <OrbitControls
                enablePan={false}
                minDistance={3}
                maxDistance={10}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI / 2}
              />
              
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <directionalLight position={[-10, 5, -5]} intensity={0.3} />
              
              <Suspense fallback={null}>
                <Center>
                  <CurrentModelComponent />
                </Center>
                <Grid
                  infiniteGrid
                  fadeDistance={30}
                  fadeStrength={3}
                  cellColor="hsl(220, 15%, 85%)"
                  sectionColor="hsl(220, 70%, 20%)"
                  cellSize={1}
                  sectionSize={3}
                />
              </Suspense>
            </Canvas>

            {/* Controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
              <Button size="icon" variant="secondary" className="rounded-full shadow-md" onClick={prevModel}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="px-4 py-2 rounded-lg bg-card/95 backdrop-blur-sm shadow-md">
                <span className="text-sm font-medium">{models[currentModel].name}</span>
              </div>

              <Button size="icon" variant="secondary" className="rounded-full shadow-md" onClick={nextModel}>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-card/95 backdrop-blur-sm shadow-sm text-sm text-muted-foreground">
              Klik en sleep om te draaien • Scroll om te zoomen
            </div>
          </motion.div>

          {/* Model Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 grid grid-cols-4 gap-3 max-w-md mx-auto"
          >
            {models.map((model, index) => (
              <button
                key={model.id}
                onClick={() => setCurrentModel(index)}
                className={`p-3 rounded-lg transition-all ${
                  currentModel === index
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card shadow-card hover:shadow-elegant"
                }`}
              >
                <Box className={`w-5 h-5 mx-auto mb-1 ${currentModel === index ? "" : "text-muted-foreground"}`} />
                <span className="text-xs font-medium">{model.name}</span>
              </button>
            ))}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-xl font-bold mb-3">
              Bekijk je eigen 3D-model
            </h2>
            <p className="text-muted-foreground mb-4">
              Upload je eigen GLTF/GLB bestand om te bekijken hoe je product eruit zal zien.
            </p>
            <Button variant="outline">Binnenkort beschikbaar</Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ShowroomPage;