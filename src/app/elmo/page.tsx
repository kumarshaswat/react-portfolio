"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  ChevronUp,
  Zap,
  Target,
  Users,
  TrendingUp,
  Brain,
  Database,
  Cpu,
} from "lucide-react";

export default function CaseStudyPage() {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const metrics = [
    { label: "Content Redundancy Reduction", value: 85, target: 70, unit: "%" },
    { label: "Factual Accuracy Rate", value: 94, target: 90, unit: "%" },
    { label: "Response Time", value: 3.4, target: 5.0, unit: "s" },
    { label: "English Consistency", value: 98, target: 95, unit: "%" },
  ];

  const technologies = [
    "DeepSeek R1:14b",
    "Ollama API",
    "RAG Architecture",
    "Pinecone Vector DB",
    "AWS Lambda",
    "Prompt Engineering",
    "NewsAPI",
    "Google Search API",
  ];

  const achievements = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Performance",
      description: "32% faster than target response time",
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Accuracy",
      description: "94% factual accuracy in generated content",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "User Impact",
      description: "78% improvement in comprehension scores",
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Efficiency",
      description: "23 minutes saved per user session",
    },
  ];

  return (
    <div className="min-h-screen bg-[#161616] text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF7E77]/20 via-[#161616] to-[#FF7E77]/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,126,119,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,126,119,0.08),transparent_50%)]"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF7E77]/20 bg-[#FF7E77]/10 backdrop-blur-sm">
              <Brain className="h-4 w-4 text-[#FF7E77]" />
              <span className="text-sm font-medium text-slate-100">
                AI Engineer Case Study
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="font-playfair text-6xl md:text-8xl font-bold text-balance text-slate-100">
                ELMO Project
              </h1>
              <p className="text-xl md:text-2xl text-pretty max-w-4xl mx-auto leading-relaxed text-slate-400">
                Revolutionizing News Consumption Through Advanced AI-Powered
                Content Generation & Intelligent Aggregation
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <Button
                size="lg"
                className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300 bg-[#FF7E77] hover:bg-[#FF7E77]/90 text-white border-0"
                onClick={() =>
                  window.open(
                    "https://github.com/Sharktail001/ELMO-Capstone-Proj",
                    "_blank"
                  )
                }
              >
                <Github className="h-5 w-5" />
                View Repository
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-playfair text-4xl font-bold text-slate-100">
                  Executive Summary
                </h2>
                <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#FF7E77] to-[#FF9F9A]"></div>
              </div>

              <p className="text-lg leading-relaxed text-slate-400">
                As the AI Engineer for ELMO, I architected and implemented an
                intelligent news aggregation system that fundamentally
                transformed information consumption patterns. By seamlessly
                integrating cutting-edge language models with real-time data
                retrieval mechanisms, I developed a sophisticated AI pipeline
                capable of generating contextually relevant, non-redundant news
                content at scale.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-700 bg-slate-800/50">
                    <Badge
                      variant="outline"
                      className="border-[#FF7E77]/30 text-slate-100"
                    >
                      Role
                    </Badge>
                    <span className="font-medium text-slate-100">
                      AI Engineer
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-700 bg-slate-800/50">
                    <Badge
                      variant="outline"
                      className="border-[#FF7E77]/30 text-slate-100"
                    >
                      Duration
                    </Badge>
                    <span className="font-medium text-slate-100">
                      Jan - May 2025
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-700 bg-slate-800/50">
                    <Badge
                      variant="outline"
                      className="border-[#FF7E77]/30 text-slate-100"
                    >
                      Team
                    </Badge>
                    <span className="font-medium text-slate-100">
                      5 members
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-700 bg-slate-800/50">
                    <Badge
                      variant="outline"
                      className="border-[#FF7E77]/30 text-slate-100"
                    >
                      Institution
                    </Badge>
                    <span className="font-medium text-slate-100">
                      UT Dallas
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-slate-800/50 border-slate-700 text-slate-100"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-[#FF7E77]/10 group-hover:bg-[#FF7E77]/20 transition-colors text-[#FF7E77]">
                        {achievement.icon}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg text-slate-100">
                          {achievement.title}
                        </h3>
                        <p className="text-slate-400">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 px-4 bg-slate-800/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair text-4xl font-bold text-slate-100">
              Performance Metrics
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto bg-gradient-to-r from-[#FF7E77] to-[#FF9F9A]"></div>
            <p className="text-lg max-w-2xl mx-auto text-slate-400">
              Quantifiable results demonstrating the impact and effectiveness of
              the AI engineering solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-xl transition-all duration-300 backdrop-blur-sm group bg-slate-800/50 border-slate-700"
              >
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold group-hover:scale-110 transition-transform duration-300 text-[#FF7E77]">
                      {metric.value}
                      <span className="text-2xl">{metric.unit}</span>
                    </div>
                    <h3 className="text-sm font-medium uppercase tracking-wider text-slate-400">
                      {metric.label}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <Progress
                      value={(metric.value / (metric.target * 1.2)) * 100}
                      className="h-3"
                    />
                    <p className="text-xs text-slate-400">
                      Target: {metric.target}
                      {metric.unit}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair text-4xl font-bold text-slate-100">
              Technical Implementation
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto bg-gradient-to-r from-[#FF7E77] to-[#FF9F9A]"></div>
          </div>

          <div className="space-y-12">
            {/* AI Architecture Section */}
            <Card className="backdrop-blur-sm bg-slate-800/50 border-slate-700 text-slate-100">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3">
                  <Cpu className="h-6 w-6 text-[#FF7E77]" />
                  <div>
                    <CardTitle className="text-2xl text-slate-100">
                      AI Architecture
                    </CardTitle>
                    <CardDescription className="text-base mt-2 text-slate-400">
                      Integrated DeepSeek R1:14b with custom deployment and
                      enhancement pipeline
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="p-6 rounded-xl font-mono text-sm overflow-x-auto border border-slate-700 bg-slate-700/50">
                  <pre className="text-slate-400">{`┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   DeepSeek R1   │    │   Ollama API     │    │  Custom RAG     │
│   (14B params)  │◄──►│   (Local Host)   │◄──►│   Framework     │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         ▲                        ▲                       ▲
         │                        │                       │
         ▼                        ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│  Google Search  │    │   NewsAPI        │    │   Pinecone      │
│      API        │    │   Integration    │    │ Vector Store    │
└─────────────────┘    └──────────────────┘    └─────────────────┘`}</pre>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-6 bg-[#FF7E77]/5 border-[#FF7E77]/20">
                    <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
                      <Target className="h-5 w-5 text-[#FF7E77]" />
                      <span className="text-slate-100">Key Achievements</span>
                    </h4>
                    <ul className="space-y-3 text-slate-400">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#FF7E77]"></div>
                        Reduced hallucination rate from 23% to &lt;5%
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#FF7E77]"></div>
                        Achieved 98% English-only response rate
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#FF7E77]"></div>
                        Maintained 94% factual accuracy
                      </li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-[#FF9F9A]/5 border-[#FF9F9A]/20">
                    <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-[#FF9F9A]" />
                      <span className="text-slate-100">Performance Impact</span>
                    </h4>
                    <ul className="space-y-3 text-slate-400">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#FF9F9A]"></div>
                        99.2% API uptime during development
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#FF9F9A]"></div>
                        80% reduction in local resource requirements
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#FF9F9A]"></div>
                        Seamless team collaboration enabled
                      </li>
                    </ul>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* RAG Framework Section */}
            <Card className="backdrop-blur-sm bg-slate-800/50 border-slate-700 text-slate-100">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3">
                  <Database className="h-6 w-6 text-[#FF7E77]" />
                  <div>
                    <CardTitle className="text-2xl text-slate-100">
                      Custom RAG Framework
                    </CardTitle>
                    <CardDescription className="text-base mt-2 text-slate-400">
                      Built sophisticated Retrieval Augmented Generation
                      combining real-time news data with AI generation
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="text-center p-6 hover:bg-[#FF7E77]/10 transition-colors bg-[#FF7E77]/5 border-[#FF7E77]/20">
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto bg-[#FF7E77]/20">
                        <Database className="h-6 w-6 text-[#FF7E77]" />
                      </div>
                      <h4 className="font-semibold text-lg text-slate-100">
                        Multi-source Retrieval
                      </h4>
                      <p className="text-sm text-slate-400">
                        NewsAPI + Google Search with intelligent filtering and
                        deduplication
                      </p>
                    </div>
                  </Card>
                  <Card className="text-center p-6 hover:bg-[#FF9F9A]/10 transition-colors bg-[#FF9F9A]/5 border-[#FF9F9A]/20">
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto bg-[#FF9F9A]/20">
                        <Target className="h-6 w-6 text-[#FF9F9A]" />
                      </div>
                      <h4 className="font-semibold text-lg text-slate-100">
                        Content Deduplication
                      </h4>
                      <p className="text-sm text-slate-400">
                        Semantic similarity analysis to eliminate redundancy
                        across sources
                      </p>
                    </div>
                  </Card>
                  <Card className="text-center p-6 hover:bg-[#FF7E77]/10 transition-colors bg-[#FF7E77]/5 border-[#FF7E77]/20">
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto bg-[#FF7E77]/20">
                        <Brain className="h-6 w-6 text-[#FF7E77]" />
                      </div>
                      <h4 className="font-semibold text-lg text-slate-100">
                        Dynamic Adaptation
                      </h4>
                      <p className="text-sm text-slate-400">
                        Adjusts output complexity based on user preferences and
                        content type
                      </p>
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Challenges Section */}
            <Card className="backdrop-blur-sm bg-slate-800/50 border-slate-700 text-slate-100">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-[#FF7E77]" />
                  <div>
                    <CardTitle className="text-2xl text-slate-100">
                      Technical Challenges & Solutions
                    </CardTitle>
                    <CardDescription className="text-base mt-2 text-slate-400">
                      Key obstacles overcome during development and innovative
                      solutions implemented
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      title: "Model Hallucination & Language Consistency",
                      problem:
                        "DeepSeek occasionally generated false information or responded in Chinese instead of English",
                      solution:
                        "Implemented multi-layered validation with language detection, fact verification against sources, and prompt engineering refinements",
                    },
                    {
                      title: "Real-time Information Integration",
                      problem:
                        "Language models have training data cutoffs, missing recent events and breaking news",
                      solution:
                        "Built dynamic context injection system fetching latest articles within 24 hours and semantic relevance scoring",
                    },
                    {
                      title: "Content Quality vs. Speed Trade-off",
                      problem:
                        "Balancing comprehensive content generation with user experience expectations for response time",
                      solution:
                        "Implemented adaptive processing pipeline with different model configurations based on content complexity and user preferences",
                    },
                  ].map((challenge, index) => (
                    <Card
                      key={index}
                      className={`backdrop-blur-sm transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl bg-slate-800/50 border-slate-700 group`}
                      onMouseEnter={() => toggleSection(`challenge-${index}`)}
                      onMouseLeave={() => toggleSection(`challenge-${index}`)}
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between text-xl">
                          <span className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#FF7E77]/10 group-hover:bg-[#FF7E77]/20 transition-colors">
                              <span className="font-bold text-sm text-[#FF7E77]">
                                {index + 1}
                              </span>
                            </div>
                            <span className="text-slate-100">
                              {challenge.title}
                            </span>
                          </span>
                          <div className="text-slate-400 group-hover:text-[#FF7E77] transition-colors">
                            {expandedSections[`challenge-${index}`] ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </div>
                        </CardTitle>
                      </CardHeader>
                      {expandedSections[`challenge-${index}`] && (
                        <CardContent
                          className="space-y-6 pt-0 animate-fadeIn overflow-hidden"
                          style={{
                            animation: "fadeIn 0.3s ease-in-out",
                          }}
                        >
                          <div className="p-4 rounded-lg border bg-red-500/5 border-red-500/20">
                            <h4 className="font-semibold mb-3 flex items-center gap-2 text-red-400">
                              <div className="w-2 h-2 rounded-full bg-red-400"></div>
                              Problem:
                            </h4>
                            <p className="text-slate-400">
                              {challenge.problem}
                            </p>
                          </div>
                          <div className="p-4 rounded-lg border bg-[#FF7E77]/5 border-[#FF7E77]/20">
                            <h4 className="font-semibold mb-3 flex items-center gap-2 text-[#FF7E77]">
                              <div className="w-2 h-2 rounded-full bg-[#FF7E77]"></div>
                              Solution:
                            </h4>
                            <p className="text-slate-400">
                              {challenge.solution}
                            </p>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Innovation Section */}
            <Card className="backdrop-blur-sm bg-slate-800/50 border-slate-700 text-slate-100">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3">
                  <Brain className="h-6 w-6 text-[#FF7E77]" />
                  <div>
                    <CardTitle className="text-2xl text-slate-100">
                      Technical Innovation
                    </CardTitle>
                    <CardDescription className="text-base mt-2 text-slate-400">
                      Novel approaches and frameworks developed to solve complex
                      AI engineering challenges
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="backdrop-blur-sm hover:shadow-lg transition-all duration-300 bg-slate-800/50 border-slate-700">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <Brain className="h-6 w-6 text-[#FF7E77]" />
                        <span className="text-slate-100">
                          Hybrid RAG Architecture
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-2 bg-[#FF7E77]"></div>
                          <div className="text-slate-400">
                            <strong className="text-[#FF7E77]">
                              Semantic retrieval
                            </strong>{" "}
                            using vector embeddings for contextual relevance
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-2 bg-[#FF7E77]"></div>
                          <div className="text-slate-400">
                            <strong className="text-[#FF7E77]">
                              Temporal retrieval
                            </strong>{" "}
                            prioritizing recent content and breaking news
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-2 bg-[#FF7E77]"></div>
                          <div className="text-slate-400">
                            <strong className="text-[#FF7E77]">
                              Source-diverse retrieval
                            </strong>{" "}
                            ensuring perspective variety and bias mitigation
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="backdrop-blur-sm hover:shadow-lg transition-all duration-300 bg-slate-800/50 border-slate-700">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <Target className="h-6 w-6 text-[#FF9F9A]" />
                        <span className="text-slate-100">
                          Source Transparency Framework
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-2 bg-[#FF9F9A]"></div>
                          <div className="text-slate-400">
                            Comprehensive source tracking and attribution with
                            hyperlink preservation
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-2 bg-[#FF9F9A]"></div>
                          <div className="text-slate-400">
                            Credibility scoring and bias analysis integration
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-2 bg-[#FF9F9A]"></div>
                          <div className="text-slate-400">
                            Fact-check history integration and verification
                            workflows
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 px-4 bg-slate-800/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair text-4xl font-bold text-slate-100">
              Technologies Mastered
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto bg-gradient-to-r from-[#FF7E77] to-[#FF9F9A]"></div>
            <p className="text-lg max-w-2xl mx-auto text-slate-400">
              Cutting-edge AI and cloud technologies leveraged to build a
              scalable, intelligent news platform
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-6 py-3 text-sm font-medium hover:bg-[#FF7E77]/10 hover:border-[#FF7E77]/30 transition-all duration-300 cursor-default bg-slate-800/50 border-slate-700 text-slate-100"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-playfair text-4xl font-bold text-slate-100">
                Let&apos;s Connect
              </h2>
              <div className="w-20 h-1 rounded-full mx-auto bg-gradient-to-r from-[#FF7E77] to-[#FF9F9A]"></div>
            </div>

            <p className="text-lg text-pretty max-w-2xl mx-auto leading-relaxed text-slate-400">
              Interested in discussing AI engineering, machine learning
              innovations, or potential collaboration opportunities? I&apos;d
              love to connect and explore how we can build the future together.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <Button
                variant="outline"
                size="lg"
                className="gap-3 hover:bg-[#FF7E77]/5 backdrop-blur-sm group bg-transparent border-[#FF7E77]/30 text-slate-100"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/shaswatkumar1/",
                    "_blank"
                  )
                }
              >
                <Linkedin className="h-5 w-5 group-hover:text-[#FF7E77] transition-colors" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-3 hover:bg-[#FF7E77]/5 backdrop-blur-sm group bg-transparent border-[#FF7E77]/30 text-slate-100"
                onClick={() =>
                  window.open("https://github.com/kumarshaswat", "_blank")
                }
              >
                <Github className="h-5 w-5 group-hover:text-[#FF7E77] transition-colors" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-3 hover:bg-[#FF7E77]/5 backdrop-blur-sm group bg-transparent border-[#FF7E77]/30 text-slate-100"
                onClick={() =>
                  window.open("mailto:shaswat_kr@yahoo.com", "_blank")
                }
              >
                <Mail className="h-5 w-5 group-hover:text-[#FF7E77] transition-colors" />
                Email
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
