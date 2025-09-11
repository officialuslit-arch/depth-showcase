import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Text3D } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import heroBackground from '@/assets/hero-background.jpg';
import profilePlaceholder from '@/assets/profile-placeholder.jpg';

const FloatingCube = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#00ffff" transparent opacity={0.6} />
      </mesh>
    </Float>
  );
};

const FloatingTorus = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <mesh position={position}>
        <torusGeometry args={[0.5, 0.2, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.4} />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#8b5cf6" />
      
      <FloatingCube />
      <FloatingTorus position={[3, 1, 0]} />
      <FloatingTorus position={[-2, -2, 1]} />
      <FloatingTorus position={[2, -1, -1]} />
    </Canvas>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}
      />
      
      {/* 3D Scene Overlay */}
      <div className="absolute inset-0 z-10">
        <Scene3D />
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <motion.div
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/30 to-neon-purple/30 rounded-full blur-xl animate-pulse"></div>
            <Avatar className="w-32 h-32 md:w-40 md:h-40 mx-auto relative border-2 border-primary/50 shadow-2xl shadow-neon-cyan/20">
              <AvatarImage 
                src={profilePlaceholder} 
                alt="Alex Chen - Full Stack Developer"
                className="object-cover"
              />
              <AvatarFallback className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                AC
              </AvatarFallback>
            </Avatar>
          </motion.div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6 neon-text"
        >
          Alex Chen
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl mb-8 text-muted-foreground"
        >
          Full-Stack Developer & Creative Technologist
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg mb-12 text-muted-foreground max-w-2xl mx-auto"
        >
          Crafting immersive digital experiences with cutting-edge technology, 
          beautiful design, and innovative solutions.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            variant="default"
            size="lg"
            className="bg-neon-cyan text-black hover:bg-neon-cyan/90 hover:shadow-neon-cyan transition-all duration-300"
          >
            View My Work
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black transition-all duration-300"
          >
            Get In Touch
          </Button>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 floating-animation">
        <div className="w-4 h-4 bg-neon-cyan rounded-full shadow-neon-cyan" />
      </div>
      <div className="absolute top-20 right-20 floating-animation" style={{ animationDelay: '2s' }}>
        <div className="w-6 h-6 bg-neon-purple rounded-full shadow-neon-purple" />
      </div>
    </section>
  );
};