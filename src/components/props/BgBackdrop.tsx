"use client";
import { useEffect, useRef } from "react";

const BgBackdrop = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (!canvasElement) return;
    const contextElement = canvasElement.getContext("2d");
    if (!contextElement) return;
    // From this point, both are guaranteed to exist
    const canvas: HTMLCanvasElement = canvasElement;
    const context: CanvasRenderingContext2D = contextElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    class Circle {
      x: number;
      y: number;
      dx: number;
      dy: number;
      radius: number;
      color: string;
      constructor(
        x: number,
        y: number,
        dx: number,
        dy: number,
        radius: number,
        color: string
      ){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
      }
      draw = () => {
        context.beginPath();
        context.arc(
          this.x,
          this.y,
          this.radius,
          0,
          Math.PI * 2
        );
        context.lineWidth = 2;
        context.fillStyle = this.color;
        context.fill();
      };
      update = () => {
        if (
          this.x + this.radius > canvas.width ||
          this.x - this.radius < 0
        ) {
          this.dx = -this.dx;
        }
        if (
          this.y + this.radius > canvas.height ||
          this.y - this.radius < 0
        ) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      };
    }
    const colorPalette = [
      "#FF7700",
      "#14DA65",
      "#D428FF",
      "#FF2F32",
      "#9AC81B",
    ];
    const circleArray: Circle[] = [];
    colorPalette.forEach((color) => {
      const radius = 300;
      const x = Math.random() * (window.innerWidth - radius * 2) + radius;
      const y = Math.random() * (window.innerHeight - radius * 2) + radius;
      const dx = (Math.random() - 0.5) * 12;
      const dy = (Math.random() - 0.5) * 12;
      circleArray.push(
        new Circle(
          x,
          y,
          dx,
          dy,
          radius,
          color
        )
      );
    });
    let animationFrameId: number;
    const animate = () => {
      context.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );
      circleArray.forEach((circle) => {
        circle.update();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);
  return (
    <canvas ref={canvasRef} className="fixed inset-0 -z-1 h-full w-full"/>
  );
};

export default BgBackdrop;