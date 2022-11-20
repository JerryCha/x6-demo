import React, { useLayoutEffect, useRef } from "react";
import { Graph } from "@antv/x6";

const data = {
  nodes: [
    {
      id: "node1",
      shape: "rect", // 使用 rect 渲染
      x: 100,
      y: 200,
      width: 80,
      height: 40,
      label: "hello",
    },
    {
      id: "node2",
      shape: "ellipse", // 使用 ellipse 渲染
      x: 300,
      y: 200,
      width: 80,
      height: 40,
      label: "world",
    },
  ],
  edges: [
    {
      source: "node1",
      target: "node2",
    },
  ],
};

export const SimpleStory = () => {
  const ref = useRef<HTMLDivElement>(null);

  const x6 = useRef<any>(null);

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }
    const bounding = ref.current.getBoundingClientRect();
    const graph = new Graph({
      container: ref.current,
      width: bounding.width,
      height: bounding.height,
      grid: {
        size: 10,
        visible: true,
      },
    });
    graph.fromJSON(data);
    return () => graph.dispose();
  }, []);

  return <div ref={ref} style={{ width: "100%", height: "100%" }} />;
};
