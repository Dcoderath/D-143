import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  simulationVertexShader,
  simulationFragmentShader,
  renderVertexShader,
  renderFragmentShader,
} from "./shaders.js";
import "./Home.css";

const Home = () => {
  const mountRef = useRef(null);
  const mouseRef = useRef(new THREE.Vector2());
  const frameRef = useRef(0);
  const rendererRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = window.innerWidth * window.devicePixelRatio;
    const height = window.innerHeight * window.devicePixelRatio;

    const scene = new THREE.Scene();
    const simScene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    if (!rendererRef.current) {
      rendererRef.current = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
      });
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(rendererRef.current.domElement);
    }

    const renderer = rendererRef.current;

    const options = {
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      stencilBuffer: false,
      depthBuffer: false,
    };

    let rtA = new THREE.WebGLRenderTarget(width, height, options);
    let rtB = new THREE.WebGLRenderTarget(width, height, options);

    const simMaterial = new THREE.ShaderMaterial({
      uniforms: {
        textureA: { value: null },
        mouse: { value: mouseRef.current },
        resolution: { value: new THREE.Vector2(width, height) },
        time: { value: 0 },
        frame: { value: 0 },
      },
      vertexShader: simulationVertexShader,
      fragmentShader: simulationFragmentShader,
    });

    const renderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        textureA: { value: null },
        textureB: { value: null },
      },
      vertexShader: renderVertexShader,
      fragmentShader: renderFragmentShader,
      transparent: true,
    });

    const plane = new THREE.PlaneGeometry(2, 2);
    const simQuad = new THREE.Mesh(plane, simMaterial);
    const renderQuad = new THREE.Mesh(plane, renderMaterial);

    simScene.add(simQuad);
    scene.add(renderQuad);

    const createTextTexture = () => {
      const canvas = document.createElement("canvas");
      const scaleFactor = window.devicePixelRatio;
      canvas.width = window.innerWidth * scaleFactor;
      canvas.height = window.innerHeight * scaleFactor;
      const ctx = canvas.getContext("2d", { alpha: true });

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ff8001";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const fontSize = Math.max(50, Math.round(canvas.width * 0.16));
      ctx.font = `bold ${fontSize}px "Luckiest Guy", serif`;
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";

      const textBeforeOO = "NOTEB";
      const textOO = "OO";
      const textAfterOO = "KS";
      
      let trademarkSize = ctx.measureText(".").width * 1.7;

      const widthBeforeOO = ctx.measureText(textBeforeOO).width;
      const widthOO = ctx.measureText(textOO).width;
      const widthAfterOO = ctx.measureText(textAfterOO).width;
      const totalWidth = widthBeforeOO + widthOO + widthAfterOO;
      let x = (canvas.width - totalWidth) / 2;

      ctx.fillStyle = "#fefefe";
      ctx.fillText(textBeforeOO, x, canvas.height / 2);

      x += widthBeforeOO;
      ctx.fillStyle = "#000000";
      ctx.fillText(textOO, x, canvas.height / 2);

      x += widthOO;
      ctx.fillStyle = "#fefefe";
      ctx.fillText(textAfterOO, x, canvas.height / 2);

      ctx.font = `${trademarkSize}px "Luckiest Guy", serif`;
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillText("®", x + widthAfterOO, canvas.height / 2.6 - trademarkSize / 2);

      const textTexture = new THREE.CanvasTexture(canvas);
      textTexture.minFilter = THREE.LinearFilter;
      textTexture.magFilter = THREE.LinearFilter;
      textTexture.format = THREE.RGBAFormat;
      textTexture.needsUpdate = true;

      return textTexture;
    };

    let textTexture = createTextTexture();
    renderMaterial.uniforms.textureB.value = textTexture;

    const animate = () => {
      requestAnimationFrame(animate);
      frameRef.current++;
      simMaterial.uniforms.frame.value = frameRef.current;
      simMaterial.uniforms.time.value = performance.now() / 1000;
      simMaterial.uniforms.textureA.value = rtA.texture;

      renderer.setRenderTarget(rtB);
      renderer.render(simScene, camera);

      renderMaterial.uniforms.textureA.value = rtB.texture;
      renderMaterial.uniforms.textureB.value = textTexture;

      renderer.setRenderTarget(null);
      renderer.render(scene, camera);

      let temp = rtA;
      rtA = rtB;
      rtB = temp;
    };

    animate();

    const handlePointerMove = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      mouseRef.current.set(
        x * window.devicePixelRatio,
        (window.innerHeight - y) * window.devicePixelRatio
      );
      simMaterial.uniforms.mouse.value = mouseRef.current;
    };

    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("touchmove", handlePointerMove);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      if (renderer) renderer.dispose();
      if (rtA) rtA.dispose();
      if (rtB) rtB.dispose();
      if (mountRef.current) mountRef.current.innerHTML = "";
    };
  }, []);

  return <div className="canvas-container" ref={mountRef} style={{ position: "relative", zIndex: 0 }}></div>;
};

export default Home;