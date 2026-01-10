import { Suspense, useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, useGLTF, Center, Grid } from "@react-three/drei";
import { RotateCcw, ZoomIn, ZoomOut, Box, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

// Demo 3D object - simple box when no model is loaded
const DemoBox = () => {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="hsl(210, 100%, 55%)" metalness={0.3} roughness={0.4} />
    </mesh>
  );
};

const DemoSphere = () => {
  return (
    <mesh>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial color="hsl(190, 90%, 50%)" metalness={0.5} roughness={0.2} />
    </mesh>
  );
};

const DemoCylinder = () => {
  return (
    <mesh rotation={[Math.PI / 6, 0, 0]}>
      <cylinderGeometry args={[0.8, 1.2, 2.5, 32]} />
      <meshStandardMaterial color="hsl(150, 70%, 45%)" metalness={0.4} roughness={0.3} />
    </mesh>
  );
};

const DemoTorus = () => {
  return (
    <mesh rotation={[Math.PI / 4, 0, 0]}>
      <torusGeometry args={[1, 0.4, 32, 64]} />
      <meshStandardMaterial color="hsl(210, 100%, 55%)" metalness={0.6} roughness={0.2} />
    </mesh>
  );
};

const models = [
  { id: 1, name: "Kubus Model", component: DemoBox },
  { id: 2, name: "Sfeer Model", component: DemoSphere },
  { id: 3, name: "Cilinder Model", component: DemoCylinder },
  { id: 4, name: "Torus Model", component: DemoTorus },
];

const ShowroomPage = () => {
  const [currentModel, setCurrentModel] = useState(0);

  const nextModel = () => setCurrentModel((prev) => (prev + 1) % models.length);
  const prevModel = () => setCurrentModel((prev) => (prev - 1 + models.length) % models.length);

  const CurrentModelComponent = models[currentModel].component;

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-4">
              <RotateCcw className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Interactieve 3D Viewer
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              3D Showroom
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Bekijk onze producten in 360° - draai, zoom en ontdek elk detail
            </p>
          </motion.div>

          {/* 3D Viewer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative aspect-[4/3] md:aspect-[16/9] max-w-5xl mx-auto rounded-xl bg-card border border-border overflow-hidden"
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
              
              <ambientLight intensity={0.4} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <directionalLight position={[-10, 5, -5]} intensity={0.5} />
              
              <Suspense fallback={null}>
                <Center>
                  <CurrentModelComponent />
                </Center>
                <Grid
                  infiniteGrid
                  fadeDistance={30}
                  fadeStrength={3}
                  cellColor="hsl(220, 15%, 25%)"
                  sectionColor="hsl(210, 100%, 55%)"
                  cellSize={1}
                  sectionSize={3}
                />
              </Suspense>
            </Canvas>

            {/* Controls Overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full"
                onClick={prevModel}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="px-4 py-2 rounded-lg bg-card/90 backdrop-blur-sm border border-border">
                <span className="text-sm font-medium">
                  {models[currentModel].name}
                </span>
              </div>

              <Button
                size="icon"
                variant="secondary"
                className="rounded-full"
                onClick={nextModel}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Instruction */}
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-card/90 backdrop-blur-sm border border-border text-sm text-muted-foreground">
              Klik en sleep om te draaien • Scroll om te zoomen
            </div>
          </motion.div>

          {/* Model Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {models.map((model, index) => (
              <button
                key={model.id}
                onClick={() => setCurrentModel(index)}
                className={`p-4 rounded-lg border transition-all ${
                  currentModel === index
                    ? "border-primary bg-primary/10"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <Box className={`w-8 h-8 mx-auto mb-2 ${
                  currentModel === index ? "text-primary" : "text-muted-foreground"
                }`} />
                <span className={`text-sm font-medium ${
                  currentModel === index ? "text-primary" : "text-muted-foreground"
                }`}>
                  {model.name}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-2xl font-bold mb-4">
              Bekijk je eigen 3D-model
            </h2>
            <p className="text-muted-foreground mb-6">
              Upload je eigen GLTF/GLB bestand om het in onze viewer te bekijken 
              en te bepalen hoe je product eruit zal zien.
            </p>
            <Button variant="outline">
              Binnenkort beschikbaar
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ShowroomPage;
