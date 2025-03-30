"use client"

import { useRef, useEffect, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function BodyModel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedPoint, setSelectedPoint] = useState<{ x: number; y: number; z: number } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf8f9fa)

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 2

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(0, 1, 0)
    scene.add(directionalLight)

    // For demo purposes, create a simple human figure using a cylinder and sphere
    const bodyGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1, 32)
    const headGeometry = new THREE.SphereGeometry(0.2, 32, 32)
    const armGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.5, 32)
    const legGeometry = new THREE.CylinderGeometry(0.07, 0.07, 0.5, 32)

    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x7fb8c9 })

    // Create body parts
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial)
    scene.add(body)

    const head = new THREE.Mesh(headGeometry, bodyMaterial)
    head.position.y = 0.7
    scene.add(head)

    // Left arm
    const leftArm = new THREE.Mesh(armGeometry, bodyMaterial)
    leftArm.position.set(0.35, 0.2, 0)
    leftArm.rotation.z = Math.PI / 2
    scene.add(leftArm)

    // Right arm
    const rightArm = new THREE.Mesh(armGeometry, bodyMaterial)
    rightArm.position.set(-0.35, 0.2, 0)
    rightArm.rotation.z = -Math.PI / 2
    scene.add(rightArm)

    // Left leg
    const leftLeg = new THREE.Mesh(legGeometry, bodyMaterial)
    leftLeg.position.set(0.15, -0.7, 0)
    scene.add(leftLeg)

    // Right leg
    const rightLeg = new THREE.Mesh(legGeometry, bodyMaterial)
    rightLeg.position.set(-0.15, -0.7, 0)
    scene.add(rightLeg)

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.enableZoom = true

    // Handle click events on the body model
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    const onMouseClick = (event: MouseEvent) => {
      // Calculate mouse position in normalized device coordinates
      const rect = renderer.domElement.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

      // Update the raycaster
      raycaster.setFromCamera(mouse, camera)

      // Find intersections
      const bodyParts = [body, head, leftArm, rightArm, leftLeg, rightLeg]
      const intersects = raycaster.intersectObjects(bodyParts)

      if (intersects.length > 0) {
        // Create a marker at the intersection point
        const point = intersects[0].point
        setSelectedPoint({
          x: point.x,
          y: point.y,
          z: point.z,
        })

        // In a real app, we would trigger a symptom search based on body part
        console.log("Selected body part:", intersects[0].object)
      }
    }

    renderer.domElement.addEventListener("click", onMouseClick)

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }

    animate()
    setIsLoading(false)

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      window.removeEventListener("resize", handleResize)
      renderer.domElement.removeEventListener("click", onMouseClick)
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-400">Loading 3D body model...</p>
        </div>
      )}
      {selectedPoint && (
        <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
          <p className="font-medium">Selected Point</p>
          <p className="text-sm text-gray-500">Click on the body to select pain locations</p>
        </div>
      )}
    </div>
  )
}

