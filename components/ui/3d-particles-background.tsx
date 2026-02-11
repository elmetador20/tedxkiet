"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import type * as THREE from "three"

function Particles({ count = 800 }) {
  const mesh = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      // Spread particles in a larger area
      positions[i * 3] = (Math.random() - 0.5) * 30
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20

      // Mix of red and white/gray particles with varied brightness
      const isRed = Math.random() > 0.6
      if (isRed) {
        colors[i * 3] = 0.9 + Math.random() * 0.1
        colors[i * 3 + 1] = 0.15 + Math.random() * 0.1
        colors[i * 3 + 2] = 0.1 + Math.random() * 0.1
      } else {
        const brightness = 0.4 + Math.random() * 0.4
        colors[i * 3] = brightness
        colors[i * 3 + 1] = brightness
        colors[i * 3 + 2] = brightness
      }

      sizes[i] = Math.random() * 0.1 + 0.02
    }

    return { positions, colors, sizes }
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.015
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.08} vertexColors transparent opacity={0.9} sizeAttenuation />
    </points>
  )
}

function FloatingShapes() {
  const torusRef = useRef<THREE.Mesh>(null)
  const torus2Ref = useRef<THREE.Mesh>(null)
  const torus3Ref = useRef<THREE.Mesh>(null)
  const icosaRef = useRef<THREE.Mesh>(null)
  const octaRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.2
      torusRef.current.rotation.y = t * 0.3
      torusRef.current.position.y = Math.sin(t * 0.5) * 0.8
    }
    if (torus2Ref.current) {
      torus2Ref.current.rotation.x = t * 0.3
      torus2Ref.current.rotation.z = t * 0.2
      torus2Ref.current.position.y = Math.cos(t * 0.4) * 0.5
    }
    if (torus3Ref.current) {
      torus3Ref.current.rotation.y = t * 0.25
      torus3Ref.current.rotation.z = t * 0.15
      torus3Ref.current.position.x = Math.sin(t * 0.3) * 0.3
    }
    if (icosaRef.current) {
      icosaRef.current.rotation.x = t * 0.4
      icosaRef.current.rotation.y = t * 0.2
      icosaRef.current.position.y = Math.sin(t * 0.6) * 0.4 + 1
    }
    if (octaRef.current) {
      octaRef.current.rotation.x = t * 0.3
      octaRef.current.rotation.z = t * 0.4
      octaRef.current.position.y = Math.cos(t * 0.5) * 0.5 - 1
    }
  })

  return (
    <>
      {/* Large red torus on left */}
      <mesh ref={torusRef} position={[-5, 0, -6]}>
        <torusGeometry args={[2, 0.08, 16, 100]} />
        <meshStandardMaterial color="#e62b1e" transparent opacity={0.4} wireframe />
      </mesh>

      {/* White torus on right */}
      <mesh ref={torus2Ref} position={[5, -1, -4]}>
        <torusGeometry args={[1.5, 0.06, 16, 100]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.25} wireframe />
      </mesh>

      {/* Small red torus center-right */}
      <mesh ref={torus3Ref} position={[3, 2, -8]}>
        <torusGeometry args={[1, 0.05, 16, 100]} />
        <meshStandardMaterial color="#e62b1e" transparent opacity={0.3} wireframe />
      </mesh>

      {/* Icosahedron top right */}
      <mesh ref={icosaRef} position={[4, 1, -5]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#e62b1e" transparent opacity={0.2} wireframe />
      </mesh>

      {/* Octahedron bottom left */}
      <mesh ref={octaRef} position={[-4, -2, -5]}>
        <octahedronGeometry args={[0.8]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.2} wireframe />
      </mesh>
    </>
  )
}

function GlowOrbs() {
  const orb1Ref = useRef<THREE.Mesh>(null)
  const orb2Ref = useRef<THREE.Mesh>(null)
  const orb3Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (orb1Ref.current) {
      orb1Ref.current.position.x = Math.sin(t * 0.2) * 3 - 4
      orb1Ref.current.position.y = Math.cos(t * 0.3) * 2
    }
    if (orb2Ref.current) {
      orb2Ref.current.position.x = Math.cos(t * 0.25) * 3 + 4
      orb2Ref.current.position.y = Math.sin(t * 0.2) * 2
    }
    if (orb3Ref.current) {
      orb3Ref.current.position.y = Math.sin(t * 0.4) * 1.5
    }
  })

  return (
    <>
      <mesh ref={orb1Ref} position={[-4, 0, -10]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#e62b1e" transparent opacity={0.08} />
      </mesh>
      <mesh ref={orb2Ref} position={[4, 0, -10]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color="#e62b1e" transparent opacity={0.06} />
      </mesh>
      <mesh ref={orb3Ref} position={[0, -3, -12]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="#e62b1e" transparent opacity={0.05} />
      </mesh>
    </>
  )
}

export function ParticlesBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#e62b1e" />
        <Particles count={600} />
        <FloatingShapes />
        <GlowOrbs />
      </Canvas>
    </div>
  )
}
