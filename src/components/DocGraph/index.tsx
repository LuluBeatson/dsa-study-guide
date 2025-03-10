import React, { useEffect, useState, useCallback, useRef } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import type { DocMetadata } from '@docusaurus/plugin-content-docs';
import './styles.css';

// Node type that matches the react-force-graph expected format
interface GraphNode {
    id: string;
    name: string;
    category?: string;
    url: string;
    val?: number;
    x?: number;
    y?: number;
    color?: string;
}

// Link type that matches the react-force-graph expected format
interface GraphLink {
    source: string | GraphNode;
    target: string | GraphNode;
    value?: number;
}

interface GraphData {
    nodes: GraphNode[];
    links: GraphLink[];
}

interface DocGraphProps {
    width?: number;
    height?: number;
}

// Custom hook to process docs data into graph format
function useDocsGraph() {
    const allDocsData = useAllDocsData();
    const { siteConfig } = useDocusaurusContext();
    const [processedData, setProcessedData] = useState<GraphData>({ nodes: [], links: [] });

    useEffect(() => {
        const nodes: GraphNode[] = [];
        const links: GraphLink[] = [];
        const nodeMap: Record<string, boolean> = {};

        // Process the default version's docs
        const defaultVersion = allDocsData.default?.versions[0];
        if (!defaultVersion?.docs) {
            console.error('No documentation found in the default version');
            return;
        }

        // First pass: Create nodes
        defaultVersion.docs.forEach(doc => {
            // Skip category pages
            if (doc.id.startsWith('/category/')) {
                return;
            }

            if (!nodeMap[doc.id]) {
                // Make the name more readable by capitalizing and replacing hyphens
                const name = doc.id.split('/').pop() || doc.id;
                const readableName = name
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');

                nodes.push({
                    id: doc.id,
                    name: readableName,
                    category: doc.id.split('/')[0],
                    url: doc.path,
                    val: 8,
                });
                nodeMap[doc.id] = true;
            }
        });

        // Second pass: Create links based on document hierarchy
        const docsByCategory = nodes.reduce((acc, node) => {
            const category = node.category;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(node);
            return acc;
        }, {} as Record<string, GraphNode[]>);

        // Create links between consecutive documents in the same category
        Object.values(docsByCategory).forEach(categoryNodes => {
            categoryNodes.sort((a, b) => a.id.localeCompare(b.id));
            for (let i = 0; i < categoryNodes.length - 1; i++) {
                links.push({
                    source: categoryNodes[i].id,
                    target: categoryNodes[i + 1].id,
                    value: 1,
                });
            }
        });

        // Log the final processed data once
        console.log('Processed Graph Data:', {
            nodeCount: nodes.length,
            linkCount: links.length,
            sampleNode: nodes[0],
            sampleLink: links[0],
            categories: Object.keys(docsByCategory)
        });

        setProcessedData({ nodes, links });
    }, [allDocsData]);

    return processedData;
}

export default function DocGraph({ width = 800, height = 600 }: DocGraphProps): React.ReactElement {
    const [graphData, setGraphData] = useState<GraphData>({ nodes: [], links: [] });
    const [highlightNodes, setHighlightNodes] = useState<Set<string>>(new Set<string>());
    const [highlightLinks, setHighlightLinks] = useState<Set<GraphLink>>(new Set<GraphLink>());
    const [hoverNode, setHoverNode] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const graphRef = useRef<any>(null);
    const { colorMode } = useColorMode();
    const isDarkTheme = colorMode === 'dark';
    const docsGraphData = useDocsGraph();

    // Function to handle node hover
    const handleNodeHover = useCallback((node: GraphNode | null) => {
        if (!node) {
            setHoverNode(null);
            setHighlightNodes(new Set());
            setHighlightLinks(new Set());
            return;
        }

        const nodeId = node.id;
        setHoverNode(nodeId);

        // Get connected nodes and links
        const connectedNodes = new Set<string>([nodeId]);
        const connectedLinks = new Set<GraphLink>();

        graphData.links.forEach(link => {
            const sourceId = typeof link.source === 'object' && link.source
                ? (link.source as GraphNode).id
                : (link.source as string);

            const targetId = typeof link.target === 'object' && link.target
                ? (link.target as GraphNode).id
                : (link.target as string);

            if (sourceId === nodeId || targetId === nodeId) {
                connectedNodes.add(sourceId);
                connectedNodes.add(targetId);
                connectedLinks.add(link);
            }
        });

        setHighlightNodes(connectedNodes);
        setHighlightLinks(connectedLinks);
    }, [graphData]);

    useEffect(() => {
        const fetchGraphData = async () => {
            setLoading(true);
            setError(null);

            try {
                if (!docsGraphData.nodes.length) {
                    throw new Error("No documentation nodes were found. There may be an issue with the documentation structure.");
                }

                setGraphData(docsGraphData);
            } catch (error) {
                console.error('Error generating graph data:', error);
                setError(error instanceof Error ? error.message : 'An unknown error occurred while generating the graph');
                setGraphData({ nodes: [], links: [] });
            } finally {
                setLoading(false);
            }
        };

        fetchGraphData();
    }, [docsGraphData]);

    // Function to add zoom controls
    const zoomIn = () => {
        if (graphRef.current) {
            const currentZoom = graphRef.current.zoom();
            graphRef.current.zoom(currentZoom * 1.2, 400); // 1.2x zoom with 400ms transition
        }
    };

    const zoomOut = () => {
        if (graphRef.current) {
            const currentZoom = graphRef.current.zoom();
            graphRef.current.zoom(currentZoom / 1.2, 400); // 1/1.2x zoom with 400ms transition
        }
    };

    const resetZoom = () => {
        if (graphRef.current) {
            graphRef.current.zoomToFit(400); // Fit all nodes in view with 400ms transition
        }
    };

    return (
        <div className="doc-graph-container">
            {error ? (
                <div className="graph-error">
                    <h3>Error Loading Graph</h3>
                    <p>{error}</p>
                    <button onClick={() => window.location.reload()}>Try Again</button>
                </div>
            ) : loading ? (
                <div className="graph-loading">Loading graph data...</div>
            ) : graphData.nodes.length > 0 ? (
                <>
                    <div className="graph-controls">
                        <button onClick={zoomIn} title="Zoom In">+</button>
                        <button onClick={resetZoom} title="Reset Zoom">⟲</button>
                        <button onClick={zoomOut} title="Zoom Out">−</button>
                    </div>
                    <ForceGraph2D
                        ref={graphRef}
                        graphData={graphData}
                        nodeLabel="name"
                        linkWidth={link => highlightLinks.has(link) ? 3 : 1}
                        linkColor={link => highlightLinks.has(link) ?
                            (isDarkTheme ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)') :
                            (isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)')}
                        nodeRelSize={6}
                        nodeVal={node => node.val}
                        nodeColor={node => {
                            const isHighlighted = hoverNode && highlightNodes.has(node.id);
                            if (isHighlighted) {
                                return '#ffcc00'; // Highlighted color
                            }

                            const categoryColors = {
                                'data-structures': '#ff6b6b',
                                'algorithms': '#4ecdc4',
                            };

                            // Return with reduced opacity if not highlighted and something is hovered
                            const color = categoryColors[node.category] || '#aaa';
                            if (hoverNode && !isHighlighted) {
                                return isDarkTheme ? `${color}66` : `${color}66`; // 40% opacity
                            }
                            return color;
                        }}
                        onNodeHover={handleNodeHover}
                        nodeCanvasObject={(node, ctx, globalScale) => {
                            const label = node.name;
                            const fontSize = 12 / globalScale;
                            ctx.font = `${fontSize}px Sans-Serif`;
                            const textWidth = ctx.measureText(label).width;
                            const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2);

                            // Determine if the node is highlighted
                            const isHighlighted = hoverNode && highlightNodes.has(node.id);

                            // Background color - use lighter color for highlighted nodes
                            const bgColor = isHighlighted
                                ? isDarkTheme ? 'rgba(255, 220, 0, 0.2)' : 'rgba(255, 220, 0, 0.2)'
                                : isDarkTheme ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)';

                            ctx.fillStyle = bgColor;
                            ctx.fillRect(
                                node.x - bckgDimensions[0] / 2,
                                node.y - bckgDimensions[1] / 2,
                                bckgDimensions[0],
                                bckgDimensions[1]
                            );

                            // Text color - more visible for highlighted nodes
                            const textColor = isDarkTheme
                                ? isHighlighted ? '#fff' : 'rgba(255, 255, 255, 0.8)'
                                : isHighlighted ? '#000' : 'rgba(0, 0, 0, 0.8)';

                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            ctx.fillStyle = textColor;
                            ctx.fillText(label, node.x, node.y);

                            // Draw a border for highlighted nodes
                            if (isHighlighted) {
                                ctx.strokeStyle = isDarkTheme ? '#ffcc00' : '#ffcc00';
                                ctx.lineWidth = 2 / globalScale;
                                ctx.strokeRect(
                                    node.x - bckgDimensions[0] / 2,
                                    node.y - bckgDimensions[1] / 2,
                                    bckgDimensions[0],
                                    bckgDimensions[1]
                                );
                            }
                        }}
                        onNodeClick={(node) => {
                            window.location.href = node.url;
                        }}
                        cooldownTicks={100}
                        linkDirectionalParticles={4}
                        linkDirectionalParticleWidth={link => highlightLinks.has(link) ? 2 : 0}
                        d3AlphaDecay={0.02}
                        d3VelocityDecay={0.3}
                        width={width}
                        height={height}
                    />
                </>
            ) : (
                <div className="graph-error">
                    <h3>No Data Available</h3>
                    <p>No graph data could be generated. This could be due to missing documentation or configuration issues.</p>
                    <button onClick={() => window.location.reload()}>Try Again</button>
                </div>
            )}
        </div>
    );
} 