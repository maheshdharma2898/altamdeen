import { PROJECTS } from '@/lib/data';
import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
    title: 'Projects Portfolio | Al Tamdeen Construction Dubai',
    description: 'Explore Al Tamdeen Construction\'s portfolio of luxury residential villas, commercial offices, retail fit-outs, hospitality, and industrial projects in Dubai.',
};

export default function ProjectsPage() {
    return <ProjectsClient projects={PROJECTS} />;
}
