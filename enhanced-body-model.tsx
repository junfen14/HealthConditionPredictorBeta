"use client"

import { useRef, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import * as THREE from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"

interface EnhancedBodyModelProps {
  onSelectBodyPart: (part: string) => void
}

const BODY_PARTS = {
  HEAD: "Head",
  NECK: "Neck",
  SHOULDER: "Shoulder",
  CHEST: "Chest",
  BACK: "Back",
  ABDOMEN: "Abdomen",
  ARM: "Upper Arm",
  FOREARM: "Forearm",
  HAND: "Hand",
  HIP: "Hip",
  BUTT: "Butt",
  UPPER_LEG: "Upper Leg",
  LOWER_LEG: "Lower Leg",
  FOOT: "Foot",
}

export default function EnhancedBodyModel({ onSelectBodyPart }: EnhancedBodyModelProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hoveredPart, setHoveredPart] = useState<string | null>(null)
  const [selectedPart, setSelectedPart] = useState<string | null>(null)
  const [darkMode, setDarkMode] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Detect dark mode from document class
    const checkDarkMode = () => {
      setDarkMode(document.documentElement.classList.contains("dark"))
    }

    checkDarkMode()

    // Create an observer to watch for class changes on the html element
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    let renderer: THREE.WebGLRenderer
    try {
      const canvas = document.createElement("canvas")
      const context =
        canvas.getContext("webgl2", { failIfMajorPerformanceCaveat: true }) ||
        canvas.getContext("webgl", { failIfMajorPerformanceCaveat: true })

      if (!context) {
        throw new Error("WebGL not supported")
      }

      renderer = new THREE.WebGLRenderer({
        canvas,
        context: context as WebGLRenderingContext,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      })

      // Force MEDIUM precision if HIGH is not available
      const gl = renderer.getContext()
      const vertexShaderPrecisionFormat = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT)
      const fragmentShaderPrecisionFormat = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT)

      if (vertexShaderPrecisionFormat && fragmentShaderPrecisionFormat) {
        if (vertexShaderPrecisionFormat.precision === 0 || fragmentShaderPrecisionFormat.precision === 0) {
          renderer.getContext().getExtension("WEBGL_color_buffer_float")
          THREE.ShaderChunk.tonemapping_pars_fragment = THREE.ShaderChunk.tonemapping_pars_fragment.replace(
            "mediump",
            "lowp",
          )
        }
      }
    } catch (error) {
      console.error("WebGL initialization failed:", error)
      const warning = document.createElement("div")
      warning.textContent = "WebGL is not supported or has been disabled in your browser."
      containerRef.current?.appendChild(warning)
      setIsLoading(false)
      return
    }

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const bgColor = darkMode ? 0x1f2937 : 0xf4f4f5 // darker grey for dark mode
    scene.background = new THREE.Color(bgColor)

    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.set(0, 0, 5)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)

    // Natural muscle fiber material for the body (tan-pink-red blend)
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0xe5b299, // Tan-pink color for a more natural look
      metalness: 0.1,
      roughness: 0.8,
    })

    // Bright green highlight material for hover
    const highlightMaterial = new THREE.MeshStandardMaterial({
      color: 0x38a169, // Green color
      metalness: 0.1,
      roughness: 0.5,
      emissive: 0x48bb78,
      emissiveIntensity: 0.5,
    })

    // Selected part material (brighter green)
    const selectedMaterial = new THREE.MeshStandardMaterial({
      color: 0x38a169, // Green color
      metalness: 0.1,
      roughness: 0.5,
      emissive: 0x48bb78,
      emissiveIntensity: 0.8,
    })

    const bodyParts: { [key: string]: THREE.Mesh } = {}

    // Head
    const headGeometry = new THREE.SphereGeometry(0.4, 32, 32)
    const head = new THREE.Mesh(headGeometry, bodyMaterial)
    head.position.y = 1.6
    head.userData = { name: BODY_PARTS.HEAD }
    scene.add(head)
    bodyParts.head = head

    // Neck
    const neckGeometry = new THREE.CylinderGeometry(0.15, 0.2, 0.3, 32)
    const neck = new THREE.Mesh(neckGeometry, bodyMaterial)
    neck.position.y = 1.3
    neck.userData = { name: BODY_PARTS.NECK }
    scene.add(neck)
    bodyParts.neck = neck

    // Torso (split into chest and abdomen)
    const chestGeometry = new THREE.CylinderGeometry(0.5, 0.45, 0.6, 32)
    const chest = new THREE.Mesh(chestGeometry, bodyMaterial)
    chest.position.y = 0.9
    chest.userData = { name: BODY_PARTS.CHEST }
    scene.add(chest)
    bodyParts.chest = chest

    const abdomenGeometry = new THREE.CylinderGeometry(0.45, 0.4, 0.6, 32)
    const abdomen = new THREE.Mesh(abdomenGeometry, bodyMaterial)
    abdomen.position.y = 0.3
    abdomen.userData = { name: BODY_PARTS.ABDOMEN }
    scene.add(abdomen)
    bodyParts.abdomen = abdomen

    // Back
    const backGeometry = new THREE.BoxGeometry(0.8, 1.2, 0.1)
    const back = new THREE.Mesh(backGeometry, bodyMaterial)
    back.position.set(0, 0.6, -0.3)
    back.userData = { name: BODY_PARTS.BACK }
    scene.add(back)
    bodyParts.back = back

    // Butt
    const buttGeometry = new THREE.SphereGeometry(0.3, 32, 32)
    const butt = new THREE.Mesh(buttGeometry, bodyMaterial)
    butt.position.set(0, -0.1, -0.3)
    butt.scale.set(1, 0.8, 0.6)
    butt.userData = { name: BODY_PARTS.BUTT }
    scene.add(butt)
    bodyParts.butt = butt

    // Shoulders
    const shoulderGeometry = new THREE.SphereGeometry(0.2, 32, 32)
    const leftShoulder = new THREE.Mesh(shoulderGeometry, bodyMaterial)
    leftShoulder.position.set(0.6, 1.1, 0)
    leftShoulder.userData = { name: BODY_PARTS.SHOULDER }
    scene.add(leftShoulder)
    bodyParts.leftShoulder = leftShoulder

    const rightShoulder = new THREE.Mesh(shoulderGeometry, bodyMaterial)
    rightShoulder.position.set(-0.6, 1.1, 0)
    rightShoulder.userData = { name: BODY_PARTS.SHOULDER }
    scene.add(rightShoulder)
    bodyParts.rightShoulder = rightShoulder

    // Arms
    const upperArmGeometry = new THREE.CylinderGeometry(0.15, 0.13, 0.5, 32)
    const leftUpperArm = new THREE.Mesh(upperArmGeometry, bodyMaterial)
    leftUpperArm.position.set(0.8, 0.85, 0)
    leftUpperArm.rotation.z = Math.PI / 8
    leftUpperArm.userData = { name: BODY_PARTS.ARM }
    scene.add(leftUpperArm)
    bodyParts.leftUpperArm = leftUpperArm

    const rightUpperArm = new THREE.Mesh(upperArmGeometry, bodyMaterial)
    rightUpperArm.position.set(-0.8, 0.85, 0)
    rightUpperArm.rotation.z = -Math.PI / 8
    rightUpperArm.userData = { name: BODY_PARTS.ARM }
    scene.add(rightUpperArm)
    bodyParts.rightUpperArm = rightUpperArm

    // Forearms
    const forearmGeometry = new THREE.CylinderGeometry(0.13, 0.1, 0.5, 32)
    const leftForearm = new THREE.Mesh(forearmGeometry, bodyMaterial)
    leftForearm.position.set(1.0, 0.5, 0)
    leftForearm.rotation.z = Math.PI / 6
    leftForearm.userData = { name: BODY_PARTS.FOREARM }
    scene.add(leftForearm)
    bodyParts.leftForearm = leftForearm

    const rightForearm = new THREE.Mesh(forearmGeometry, bodyMaterial)
    rightForearm.position.set(-1.0, 0.5, 0)
    rightForearm.rotation.z = -Math.PI / 6
    rightForearm.userData = { name: BODY_PARTS.FOREARM }
    scene.add(rightForearm)
    bodyParts.rightForearm = rightForearm

    // Hands
    const handGeometry = new THREE.SphereGeometry(0.12, 32, 32)
    const leftHand = new THREE.Mesh(handGeometry, bodyMaterial)
    leftHand.position.set(1.2, 0.25, 0)
    leftHand.userData = { name: BODY_PARTS.HAND }
    scene.add(leftHand)
    bodyParts.leftHand = leftHand

    const rightHand = new THREE.Mesh(handGeometry, bodyMaterial)
    rightHand.position.set(-1.2, 0.25, 0)
    rightHand.userData = { name: BODY_PARTS.HAND }
    scene.add(rightHand)
    bodyParts.rightHand = rightHand

    // Hips
    const hipGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 32)
    const hips = new THREE.Mesh(hipGeometry, bodyMaterial)
    hips.position.y = -0.15
    hips.userData = { name: BODY_PARTS.HIP }
    scene.add(hips)
    bodyParts.hips = hips

    // Upper Legs
    const upperLegGeometry = new THREE.CylinderGeometry(0.2, 0.18, 0.7, 32)
    const leftUpperLeg = new THREE.Mesh(upperLegGeometry, bodyMaterial)
    leftUpperLeg.position.set(0.25, -0.6, 0)
    leftUpperLeg.userData = { name: BODY_PARTS.UPPER_LEG }
    scene.add(leftUpperLeg)
    bodyParts.leftUpperLeg = leftUpperLeg

    const rightUpperLeg = new THREE.Mesh(upperLegGeometry, bodyMaterial)
    rightUpperLeg.position.set(-0.25, -0.6, 0)
    rightUpperLeg.userData = { name: BODY_PARTS.UPPER_LEG }
    scene.add(rightUpperLeg)
    bodyParts.rightUpperLeg = rightUpperLeg

    // Lower Legs
    const lowerLegGeometry = new THREE.CylinderGeometry(0.18, 0.15, 0.7, 32)
    const leftLowerLeg = new THREE.Mesh(lowerLegGeometry, bodyMaterial)
    leftLowerLeg.position.set(0.25, -1.3, 0)
    leftLowerLeg.userData = { name: BODY_PARTS.LOWER_LEG }
    scene.add(leftLowerLeg)
    bodyParts.leftLowerLeg = leftLowerLeg

    const rightLowerLeg = new THREE.Mesh(lowerLegGeometry, bodyMaterial)
    rightLowerLeg.position.set(-0.25, -1.3, 0)
    rightLowerLeg.userData = { name: BODY_PARTS.LOWER_LEG }
    scene.add(rightLowerLeg)
    bodyParts.rightLowerLeg = rightLowerLeg

    // Feet
    const footGeometry = new THREE.BoxGeometry(0.2, 0.1, 0.3)
    const leftFoot = new THREE.Mesh(footGeometry, bodyMaterial)
    leftFoot.position.set(0.25, -1.7, 0.1)
    leftFoot.userData = { name: BODY_PARTS.FOOT }
    scene.add(leftFoot)
    bodyParts.leftFoot = leftFoot

    const rightFoot = new THREE.Mesh(footGeometry, bodyMaterial)
    rightFoot.position.set(-0.25, -1.7, 0.1)
    rightFoot.userData = { name: BODY_PARTS.FOOT }
    scene.add(rightFoot)
    bodyParts.rightFoot = rightFoot

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.minDistance = 3
    controls.maxDistance = 10

    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    let hoveredObject: THREE.Object3D | null = null

    const handleMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)

      const intersects = raycaster.intersectObjects(Object.values(bodyParts))

      // Reset previously hovered object if it's not the selected part
      if (hoveredObject && hoveredObject instanceof THREE.Mesh) {
        if (selectedPart !== hoveredObject.userData.name) {
          hoveredObject.material = bodyMaterial
        }
      }

      if (intersects.length > 0) {
        const intersect = intersects[0]
        hoveredObject = intersect.object

        if (hoveredObject instanceof THREE.Mesh) {
          // Only highlight if not already selected
          if (selectedPart !== hoveredObject.userData.name) {
            hoveredObject.material = highlightMaterial
          }
          setHoveredPart(hoveredObject.userData.name)
        }
      } else {
        hoveredObject = null
        setHoveredPart(null)
      }
    }

    const handleClick = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)

      const intersects = raycaster.intersectObjects(Object.values(bodyParts))

      if (intersects.length > 0) {
        const intersect = intersects[0]
        const bodyPart = intersect.object.userData.name

        // Reset previously selected part
        if (selectedPart) {
          Object.values(bodyParts).forEach((part) => {
            if (part.userData.name === selectedPart) {
              part.material = bodyMaterial
            }
          })
        }

        // Set new selected part
        if (intersect.object instanceof THREE.Mesh) {
          intersect.object.material = selectedMaterial
          setSelectedPart(bodyPart)
        }

        onSelectBodyPart(bodyPart)
        router.push(`/body-part/${bodyPart.toLowerCase().replace(/\s+/g, "-")}`)
      }
    }

    renderer.domElement.addEventListener("mousemove", handleMouseMove)
    renderer.domElement.addEventListener("click", handleClick)

    const handleResize = () => {
      if (!containerRef.current) return

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    const animate = () => {
      try {
        requestAnimationFrame(animate)
        controls.update()
        renderer.render(scene, camera)
      } catch (error) {
        console.error("Render loop error:", error)
        setIsLoading(false)
      }
    }

    animate()
    setIsLoading(false)

    return () => {
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
      try {
        renderer.dispose()
        scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose()
            if (object.material instanceof THREE.Material) {
              object.material.dispose()
            } else if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose())
            }
          }
        })
      } catch (error) {
        console.error("Cleanup error:", error)
      }
      renderer.domElement.removeEventListener("mousemove", handleMouseMove)
      renderer.domElement.removeEventListener("click", handleClick)
      window.removeEventListener("resize", handleResize)
    }
  }, [onSelectBodyPart, router, selectedPart, darkMode])

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-400">Loading 3D body model...</p>
        </div>
      )}
      <div className="absolute bottom-4 left-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg text-sm dark:text-white">
        Click on a body part to view possible symptoms
      </div>
      {hoveredPart && (
        <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-lg text-sm pointer-events-none dark:text-white">
          {hoveredPart}
        </div>
      )}
    </div>
  )
}

