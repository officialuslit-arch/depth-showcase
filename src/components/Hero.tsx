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
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-32 lg:py-20">
          {/* Text Content */}
          <div className="text-center lg:text-left order-1">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 neon-text"
            >
              UDAY SHAKYA
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-muted-foreground"
            >
              Full-Stack Developer & Creative Technologist
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg mb-8 lg:mb-12 text-muted-foreground max-w-2xl lg:max-w-none"
            >
              Crafting immersive digital experiences with cutting-edge technology, 
              beautiful design, and innovative solutions.
            </motion.p>
            
            {/* Buttons - Only visible on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="hidden lg:flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                variant="neon"
                size="lg"
                className="transition-all duration-300 button-rgb-glow"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="neon-outline"
                size="lg"
                className="transition-all duration-300 button-rgb-glow"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center lg:justify-end order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative group"
              >
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-full blur-3xl group-hover:blur-4xl transition-all duration-500 opacity-60"></div>
                
                {/* Profile image without box styling */}
                <div className="relative">
                  <img 
                    src="/lovable-uploads/profile-new.png"
                    alt="UDAY SHAKYA - Full Stack Developer"
                    className="w-80 h-96 sm:w-96 sm:h-[28rem] lg:w-[400px] lg:h-[500px] xl:w-[450px] xl:h-[550px] object-cover object-center transition-all duration-500 group-hover:scale-105 rounded-2xl"
                  />
                  {/* Subtle overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent rounded-2xl"></div>
                </div>

                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-cyan rounded-full shadow-neon-cyan animate-pulse opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-purple rounded-full shadow-neon-purple animate-pulse opacity-80" style={{ animationDelay: '1s' }}></div>
              </motion.div>
            </motion.div>
          </div>

          {/* Buttons - Mobile only, appears after image */}
          <div className="flex lg:hidden justify-center order-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                variant="neon"
                size="lg"
                className="transition-all duration-300 button-rgb-glow"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="neon-outline"
                size="lg"
                className="transition-all duration-300 button-rgb-glow"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>
        </div>
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