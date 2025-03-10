import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import DocGraph from '../components/DocGraph';
import styles from './graph.module.css';

export default function GraphPage(): React.ReactElement {
    const [windowDimensions, setWindowDimensions] = useState({
        width: 800,
        height: 600,
    });

    useEffect(() => {
        function handleResize() {
            const container = document.querySelector(`.${styles.graphContainer}`);
            if (container) {
                setWindowDimensions({
                    width: container.clientWidth,
                    height: Math.max(window.innerHeight * 0.7, 600),
                });
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Layout
            title="Knowledge Graph"
            description="Explore the connections between topics in the DSA Study Guide"
        >
            <header className={styles.graphHeader}>
                <h1>Knowledge Graph</h1>
                <p>
                    Explore the connections between different topics in the Data Structures and Algorithms Study Guide.
                    Click on any node to navigate to that topic.
                </p>
            </header>
            <main className={styles.graphContainer}>
                <DocGraph width={windowDimensions.width} height={windowDimensions.height} />
            </main>
        </Layout>
    );
} 