import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { ProjectDetailClient } from './ProjectDetailClient'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return {
      title: 'Project Not Found | Umair Ul Hassan',
    }
  }

  return {
    title: `${project.title} — Technical Case Study & Architecture`,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  // Find next project for seamless cycling
  const currentIndex = projects.findIndex((p) => p.id === id)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <ProjectDetailClient 
      project={project} 
      nextProject={nextProject}
      currentIndex={currentIndex}
      totalProjects={projects.length}
    />
  )
}
