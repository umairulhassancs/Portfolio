'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as const

const faqs = [
  {
    question: 'What roles are you currently looking for?',
    answer:
      'I am currently looking for full-time Full-Stack, Web, and Mobile Developer opportunities, particularly roles involving TypeScript, React, Next.js, React Native, Node.js/Python backend APIs, and applied AI systems.',
  },
  {
    question: 'How do you approach fine-tuning and deploying custom AI models?',
    answer:
      'I train and fine-tune deep learning models (such as Vision Transformers and PyTorch architectures) using curated domain datasets, optimize them for inference, and wrap them in asynchronous FastAPI services to deliver low-latency inference directly into web or React Native mobile applications.',
  },
  {
    question: 'Can you handle both database architecture and frontend design?',
    answer:
      'Yes. I enjoy end-to-end development: designing normalized PostgreSQL/MongoDB schemas and Prisma migrations, structuring secure JWT/session authentication, and building responsive, accessible interfaces with Next.js, Tailwind CSS, and Framer Motion.',
  },
  {
    question: 'How do you coordinate with teams across global time zones?',
    answer:
      'I am based in Pakistan (UTC+5) and regularly operate with high overlap across US (EST/PST), European (GMT/CET), and Asia-Pacific working hours. I rely on transparent async documentation, daily syncs, and clear Git pull request workflows to ensure continuous delivery.',
  },
  {
    question: 'What guarantees do you provide on code quality and handoff?',
    answer:
      'All delivered software includes clean modular TypeScript architectures, strict Zod validation at network boundaries, comprehensive automated unit and E2E test suites (Vitest/Playwright), and thorough technical READMEs for seamless internal handover.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 sm:py-32 relative border-t border-border/80 bg-surface/30">
      <div className="max-w-[960px] mx-auto px-3 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-16">
          <SectionHeading
            number="07"
            title="Technical & Collaboration FAQ."
            className="mb-2"
          />
          <p className="font-sans text-muted-foreground text-xs sm:text-base max-w-lg leading-relaxed">
            Direct answers on architecture philosophy, model integration, and engagement options.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={faq.question}
                className="rounded-2xl bg-surface border border-border overflow-hidden transition-colors hover:border-accent/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans font-bold text-base sm:text-lg text-foreground/90 hover:text-accent transition-colors">
                    {faq.question}
                  </span>
                  <div className="shrink-0 p-2 rounded-xl bg-background border border-border text-accent">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm font-sans text-muted-foreground leading-relaxed border-t border-border/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
