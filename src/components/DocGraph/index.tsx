import React, { useEffect, useState, useCallback, useRef } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './styles.css';

// Node type that matches the react-force-graph expected format
interface GraphNode {
    id: string;
    name: string;
    category?: string; // Using category instead of group for classification
    url: string;
    val?: number; // Size of the node
    x?: number;
    y?: number;
    color?: string;
}

// Link type that matches the react-force-graph expected format
interface GraphLink {
    source: string | GraphNode;
    target: string | GraphNode;
    value?: number; // Strength of the link
}

interface GraphData {
    nodes: GraphNode[];
    links: GraphLink[];
}

interface DocGraphProps {
    width?: number;
    height?: number;
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
    const { siteConfig } = useDocusaurusContext();
    const baseUrl = siteConfig.baseUrl;

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
        // Function to fetch or generate graph data
        const fetchGraphData = async () => {
            setLoading(true);
            setError(null);

            try {
                // Since we can't directly access the file system or parse content in the browser,
                // we'll create a graph based on the known structure of the docs

                // Define the docs items in your project with a flattened structure
                interface DocItem {
                    id: string;
                    label: string;
                    url: string; // Direct URL to the document
                    category?: string; // Optional category for classification
                    tags?: string[]; // Tags for additional grouping/filtering
                    links?: string[]; // IDs of other docs this links to
                }

                // This should match your actual docs structure - now flattened
                const docItems: DocItem[] = [
                    // Data Structures
                    {
                        id: 'arrays',
                        label: 'Arrays',
                        url: `${baseUrl}docs/data-structures/arrays`,
                        category: 'data-structures',
                        tags: ['basics', 'fundamental'],
                        links: ['sorting', 'searching']
                    },
                    {
                        id: 'linked-lists',
                        label: 'Linked Lists',
                        url: `${baseUrl}docs/data-structures/linked-lists`,
                        category: 'data-structures',
                        tags: ['fundamental', 'pointers'],
                        links: ['stacks', 'queues']
                    },
                    {
                        id: 'stacks',
                        label: 'Stacks',
                        url: `${baseUrl}docs/data-structures/stacks`,
                        category: 'data-structures',
                        tags: ['lifo'],
                        links: ['recursion']
                    },
                    {
                        id: 'queues',
                        label: 'Queues',
                        url: `${baseUrl}docs/data-structures/queues`,
                        category: 'data-structures',
                        tags: ['fifo'],
                        links: ['graph-algorithms']
                    },
                    {
                        id: 'trees',
                        label: 'Trees',
                        url: `${baseUrl}docs/data-structures/trees`,
                        category: 'data-structures',
                        tags: ['hierarchical', 'advanced'],
                        links: ['recursion', 'heaps']
                    },
                    {
                        id: 'graphs',
                        label: 'Graphs',
                        url: `${baseUrl}docs/data-structures/graphs`,
                        category: 'data-structures',
                        tags: ['advanced', 'complex'],
                        links: ['graph-algorithms', 'trees']
                    },
                    {
                        id: 'hash-tables',
                        label: 'Hash Tables',
                        url: `${baseUrl}docs/data-structures/hash-tables`,
                        category: 'data-structures',
                        tags: ['hashing', 'lookup'],
                        links: ['searching']
                    },
                    {
                        id: 'heaps',
                        label: 'Heaps',
                        url: `${baseUrl}docs/data-structures/heaps`,
                        category: 'data-structures',
                        tags: ['priority', 'tree-based']
                    },

                    // Algorithms
                    {
                        id: 'sorting',
                        label: 'Sorting',
                        url: `${baseUrl}docs/algorithms/sorting`,
                        category: 'algorithms',
                        tags: ['comparison', 'ordering']
                    },
                    {
                        id: 'searching',
                        label: 'Searching',
                        url: `${baseUrl}docs/algorithms/searching`,
                        category: 'algorithms',
                        tags: ['lookup', 'retrieval']
                    },
                    {
                        id: 'recursion',
                        label: 'Recursion',
                        url: `${baseUrl}docs/algorithms/recursion`,
                        category: 'algorithms',
                        tags: ['technique', 'fundamental'],
                        links: ['sorting', 'backtracking', 'dynamic-programming']
                    },
                    {
                        id: 'dynamic-programming',
                        label: 'Dynamic Programming',
                        url: `${baseUrl}docs/algorithms/dynamic-programming`,
                        category: 'algorithms',
                        tags: ['optimization', 'advanced'],
                        links: ['greedy']
                    },
                    {
                        id: 'greedy',
                        label: 'Greedy Algorithms',
                        url: `${baseUrl}docs/algorithms/greedy`,
                        category: 'algorithms',
                        tags: ['optimization', 'local-optimal']
                    },
                    {
                        id: 'backtracking',
                        label: 'Backtracking',
                        url: `${baseUrl}docs/algorithms/backtracking`,
                        category: 'algorithms',
                        tags: ['search', 'combination'],
                        links: ['greedy']
                    },
                    {
                        id: 'graph-algorithms',
                        label: 'Graph Algorithms',
                        url: `${baseUrl}docs/algorithms/graph-algorithms`,
                        category: 'algorithms',
                        tags: ['pathfinding', 'traversal']
                    },
                ];

                // Build nodes and links from the flattened structure
                const nodes: GraphNode[] = [];
                const links: GraphLink[] = [];
                const nodeMap: Record<string, boolean> = {};

                // Create nodes from doc items
                docItems.forEach(item => {
                    // Only add the node if it doesn't already exist
                    if (!nodeMap[item.id]) {
                        nodes.push({
                            id: item.id,
                            name: item.label,
                            category: item.category,
                            url: item.url,
                            val: 8,
                        });
                        nodeMap[item.id] = true;
                    }

                    // Add links if defined
                    if (item.links) {
                        item.links.forEach(targetId => {
                            links.push({
                                source: item.id,
                                target: targetId,
                                value: 2,
                            });
                        });
                    }
                });

                if (nodes.length === 0) {
                    throw new Error("No nodes were created. There may be an issue with the documentation structure.");
                }

                setGraphData({ nodes, links });
            } catch (error) {
                console.error('Error generating graph data:', error);
                setError(error instanceof Error ? error.message : 'An unknown error occurred while generating the graph');
                setGraphData({ nodes: [], links: [] });
            } finally {
                setLoading(false);
            }
        };

        fetchGraphData();
    }, [baseUrl]);

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